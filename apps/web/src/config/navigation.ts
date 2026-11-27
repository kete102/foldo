type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation = [
  {
    label: "Tools",
    href: "/tools",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
] as const satisfies readonly NavigationItem[];
