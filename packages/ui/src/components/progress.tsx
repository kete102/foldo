"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Progress as ProgressPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

const progressVariants = cva(["relative w-full overflow-hidden", "rounded-full bg-muted"], {
	variants: {
		size: {
			sm: "h-1",
			default: "h-2",
			lg: "h-3",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

const indicatorVariants = cva(
	[
		"h-full w-full rounded-full",
		"transition-transform",
		"duration-(--duration-slow) ease-standard",
		"motion-reduce:transition-none",
	],
	{
		variants: {
			variant: {
				default: "bg-primary",
				success: "bg-success",
				warning: "bg-warning",
				destructive: "bg-destructive",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> &
	VariantProps<typeof progressVariants> &
	VariantProps<typeof indicatorVariants>;

function Progress({
	className,
	value = null,
	max = 100,
	size = "default",
	variant = "default",
	...props
}: ProgressProps) {
	const safeMax = Number.isFinite(max) && max > 0 ? max : 100;

	const safeValue =
		typeof value === "number" && Number.isFinite(value)
			? Math.min(Math.max(value, 0), safeMax)
			: null;

	const percentage = safeValue === null ? 0 : (safeValue / safeMax) * 100;

	return (
		<ProgressPrimitive.Root
			data-slot="progress"
			data-size={size}
			data-variant={variant}
			value={safeValue}
			max={safeMax}
			className={cn(progressVariants({ size }), className)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				data-slot="progress-indicator"
				className={indicatorVariants({ variant })}
				style={{
					transform: `translateX(-${100 - percentage}%)`,
				}}
			/>
		</ProgressPrimitive.Root>
	);
}

export { Progress };
export type { ProgressProps };
