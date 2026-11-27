"use client";

import { Badge } from "@foldo/ui/components/badge";
import { Button } from "@foldo/ui/components/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@foldo/ui/components/card";
import { Separator } from "@foldo/ui/components/separator";
import {
	CheckCircleIcon,
	CircleAlertIcon,
	ClockIcon,
	FileTextIcon,
	InfoIcon,
	MoreHorizontalIcon,
	RotateCcwIcon,
	RotateCwIcon,
	SparklesIcon,
	ZoomInIcon,
	ZoomOutIcon,
} from "lucide-react";
import type { ReactNode } from "react";

function Example({ title, children }: { title: string; children: ReactNode }) {
	return (
		<div className="rounded-xl border border-border bg-clip-padding">
			<div className="border-b border-border px-6 py-4">
				<h3 className="text-body font-semibold">{title}</h3>
			</div>

			<div className="space-y-6 p-6">{children}</div>
		</div>
	);
}

export function SurfacesPreview() {
	return (
		<div className="space-y-6">
			{/* Card */}

			<Example title="Basic card">
				<Card className="max-w-md">
					<CardHeader>
						<CardTitle>Your documents</CardTitle>

						<CardDescription>Manage and organize your recent files.</CardDescription>
					</CardHeader>

					<CardContent>
						<p className="text-body-sm">You currently have 12 documents in your workspace.</p>
					</CardContent>

					<CardFooter>
						<Button variant="outline">View documents</Button>
					</CardFooter>
				</Card>
			</Example>

			<Example title="Card with action">
				<Card className="max-w-md">
					<CardHeader>
						<CardTitle>Recent document</CardTitle>

						<CardDescription>Last edited today.</CardDescription>

						<CardAction>
							<Button variant="ghost" size="icon" aria-label="Document options">
								<MoreHorizontalIcon />
							</Button>
						</CardAction>
					</CardHeader>

					<CardContent>
						<div className="flex items-center gap-3">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
								<FileTextIcon className="size-6 text-muted-foreground" />
							</div>

							<div className="min-w-0 space-y-1">
								<p className="truncate text-body-sm font-medium">Annual report.pdf</p>

								<p className="text-caption text-muted-foreground">2.4 MB · 12 pages</p>
							</div>
						</div>
					</CardContent>

					<CardFooter className="justify-end border-t border-border">
						<Button variant="outline">Download</Button>
						<Button>Open document</Button>
					</CardFooter>
				</Card>
			</Example>

			<Example title="Card with elevation">
				<div className="grid gap-4 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Default surface</CardTitle>

							<CardDescription>Border without elevation.</CardDescription>
						</CardHeader>
					</Card>

					<Card className="shadow-elevation-1">
						<CardHeader>
							<CardTitle>Elevated surface</CardTitle>

							<CardDescription>Optional elevation when needed.</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</Example>

			{/* Badge */}

			<Example title="Badge variants">
				<div className="flex flex-wrap items-center gap-3">
					<Badge>Default</Badge>
					<Badge variant="brand">Brand</Badge>
					<Badge variant="outline">Outline</Badge>
					<Badge variant="success">Success</Badge>
					<Badge variant="warning">Warning</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="info">Info</Badge>
				</div>
			</Example>

			<Example title="Badges with icons">
				<div className="flex flex-wrap items-center gap-3">
					<Badge variant="success">
						<CheckCircleIcon aria-hidden="true" />
						Completed
					</Badge>

					<Badge variant="warning">
						<ClockIcon aria-hidden="true" />
						Pending
					</Badge>

					<Badge variant="destructive">
						<CircleAlertIcon aria-hidden="true" />
						Failed
					</Badge>

					<Badge variant="info">
						<InfoIcon aria-hidden="true" />
						Information
					</Badge>

					<Badge variant="brand">
						<SparklesIcon aria-hidden="true" />
						Pro
					</Badge>
				</div>
			</Example>

			<Example title="Document statuses">
				<div className="max-w-lg">
					{[
						{
							name: "Contract.pdf",
							size: "1.2 MB",
							status: "Completed",
							variant: "success",
						},
						{
							name: "Invoice.pdf",
							size: "4.8 MB",
							status: "Pending",
							variant: "warning",
						},
						{
							name: "Report.pdf",
							size: "8.2 MB",
							status: "Failed",
							variant: "destructive",
						},
					].map((file, index) => (
						<div key={file.name}>
							{index > 0 && <Separator />}

							<div className="flex items-center gap-3 py-4">
								<FileTextIcon className="size-5 shrink-0 text-muted-foreground" />

								<div className="min-w-0 flex-1 space-y-1">
									<p className="truncate text-body-sm font-medium">{file.name}</p>

									<p className="text-caption text-muted-foreground">{file.size}</p>
								</div>

								<Badge variant={file.variant as "success" | "warning" | "destructive"}>
									{file.status}
								</Badge>
							</div>
						</div>
					))}
				</div>
			</Example>

			{/* Separator */}

			<Example title="Horizontal separator">
				<div className="max-w-md space-y-4">
					<div className="space-y-1">
						<h4 className="text-body font-medium">Account</h4>

						<p className="text-body-sm text-muted-foreground">Manage your personal information.</p>
					</div>

					<Separator />

					<div className="space-y-1">
						<h4 className="text-body font-medium">Preferences</h4>

						<p className="text-body-sm text-muted-foreground">Customize your Foldo experience.</p>
					</div>

					<Separator />

					<div className="space-y-1">
						<h4 className="text-body font-medium">Privacy</h4>

						<p className="text-body-sm text-muted-foreground">Control how your data is managed.</p>
					</div>
				</div>
			</Example>

			<Example title="Vertical separator">
				<div className="flex h-6 items-center gap-4 text-body-sm">
					<span>PDF</span>
					<Separator orientation="vertical" />
					<span>2.4 MB</span>
					<Separator orientation="vertical" />
					<span>12 pages</span>
				</div>
			</Example>

			<Example title="Document toolbar">
				<div className="inline-flex h-control-lg max-w-full items-center gap-1 rounded-lg border border-border bg-background bg-clip-padding px-2">
					<Button variant="ghost" size="icon-sm" aria-label="Zoom out">
						<ZoomOutIcon />
					</Button>

					<span className="px-2 text-body-sm tabular-nums">100%</span>

					<Button variant="ghost" size="icon-sm" aria-label="Zoom in">
						<ZoomInIcon />
					</Button>

					<Separator orientation="vertical" className="mx-2 h-6" />

					<Button variant="ghost" size="icon-sm" aria-label="Rotate counterclockwise">
						<RotateCcwIcon />
					</Button>

					<Button variant="ghost" size="icon-sm" aria-label="Rotate clockwise">
						<RotateCwIcon />
					</Button>
				</div>
			</Example>

			{/* Combined example */}

			<Example title="Subscription card">
				<Card className="max-w-md">
					<CardHeader>
						<CardTitle>Foldo Pro</CardTitle>

						<CardDescription>More possibilities for your everyday workflow.</CardDescription>

						<CardAction>
							<Badge variant="brand">Annual</Badge>
						</CardAction>
					</CardHeader>

					<CardContent className="space-y-6">
						<div className="flex items-baseline gap-1">
							<span className="text-h1 tabular-nums">€3.33</span>

							<span className="text-body-sm text-muted-foreground">/month</span>
						</div>

						<p className="text-body-sm text-muted-foreground">€39.99 billed annually.</p>

						<Separator />

						<div className="space-y-3">
							{[
								"Advanced document tools",
								"Extended processing limits",
								"5 GB of document storage",
								"Batch processing",
								"Document history",
							].map((feature) => (
								<div key={feature} className="flex items-center gap-3">
									<CheckCircleIcon className="size-4 shrink-0 text-success" />

									<span className="text-body-sm">{feature}</span>
								</div>
							))}
						</div>
					</CardContent>

					<CardFooter>
						<Button size="lg" className="w-full">
							Get Foldo Pro
						</Button>
					</CardFooter>
				</Card>
			</Example>
		</div>
	);
}
