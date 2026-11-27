"use client";

import { Switch as SwitchPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
	size?: "sm" | "default";
};

function Switch({ className, size = "default", ...props }: SwitchProps) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			data-size={size}
			className={cn(
				// Layout
				"peer group/switch inline-flex shrink-0",
				"items-center rounded-full p-[3px]",

				// Sizes
				"data-[size=default]:h-6",
				"data-[size=default]:w-10",
				"data-[size=sm]:h-5",
				"data-[size=sm]:w-8",

				// Interaction
				"cursor-pointer outline-none",
				"transition-[background-color,box-shadow]",
				"duration-(--duration-normal) ease-standard",
				"motion-reduce:transition-none",

				// States
				"data-[state=unchecked]:bg-switch-track",
				"data-[state=checked]:bg-primary",

				// Focus
				"focus-visible:ring-2 focus-visible:ring-ring",
				"focus-visible:ring-offset-2",
				"focus-visible:ring-offset-background",

				// Invalid
				"aria-invalid:ring-2",
				"aria-invalid:ring-destructive",

				// Disabled
				"disabled:cursor-not-allowed disabled:opacity-50",

				className,
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"pointer-events-none block shrink-0 rounded-full",
					"bg-switch-thumb",

					// Sizes
					"group-data-[size=default]/switch:size-[18px]",
					"group-data-[size=sm]/switch:size-3.5",

					// Motion
					"transition-transform",
					"duration-(--duration-normal) ease-standard",
					"motion-reduce:transition-none",

					// Position
					"data-[state=unchecked]:translate-x-0",
					"group-data-[size=default]/switch:data-[state=checked]:translate-x-4",
					"group-data-[size=sm]/switch:data-[state=checked]:translate-x-3",
				)}
			/>
		</SwitchPrimitive.Root>
	);
}

export { Switch };
export type { SwitchProps };
