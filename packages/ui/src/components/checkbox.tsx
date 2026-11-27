"use client";

import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;

function Checkbox({ className, ...props }: CheckboxProps) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				// Layout
				"peer group/checkbox inline-flex size-5 shrink-0",
				"items-center justify-center",
				"rounded-xs border border-input",
				"bg-background bg-clip-padding",

				// Interaction
				"cursor-pointer outline-none",
				"transition-[background-color,border-color,box-shadow]",
				"duration-(--duration-fast) ease-standard",
				"motion-reduce:transition-none",

				// Hover
				"enabled:hover:border-foreground/40",

				// Checked
				"data-[state=checked]:border-primary",
				"data-[state=checked]:bg-primary",
				"data-[state=checked]:text-primary-foreground",

				// Indeterminate
				"data-[state=indeterminate]:border-primary",
				"data-[state=indeterminate]:bg-primary",
				"data-[state=indeterminate]:text-primary-foreground",

				// Focus
				"focus-visible:border-ring",
				"focus-visible:ring-2 focus-visible:ring-ring/20",

				// Invalid
				"aria-invalid:border-destructive",
				"aria-invalid:hover:border-destructive",
				"aria-invalid:focus-visible:ring-destructive/20",

				// Disabled
				"disabled:cursor-not-allowed disabled:opacity-50",

				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				forceMount
				className={cn(
					"flex items-center justify-center",
					"scale-75 opacity-0",
					"transition-[scale,opacity]",
					"duration-(--duration-fast) ease-standard",
					"data-[state=checked]:scale-100",
					"data-[state=checked]:opacity-100",
					"data-[state=indeterminate]:scale-100",
					"data-[state=indeterminate]:opacity-100",
					"motion-reduce:transition-none",
				)}
			>
				<CheckIcon
					aria-hidden="true"
					className="size-3.5 stroke-[2.5] group-data-[state=indeterminate]/checkbox:hidden"
				/>

				<MinusIcon
					aria-hidden="true"
					className="hidden size-3.5 stroke-[2.5] group-data-[state=indeterminate]/checkbox:block"
				/>
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
export type { CheckboxProps };
