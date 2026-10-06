import { Link, createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/SiteChrome";
import { EDUCATION, EXPERIENCE, SKILL_GROUPS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About — Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        name: "description",
        content:
          "Learn more about Kalindu Gayanjith, a Software Engineer and UI/UX Designer from Colombo, Sri Lanka, with experience in web development, digital products, interface design and artificial intelligence.",
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
        content:
          "About — Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        property: "og:description",
        content:
          "Learn more about Kalindu Gayanjith, a Software Engineer and UI/UX Designer from Colombo, Sri Lanka, with experience in web development, digital products, interface design and artificial intelligence.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Kalindu Gayanjith",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      {/* Intro */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 size-[420px] rounded-full bg-primary/25 blur-[120px]" />

        <div className="relative mx-auto max-w-[90rem] px-5 pt-14 pb-12">
          <p className="anim-rise font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            About me
          </p>

          <h1
            className="anim-rise mt-4 font-display uppercase leading-[0.86] tracking-tight text-[clamp(3rem,10vw,8rem)]"
            style={{ animationDelay: "60ms" }}
          >
            Software Engineer,
            <br />
            UI UX <span className="text-primary">Designer</span>
          </h1>

          <p
            className="anim-rise mt-7 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            I am Kalindu Gayanjith, a Software Engineer and UI UX Designer
            based in Colombo. I enjoy turning ideas into useful digital
            products by bringing together thoughtful design, clean interfaces
            and practical technology. My work covers the journey from
            understanding an idea and planning the experience to designing the
            interface and building the final product.
          </p>

          <p
            className="anim-rise mt-4 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            I enjoy working on web applications, digital products and user
            focused interfaces. I care about how a product looks, how it feels
            to use and how well it works behind the interface.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>
              <span className="text-foreground text-sm">2+</span> yrs
              experience
            </span>

            <span>
              <span className="text-foreground text-sm">6+</span> projects
            </span>

            <span>
              <span className="text-foreground text-sm">2</span> degrees
            </span>

            <span>
              <span className="text-foreground text-sm">AI</span> focused
            </span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section className="mx-auto max-w-[90rem] px-5 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
            Skills
          </h2>

          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Toolbox
          </span>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.num}
              className="rounded-card bg-panel p-5 ring-1 ring-black/10 transition-colors duration-300 hover:ring-primary/40"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl uppercase leading-none">
                  {group.title}
                </h3>

                <span className="font-mono text-[11px] text-primary">
                  {group.num}
                </span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience and Education */}
      <section className="border-t border-line bg-band">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
              Experience
            </h2>

            <div className="mt-8">
              {EXPERIENCE.map((job) => (
                <div
                  key={`${job.period}-${job.company}`}
                  className="border-t border-line py-5 transition-colors hover:bg-panel/50"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl uppercase leading-none">
                      {job.role}
                    </h3>

                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {job.company}
                  </p>

                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {job.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
              Education
            </h2>

            <div className="mt-8">
              {EDUCATION.map((edu) => (
                <div
                  key={`${edu.period}-${edu.school}`}
                  className="border-t border-line py-5 transition-colors hover:bg-panel/50"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl uppercase leading-none">
                      {edu.degree}
                    </h3>

                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                      {edu.period}
                    </span>
                  </div>

                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {edu.school}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="mx-auto max-w-[90rem] px-5 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              01
            </p>

            <h2 className="mt-3 font-display text-2xl uppercase leading-none">
              UI UX Design
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I design clear and engaging interfaces with attention to
              usability, visual consistency and responsive experiences.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              02
            </p>

            <h2 className="mt-3 font-display text-2xl uppercase leading-none">
              Software Development
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I build modern web applications and digital products with a
              strong focus on reliable functionality and maintainable code.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              03
            </p>

            <h2 className="mt-3 font-display text-2xl uppercase leading-none">
              AI and Emerging Technology
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I am expanding my work in artificial intelligence and machine
              learning through my MSc studies and practical projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[90rem] px-5 py-16 text-center">
        <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(1.8rem,5vw,3.5rem)]">
          Have a project in mind?
        </h2>

        <p className="mx-auto mt-4 max-w-[46ch] text-muted-foreground">
          I enjoy working on thoughtful digital products and turning ideas
          into useful experiences.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block rounded-btn bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Get in touch
        </Link>
      </section>
    </PageShell>
  );
}