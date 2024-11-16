'use client';

import { motion } from "framer-motion";
import { SkillNodeProps } from "@/types/skills";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const SkillNode = ({
  node,
  x,
  y,
  onHover,
  isHovered,
  isHighlighted,
  color,
}: SkillNodeProps) => {
  const nodeColor = color || "hsl(var(--primary))";
  const isActive = isHovered || isHighlighted;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => onHover?.(node)}
      onHoverEnd={() => onHover?.(null)}
      style={{ cursor: "pointer" }}
    >
      {/* Background circle */}
      <motion.circle
        cx={x}
        cy={y}
        r={30}
        className="transition-all duration-300"
        fill="hsl(var(--background))"
        stroke={nodeColor}
        strokeOpacity={isActive ? 1 : 0.35}
        strokeWidth={isActive ? 3 : 2}
        animate={{
          scale: isActive ? 1.1 : 1,
        }}
      />

      {/* Skill name */}
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ 
          pointerEvents: "none",
          fill: nodeColor,
          opacity: isActive ? 1 : 0.65,
          transition: "all 0.3s ease",
          fontSize: isActive ? "0.95rem" : "0.875rem",
          fontWeight: isActive ? 500 : 400,
        }}
      >
        {node.name}
      </text>

      {/* HoverCard using foreignObject */}
      <foreignObject
        x={x - 30}
        y={y - 30}
        width={60}
        height={60}
        style={{ pointerEvents: "none" }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <HoverCard openDelay={200}>
            <HoverCardTrigger asChild>
              <div 
                style={{ 
                  width: "100%", 
                  height: "100%",
                  pointerEvents: "auto",
                  cursor: "pointer",
                }}
              />
            </HoverCardTrigger>
            <HoverCardContent 
              side="right"
              align="start"
              className="w-[350px] p-4"
              style={{
                '--hover-card-accent': nodeColor,
                borderColor: `${nodeColor}35`,
              } as React.CSSProperties}
            >
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <h4 
                    className="text-base font-semibold mb-1.5"
                    style={{ color: nodeColor }}
                  >
                    {node.name}
                  </h4>
                  {node.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {node.description}
                    </p>
                  )}
                </div>

                {/* Related Skills */}
                {node.children && node.children.length > 0 && (
                  <>
                    <Separator className="bg-muted/50" />
                    <div>
                      <div className="text-xs font-medium mb-2">Related Skills</div>
                      <div className="flex flex-wrap gap-1.5">
                        {node.children.map((child) => (
                          <Badge
                            key={child.id}
                            variant="secondary"
                            className="text-xs"
                            style={{
                              backgroundColor: `${nodeColor}15`,
                              color: nodeColor,
                            }}
                          >
                            {child.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </foreignObject>
    </motion.g>
  );
};
