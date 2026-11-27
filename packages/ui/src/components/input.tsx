import type * as React from "react";
import { cn } from "../lib/utils";

type InputProps = React.ComponentProps<"input">;

function Input({ className, type, ...props }: InputProps) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				// Layout
				"h-control-md w-full min-w-0",
				"rounded-md border border-input",
				"bg-background bg-clip-padding px-3",

				// Typography
				"text-body text-foreground",
				"placeholder:text-muted-foreground",
				"selection:bg-primary selection:text-primary-foreground",

				// Motion
				"outline-none",
				"transition-[color,background-color,border-color,box-shadow]",
				"duration-(--duration-fast) ease-standard",
				"motion-reduce:transition-none",

				// Hover
				"enabled:hover:border-foreground/40",

				// Focus
				"focus-visible:border-ring",
				"focus-visible:ring-2 focus-visible:ring-ring/20",

				// Invalid
				"aria-invalid:border-destructive",
				"aria-invalid:hover:border-destructive",
				"aria-invalid:focus-visible:border-destructive",
				"aria-invalid:focus-visible:ring-destructive/20",

				// Disabled
				"disabled:cursor-not-allowed",
				"disabled:bg-muted disabled:opacity-50",

				// File input
				"file:inline-flex file:h-7",
				"file:border-0 file:bg-transparent",
				"file:text-sm file:font-medium file:text-foreground",

				className,
			)}
			{...props}
		/>
	);
}

export { Input };
export type { InputProps };
