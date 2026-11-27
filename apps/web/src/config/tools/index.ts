import { toolCategories } from "./categories";
import { tools } from "./registry";
import type { ToolCategoryId } from "./types";

export function getAvailableTools() {
  return tools.filter((tool) => tool.status === "available");
}

export function getToolBySlug(slug: string) {
  return getAvailableTools().find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategoryId) {
  return getAvailableTools().filter((tool) => tool.category === category);
}

export function getFeaturedTools() {
  return getAvailableTools().filter((tool) => tool.featured);
}

export function getToolGroups() {
  return [...toolCategories]
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      ...category,
      tools: getToolsByCategory(category.id),
    }))
    .filter((category) => category.tools.length > 0);
}

export function getToolHref(slug: string) {
  return `/${slug}`;
}
