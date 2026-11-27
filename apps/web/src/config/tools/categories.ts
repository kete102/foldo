import type { ToolCategory } from "./types";

export const toolCategories = [
  {
    id: "organize-pdf",
    label: "Organize PDF",
    order: 1,
  },
  {
    id: "convert-pdf",
    label: "Convert PDF",
    order: 2,
  },
  {
    id: "optimize-pdf",
    label: "Optimize PDF",
    order: 3,
  },
  {
    id: "edit-pdf",
    label: "Edit PDF",
    order: 4,
  },
  {
    id: "secure-pdf",
    label: "Secure PDF",
    order: 5,
  },
  {
    id: "extract-content",
    label: "Extract content",
    order: 6,
  },
  {
    id: "image-tools",
    label: "Image tools",
    order: 7,
  },
] as const satisfies readonly ToolCategory[];
