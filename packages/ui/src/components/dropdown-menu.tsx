"use client";

import { CheckIcon, ChevronRightIcon, MinusIcon } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

const menuSurfaceStyles = cn(
	// Layout
	"z-50 min-w-40 overflow-x-hidden overflow-y-auto",
	"max-h-(--radix-dropdown-menu-content-available-height)",
	"rounded-lg border border-border p-1.5",

	// Surface
	"bg-popover bg-clip-padding text-popover-foreground",
	"shadow-elevation-2",

	// Animation origin
	"origin-(--radix-dropdown-menu-content-transform-origin)",

	// Enter
	"data-[state=open]:animate-in",
	"data-[state=open]:fade-in-0",
	"data-[state=open]:zoom-in-[0.98]",

	// Exit
	"data-[state=closed]:animate-out",
	"data-[state=closed]:fade-out-0",
	"data-[state=closed]:zoom-out-[0.98]",

	// Motion
	"duration-(--duration-fast) ease-standard",
	"motion-reduce:animate-none",
);

const menuItemStyles = cn(
	// Layout
	"relative flex min-h-9 items-center gap-2.5",
	"rounded-md px-2.5 py-2",

	// Typography
	"text-body-sm select-none",

	// Interaction
	"cursor-pointer outline-none",
	"transition-colors",
	"duration-(--duration-fast) ease-standard",
	"motion-reduce:transition-none",

	// Highlighted
	"data-[highlighted]:bg-accent",
	"data-[highlighted]:text-accent-foreground",

	// Disabled
	"data-[disabled]:pointer-events-none",
	"data-[disabled]:opacity-50",

	// Icons
	"[&_svg]:pointer-events-none",
	"[&_svg]:shrink-0",
	"[&_svg:not([class*='size-'])]:size-4",
);

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuPrimitive.Root>;

type DropdownMenuContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;

type DropdownMenuItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
	inset?: boolean;
	variant?: "default" | "destructive";
};

function DropdownMenu(props: DropdownMenuProps) {
	return <DropdownMenuPrimitive.Root {...props} />;
}

function DropdownMenuPortal(props: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
	return <DropdownMenuPrimitive.Portal {...props} />;
}

function DropdownMenuTrigger(props: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
	return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
	className,
	sideOffset = 6,
	align = "start",
	...props
}: DropdownMenuContentProps) {
	return (
		<DropdownMenuPortal>
			<DropdownMenuPrimitive.Content
				data-slot="dropdown-menu-content"
				sideOffset={sideOffset}
				align={align}
				className={cn(menuSurfaceStyles, className)}
				{...props}
			/>
		</DropdownMenuPortal>
	);
}

function DropdownMenuGroup(props: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
	return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
	className,
	inset = false,
	variant = "default",
	...props
}: DropdownMenuItemProps) {
	return (
		<DropdownMenuPrimitive.Item
			data-slot="dropdown-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cn(
				menuItemStyles,

				"data-[inset=true]:pl-9",

				// Default icons
				"[&_svg:not([class*='text-'])]:text-muted-foreground",

				// Destructive
				"data-[variant=destructive]:text-destructive",
				"data-[variant=destructive]:data-[highlighted]:bg-destructive-subtle",
				"data-[variant=destructive]:data-[highlighted]:text-destructive",
				"data-[variant=destructive]:[&_svg]:text-destructive",

				className,
			)}
			{...props}
		/>
	);
}

function DropdownMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
	return (
		<DropdownMenuPrimitive.CheckboxItem
			data-slot="dropdown-menu-checkbox-item"
			checked={checked}
			className={cn(menuItemStyles, "group/menu-checkbox pl-9", className)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2.5 flex size-4 items-center justify-center text-primary">
				<DropdownMenuPrimitive.ItemIndicator>
					<CheckIcon
						aria-hidden="true"
						className="size-4 stroke-[2.5] group-data-[state=indeterminate]/menu-checkbox:hidden"
					/>

					<MinusIcon
						aria-hidden="true"
						className="hidden size-4 stroke-[2.5] group-data-[state=indeterminate]/menu-checkbox:block"
					/>
				</DropdownMenuPrimitive.ItemIndicator>
			</span>

			{children}
		</DropdownMenuPrimitive.CheckboxItem>
	);
}

function DropdownMenuRadioGroup(
	props: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>,
) {
	return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
	return (
		<DropdownMenuPrimitive.RadioItem
			data-slot="dropdown-menu-radio-item"
			className={cn(menuItemStyles, "pl-9", className)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2.5 flex size-4 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<span className="block size-2 rounded-full bg-primary" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>

			{children}
		</DropdownMenuPrimitive.RadioItem>
	);
}

function DropdownMenuLabel({
	className,
	inset = false,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
	inset?: boolean;
}) {
	return (
		<DropdownMenuPrimitive.Label
			data-slot="dropdown-menu-label"
			data-inset={inset}
			className={cn(
				"px-2.5 py-2",
				"text-caption font-medium text-muted-foreground",
				"data-[inset=true]:pl-9",
				className,
			)}
			{...props}
		/>
	);
}

function DropdownMenuSeparator({
	className,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
	return (
		<DropdownMenuPrimitive.Separator
			data-slot="dropdown-menu-separator"
			className={cn("my-1 h-px bg-border", className)}
			{...props}
		/>
	);
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="dropdown-menu-shortcut"
			className={cn(
				"ml-auto pl-4",
				"text-caption text-muted-foreground",
				"whitespace-nowrap",
				className,
			)}
			{...props}
		/>
	);
}

function DropdownMenuSub(props: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
	return <DropdownMenuPrimitive.Sub {...props} />;
}

function DropdownMenuSubTrigger({
	className,
	inset = false,
	children,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
	inset?: boolean;
}) {
	return (
		<DropdownMenuPrimitive.SubTrigger
			data-slot="dropdown-menu-sub-trigger"
			data-inset={inset}
			className={cn(
				menuItemStyles,
				"data-[inset=true]:pl-9",
				"data-[state=open]:bg-accent",
				"data-[state=open]:text-accent-foreground",
				"[&_svg:not([class*='text-'])]:text-muted-foreground",
				className,
			)}
			{...props}
		>
			{children}

			<ChevronRightIcon aria-hidden="true" className="ml-auto size-4 rtl:rotate-180" />
		</DropdownMenuPrimitive.SubTrigger>
	);
}

function DropdownMenuSubContent({
	className,
	sideOffset = 6,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
	return (
		<DropdownMenuPrimitive.SubContent
			data-slot="dropdown-menu-sub-content"
			sideOffset={sideOffset}
			className={cn(menuSurfaceStyles, className)}
			{...props}
		/>
	);
}

export {
	DropdownMenu,
	DropdownMenuPortal,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
};

export type { DropdownMenuProps, DropdownMenuContentProps, DropdownMenuItemProps };
