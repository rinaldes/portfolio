import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// In-memory store for rate limiting
// In production, you might want to use Redis or a database
const rateLimit = new Map<string, { count: number; timestamp: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // 5 requests per hour

function getIP(request: NextRequest) {
  const xff = request.headers.get('x-forwarded-for');
  return xff ? xff.split(',')[0] : '127.0.0.1';
}

export function middleware(request: NextRequest) {
  // Handle root redirect
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/duma", request.url));
  }

  // Only apply rate limiting to the contact form API
  if (request.nextUrl.pathname === "/api/send") {
    const ip = getIP(request);
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW;

    // Clean up old entries
    for (const [key, value] of rateLimit.entries()) {
      if (value.timestamp < windowStart) {
        rateLimit.delete(key);
      }
    }

    // Get or create rate limit entry for this IP
    const rateEntry = rateLimit.get(ip) ?? { count: 0, timestamp: now };

    // Reset count if outside window
    if (rateEntry.timestamp < windowStart) {
      rateEntry.count = 0;
      rateEntry.timestamp = now;
    }

    // Check if rate limit exceeded
    if (rateEntry.count >= MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({
          error: 'Rate limit exceeded. Please try again later.',
          retryAfter: new Date(rateEntry.timestamp + RATE_LIMIT_WINDOW).toISOString(),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((rateEntry.timestamp + RATE_LIMIT_WINDOW - now) / 1000).toString(),
          },
        }
      );
    }

    // Increment counter
    rateEntry.count++;
    rateLimit.set(ip, rateEntry);

    // Add rate limit headers
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', MAX_REQUESTS.toString());
    response.headers.set('X-RateLimit-Remaining', (MAX_REQUESTS - rateEntry.count).toString());
    response.headers.set('X-RateLimit-Reset', new Date(rateEntry.timestamp + RATE_LIMIT_WINDOW).toISOString());

    return response;
  }
}

export const config = {
  matcher: ['/', '/api/send'],
}
