import Link from "next/link";

import { Button } from "@foldo/ui/components/button";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { DesktopNavigation } from "@/components/layout/navigation/desktop-navigation";

function Header() {
  return (
    <header
      className="
        sticky top-0 z-20
        border-b border-border
        bg-background
      "
    >
      <Container
        size="wide"
        className="
          grid h-header
          grid-cols-[1fr_auto]
          items-center
          md:grid-cols-[1fr_auto_1fr]
        "
      >
        <div className="justify-self-start">
          <Logo />
        </div>

        <DesktopNavigation />

        <div className="flex items-center gap-2 justify-self-end">
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="/login">Log in</Link>
          </Button>

          <Button asChild>
            <Link href="/tools">Get started</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}

export { Header };
