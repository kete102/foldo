import Link from "next/link";

import { mainNavigation } from "@/config/navigation";

function DesktopNavigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-8 md:flex"
    >
      {mainNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            rounded-sm
            text-sm
            font-medium
            text-foreground
            transition-colors
            hover:text-primary
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-ring
          "
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export { DesktopNavigation };
