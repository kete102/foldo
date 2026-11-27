"use client";

import { Button } from "@foldo/ui/components/button";
import { Card, CardContent, CardHeader } from "@foldo/ui/components/card";
import { Progress } from "@foldo/ui/components/progress";
import { Skeleton } from "@foldo/ui/components/skeleton";
import { toast } from "@foldo/ui/components/sonner";
import { Spinner } from "@foldo/ui/components/spinner";
import { CheckCircleIcon, FileTextIcon, MoreHorizontalIcon } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

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

const files = [
	{ name: "Annual report.pdf", size: "2.4 MB" },
	{ name: "Project proposal.pdf", size: "1.8 MB" },
	{ name: "Invoice.pdf", size: "0.6 MB" },
];

export function FeedbackPreview() {
	const [progress, setProgress] = useState(0);
	const [processing, setProcessing] = useState(false);
	const [showSkeleton, setShowSkeleton] = useState(true);

	useEffect(() => {
		if (!processing) return;

		const interval = window.setInterval(() => {
			setProgress((previous) => Math.min(previous + 5, 100));
		}, 150);

		return () => window.clearInterval(interval);
	}, [processing]);

	useEffect(() => {
		if (progress === 100 && processing) {
			setProcessing(false);

			toast.success("Document compressed", {
				description: "Your file is ready to download.",
			});
		}
	}, [progress, processing]);

	function startProcessing() {
		setProgress(0);
		setProcessing(true);
	}

	function resetProcessing() {
		setProcessing(false);
		setProgress(0);
	}

	return (
		<div className="space-y-6">
			{/* Progress */}

			<Example title="Progress sizes">
				<div className="max-w-lg space-y-6">
					{(["sm", "default", "lg"] as const).map((size) => (
						<div key={size} className="space-y-2">
							<div className="flex justify-between text-body-sm">
								<span>{size}</span>
								<span className="text-muted-foreground">65%</span>
							</div>

							<Progress size={size} value={65} aria-label={`${size} progress`} />
						</div>
					))}
				</div>
			</Example>

			<Example title="Progress variants">
				<div className="max-w-lg space-y-6">
					{(
						[
							{ variant: "default", value: 65 },
							{ variant: "success", value: 100 },
							{ variant: "warning", value: 85 },
							{ variant: "destructive", value: 40 },
						] as const
					).map(({ variant, value }) => (
						<div key={variant} className="space-y-2">
							<div className="flex justify-between text-body-sm">
								<span>{variant}</span>
								<span className="tabular-nums">{value}%</span>
							</div>

							<Progress variant={variant} value={value} aria-label={`${variant} progress`} />
						</div>
					))}
				</div>
			</Example>

			<Example title="Custom maximum">
				<div className="max-w-lg space-y-2">
					<div className="flex justify-between text-body-sm">
						<span>Pages processed</span>
						<span className="tabular-nums">3 of 12</span>
					</div>

					<Progress value={3} max={12} aria-label="Pages processed" />
				</div>
			</Example>

			<Example title="Simulated document processing">
				<Card className="max-w-lg">
					<CardContent className="space-y-6">
						<div className="flex items-center gap-3">
							<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent">
								<FileTextIcon className="size-6 text-primary" />
							</div>

							<div className="min-w-0 flex-1 space-y-1">
								<p className="truncate text-body-sm font-medium">Annual report.pdf</p>

								<p className="text-caption text-muted-foreground">
									{processing
										? "Compressing document..."
										: progress === 100
											? "Compression complete"
											: "Ready to compress"}
								</p>
							</div>

							{progress === 100 ? (
								<CheckCircleIcon className="size-5 text-success" />
							) : (
								<span className="text-body-sm font-medium tabular-nums">{progress}%</span>
							)}
						</div>

						<Progress
							value={progress}
							variant={progress === 100 ? "success" : "default"}
							aria-label="Document compression progress"
						/>

						<div className="flex flex-wrap justify-end gap-3">
							<Button variant="outline" onClick={resetProcessing}>
								Reset
							</Button>

							<Button loading={processing} onClick={startProcessing}>
								{processing ? "Compressing..." : "Compress PDF"}
							</Button>
						</div>
					</CardContent>
				</Card>
			</Example>

			{/* Spinner */}

			<Example title="Spinner sizes">
				<div className="flex flex-wrap items-center gap-8">
					{(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
						<div key={size} className="flex flex-col items-center gap-3">
							<Spinner size={size} />

							<span className="text-caption text-muted-foreground">{size}</span>
						</div>
					))}
				</div>
			</Example>

			<Example title="Spinner colors">
				<div className="flex flex-wrap items-center gap-6">
					<Spinner size="lg" />
					<Spinner size="lg" className="text-primary" />
					<Spinner size="lg" className="text-muted-foreground" />
				</div>
			</Example>

			<Example title="Loading buttons">
				<div className="flex flex-wrap gap-3">
					<Button loading>Compressing...</Button>

					<Button variant="outline" loading>
						Uploading...
					</Button>

					<Button variant="secondary" loading>
						Saving...
					</Button>
				</div>
			</Example>

			{/* Skeleton */}

			<Example title="Skeleton shapes">
				<div className="flex flex-wrap items-center gap-6">
					<Skeleton className="h-4 w-32" />

					<Skeleton className="size-12 rounded-full" />

					<Skeleton className="size-16 rounded-lg" />

					<Skeleton className="h-20 w-32 rounded-xl" />
				</div>
			</Example>

			<Example title="Card skeleton">
				<Card className="max-w-sm" aria-busy="true" aria-label="Loading document">
					<CardHeader>
						<Skeleton className="h-6 w-40" />
						<Skeleton className="h-4 w-56 max-w-full" />
					</CardHeader>

					<CardContent className="space-y-4">
						<Skeleton className="aspect-video w-full rounded-lg" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-control-md w-32 rounded-lg" />
					</CardContent>
				</Card>
			</Example>

			<Example title="Document list skeleton">
				<div className="flex flex-wrap gap-3">
					<Button
						variant={showSkeleton ? "default" : "outline"}
						onClick={() => setShowSkeleton(true)}
					>
						Loading
					</Button>

					<Button
						variant={!showSkeleton ? "default" : "outline"}
						onClick={() => setShowSkeleton(false)}
					>
						Loaded
					</Button>
				</div>

				<div className="max-w-lg divide-y divide-border" aria-busy={showSkeleton}>
					{files.map((file) => (
						<div key={file.name} className="flex items-center gap-3 py-4">
							{showSkeleton ? (
								<>
									<Skeleton className="size-12 shrink-0 rounded-lg" />

									<div className="min-w-0 flex-1 space-y-2">
										<Skeleton className="h-5 w-3/4" />
										<Skeleton className="h-3 w-1/3" />
									</div>

									<Skeleton className="size-10 rounded-lg" />
								</>
							) : (
								<>
									<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent">
										<FileTextIcon className="size-6 text-primary" />
									</div>

									<div className="min-w-0 flex-1 space-y-1">
										<p className="truncate text-body-sm font-medium">{file.name}</p>

										<p className="text-caption text-muted-foreground">{file.size} · PDF document</p>
									</div>

									<Button
										variant="ghost"
										size="icon"
										aria-label={`Options for ${file.name}`}
										onClick={() => toast.info(file.name)}
									>
										<MoreHorizontalIcon />
									</Button>
								</>
							)}
						</div>
					))}
				</div>
			</Example>

			{/* Toast */}

			<Example title="Toast variants">
				<div className="flex flex-wrap gap-3">
					<Button
						variant="outline"
						onClick={() =>
							toast("Document saved", {
								description: "Your changes have been saved.",
							})
						}
					>
						Default
					</Button>

					<Button
						variant="outline"
						onClick={() =>
							toast.success("Document compressed", {
								description: "Your file is ready to download.",
							})
						}
					>
						Success
					</Button>

					<Button
						variant="outline"
						onClick={() =>
							toast.error("Unable to process document", {
								description: "Please try again in a moment.",
							})
						}
					>
						Error
					</Button>

					<Button
						variant="outline"
						onClick={() =>
							toast.warning("Storage almost full", {
								description: "You have used 90% of your storage.",
							})
						}
					>
						Warning
					</Button>

					<Button
						variant="outline"
						onClick={() =>
							toast.info("Document information", {
								description: "Your document contains 12 pages.",
							})
						}
					>
						Info
					</Button>
				</div>
			</Example>

			<Example title="Toast with action">
				<Button
					variant="outline"
					onClick={() =>
						toast("Document moved to trash", {
							description: "This is a simulated action.",
							action: {
								label: "Undo",
								onClick: () => toast.success("Document restored"),
							},
						})
					}
				>
					Show undo notification
				</Button>
			</Example>

			<Example title="Promise notifications">
				<div className="flex flex-wrap gap-3">
					<Button
						variant="outline"
						onClick={() => {
							const operation = new Promise<void>((resolve) => {
								window.setTimeout(resolve, 2500);
							});

							toast.promise(operation, {
								loading: "Processing document...",
								success: "Document processed successfully",
								error: "Unable to process document",
							});
						}}
					>
						Simulate success
					</Button>

					<Button
						variant="outline"
						onClick={() => {
							const operation = new Promise<void>((_, reject) => {
								window.setTimeout(() => {
									reject(new Error("Simulated error"));
								}, 2500);
							});

							toast.promise(operation, {
								loading: "Processing document...",
								success: "Document processed successfully",
								error: "Unable to process document",
							});
						}}
					>
						Simulate error
					</Button>

					<Button variant="ghost" onClick={() => toast.dismiss()}>
						Dismiss all
					</Button>
				</div>
			</Example>
		</div>
	);
}
