"use client";

import { Button } from "@foldo/ui/components/button";
import { Input } from "@foldo/ui/components/input";
import { Label } from "@foldo/ui/components/label";
import { Textarea } from "@foldo/ui/components/textarea";
import { type ReactNode, useState } from "react";

function Example({ title, children }: { title: string; children: ReactNode }) {
	return (
		<div className="overflow-hidden rounded-xl border border-border bg-clip-padding">
			<div className="border-b border-border px-6 py-4">
				<h3 className="text-body font-semibold">{title}</h3>
			</div>

			<div className="space-y-6 p-6">{children}</div>
		</div>
	);
}

export function FormControlsPreview() {
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="space-y-6">
			<Example title="Input states">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="input-default">Default</Label>
						<Input id="input-default" placeholder="Enter your name" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="input-filled">Filled</Label>
						<Input id="input-filled" defaultValue="Alex Morgan" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="input-disabled">Disabled</Label>
						<Input id="input-disabled" placeholder="Unavailable" disabled />
					</div>

					<div className="space-y-2">
						<Label htmlFor="input-readonly">Read only</Label>
						<Input id="input-readonly" defaultValue="Read only value" readOnly />
					</div>

					<div className="space-y-2">
						<Label htmlFor="input-invalid">Invalid</Label>
						<Input
							id="input-invalid"
							defaultValue="hello@"
							type="email"
							aria-invalid="true"
							aria-describedby="input-invalid-error"
						/>

						<p id="input-invalid-error" className="text-body-sm text-destructive">
							Please enter a valid email address.
						</p>
					</div>

					<div className="space-y-2">
						<Label htmlFor="input-description">With description</Label>

						<Input
							id="input-description"
							type="email"
							placeholder="you@example.com"
							aria-describedby="input-description-help"
						/>

						<p id="input-description-help" className="text-body-sm text-muted-foreground">
							We'll only use this for account updates.
						</p>
					</div>
				</div>
			</Example>

			<Example title="Input sizes">
				<div className="max-w-md space-y-6">
					<div className="space-y-2">
						<Label htmlFor="input-small">Small — 32px</Label>
						<Input
							id="input-small"
							className="h-control-sm text-body-sm"
							placeholder="Small input"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="input-medium">Default — 40px</Label>
						<Input id="input-medium" placeholder="Default input" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="input-large">Large — 48px</Label>
						<Input id="input-large" className="h-control-lg" placeholder="Large input" />
					</div>
				</div>
			</Example>

			<Example title="Native input types">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="type-email">Email</Label>
						<Input id="type-email" type="email" placeholder="you@example.com" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="type-password">Password</Label>
						<Input id="type-password" type="password" placeholder="Enter your password" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="type-number">Number</Label>
						<Input id="type-number" type="number" placeholder="0" min={0} />
					</div>

					<div className="space-y-2">
						<Label htmlFor="type-search">Search</Label>
						<Input id="type-search" type="search" placeholder="Search documents..." />
					</div>

					<div className="space-y-2">
						<Label htmlFor="type-date">Date</Label>
						<Input id="type-date" type="date" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="type-file">File</Label>
						<Input id="type-file" type="file" accept=".pdf" className="py-1.5" />
					</div>
				</div>
			</Example>

			<Example title="Textarea states">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="textarea-default">Default</Label>
						<Textarea id="textarea-default" placeholder="Write something..." />
					</div>

					<div className="space-y-2">
						<Label htmlFor="textarea-filled">Filled</Label>
						<Textarea id="textarea-filled" defaultValue="Your documents, simplified." />
					</div>

					<div className="space-y-2">
						<Label htmlFor="textarea-disabled">Disabled</Label>
						<Textarea id="textarea-disabled" placeholder="Unavailable" disabled />
					</div>

					<div className="space-y-2">
						<Label htmlFor="textarea-invalid">Invalid</Label>
						<Textarea
							id="textarea-invalid"
							defaultValue="Hi"
							aria-invalid="true"
							aria-describedby="textarea-error"
						/>

						<p id="textarea-error" className="text-body-sm text-destructive">
							Please enter at least 10 characters.
						</p>
					</div>
				</div>
			</Example>

			<Example title="Character counter">
				<div className="max-w-lg space-y-2">
					<Label htmlFor="message">Message</Label>

					<Textarea
						id="message"
						placeholder="Write your message..."
						maxLength={250}
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						aria-describedby="message-description"
					/>

					<div className="flex items-center justify-between gap-4">
						<p id="message-description" className="text-body-sm text-muted-foreground">
							Keep your message short and clear.
						</p>

						<span className="text-caption tabular-nums text-muted-foreground">
							{message.length}/250
						</span>
					</div>
				</div>
			</Example>

			<Example title="Complete form">
				<form
					className="max-w-lg space-y-6"
					onSubmit={(event) => {
						event.preventDefault();
						setSubmitted(true);
					}}
					onChange={() => setSubmitted(false)}
					onReset={() => setSubmitted(false)}
				>
					<div className="space-y-1">
						<h4 className="text-h3">Personal information</h4>
						<p className="text-body-sm text-muted-foreground">Update your personal details.</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="form-name">First name</Label>
							<Input
								id="form-name"
								name="firstName"
								autoComplete="given-name"
								placeholder="Alex"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="form-surname">Last name</Label>
							<Input
								id="form-surname"
								name="lastName"
								autoComplete="family-name"
								placeholder="Morgan"
								required
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="form-email">Email address</Label>
						<Input
							id="form-email"
							name="email"
							type="email"
							autoComplete="email"
							placeholder="you@example.com"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="form-bio">About you</Label>
						<Textarea id="form-bio" name="bio" placeholder="Tell us a little about yourself..." />
					</div>

					<div className="flex justify-end gap-3">
						<Button type="reset" variant="outline">
							Reset
						</Button>

						<Button type="submit">Save changes</Button>
					</div>

					{submitted && (
						<p role="status" className="text-body-sm text-muted-foreground">
							Form submitted successfully. This is a local demo.
						</p>
					)}
				</form>
			</Example>
		</div>
	);
}
