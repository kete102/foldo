"use client";

import { Toaster } from "@foldo/ui/components/sonner";
import { TooltipProvider } from "@foldo/ui/components/tooltip";
import type { ReactNode } from "react";

type ProvidersProps = {
	children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
	return (
		<TooltipProvider>
			{children}
			<Toaster />
		</TooltipProvider>
	);
}
