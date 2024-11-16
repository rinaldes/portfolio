export type SkillNode = {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  children?: SkillNode[];
  color?: string;
  parentId?: string;
};

export type TreeConnectionProps = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  animated?: boolean;
  color?: string;
  isHighlighted?: boolean;
};

export type SkillNodeProps = {
  node: SkillNode;
  x: number;
  y: number;
  onHover?: (node: SkillNode | null) => void;
  isHovered?: boolean;
  isHighlighted?: boolean;
  color?: string;
};
