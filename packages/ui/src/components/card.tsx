import type * as React from "react";
import { cn } from "../lib/utils";

type CardProps = React.ComponentProps<"div">;

function Card({ className, ...props }: CardProps) {
	return (
		<div
			data-slot="card"
			className={cn(
				"flex min-w-0 flex-col gap-6",
				"rounded-xl border border-border",
				"bg-card bg-clip-padding text-card-foreground",
				"py-6",
				className,
			)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: CardProps) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				"@container/card-header",
				"grid auto-rows-min grid-rows-[auto_auto]",
				"items-start gap-2 px-6",
				"has-data-[slot=card-action]:grid-cols-[minmax(0,1fr)_auto]",
				"[.border-b]:pb-6",
				className,
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: CardProps) {
	return (
		<div data-slot="card-title" className={cn("text-h4 font-semibold", className)} {...props} />
	);
}

function CardDescription({ className, ...props }: CardProps) {
	return (
		<div
			data-slot="card-description"
			className={cn("text-body-sm text-muted-foreground", className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: CardProps) {
	return (
		<div
			data-slot="card-action"
			className={cn("col-start-2 row-span-2 row-start-1", "self-start justify-self-end", className)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: CardProps) {
	return <div data-slot="card-content" className={cn("min-w-0 px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: CardProps) {
	return (
		<div
			data-slot="card-footer"
			className={cn("flex flex-wrap items-center gap-3 px-6", "[.border-t]:pt-6", className)}
			{...props}
		/>
	);
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };

export type { CardProps };
