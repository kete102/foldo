"use client";

import { Button } from "@foldo/ui/components/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@foldo/ui/components/dialog";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@foldo/ui/components/dropdown-menu";
import { Input } from "@foldo/ui/components/input";
import { Label } from "@foldo/ui/components/label";
import { Separator } from "@foldo/ui/components/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@foldo/ui/components/tooltip";
import {
	CopyIcon,
	DownloadIcon,
	ExternalLinkIcon,
	FileOutputIcon,
	FileTextIcon,
	MaximizeIcon,
	MoreHorizontalIcon,
	PencilIcon,
	RotateCcwIcon,
	RotateCwIcon,
	SettingsIcon,
	Trash2Icon,
	ZoomInIcon,
	ZoomOutIcon,
} from "lucide-react";
import { type ReactNode, useState } from "react";

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

const toolbarActions = [
	{ label: "Zoom out", icon: ZoomOutIcon },
	{ label: "Zoom in", icon: ZoomInIcon },
	{
		label: "Rotate counterclockwise",
		icon: RotateCcwIcon,
	},
	{
		label: "Rotate clockwise",
		icon: RotateCwIcon,
	},
	{ label: "Fullscreen", icon: MaximizeIcon },
];

export function OverlaysPreview() {
	const [renameOpen, setRenameOpen] = useState(false);
	const [documentName, setDocumentName] = useState("Annual report.pdf");

	const [draftName, setDraftName] = useState(documentName);

	const [lastAction, setLastAction] = useState("");
	const [showThumbnails, setShowThumbnails] = useState(true);
	const [showPageNumbers, setShowPageNumbers] = useState(false);
	const [showToolbar, setShowToolbar] = useState(true);
	const [pageLayout, setPageLayout] = useState("single");

	return (
		<div className="space-y-6">
			{/* Dialog */}

			<Example title="Basic dialog">
				<Dialog>
					<DialogTrigger asChild>
						<Button>Open dialog</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader className="pr-10">
							<DialogTitle>Your workspace</DialogTitle>

							<DialogDescription>
								Keep your documents organized and accessible from one place.
							</DialogDescription>
						</DialogHeader>

						<p className="text-body-sm">
							This example demonstrates the default dialog surface, spacing and animation.
						</p>

						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline">Cancel</Button>
							</DialogClose>

							<DialogClose asChild>
								<Button>Continue</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</Example>

			<Example title="Dialog with form">
				<div className="flex flex-wrap items-center gap-4">
					<FileTextIcon className="size-5 text-muted-foreground" />

					<span className="text-body-sm">{documentName}</span>

					<Dialog
						open={renameOpen}
						onOpenChange={(open) => {
							if (open) {
								setDraftName(documentName);
							}

							setRenameOpen(open);
						}}
					>
						<DialogTrigger asChild>
							<Button variant="outline">
								<PencilIcon />
								Rename
							</Button>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader className="pr-10">
								<DialogTitle>Rename document</DialogTitle>

								<DialogDescription>
									Give your document a new name to make it easier to find.
								</DialogDescription>
							</DialogHeader>

							<form
								className="space-y-6"
								onSubmit={(event) => {
									event.preventDefault();

									const name = draftName.trim();

									if (!name) return;

									setDocumentName(name);
									setRenameOpen(false);
								}}
							>
								<div className="space-y-2">
									<Label htmlFor="document-name">Document name</Label>

									<Input
										id="document-name"
										value={draftName}
										onChange={(event) => setDraftName(event.target.value)}
										required
									/>
								</div>

								<DialogFooter>
									<DialogClose asChild>
										<Button variant="outline">Cancel</Button>
									</DialogClose>

									<Button type="submit" disabled={!draftName.trim()}>
										Save changes
									</Button>
								</DialogFooter>
							</form>
						</DialogContent>
					</Dialog>
				</div>
			</Example>

			<Example title="Scrollable dialog">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Open long content</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader className="pr-10">
							<DialogTitle>Document information</DialogTitle>

							<DialogDescription>
								Test how the dialog handles long content and smaller viewports.
							</DialogDescription>
						</DialogHeader>

						<div className="space-y-6">
							{Array.from({ length: 12 }, (_, index) => (
								<div key={index} className="space-y-2">
									<h4 className="text-body font-medium">Section {index + 1}</h4>

									<p className="text-body-sm text-muted-foreground">
										Document properties and additional information about your file.
									</p>

									<Separator />
								</div>
							))}
						</div>

						<DialogFooter>
							<DialogClose asChild>
								<Button>Done</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</Example>

			<Example title="Dialog without close icon">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Open confirmation</Button>
					</DialogTrigger>

					<DialogContent showCloseButton={false}>
						<DialogHeader>
							<DialogTitle>Processing complete</DialogTitle>

							<DialogDescription>Your document is ready to download.</DialogDescription>
						</DialogHeader>

						<DialogFooter>
							<DialogClose asChild>
								<Button>Done</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</Example>

			{/* Tooltip */}

			<Example title="Tooltip placement">
				<div className="flex flex-wrap gap-3">
					{(["top", "right", "bottom", "left"] as const).map((side) => (
						<Tooltip key={side}>
							<TooltipTrigger asChild>
								<Button variant="outline">{side}</Button>
							</TooltipTrigger>

							<TooltipContent side={side}>Tooltip on the {side}</TooltipContent>
						</Tooltip>
					))}
				</div>
			</Example>

			<Example title="Toolbar tooltips">
				<div className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-lg border border-border bg-background bg-clip-padding p-1.5">
					{toolbarActions.map(({ label, icon: Icon }) => (
						<Tooltip key={label}>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									aria-label={label}
									onClick={() => setLastAction(label)}
								>
									<Icon aria-hidden="true" />
								</Button>
							</TooltipTrigger>

							<TooltipContent side="bottom">{label}</TooltipContent>
						</Tooltip>
					))}
				</div>

				<p role="status" className="text-caption text-muted-foreground">
					{lastAction ? `Last action: ${lastAction}` : "Hover or focus a toolbar button."}
				</p>
			</Example>

			<Example title="Tooltip without arrow">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">Hover me</Button>
					</TooltipTrigger>

					<TooltipContent showArrow={false}>A minimal contextual tooltip</TooltipContent>
				</Tooltip>
			</Example>

			{/* Dropdown menu */}

			<Example title="Document actions">
				<div className="flex max-w-lg items-center gap-3">
					<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent">
						<FileTextIcon className="size-6 text-primary" />
					</div>

					<div className="min-w-0 flex-1 space-y-1">
						<p className="truncate text-body-sm font-medium">{documentName}</p>

						<p className="text-caption text-muted-foreground">2.4 MB · 12 pages</p>
					</div>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon" aria-label="Document actions">
								<MoreHorizontalIcon />
							</Button>
						</DropdownMenuTrigger>

						<DropdownMenuContent align="end" className="w-60">
							<DropdownMenuLabel>Document actions</DropdownMenuLabel>

							<DropdownMenuGroup>
								<DropdownMenuItem onSelect={() => setLastAction("Open document")}>
									<ExternalLinkIcon />
									Open document
								</DropdownMenuItem>

								<DropdownMenuItem onSelect={() => setLastAction("Rename")}>
									<PencilIcon />
									Rename
								</DropdownMenuItem>

								<DropdownMenuItem onSelect={() => setLastAction("Duplicate")}>
									<CopyIcon />
									Duplicate
								</DropdownMenuItem>

								<DropdownMenuItem onSelect={() => setLastAction("Download")}>
									<DownloadIcon />
									Download
								</DropdownMenuItem>
							</DropdownMenuGroup>

							<DropdownMenuSeparator />

							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<FileOutputIcon />
									Convert to
								</DropdownMenuSubTrigger>

								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										{["Word", "PNG", "JPEG"].map((format) => (
											<DropdownMenuItem
												key={format}
												onSelect={() => setLastAction(`Convert to ${format}`)}
											>
												{format}
											</DropdownMenuItem>
										))}

										<DropdownMenuItem disabled>TIFF</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>

							<DropdownMenuSeparator />

							<DropdownMenuItem variant="destructive" onSelect={() => setLastAction("Delete")}>
								<Trash2Icon />
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<p role="status" className="text-caption text-muted-foreground">
					{lastAction ? `Selected: ${lastAction}` : "Choose a document action."}
				</p>
			</Example>

			<Example title="Checkbox menu items">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">
							<SettingsIcon />
							View settings
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>Visible elements</DropdownMenuLabel>

						<DropdownMenuCheckboxItem
							checked={showThumbnails}
							onCheckedChange={setShowThumbnails}
							onSelect={(event) => event.preventDefault()}
						>
							Show thumbnails
						</DropdownMenuCheckboxItem>

						<DropdownMenuCheckboxItem
							checked={showPageNumbers}
							onCheckedChange={setShowPageNumbers}
							onSelect={(event) => event.preventDefault()}
						>
							Show page numbers
						</DropdownMenuCheckboxItem>

						<DropdownMenuCheckboxItem
							checked={showToolbar}
							onCheckedChange={setShowToolbar}
							onSelect={(event) => event.preventDefault()}
						>
							Show toolbar
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<p className="text-caption text-muted-foreground">
					The menu remains open while toggling options.
				</p>
			</Example>

			<Example title="Radio menu items">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">Page layout</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent className="w-52">
						<DropdownMenuLabel>Layout</DropdownMenuLabel>

						<DropdownMenuRadioGroup value={pageLayout} onValueChange={setPageLayout}>
							<DropdownMenuRadioItem value="single">Single page</DropdownMenuRadioItem>

							<DropdownMenuRadioItem value="double">Double page</DropdownMenuRadioItem>

							<DropdownMenuRadioItem value="continuous">Continuous</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>

				<p className="text-caption text-muted-foreground">Current layout: {pageLayout}</p>
			</Example>

			<Example title="Keyboard shortcut labels">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">Edit</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent className="w-56">
						<DropdownMenuItem onSelect={() => setLastAction("Copy")}>
							Copy
							<DropdownMenuShortcut>Ctrl+C</DropdownMenuShortcut>
						</DropdownMenuItem>

						<DropdownMenuItem onSelect={() => setLastAction("Paste")}>
							Paste
							<DropdownMenuShortcut>Ctrl+V</DropdownMenuShortcut>
						</DropdownMenuItem>

						<DropdownMenuSeparator />

						<DropdownMenuItem onSelect={() => setLastAction("Select all")}>
							Select all
							<DropdownMenuShortcut>Ctrl+A</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<p className="text-caption text-muted-foreground">
					Shortcut labels are visual examples only.
				</p>
			</Example>

			{/* Nested overlays */}

			<Example title="Nested overlays">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Open settings</Button>
					</DialogTrigger>

					<DialogContent>
						<DialogHeader className="pr-10">
							<DialogTitle>Document settings</DialogTitle>

							<DialogDescription>Verify floating surfaces inside a dialog.</DialogDescription>
						</DialogHeader>

						<div className="flex flex-wrap items-center gap-3">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">Options</Button>
								</DropdownMenuTrigger>

								<DropdownMenuContent>
									<DropdownMenuItem onSelect={() => setLastAction("Export")}>
										Export
									</DropdownMenuItem>

									<DropdownMenuItem onSelect={() => setLastAction("Print")}>Print</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>

							<Tooltip>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										aria-label="Advanced settings"
										onClick={() => setLastAction("Advanced settings")}
									>
										<SettingsIcon />
									</Button>
								</TooltipTrigger>

								<TooltipContent>Advanced settings</TooltipContent>
							</Tooltip>
						</div>

						<DialogFooter>
							<DialogClose asChild>
								<Button>Done</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</Example>
		</div>
	);
}
