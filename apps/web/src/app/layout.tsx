import type { Metadata } from "next";

import { satoshi } from "@/fonts";

import "./globals.css";

export const metadata: Metadata = {
	title: "foldo",
	description: "A privacy-first document productivity platform.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={satoshi.variable}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
