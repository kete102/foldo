"use client";

import { CircleCheckIcon, CircleXIcon, InfoIcon, TriangleAlertIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { cn } from "../lib/utils";
import { Spinner } from "./spinner";

function Toaster({ className, toastOptions, style, ...props }: ToasterProps) {
	return (
		<Sonner
			position="bottom-right"
			duration={4000}
			visibleToasts={3}
			gap={12}
			closeButton
			className={cn("foldo-toaster", className)}
			icons={{
				success: <CircleCheckIcon className="size-5 text-success" aria-hidden="true" />,
				info: <InfoIcon className="size-5 text-info" aria-hidden="true" />,
				warning: <TriangleAlertIcon className="size-5 text-warning" aria-hidden="true" />,
				error: <CircleXIcon className="size-5 text-destructive" aria-hidden="true" />,
				loading: <Spinner size="md" aria-hidden="true" role="presentation" />,
			}}
			style={
				{
					"--width": "360px",
					"--normal-bg": "var(--popover)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
					"--border-radius": "var(--radius-lg)",
					...style,
				} as CSSProperties
			}
			toastOptions={{
				...toastOptions,
				classNames: {
					toast: cn("foldo-toast", toastOptions?.classNames?.toast),
					title: cn("foldo-toast-title", toastOptions?.classNames?.title),
					description: cn("foldo-toast-description", toastOptions?.classNames?.description),
					actionButton: cn("foldo-toast-action", toastOptions?.classNames?.actionButton),
					cancelButton: cn("foldo-toast-cancel", toastOptions?.classNames?.cancelButton),
					closeButton: cn("foldo-toast-close", toastOptions?.classNames?.closeButton),
				},
			}}
			{...props}
		/>
	);
}

export { Toaster };
export { toast } from "sonner";
