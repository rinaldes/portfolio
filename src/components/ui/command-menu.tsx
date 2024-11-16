'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Mail,
  Moon,
  Sun,
  Github,
  Linkedin,
  FileText,
} from 'lucide-react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { DialogTitle } from '@/components/ui/dialog';

interface Section {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  {
    id: 'about',
    name: 'About',
    icon: <User className="mr-2 h-4 w-4" />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <Mail className="mr-2 h-4 w-4" />,
  },
];

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 py-2 px-4"
      >
        <span className="hidden md:inline-flex">Command Menu</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-2">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex flex-col">
          <div className="sr-only">
            <DialogTitle>Command Menu</DialogTitle>
          </div>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              {sections.map((section) => (
                <CommandItem
                  key={section.id}
                  onSelect={() => {
                    runCommand(() => {
                      router.push(`/#${section.id}`);
                    });
                  }}
                >
                  {section.icon}
                  <span>{section.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
                <Sun className="mr-2 h-4 w-4" />
                Light
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Links">
              <CommandItem
                onSelect={() => {
                  runCommand(() => {
                    window.open('https://github.com/yourusername', '_blank');
                  });
                }}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  runCommand(() => {
                    window.open('https://linkedin.com/in/yourusername', '_blank');
                  });
                }}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </>
  );
}
