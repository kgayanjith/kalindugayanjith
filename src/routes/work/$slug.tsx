import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { PageShell } from "@/components/SiteChrome";
import { PROJECTS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
  meta: [
    {
      title: `${loaderData?.project.name ?? "Project"} — Kalindu Gayanjith`,
    },
    {
      name: "description",
      content:
        loaderData?.project.overview ??
        "Project case study by Kalindu Gayanjith, Software Engineer and UI/UX Designer from Colombo, Sri Lanka.",
    },
    {
      name: "author",
      content: "Kalindu Gayanjith",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: `${loaderData?.project.name ?? "Project"} — Kalindu Gayanjith`,
    },
    {
      property: "og:description",
      content:
        loaderData?.project.overview ??
        "Project case study by Kalindu Gayanjith, Software Engineer and UI/UX Designer from Colombo, Sri Lanka.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:site_name",
      content: "Kalindu Gayanjith",
    },
    {
      property: "og:url",
      content: `https://kalindugayanjith.com/work/${loaderData?.project.slug ?? ""}`,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: `${loaderData?.project.name ?? "Project"} — Kalindu Gayanjith`,
    },
    {
      name: "twitter:description",
      content:
        loaderData?.project.overview ??
        "Project case study by Kalindu Gayanjith, Software Engineer and UI/UX Designer from Colombo, Sri Lanka.",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: `https://kalindugayanjith.com/work/${loaderData?.project.slug ?? ""}`,
    },
  ],
}),
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[90rem] px-5 py-24 text-center">
        <h1 className="font-display text-6xl uppercase">Project not found</h1>
        <p className="mt-4 text-muted-foreground">That case study doesn't exist (yet).</p>
        <Link
          to="/"
          className="mt-8 inline-block bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary-hover rounded-btn"
        >
          Back to work
        </Link>
      </div>
    </PageShell>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 size-[420px] rounded-full bg-primary/25 blur-[120px]" />
        <div className="relative mx-auto max-w-[90rem] px-5 pt-14 pb-10">
          <Link
            to="/"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            ← All work
          </Link>
          <p className="anim-rise mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            {project.tagline} — {project.year}
          </p>
          <h1
            className="anim-rise mt-4 font-display uppercase leading-[0.86] tracking-tight text-[clamp(3rem,10vw,9rem)]"
            style={{ animationDelay: "60ms" }}
          >
            {project.name}
          </h1>
          <p
            className="anim-rise mt-6 max-w-[52ch] text-pretty text-base text-muted-foreground md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            {project.overview}
          </p>
        </div>
      </div>

      {/* Cover image */}
      <div className="mx-auto max-w-[90rem] px-5">
        <div className="group relative overflow-hidden rounded-card bg-panel ring-1 ring-black/10">
          <div
            className={
              project.flip
                ? "sheen-lift card-sheen-flip pointer-events-none absolute -inset-8"
                : "sheen-lift card-sheen pointer-events-none absolute -inset-8"
            }
          />
          <img
            src={project.image}
            alt={project.alt}
            width={1440}
            height={900}
            className="relative aspect-[16/9] w-full bg-custom-color object-contain"
          />
        </div>
      </div>

      {/* Meta + body */}
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 lg:grid-cols-[1fr_2fr]">
       <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
  {[
    ["Role", project.role],
    ["Client", project.client],
    ["Duration", project.duration],
    ["Year", project.year],
  ].map(([label, value]) => (
    <div key={label} className="border-t border-line pt-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-display text-lg uppercase">{value}</p>
    </div>
  ))}

  <div className="border-t border-line pt-4">
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      Services
    </p>

    <ul className="mt-2 flex flex-wrap gap-2">
      {project.services.map((s) => (
        <li
          key={s}
          className="rounded-full border border-line px-3 py-1.5 text-xs text-muted-foreground"
        >
          {s}
        </li>
      ))}
    </ul>
  </div>

  {project.url && (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-btn bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary-hover"
    >
      View live project ↗
    </a>
  )}
</aside>

        <div className="space-y-12">
          <section>
            <h2 className="font-display text-3xl uppercase tracking-tight">
              The <span className="text-primary">challenge</span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.challenge}
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl uppercase tracking-tight">
              The <span className="text-primary">outcome</span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.outcome}
            </p>
          </section>
          <div className="grid gap-3 sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={stat.label} className="rounded-card bg-panel p-5 ring-1 ring-black/10">
                <p className="font-display text-3xl text-primary">{stat.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next projects */}
      <section className="border-t border-line bg-band">
        <div className="mx-auto max-w-[90rem] px-5 py-16">
          <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(1.8rem,5vw,3.5rem)]">
            More work
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group relative overflow-hidden rounded-card bg-panel ring-1 ring-black/10"
              >
                <div className="sheen-lift card-sheen pointer-events-none absolute -inset-8" />
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={900}
                    height={640}
                    loading="lazy"
                    className="aspect-[16/10] w-full bg-panel-2 object-cover"
                  />
                  <div className="relative flex items-center justify-between border-t border-line bg-background/50 px-5 py-4 backdrop-blur-sm">
                    <div>
                      <h3 className="font-display text-2xl uppercase leading-none transition-colors group-hover:text-primary">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                    </div>
                    <span className="font-mono text-[11px] text-primary">{p.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
