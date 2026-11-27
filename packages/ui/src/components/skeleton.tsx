import type * as React from "react";
import { cn } from "../lib/utils";

type SkeletonProps = React.ComponentProps<"div">;

function Skeleton({ className, ...props }: SkeletonProps) {
	return (
		<div
			data-slot="skeleton"
			aria-hidden="true"
			className={cn(
				"rounded-md bg-muted",
				"animate-pulse",
				"motion-reduce:animate-none",
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
export type { SkeletonProps };
