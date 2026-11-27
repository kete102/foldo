import { cn } from "@foldo/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
	variants: {
		size: {
			reading: "max-w-reading",
			content: "max-w-content",
			page: "max-w-page",
			wide: "max-w-wide",
			full: "max-w-none",
		},
	},
	defaultVariants: {
		size: "page",
	},
});

type ContainerProps = ComponentProps<"div"> & VariantProps<typeof containerVariants>;

function Container({ size, className, ...props }: ContainerProps) {
	return <div className={cn(containerVariants({ size }), className)} {...props} />;
}

export { Container };
