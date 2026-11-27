"use client";

import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./button";

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
	showCloseButton?: boolean;
	closeLabel?: string;
};

function Dialog(props: DialogProps) {
	return <DialogPrimitive.Root {...props} />;
}

function DialogTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal(props: React.ComponentProps<typeof DialogPrimitive.Portal>) {
	return <DialogPrimitive.Portal {...props} />;
}

function DialogClose(props: React.ComponentProps<typeof DialogPrimitive.Close>) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={cn(
				// Layout
				"fixed inset-0 z-50 bg-black/40",

				// Enter
				"data-[state=open]:animate-in",
				"data-[state=open]:fade-in-0",
				"data-[state=open]:duration-(--duration-normal)",

				// Exit
				"data-[state=closed]:animate-out",
				"data-[state=closed]:fade-out-0",
				"data-[state=closed]:duration-(--duration-fast)",

				// Motion
				"ease-standard motion-reduce:animate-none",

				className,
			)}
			{...props}
		/>
	);
}

function DialogContent({
	className,
	children,
	showCloseButton = true,
	closeLabel = "Close",
	...props
}: DialogContentProps) {
	return (
		<DialogPortal>
			<DialogOverlay />

			<DialogPrimitive.Content
				data-slot="dialog-content"
				className={cn(
					// Position
					"fixed top-1/2 left-1/2 z-50",
					"-translate-x-1/2 -translate-y-1/2",

					// Layout
					"grid w-[calc(100%-2rem)] max-w-[30rem]",
					"max-h-[calc(100dvh-2rem)]",
					"gap-6 overflow-y-auto overscroll-contain p-6",

					// Surface
					"rounded-2xl border border-border",
					"bg-popover bg-clip-padding text-popover-foreground",
					"shadow-elevation-3 outline-none",

					// Enter
					"data-[state=open]:animate-in",
					"data-[state=open]:fade-in-0",
					"data-[state=open]:zoom-in-[0.97]",
					"data-[state=open]:duration-(--duration-normal)",

					// Exit
					"data-[state=closed]:animate-out",
					"data-[state=closed]:fade-out-0",
					"data-[state=closed]:zoom-out-[0.97]",
					"data-[state=closed]:duration-(--duration-fast)",

					// Motion
					"ease-standard motion-reduce:animate-none",

					className,
				)}
				{...props}
			>
				{children}

				{showCloseButton && (
					<DialogPrimitive.Close asChild>
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-3 right-3 text-muted-foreground"
							aria-label={closeLabel}
						>
							<XIcon aria-hidden="true" />
						</Button>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-header"
			className={cn("flex flex-col gap-2 text-left", className)}
			{...props}
		/>
	);
}

function DialogFooter({
	className,
	children,
	showCloseButton = false,
	closeLabel = "Close",
	...props
}: React.ComponentProps<"div"> & {
	showCloseButton?: boolean;
	closeLabel?: string;
}) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn(
				"flex flex-col-reverse gap-3",
				"sm:flex-row sm:items-center sm:justify-end",
				className,
			)}
			{...props}
		>
			{children}

			{showCloseButton && (
				<DialogPrimitive.Close asChild>
					<Button variant="outline">{closeLabel}</Button>
				</DialogPrimitive.Close>
			)}
		</div>
	);
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cn("text-h3 font-semibold", className)}
			{...props}
		/>
	);
}

function DialogDescription({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cn("text-body-sm text-muted-foreground", className)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};

export type { DialogProps, DialogContentProps };
