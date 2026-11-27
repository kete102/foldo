import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircleIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "../lib/utils";

const spinnerVariants = cva(["shrink-0 animate-spin", "motion-reduce:animate-none"], {
	variants: {
		size: {
			xs: "size-3",
			sm: "size-4",
			md: "size-5",
			lg: "size-6",
			xl: "size-8",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

type SpinnerProps = React.ComponentProps<"svg"> & VariantProps<typeof spinnerVariants>;

function Spinner({ className, size = "sm", ...props }: SpinnerProps) {
	return (
		<LoaderCircleIcon
			data-slot="spinner"
			data-size={size}
			role="status"
			aria-label="Loading"
			className={cn(spinnerVariants({ size }), className)}
			{...props}
		/>
	);
}

export { Spinner };
export type { SpinnerProps };
