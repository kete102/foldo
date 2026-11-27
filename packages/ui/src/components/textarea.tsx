import type * as React from "react";
import { cn } from "../lib/utils";

type TextareaProps = React.ComponentProps<"textarea">;

function Textarea({ className, ...props }: TextareaProps) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				// Layout
				"block min-h-24 w-full min-w-0",
				"resize-y rounded-md border border-input",
				"bg-background bg-clip-padding px-3 py-3",

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

				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
export type { TextareaProps };
