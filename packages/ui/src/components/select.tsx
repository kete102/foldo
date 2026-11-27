"use client";

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>;

type SelectTriggerProps = React.ComponentProps<typeof SelectPrimitive.Trigger> & {
	size?: "sm" | "default" | "lg";
};

type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Content>;

function Select(props: SelectProps) {
	return <SelectPrimitive.Root {...props} />;
}

function SelectGroup(props: React.ComponentProps<typeof SelectPrimitive.Group>) {
	return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue(props: React.ComponentProps<typeof SelectPrimitive.Value>) {
	return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({ className, size = "default", children, ...props }: SelectTriggerProps) {
	return (
		<SelectPrimitive.Trigger
			data-slot="select-trigger"
			data-size={size}
			className={cn(
				// Layout
				"group/select flex w-full min-w-0",
				"items-center justify-between gap-2",
				"rounded-md border border-input",
				"bg-background bg-clip-padding px-3",

				// Sizes
				"data-[size=sm]:h-control-sm",
				"data-[size=default]:h-control-md",
				"data-[size=lg]:h-control-lg",

				// Typography
				"text-body text-foreground",
				"data-[placeholder]:text-muted-foreground",

				// Interaction
				"cursor-pointer outline-none",
				"transition-[color,background-color,border-color,box-shadow]",
				"duration-(--duration-fast) ease-standard",
				"motion-reduce:transition-none",

				// Hover
				"enabled:hover:border-foreground/40",

				// Focus and open
				"focus-visible:border-ring",
				"focus-visible:ring-2 focus-visible:ring-ring/20",
				"data-[state=open]:border-ring",

				// Invalid
				"aria-invalid:border-destructive",
				"aria-invalid:hover:border-destructive",
				"aria-invalid:focus-visible:ring-destructive/20",

				// Disabled
				"disabled:cursor-not-allowed",
				"disabled:bg-muted disabled:opacity-50",

				// Selected value
				"*:data-[slot=select-value]:min-w-0",
				"*:data-[slot=select-value]:truncate",
				"*:data-[slot=select-value]:text-left",

				// Icons
				"[&_svg]:pointer-events-none",
				"[&_svg]:shrink-0",
				"[&_svg:not([class*='size-'])]:size-4",

				className,
			)}
			{...props}
		>
			{children}

			<SelectPrimitive.Icon asChild>
				<ChevronDownIcon
					className={cn(
						"size-4 text-muted-foreground",
						"transition-transform",
						"duration-(--duration-fast) ease-standard",
						"group-data-[state=open]/select:rotate-180",
						"motion-reduce:transition-none",
					)}
				/>
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	);
}

function SelectContent({
	className,
	children,
	position = "popper",
	align = "start",
	sideOffset = 6,
	...props
}: SelectContentProps) {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				data-slot="select-content"
				position={position}
				align={align}
				sideOffset={sideOffset}
				className={cn(
					// Layout
					"relative z-50 min-w-32",
					"max-h-(--radix-select-content-available-height)",
					"overflow-hidden",
					"rounded-lg border border-border",
					"bg-popover bg-clip-padding text-popover-foreground",
					"shadow-elevation-2",
					"origin-(--radix-select-content-transform-origin)",

					// Open animation
					"data-[state=open]:animate-in",
					"data-[state=open]:fade-in-0",
					"data-[state=open]:zoom-in-[0.98]",

					// Close animation
					"data-[state=closed]:animate-out",
					"data-[state=closed]:fade-out-0",
					"data-[state=closed]:zoom-out-[0.98]",

					// Motion
					"duration-(--duration-fast) ease-standard",
					"motion-reduce:animate-none",

					position === "popper" && "min-w-(--radix-select-trigger-width)",

					className,
				)}
				{...props}
			>
				<SelectScrollUpButton />

				<SelectPrimitive.Viewport className="p-1.5">{children}</SelectPrimitive.Viewport>

				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
	return (
		<SelectPrimitive.Label
			data-slot="select-label"
			className={cn("px-2.5 py-2", "text-caption font-medium text-muted-foreground", className)}
			{...props}
		/>
	);
}

function SelectItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
	return (
		<SelectPrimitive.Item
			data-slot="select-item"
			className={cn(
				// Layout
				"relative flex min-h-9 w-full",
				"items-center gap-2 rounded-md",
				"py-2 pr-9 pl-2.5",

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

				// Selected
				"data-[state=checked]:font-medium",

				// Disabled
				"data-[disabled]:pointer-events-none",
				"data-[disabled]:opacity-50",

				// Icons
				"[&_svg]:pointer-events-none",
				"[&_svg]:shrink-0",
				"[&_svg:not([class*='size-'])]:size-4",

				className,
			)}
			{...props}
		>
			<span
				data-slot="select-item-indicator"
				className="absolute right-2.5 flex size-4 items-center justify-center text-primary"
			>
				<SelectPrimitive.ItemIndicator>
					<CheckIcon className="size-4 stroke-[2.5]" />
				</SelectPrimitive.ItemIndicator>
			</span>

			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
}

function SelectSeparator({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
	return (
		<SelectPrimitive.Separator
			data-slot="select-separator"
			className={cn("pointer-events-none my-1 h-px bg-border", className)}
			{...props}
		/>
	);
}

function SelectScrollUpButton({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
	return (
		<SelectPrimitive.ScrollUpButton
			data-slot="select-scroll-up-button"
			className={cn(
				"flex cursor-default items-center justify-center",
				"py-1.5 text-muted-foreground",
				className,
			)}
			{...props}
		>
			<ChevronUpIcon className="size-4" />
		</SelectPrimitive.ScrollUpButton>
	);
}

function SelectScrollDownButton({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
	return (
		<SelectPrimitive.ScrollDownButton
			data-slot="select-scroll-down-button"
			className={cn(
				"flex cursor-default items-center justify-center",
				"py-1.5 text-muted-foreground",
				className,
			)}
			{...props}
		>
			<ChevronDownIcon className="size-4" />
		</SelectPrimitive.ScrollDownButton>
	);
}

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
};

export type { SelectProps, SelectTriggerProps, SelectContentProps };
