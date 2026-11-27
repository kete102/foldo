"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@foldo/ui/components/navigation-menu";

const previewItems = [
  {
    title: "Getting started",
    description: "Learn the basics of our design system.",
    href: "#getting-started",
  },
  {
    title: "Components",
    description: "Explore reusable UI components.",
    href: "#components",
  },
  {
    title: "Design tokens",
    description: "Colors, typography and spacing.",
    href: "#tokens",
  },
];

function NavigationMenuPreview() {
  return (
    <div className="flex min-h-72 justify-center pt-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-80 max-w-[calc(100vw-4rem)] gap-1">
                {previewItems.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink href={item.href}>
                      <span className="font-medium">{item.title}</span>

                      <span className="text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#documentation"
              className={navigationMenuTriggerStyle()}
            >
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export { NavigationMenuPreview };
