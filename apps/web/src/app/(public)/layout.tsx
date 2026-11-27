import type { ReactNode } from "react";

import { Header } from "@/components/layout/header";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only focus:absolute
          focus:top-4 focus:left-4 focus:z-50
          focus:rounded-md focus:bg-background
          focus:px-4 focus:py-2 focus:shadow-lg
        "
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer */}
    </>
  );
}
