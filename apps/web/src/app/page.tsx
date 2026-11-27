import { Button } from "@foldo/ui/components/button";

export default function Home() {
	return (
		<main className="mx-auto max-w-page px-6 py-16">
			<h1 className="text-display">Hello, foldo.</h1>

			<div className="mt-8 flex flex-wrap gap-4">
				<Button>Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="destructive">Delete</Button>
			</div>
		</main>
	);
}
