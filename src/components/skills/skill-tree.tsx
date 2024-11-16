"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SkillNode as SkillNodeType } from "@/types/skills";
import { SkillNode } from "./skill-node";
import { TreeConnection } from "./tree-connection";

const VERTICAL_SPACING = 120;
const HORIZONTAL_SPACING = 100; // Increased from 200 to 300 for wider spacing
const AUTO_HIGHLIGHT_INTERVAL = 2000; // 2 seconds per highlight

export const SkillTree = ({ data }: { data: SkillNodeType }) => {
  const [hoveredNode, setHoveredNode] = useState<SkillNodeType | null>(null);
  const [autoHighlightNode, setAutoHighlightNode] =
    useState<SkillNodeType | null>(null);

  // Function to process the tree and propagate colors and parent references
  const processTree = (
    node: SkillNodeType,
    parentId?: string,
    parentColor?: string
  ): SkillNodeType => {
    const nodeWithRefs = {
      ...node,
      parentId,
      color: node.color || parentColor,
      children: node.children?.map((child) =>
        processTree(child, node.id, node.color || parentColor)
      ),
    };
    return nodeWithRefs;
  };

  // Process the tree to ensure all nodes have colors and parent references
  const processedData = useMemo(() => processTree(data), [data]);

  // Get all leaf nodes (nodes without children)
  const getLeafNodes = useCallback((node: SkillNodeType): SkillNodeType[] => {
    if (!node.children || node.children.length === 0) {
      return [node];
    }
    return node.children.flatMap((child) => getLeafNodes(child));
  }, []);

  // Get a random leaf node
  const getRandomLeafNode = useCallback(() => {
    const leafNodes = getLeafNodes(processedData);
    const randomIndex = Math.floor(Math.random() * leafNodes.length);
    return leafNodes[randomIndex];
  }, [processedData, getLeafNodes]);

  // Auto-highlight effect
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startAutoHighlight = () => {
      timeoutId = setTimeout(() => {
        if (!hoveredNode) {
          const randomNode = getRandomLeafNode();
          setAutoHighlightNode(randomNode);
          startAutoHighlight();
        }
      }, AUTO_HIGHLIGHT_INTERVAL);
    };

    startAutoHighlight();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hoveredNode, getRandomLeafNode]);

  // Clear auto-highlight when user hovers
  useEffect(() => {
    if (hoveredNode) {
      setAutoHighlightNode(null);
    }
  }, [hoveredNode]);

  // Function to get the path from a node to the root
  const getNodePath = (nodeId: string): Set<string> => {
    const path = new Set<string>();
    let currentNode = findNodeById(processedData, nodeId);

    while (currentNode) {
      path.add(currentNode.id);
      if (currentNode.parentId) {
        currentNode = findNodeById(processedData, currentNode.parentId);
      } else {
        break;
      }
    }

    return path;
  };

  // Helper function to find a node by ID
  const findNodeById = (
    root: SkillNodeType,
    id: string
  ): SkillNodeType | null => {
    if (root.id === id) return root;

    for (const child of root.children || []) {
      const found = findNodeById(child, id);
      if (found) return found;
    }

    return null;
  };

  // Helper function to count leaf nodes
  const getLeafCount = (node: SkillNodeType): number => {
    if (!node.children || node.children.length === 0) {
      return 1;
    }
    return node.children.reduce((sum, child) => sum + getLeafCount(child), 0);
  };

  // Get the current highlight path
  const highlightPath = useMemo(() => {
    const targetNode = hoveredNode || autoHighlightNode;
    return targetNode ? getNodePath(targetNode.id) : new Set<string>();
  }, [hoveredNode, autoHighlightNode]);

  // Calculate tree layout
  const calculateNodePositions = (
    node: SkillNodeType,
    level: number = 0,
    offset: number = 0
  ): { node: SkillNodeType; x: number; y: number; width: number }[] => {
    const children = node.children || [];
    const y = level * VERTICAL_SPACING + 100;

    if (children.length === 0) {
      return [
        {
          node,
          x: offset * HORIZONTAL_SPACING + 50,
          y,
          width: HORIZONTAL_SPACING,
        },
      ];
    }

    let currentOffset = 0;
    const childPositions = children.flatMap((child) => {
      const positions = calculateNodePositions(child, level + 1, offset + currentOffset);
      currentOffset += getLeafCount(child);
      return positions;
    });

    const leftMost = Math.min(...childPositions.map((pos) => pos.x));
    const rightMost = Math.max(...childPositions.map((pos) => pos.x));
    const x = (leftMost + rightMost) / 2;

    return [{ node, x, y, width: HORIZONTAL_SPACING }, ...childPositions];
  };

  const nodePositions = calculateNodePositions(processedData);

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1000px] p-4">
        <div className="w-full h-full relative">
          {(hoveredNode || autoHighlightNode) && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute p-4 rounded-lg bg-background/95 backdrop-blur border shadow-lg"
              style={{
                left: `${
                  (nodePositions.find(
                    (pos) =>
                      pos.node.id === (hoveredNode || autoHighlightNode)?.id
                  )?.x ?? 0) + 50
                }px`,
                top: `${
                  (nodePositions.find(
                    (pos) =>
                      pos.node.id === (hoveredNode || autoHighlightNode)?.id
                  )?.y ?? 0) - 30
                }px`,
                borderColor: `${(hoveredNode || autoHighlightNode)?.color}35`,
                maxWidth: "300px",
                zIndex: 50,
              }}
            >
              <h4
                className="text-base font-semibold mb-1"
                style={{
                  color: (hoveredNode || autoHighlightNode)?.color,
                }}
              >
                {(hoveredNode || autoHighlightNode)?.name}
              </h4>
              {(hoveredNode || autoHighlightNode)?.description && (
                <p className="text-sm text-muted-foreground">
                  {(hoveredNode || autoHighlightNode)?.description}
                </p>
              )}
            </motion.div>
          )}

          <svg
            width="100%"
            height={
              Math.max(...nodePositions.map((pos) => pos.y)) + VERTICAL_SPACING
            }
            className="block"
          >
            {/* Draw connections */}
            <g className="mx-0">
              {nodePositions.map((pos) => {
                const parentNode = nodePositions.find((p) =>
                  p.node.children?.some((c) => c.id === pos.node.id)
                );
                if (parentNode) {
                  const isHighlighted =
                    highlightPath.has(pos.node.id) &&
                    highlightPath.has(parentNode.node.id);

                  return (
                    <TreeConnection
                      key={`${parentNode.node.id}-${pos.node.id}`}
                      startX={parentNode.x}
                      startY={parentNode.y}
                      endX={pos.x}
                      endY={pos.y}
                      color={pos.node.color}
                      isHighlighted={isHighlighted}
                    />
                  );
                }
                return null;
              })}
            </g>

            {/* Draw nodes */}
            {nodePositions.map((pos) => (
              <SkillNode
                key={pos.node.id}
                node={pos.node}
                x={pos.x}
                y={pos.y}
                onHover={setHoveredNode}
                isHovered={hoveredNode?.id === pos.node.id}
                isHighlighted={highlightPath.has(pos.node.id)}
                color={pos.node.color}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};
