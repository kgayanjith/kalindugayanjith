import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/SiteChrome";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: "Blog — Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        name: "description",
        content:
          "Insights and notes from Kalindu Gayanjith on software engineering, UI/UX design, frontend development, artificial intelligence, and building digital products.",
      },
      {
        name: "keywords",
        content:
          "Kalindu Gayanjith blog, Software Engineer blog Sri Lanka, UI UX blog, frontend development blog, web development blog, AI blog, artificial intelligence, machine learning, Figma, Vue.js, React, Next.js, Laravel, product design, software engineering",
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
          "Blog — Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        property: "og:description",
        content:
          "Insights and notes on software engineering, UI/UX design, frontend development, AI, and building digital products by Kalindu Gayanjith.",
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
        content: "https://kalindugayanjith.com/blog",
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
        content: "Blog — Kalindu Gayanjith",
      },
      {
        name: "twitter:description",
        content:
          "Notes on software engineering, UI/UX design, frontend development, AI, and digital products.",
      },
      {
        name: "twitter:image",
        content: "https://kalindugayanjith.com/og-image.PNG",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://kalindugayanjith.com/blog",
      },
    ],
  }),

  component: BlogPage,
});

function BlogPage() {
  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 size-[420px] rounded-full bg-primary/25 blur-[120px]" />

        <div className="relative mx-auto max-w-[90rem] px-5 pt-14 pb-12">
          <p className="anim-rise font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Writing & insights
          </p>

          <h1
            className="anim-rise mt-4 font-display uppercase leading-[0.86] tracking-tight text-[clamp(3rem,10vw,8rem)]"
            style={{ animationDelay: "60ms" }}
          >
            Ideas worth
            <br />
            <span className="text-primary">sharing.</span>
          </h1>

          <p
            className="anim-rise mt-7 max-w-[52ch] text-pretty text-base text-muted-foreground md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            Notes, lessons, and ideas from my work across software engineering,
            UI/UX design, frontend development, artificial intelligence, and
            digital products.
          </p>
        </div>
      </div>

      {/* Coming Soon */}
<section className="mx-auto max-w-[90rem] px-5 pb-20">
  <div className="relative overflow-hidden rounded-card bg-panel p-8 text-center ring-1 ring-black/10 md:p-14">
    <div className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-[90px]" />
    <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/10 blur-[90px]" />

    <div className="relative mx-auto max-w-3xl">
      <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
        Coming soon
      </span>

      <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-tight">
        The blog is
        <br />
        <span className="text-primary">taking shape.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-[58ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        I'm currently putting together articles based on things I've learned
        while designing interfaces, building web applications, exploring AI
        and turning ideas into real digital products.
      </p>

      <p className="mx-auto mt-4 max-w-[58ch] text-pretty text-sm leading-relaxed text-muted-foreground">
        Expect practical insights, development lessons, design thinking,
        project breakdowns and experiments from the intersection of design
        and technology.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {[
          "Software Engineering",
          "UI/UX Design",
          "Frontend Development",
          "Artificial Intelligence",
          "Product Design",
          "Web Development",
        ].map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Future topics */}
      <section className="border-t border-line bg-band">
        <div className="mx-auto max-w-[90rem] px-5 py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                What's coming
              </p>

              <h2 className="mt-3 font-display text-[clamp(2rem,6vw,4.5rem)] uppercase leading-none tracking-tight">
                Future notes
              </h2>
            </div>

            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Design · Code · AI
            </span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Building better interfaces",
                copy: "Thoughts on UI/UX, usability, design systems, and turning ideas into clear digital experiences.",
              },
              {
                number: "02",
                title: "From design to code",
                copy: "Practical lessons from translating Figma designs and product ideas into scalable frontend experiences.",
              },
              {
                number: "03",
                title: "Exploring AI",
                copy: "Experiments, lessons, and observations from learning and building with artificial intelligence.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-card bg-panel p-6 ring-1 ring-black/10"
              >
                <span className="font-mono text-[11px] text-primary">
                  {item.number}
                </span>

                <h3 className="mt-5 font-display text-xl uppercase leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
