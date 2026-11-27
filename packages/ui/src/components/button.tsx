import { cn } from "@foldo/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";
import { Spinner } from "./spinner";

const buttonVariants = cva(
	[
		"inline-flex shrink-0 items-center justify-center",
		"gap-2 whitespace-nowrap rounded-lg font-medium",
		"cursor-pointer outline-none",

		// Motion
		"transition-[color,background-color,border-color,box-shadow,scale]",
		"duration-(--duration-fast) ease-standard",
		"active:scale-[0.98]",
		"motion-reduce:transition-none",
		"motion-reduce:active:scale-100",

		// Focus
		"focus-visible:ring-2",
		"focus-visible:ring-ring",
		"focus-visible:ring-offset-2",
		"focus-visible:ring-offset-background",

		// Disabled
		"disabled:cursor-not-allowed",
		"disabled:opacity-50",
		"disabled:active:scale-100",

		// Icons
		"[&_svg]:pointer-events-none",
		"[&_svg]:shrink-0",
		"[&_svg:not([class*='size-'])]:size-icon-md",
	],
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary-hover",

				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",

				outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",

				ghost: "hover:bg-accent hover:text-accent-foreground",

				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",

				link: "text-primary underline-offset-4 hover:underline",
			},

			size: {
				sm: "h-control-sm px-3 text-sm",
				default: "h-control-md px-4 text-sm",
				lg: "h-control-lg px-6 text-base",
				xl: "h-control-xl px-8 text-base",

				"icon-sm": "size-control-sm",
				icon: "size-control-md",
				"icon-lg": "size-control-lg",
			},
		},

		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		loading?: boolean;
	};

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	loading = false,
	disabled,
	children,
	type = "button",
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot.Root : "button";

	return (
		<Comp
			{...props}
			data-slot="button"
			data-variant={variant}
			data-size={size}
			data-loading={loading || undefined}
			aria-busy={loading || undefined}
			className={cn(buttonVariants({ variant, size }), className)}
			{...(!asChild && {
				type,
				disabled: disabled || loading,
			})}
		>
			{asChild ? (
				children
			) : (
				<>
					{loading && <Spinner size="sm" aria-hidden="true" role="presentation" />}
					{children}
				</>
			)}
		</Comp>
	);
}

export { Button, buttonVariants };
export type { ButtonProps };
