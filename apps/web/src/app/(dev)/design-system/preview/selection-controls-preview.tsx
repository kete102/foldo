"use client";

import { Button } from "@foldo/ui/components/button";
import { Checkbox } from "@foldo/ui/components/checkbox";
import { Label } from "@foldo/ui/components/label";
import { RadioGroup, RadioGroupItem } from "@foldo/ui/components/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@foldo/ui/components/select";
import { Switch } from "@foldo/ui/components/switch";
import { FileText } from "lucide-react";
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

const files = ["Contract.pdf", "Invoice.pdf", "Report.pdf"];

export function SelectionControlsPreview() {
	const [selectedFiles, setSelectedFiles] = useState<string[]>(["Contract.pdf", "Report.pdf"]);

	const [compression, setCompression] = useState("recommended");

	const [autoDownload, setAutoDownload] = useState(true);
	const [format, setFormat] = useState("pdf");

	const allSelected = selectedFiles.length === files.length;

	const partiallySelected = selectedFiles.length > 0 && !allSelected;

	function toggleFile(file: string, checked: boolean) {
		setSelectedFiles((current) =>
			checked ? [...new Set([...current, file])] : current.filter((item) => item !== file),
		);
	}

	return (
		<div className="space-y-6">
			{/* Checkbox */}

			<Example title="Checkbox states">
				<div className="grid gap-6 sm:grid-cols-2">
					{[
						{ id: "unchecked", label: "Unchecked" },
						{ id: "checked", label: "Checked", defaultChecked: true },
						{
							id: "indeterminate",
							label: "Indeterminate",
							defaultChecked: "indeterminate" as const,
						},
						{ id: "disabled", label: "Disabled", disabled: true },
						{
							id: "disabled-checked",
							label: "Disabled checked",
							disabled: true,
							defaultChecked: true,
						},
						{ id: "invalid", label: "Invalid", invalid: true },
					].map((item) => (
						<div key={item.id} className="flex min-h-10 items-center gap-3">
							<Checkbox
								id={`checkbox-${item.id}`}
								defaultChecked={item.defaultChecked}
								disabled={item.disabled}
								aria-invalid={item.invalid}
							/>

							<Label htmlFor={`checkbox-${item.id}`} className="cursor-pointer">
								{item.label}
							</Label>
						</div>
					))}
				</div>
			</Example>

			<Example title="Multiple file selection">
				<div className="max-w-lg divide-y divide-border">
					<div className="flex min-h-12 items-center gap-3">
						<Checkbox
							id="select-all-files"
							checked={partiallySelected ? "indeterminate" : allSelected}
							onCheckedChange={(checked) => setSelectedFiles(checked === true ? files : [])}
						/>

						<Label htmlFor="select-all-files" className="cursor-pointer">
							Select all files
						</Label>

						<span className="ml-auto text-caption text-muted-foreground">
							{selectedFiles.length} selected
						</span>
					</div>

					{files.map((file, index) => (
						<div key={file} className="flex min-h-12 items-center gap-3">
							<Checkbox
								id={`file-${index}`}
								checked={selectedFiles.includes(file)}
								onCheckedChange={(checked) => toggleFile(file, checked === true)}
							/>

							<FileText className="size-5 text-muted-foreground" />

							<Label htmlFor={`file-${index}`} className="cursor-pointer">
								{file}
							</Label>
						</div>
					))}
				</div>
			</Example>

			{/* Radio group */}

			<Example title="Radio group">
				<div className="max-w-lg space-y-4">
					<p id="compression-label" className="text-body font-medium">
						Compression level
					</p>

					<RadioGroup
						aria-labelledby="compression-label"
						value={compression}
						onValueChange={setCompression}
					>
						{[
							{
								value: "low",
								title: "Low compression",
								description: "Preserve the original quality.",
							},
							{
								value: "recommended",
								title: "Recommended",
								description: "Balance quality and file size.",
							},
							{
								value: "high",
								title: "High compression",
								description: "Get the smallest possible file.",
							},
						].map((option) => (
							<div key={option.value} className="flex items-start gap-3 py-2">
								<RadioGroupItem
									id={`compression-${option.value}`}
									value={option.value}
									aria-describedby={`compression-${option.value}-description`}
									className="mt-0.5"
								/>

								<div className="space-y-1">
									<Label htmlFor={`compression-${option.value}`} className="cursor-pointer">
										{option.title}
									</Label>

									<p
										id={`compression-${option.value}-description`}
										className="text-body-sm text-muted-foreground"
									>
										{option.description}
									</p>
								</div>
							</div>
						))}
					</RadioGroup>
				</div>
			</Example>

			<Example title="Radio states">
				<RadioGroup
					defaultValue="checked"
					aria-label="Radio state examples"
					className="grid gap-6 sm:grid-cols-2"
				>
					{[
						{ value: "unchecked", label: "Unchecked" },
						{ value: "checked", label: "Checked" },
						{
							value: "disabled",
							label: "Disabled",
							disabled: true,
						},
						{
							value: "invalid",
							label: "Invalid",
							invalid: true,
						},
					].map((item) => (
						<div key={item.value} className="flex min-h-10 items-center gap-3">
							<RadioGroupItem
								id={`radio-${item.value}`}
								value={item.value}
								disabled={item.disabled}
								aria-invalid={item.invalid}
							/>

							<Label htmlFor={`radio-${item.value}`}>{item.label}</Label>
						</div>
					))}
				</RadioGroup>
			</Example>

			{/* Switch */}

			<Example title="Switch states">
				<div className="max-w-lg divide-y divide-border">
					{[
						{ id: "off", label: "Unchecked" },
						{ id: "on", label: "Checked", checked: true },
						{
							id: "disabled",
							label: "Disabled",
							disabled: true,
						},
						{
							id: "disabled-on",
							label: "Disabled checked",
							disabled: true,
							checked: true,
						},
						{
							id: "small",
							label: "Small",
							size: "sm" as const,
						},
					].map((item) => (
						<div key={item.id} className="flex min-h-14 items-center justify-between gap-4">
							<Label htmlFor={`switch-${item.id}`}>{item.label}</Label>

							<Switch
								id={`switch-${item.id}`}
								size={item.size}
								defaultChecked={item.checked}
								disabled={item.disabled}
							/>
						</div>
					))}
				</div>
			</Example>

			<Example title="Switch with description">
				<div className="flex max-w-lg items-center justify-between gap-6">
					<div className="space-y-1">
						<Label htmlFor="auto-download">Automatic download</Label>

						<p id="auto-download-description" className="text-body-sm text-muted-foreground">
							Download your files automatically when processing is complete.
						</p>
					</div>

					<Switch
						id="auto-download"
						checked={autoDownload}
						onCheckedChange={setAutoDownload}
						aria-describedby="auto-download-description"
					/>
				</div>
			</Example>

			{/* Select */}

			<Example title="Select states">
				<div className="grid gap-6 sm:grid-cols-2">
					{[
						{ id: "default", label: "Default" },
						{ id: "filled", label: "Filled", value: "pdf" },
						{ id: "disabled", label: "Disabled", disabled: true },
						{ id: "invalid", label: "Invalid", invalid: true },
					].map((item) => (
						<div key={item.id} className="space-y-2">
							<Label htmlFor={`select-${item.id}`}>{item.label}</Label>

							<Select defaultValue={item.value} disabled={item.disabled}>
								<SelectTrigger id={`select-${item.id}`} aria-invalid={item.invalid}>
									<SelectValue placeholder="Choose a format" />
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="pdf">PDF</SelectItem>
									<SelectItem value="png">PNG</SelectItem>
									<SelectItem value="jpg">JPEG</SelectItem>
								</SelectContent>
							</Select>
						</div>
					))}
				</div>
			</Example>

			<Example title="Select sizes">
				<div className="max-w-md space-y-6">
					{(["sm", "default", "lg"] as const).map((size) => (
						<div key={size} className="space-y-2">
							<Label htmlFor={`select-size-${size}`}>{size}</Label>

							<Select defaultValue="pdf">
								<SelectTrigger id={`select-size-${size}`} size={size}>
									<SelectValue />
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="pdf">PDF document</SelectItem>
									<SelectItem value="png">PNG image</SelectItem>
								</SelectContent>
							</Select>
						</div>
					))}
				</div>
			</Example>

			<Example title="Grouped options">
				<div className="max-w-md space-y-2">
					<Label htmlFor="grouped-select">Output format</Label>

					<Select value={format} onValueChange={setFormat}>
						<SelectTrigger id="grouped-select">
							<SelectValue placeholder="Choose a format" />
						</SelectTrigger>

						<SelectContent>
							<SelectGroup>
								<SelectLabel>Documents</SelectLabel>

								<SelectItem value="pdf">PDF document</SelectItem>

								<SelectItem value="docx">Word document</SelectItem>
							</SelectGroup>

							<SelectSeparator />

							<SelectGroup>
								<SelectLabel>Images</SelectLabel>

								<SelectItem value="png">PNG image</SelectItem>
								<SelectItem value="jpg">JPEG image</SelectItem>
								<SelectItem value="webp">WebP image</SelectItem>

								<SelectItem value="tiff" disabled>
									TIFF image
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</Example>

			{/* Combined example */}

			<Example title="Document processing settings">
				<div className="max-w-lg space-y-6">
					<div className="space-y-2">
						<h4 className="text-h3">Compression settings</h4>

						<p className="text-body-sm text-muted-foreground">
							Customize how your documents will be processed.
						</p>
					</div>

					<div className="space-y-3">
						<Label id="settings-quality-label">Compression level</Label>

						<RadioGroup aria-labelledby="settings-quality-label" defaultValue="recommended">
							{[
								{ value: "low", label: "Low compression" },
								{ value: "recommended", label: "Recommended" },
								{ value: "high", label: "High compression" },
							].map((option) => (
								<div key={option.value} className="flex items-center gap-3">
									<RadioGroupItem id={`settings-${option.value}`} value={option.value} />

									<Label htmlFor={`settings-${option.value}`}>{option.label}</Label>
								</div>
							))}
						</RadioGroup>
					</div>

					<div className="space-y-4 border-t border-border pt-6">
						<div className="flex items-center gap-3">
							<Checkbox id="preserve-metadata" defaultChecked />

							<Label htmlFor="preserve-metadata">Preserve metadata</Label>
						</div>

						<div className="flex items-center gap-3">
							<Checkbox id="optimize-images" defaultChecked />

							<Label htmlFor="optimize-images">Optimize embedded images</Label>
						</div>
					</div>

					<div className="flex items-center justify-between gap-4 border-t border-border pt-6">
						<div className="space-y-1">
							<Label htmlFor="settings-download">Automatic download</Label>

							<p className="text-body-sm text-muted-foreground">Download files after processing.</p>
						</div>

						<Switch id="settings-download" defaultChecked />
					</div>

					<div className="space-y-2">
						<Label htmlFor="settings-format">Output format</Label>

						<Select defaultValue="pdf">
							<SelectTrigger id="settings-format">
								<SelectValue />
							</SelectTrigger>

							<SelectContent>
								<SelectItem value="pdf">PDF document</SelectItem>
								<SelectItem value="png">PNG image</SelectItem>
								<SelectItem value="jpg">JPEG image</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<Button size="lg" className="w-full">
						Compress PDF
					</Button>
				</div>
			</Example>
		</div>
	);
}
