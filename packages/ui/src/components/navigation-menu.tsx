"use client";

import type * as React from "react";

import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";

import { cn } from "../lib/utils";

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "flex list-none items-center justify-center gap-1",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

const navigationMenuTriggerStyle = cva([
  "group/trigger inline-flex h-control-md w-max",
  "items-center justify-center gap-1.5",
  "rounded-lg bg-transparent px-4",
  "text-sm font-medium text-foreground",
  "outline-none transition-colors",
  "hover:bg-accent hover:text-accent-foreground",
  "focus-visible:ring-2 focus-visible:ring-ring",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "disabled:pointer-events-none disabled:opacity-50",
  "data-[state=open]:bg-accent",
  "data-[state=open]:text-accent-foreground",
]);

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    >
      {children}

      <ChevronDownIcon
        aria-hidden="true"
        className={cn(
          "size-icon-sm shrink-0 text-muted-foreground",
          "transition-transform duration-200",
          "group-data-[state=open]/trigger:rotate-180",
          "motion-reduce:transition-none",
        )}
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "top-0 left-0 w-full p-2",
        "md:absolute md:w-auto",
        "data-[motion^=from-]:animate-in",
        "data-[motion^=from-]:fade-in-0",
        "data-[motion^=to-]:animate-out",
        "data-[motion^=to-]:fade-out-0",
        "duration-150 motion-reduce:animate-none",

        "group-data-[viewport=false]/navigation-menu:absolute",
        "group-data-[viewport=false]/navigation-menu:top-full",
        "group-data-[viewport=false]/navigation-menu:mt-2",
        "group-data-[viewport=false]/navigation-menu:w-max",
        "group-data-[viewport=false]/navigation-menu:rounded-xl",
        "group-data-[viewport=false]/navigation-menu:border",
        "group-data-[viewport=false]/navigation-menu:border-border",
        "group-data-[viewport=false]/navigation-menu:bg-popover",
        "group-data-[viewport=false]/navigation-menu:text-popover-foreground",
        "group-data-[viewport=false]/navigation-menu:shadow-lg",
        "group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in",
        "group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0",
        "group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out",
        "group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0",

        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 z-50",
        "flex -translate-x-1/2 justify-center",
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "relative mt-2 origin-top overflow-hidden",
          "h-[var(--radix-navigation-menu-viewport-height)]",
          "w-[var(--radix-navigation-menu-viewport-width)]",
          "max-w-[calc(100vw-2rem)]",
          "rounded-xl border border-border",
          "bg-popover text-popover-foreground shadow-lg",
          "transition-[width,height] duration-200",
          "data-[state=open]:animate-in",
          "data-[state=open]:fade-in-0",
          "data-[state=open]:slide-in-from-top-1",
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=closed]:slide-out-to-top-1",
          "motion-reduce:animate-none",
          "motion-reduce:transition-none",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex flex-col gap-1 rounded-lg p-3",
        "text-sm outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:ring-2 focus-visible:ring-inset",
        "focus-visible:ring-ring",
        "data-[active=true]:bg-accent",
        "data-[active=true]:text-accent-foreground",
        "[&_svg:not([class*='size-'])]:size-icon-md",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-10 flex h-2 items-end justify-center",
        "overflow-hidden",
        "data-[state=hidden]:animate-out",
        "data-[state=hidden]:fade-out-0",
        "data-[state=visible]:animate-in",
        "data-[state=visible]:fade-in-0",
        "motion-reduce:animate-none",
        className,
      )}
      {...props}
    >
      <div className="relative top-1 size-2 rotate-45 rounded-tl-sm border-t border-l border-border bg-popover" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
