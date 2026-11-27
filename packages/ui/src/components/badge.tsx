import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

const badgeVariants = cva(
	[
		// Layout
		"inline-flex min-h-6 w-fit shrink-0",
		"items-center justify-center gap-1",
		"rounded-full border border-transparent",
		"bg-clip-padding px-2.5 py-0.5",

		// Typography
		"text-caption font-medium whitespace-nowrap",

		// Icons
		"[&>svg]:pointer-events-none",
		"[&>svg]:size-3 [&>svg]:shrink-0",

		// Focus for interactive badges
		"outline-none",
		"focus-visible:ring-2 focus-visible:ring-ring",
		"focus-visible:ring-offset-2",
		"focus-visible:ring-offset-background",

		// Motion
		"transition-colors",
		"duration-(--duration-fast) ease-standard",
		"motion-reduce:transition-none",
	],
	{
		variants: {
			variant: {
				default: "bg-muted text-foreground",

				brand: "bg-accent text-accent-foreground",

				outline: "border-border text-foreground",

				success: "bg-success-subtle text-success",

				warning: "bg-warning-subtle text-warning",

				destructive: "bg-destructive-subtle text-destructive",

				info: "bg-info-subtle text-info",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

type BadgeProps = React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & {
		asChild?: boolean;
	};

function Badge({ className, variant = "default", asChild = false, ...props }: BadgeProps) {
	const Comp = asChild ? Slot.Root : "span";

	return (
		<Comp
			data-slot="badge"
			data-variant={variant}
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
export type { BadgeProps };
