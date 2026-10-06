import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { NAV_LINKS } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
       <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-background/80 px-5 py-3 backdrop-blur-md">
          <Link
            to="/"
            className="font-display text-lg tracking-wide"
            aria-label="Kalindu Gayanjith home"
          >
            KALINDU<span className="text-primary">/</span>GAYANJITH
          </Link>

          <nav
            className="hidden gap-7 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                 activeProps={{ className: "text-primary" }}
                className="transition-colors hover:text-primary "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="bg-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-hover rounded-btn"
          >
            Available
          </Link>
        </header>
  );
}

export function SiteFooter() {
  return (
       <footer className="border-t border-line">
          <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>© 2026 Kalindu Gayanjith</span>

            <span className="text-primary">Software Engineer · UI/UX · Development</span>

            <span>Colombo · Sri Lanka · Remote</span>
          </div>
        </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
