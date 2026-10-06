import { Link, createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/SiteChrome";
import { PAGESERVICES } from "@/lib/portfolio-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services — Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        name: "description",
        content:
          "Explore software engineering, UI UX design, frontend development and digital product services by Kalindu Gayanjith.",
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
          "Services — Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        property: "og:description",
        content:
          "Explore software engineering, UI UX design, frontend development and digital product services by Kalindu Gayanjith.",
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      {/* Intro */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 size-[420px] rounded-full bg-primary/25 blur-[120px]" />

        <div className="relative mx-auto max-w-[90rem] px-5 pt-14 pb-12">
          <p className="anim-rise font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            What I do
          </p>

          <h1
            className="anim-rise mt-4 font-display uppercase leading-[0.86] tracking-tight text-[clamp(3rem,10vw,8rem)]"
            style={{ animationDelay: "60ms" }}
          >
            Design,
            <br />
            build and <span className="text-primary">deliver</span>
          </h1>

          <p
            className="anim-rise mt-7 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            I help turn ideas into useful digital products through thoughtful
            UI UX design and practical software development. From early ideas
            and interface design to frontend development and working
            applications, I focus on creating experiences that look good and
            work well.
          </p>
        </div>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-[90rem] px-5 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {PAGESERVICES.map((service, i) => (
            <div
              key={service.num}
              className="anim-slide rounded-card bg-panel p-6 ring-1 ring-black/10 transition-colors duration-300 hover:ring-primary/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-mono text-[11px] text-primary">
                {service.num}
              </span>

              <h2 className="mt-3 font-display text-2xl uppercase leading-none">
                {service.title}
              </h2>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {service.detail}
              </p>

              <div className="mt-5 border-t border-line pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Deliverables
                </p>

                <ul className="mt-2 flex flex-wrap gap-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-line px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-band">
        <div className="mx-auto max-w-[90rem] px-5 py-14">
          <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(1.8rem,4vw,3rem)]">
            How I work
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Understand",
                "I start by understanding the idea, goals, users and requirements.",
              ],
              [
                "02",
                "Design",
                "I create user flows, wireframes and interfaces with a focus on clarity and usability.",
              ],
              [
                "03",
                "Develop",
                "I turn the approved designs into responsive and functional digital experiences.",
              ],
              [
                "04",
                "Refine",
                "I test, improve and refine the product to make sure everything works as expected.",
              ],
            ].map(([num, title, copy]) => (
              <div
                key={num}
                className="rounded-card bg-panel p-5 ring-1 ring-black/10"
              >
                <span className="font-mono text-[11px] text-primary">
                  {num}
                </span>

                <h3 className="mt-3 font-display text-xl uppercase leading-none">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[90rem] px-5 py-16 text-center">
        <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(1.8rem,5vw,3.5rem)]">
          Have an idea in mind?
        </h2>

        <p className="mx-auto mt-4 max-w-[46ch] text-muted-foreground">
          Let&apos;s talk about your idea and explore how design and technology
          can turn it into a useful digital product.
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