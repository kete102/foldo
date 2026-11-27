"use client";

import { Tooltip as TooltipPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root>;

type TooltipProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>;

type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content> & {
	showArrow?: boolean;
};

function TooltipProvider({
	delayDuration = 400,
	skipDelayDuration = 200,
	...props
}: TooltipProviderProps) {
	return (
		<TooltipPrimitive.Provider
			delayDuration={delayDuration}
			skipDelayDuration={skipDelayDuration}
			{...props}
		/>
	);
}

function Tooltip(props: TooltipProps) {
	return <TooltipPrimitive.Root {...props} />;
}

function TooltipTrigger(props: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
	className,
	sideOffset = 6,
	showArrow = true,
	children,
	...props
}: TooltipContentProps) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				data-slot="tooltip-content"
				sideOffset={sideOffset}
				className={cn(
					// Layout
					"z-50 w-fit max-w-64",
					"rounded-sm px-2.5 py-1.5",

					// Surface
					"bg-foreground text-background",

					// Typography
					"text-caption font-medium text-balance",

					// Animation origin
					"origin-(--radix-tooltip-content-transform-origin)",

					// Enter
					"data-[state=delayed-open]:animate-in",
					"data-[state=instant-open]:animate-in",
					"fade-in-0 zoom-in-[0.98]",

					// Exit
					"data-[state=closed]:animate-out",
					"fade-out-0 zoom-out-[0.98]",

					// Motion
					"duration-(--duration-fast) ease-standard",
					"motion-reduce:animate-none",

					className,
				)}
				{...props}
			>
				{children}

				{showArrow && <TooltipPrimitive.Arrow width={10} height={5} className="fill-foreground" />}
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	);
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

export type { TooltipProps, TooltipProviderProps, TooltipContentProps };
