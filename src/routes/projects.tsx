
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/SiteChrome";
import { CONTRIBUTIONS, GITHUB_REPOS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title:
          "Projects & GitHub — Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        name: "description",
        content:
          "Explore projects by Kalindu Gayanjith, a Software Engineer and UI/UX Designer from Colombo, Sri Lanka, spanning web development, frontend systems, AI, dashboards, and digital products.",
      },
      {
        name: "keywords",
        content:
          "Kalindu Gayanjith, Kalindu Gayanjith projects, GitHub projects Sri Lanka, Software Engineer projects, UI UX projects, frontend projects, web development projects, Vue.js projects, React projects, Next.js projects, Laravel projects, AI projects, machine learning projects, Figma projects, Colombo Software Engineer",
      },
      {
        name: "author",
        content: "Kalindu Gayanjith",
      },
      {
        name: "robots",
        content: "index, follow",
      },

      // Open Graph
      {
        property: "og:title",
        content:
          "Projects & GitHub — Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        property: "og:description",
        content:
          "Explore software engineering, UI/UX, frontend, AI, and digital product projects by Kalindu Gayanjith from Colombo, Sri Lanka.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        property: "og:site_name",
        content: "Kalindu Gayanjith",
      },
      {
        property: "og:url",
        content: "https://kalindugayanjith.com/projects",
      },
      {
        property: "og:image",
        content: "https://kalindugayanjith.com/og-image.PNG",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content:
          "Kalindu Gayanjith — Software Engineer and UI/UX Designer",
      },

      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Projects & GitHub — Kalindu Gayanjith",
      },
      {
        name: "twitter:description",
        content:
          "Software engineering, UI/UX, frontend, AI, and digital product projects by Kalindu Gayanjith.",
      },
      {
        name: "twitter:image",
        content: "https://kalindugayanjith.com/og-image.PNG",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://kalindugayanjith.com/projects",
      },
    ],
  }),

  component: ProjectsPage,
});

function ProjectsPage() {
  const totalStars = GITHUB_REPOS.reduce((sum, repo) => sum + repo.stars, 0);

  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 size-[420px] rounded-full bg-primary/25 blur-[120px]" />

        <div className="relative mx-auto max-w-[90rem] px-5 pt-14 pb-12">
          <p className="anim-rise font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Selected work & experiments
          </p>

          <h1
            className="anim-rise mt-4 font-display uppercase leading-[0.86] tracking-tight text-[clamp(3rem,10vw,8rem)]"
            style={{ animationDelay: "60ms" }}
          >
            Built to
            <br />
            <span className="text-primary">solve.</span>
          </h1>

          <p
            className="anim-rise mt-7 max-w-[52ch] text-pretty text-base text-muted-foreground md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            A selection of software, interface, and AI projects exploring how
            thoughtful design and modern technology can turn ideas into useful
            digital products.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>
              <span className="text-foreground text-sm">
                {GITHUB_REPOS.length}
              </span>{" "}
              featured projects
            </span>

            <span>
              <span className="text-foreground text-sm">{totalStars}</span>{" "}
              GitHub stars
            </span>

            <span>
              <span className="text-foreground text-sm">AI + Web</span> focus
            </span>
          </div>
        </div>
      </div>

      {/* Repositories */}
      <section className="mx-auto max-w-[90rem] px-5 pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
            github projects
          </h2>

          <a
            href="https://github.com/kgayanjith"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
          >
            GitHub profile
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GITHUB_REPOS.map((repo, i) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              className="anim-slide group rounded-card bg-panel p-5 ring-1 ring-black/10 transition-all duration-300 hover:ring-primary/40"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg uppercase leading-none transition-colors group-hover:text-primary">
                  {repo.name}
                </h3>

                <span className="font-mono text-[11px] text-primary">
                  {repo.year}
                </span>
              </div>

              <p className="mt-2 text-pretty text-sm text-muted-foreground">
                {repo.description}
              </p>

              <div className="mt-4 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span
                    className="size-2 rounded-full"
                    style={{ background: repo.langColor }}
                  />
                  {repo.language}
                </span>

                <span>★ {repo.stars}</span>

                <span className="text-primary/80">{repo.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contributions */}
      <section className="border-t border-line bg-band">
        <div className="mx-auto max-w-[90rem] px-5 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
              Other contributions
            </h2>

            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Design · Development · AI
            </span>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {CONTRIBUTIONS.map((item) => (
              <div
                key={item.title}
                className="rounded-card bg-panel p-5 ring-1 ring-black/10 transition-colors duration-300 hover:ring-primary/40"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl uppercase leading-none">
                    {item.title}
                  </h3>

                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {item.period}
                  </span>
                </div>

                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.type}
                </p>

                <p className="mt-2 text-pretty text-sm text-muted-foreground">
                  {item.copy}
                </p>

                <p className="mt-4 inline-block rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground">
                  {item.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

