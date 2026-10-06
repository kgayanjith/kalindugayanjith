import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { NAV_LINKS } from "@/lib/portfolio-data";


export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 px-5 py-3 backdrop-blur-md">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="min-w-0 truncate font-display text-lg tracking-wide"
          aria-label="Kalindu Gayanjith — Home"
        >
          KALINDU<span className="text-primary">/</span>GAYANJITH
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden gap-7 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:flex"
        >
          {NAV_LINKS.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                activeProps={{ className: "text-primary" }}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Header actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-btn bg-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-block"
          >
            Available
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-btn border border-line text-foreground transition-colors duration-300 hover:border-primary hover:text-primary md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              {/* Top line */}
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-all duration-300 ease-out ${
                  menuOpen
                    ? "translate-y-[6px] rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />

              {/* Middle line */}
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current transition-all duration-200 ${
                  menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />

              {/* Bottom line */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full bg-current transition-all duration-300 ease-out ${
                  menuOpen
                    ? "-translate-y-[6px] -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="mt-3 flex flex-col border-t border-line pt-1"
          >
            {NAV_LINKS.map((link, index) => {
              const itemStyle = {
                transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
                transform: menuOpen
                  ? "translateY(0)"
                  : "translateY(-10px)",
                opacity: menuOpen ? 1 : 0,
              };

              return link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line py-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 ease-out last:border-b-0 hover:text-primary"
                  style={itemStyle}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  activeProps={{ className: "text-primary" }}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line py-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 ease-out last:border-b-0 hover:text-primary"
                  style={itemStyle}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
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
