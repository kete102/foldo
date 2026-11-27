"use client";

import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root>;

type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>;

function RadioGroup({ className, ...props }: RadioGroupProps) {
	return (
		<RadioGroupPrimitive.Root
			data-slot="radio-group"
			className={cn("grid gap-3", className)}
			{...props}
		/>
	);
}

function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
	return (
		<RadioGroupPrimitive.Item
			data-slot="radio-group-item"
			className={cn(
				// Layout
				"peer inline-flex size-5 shrink-0",
				"items-center justify-center",
				"rounded-full border border-input",
				"bg-background bg-clip-padding",

				// Interaction
				"cursor-pointer outline-none",
				"transition-[border-color,box-shadow]",
				"duration-(--duration-fast) ease-standard",
				"motion-reduce:transition-none",

				// Hover
				"enabled:hover:border-foreground/40",

				// Checked
				"data-[state=checked]:border-2",
				"data-[state=checked]:border-primary",

				// Focus
				"focus-visible:border-ring",
				"focus-visible:ring-2 focus-visible:ring-ring/20",

				// Invalid
				"aria-invalid:border-destructive",
				"aria-invalid:focus-visible:ring-destructive/20",

				// Disabled
				"disabled:cursor-not-allowed disabled:opacity-50",

				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator
				data-slot="radio-group-indicator"
				forceMount
				className={cn(
					"flex items-center justify-center",
					"scale-50 opacity-0",
					"transition-[scale,opacity]",
					"duration-(--duration-fast) ease-standard",
					"data-[state=checked]:scale-100",
					"data-[state=checked]:opacity-100",
					"motion-reduce:transition-none",
				)}
			>
				<span className="size-2.5 rounded-full bg-primary" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
}

export { RadioGroup, RadioGroupItem };
export type { RadioGroupProps, RadioGroupItemProps };
