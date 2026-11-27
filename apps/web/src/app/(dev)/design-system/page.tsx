import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DesignSystem } from "./design-system";

export const metadata: Metadata = {
	title: "Design System | Foldo",
	description: "Internal Foldo design system documentation.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function DesignSystemPage() {
	if (process.env.NODE_ENV === "production") {
		notFound();
	}

	return <DesignSystem />;
}
