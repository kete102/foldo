export type ToolCategoryId =
  | "organize-pdf"
  | "convert-pdf"
  | "optimize-pdf"
  | "edit-pdf"
  | "secure-pdf"
  | "extract-content"
  | "image-tools";

export type ToolProcessing = "local" | "server" | "hybrid";

export type ToolAccess = "free" | "pro";

export type ToolStatus = "available" | "planned";

export type ToolCategory = {
  id: ToolCategoryId;
  label: string;
  order: number;
};

export type ToolDefinition = {
  id: string;
  slug: string;
  label: string;
  description: string;
  category: ToolCategoryId;
  processing: ToolProcessing;
  access: ToolAccess;
  status: ToolStatus;
  featured?: boolean;
};
