import Image from "next/image";
import Link from "next/link";

import { cn } from "@foldo/ui/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "symbol";
  href?: string;
};

function Logo({ className, variant = "full", href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Foldo — Home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      {variant === "full" ? (
        <>
          <Image
            src="/brand/logo.svg"
            alt=""
            width={104}
            height={32}
            className="h-8 w-auto dark:hidden"
          />

          <Image
            src="/brand/logo-dark.svg"
            alt=""
            width={104}
            height={32}
            className="hidden h-8 w-auto dark:block"
          />
        </>
      ) : (
        <Image
          src="/brand/symbol.svg"
          alt=""
          width={32}
          height={32}
          className="size-8"
        />
      )}
    </Link>
  );
}

export { Logo };
