"use client";

import { Separator as SeparatorPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root>;

function Separator({
	className,
	orientation = "horizontal",
	decorative = true,
	...props
}: SeparatorProps) {
	return (
		<SeparatorPrimitive.Root
			data-slot="separator"
			decorative={decorative}
			orientation={orientation}
			className={cn(
				"shrink-0 bg-border",

				// Horizontal
				"data-[orientation=horizontal]:h-px",
				"data-[orientation=horizontal]:w-full",

				// Vertical
				"data-[orientation=vertical]:h-full",
				"data-[orientation=vertical]:w-px",

				className,
			)}
			{...props}
		/>
	);
}

export { Separator };
export type { SeparatorProps };
