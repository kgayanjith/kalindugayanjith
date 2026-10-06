import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageShell } from "@/components/SiteChrome";
import { EMAIL } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Contact Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        name: "description",
        content:
          "Get in touch with Kalindu Gayanjith, a Software Engineer and UI/UX Designer from Colombo, Sri Lanka. Open to software engineering, UI/UX, frontend development, AI, freelance projects, and professional opportunities.",
      },
      {
        name: "keywords",
        content:
          "Kalindu Gayanjith contact, Software Engineer Sri Lanka, Software Engineer Colombo, UI UX Designer Sri Lanka, UI UX Designer Colombo, Frontend Developer Sri Lanka, Full Stack Developer Sri Lanka, Web Developer Colombo, AI Developer Sri Lanka, freelance developer Sri Lanka, software engineering opportunities, UI UX opportunities",
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
          "Contact Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        property: "og:description",
        content:
          "Get in touch with Kalindu Gayanjith for software engineering, UI/UX, frontend development, AI projects, freelance work, and professional opportunities.",
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
        content: "https://kalindugayanjith.com/contact",
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
        content: "Contact Kalindu Gayanjith",
      },
      {
        name: "twitter:description",
        content:
          "Software Engineer and UI/UX Designer open to projects, collaborations, and professional opportunities.",
      },
      {
        name: "twitter:image",
        content: "https://kalindugayanjith.com/og-image.PNG",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://kalindugayanjith.com/contact",
      },
    ],
  }),

  component: ContactPage,
});

const PROJECT_TYPES = [
  "Software development",
  "UI/UX design",
  "Web / mobile application",
  "AI / machine learning",
  "Freelance project",
  "Job / career opportunity",
  "Collaboration",
  "Something else",
];

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Inquiry — ${type}`,
  )}&body=${encodeURIComponent(
    `Hi Kalindu,\n\n${message}\n\n— ${name}\n${email}`,
  )}`;

  return (
    <PageShell>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 -right-24 size-[420px] rounded-full bg-primary/25 blur-[120px]" />

        <div className="relative mx-auto max-w-[90rem] px-5 pt-14 pb-12">
          <p className="anim-rise font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Get in touch
          </p>

          <h1
            className="anim-rise mt-4 font-display uppercase leading-[0.86] tracking-tight text-[clamp(3rem,10vw,8rem)]"
            style={{ animationDelay: "60ms" }}
          >
            Let's build
            <br />
            something{" "}
            <span className="text-primary">meaningful.</span>
          </h1>

          <p
            className="anim-rise mt-7 max-w-[52ch] text-pretty text-base text-muted-foreground md:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            Whether you have a product to build, an interface to design, an
            idea to explore, or an opportunity to discuss, I'd be happy to
            hear from you.
          </p>
        </div>
      </div>

      {/* Contact content */}
      <section className="mx-auto grid max-w-[90rem] gap-10 px-5 pb-16 lg:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <form
          className="rounded-card bg-panel p-6 ring-1 ring-black/10 md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Your name
              </span>

              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-2 w-full rounded-btn border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </span>

              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-2 w-full rounded-btn border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              />
            </label>
          </div>

          {/* Inquiry type */}
          <div className="mt-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              What can I help with?
            </span>

            <div className="mt-2 flex flex-wrap gap-2">
              {PROJECT_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={
                    t === type
                      ? "rounded-full border border-primary bg-primary/10 px-3 py-1.5 text-xs text-primary"
                      : "rounded-full border border-line px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <label className="mt-5 block">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Tell me more
            </span>

            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, opportunity, idea, or what you'd like to discuss."
              className="mt-2 w-full resize-y rounded-btn border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-btn bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Send message
          </button>

          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            Opens your email client — nothing is stored
          </p>
        </form>

        {/* Side panel */}
        <aside className="space-y-4">
          {/* Availability */}
          <div className="rounded-card bg-panel p-6 ring-1 ring-black/10">
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>

              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
                Open to opportunities
              </span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Open to software engineering roles, UI/UX opportunities,
              freelance projects, collaborations, and interesting digital
              product work.
            </p>
          </div>

          {/* Direct email */}
          <div className="rounded-card bg-panel p-6 ring-1 ring-black/10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Direct line
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block break-all font-display text-lg uppercase tracking-wide transition-colors hover:text-primary"
            >
              {EMAIL}
            </a>
          </div>

          {/* Social profiles */}
          <div className="rounded-card bg-panel p-6 ring-1 ring-black/10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Find me online
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://github.com/kgayanjith"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kalindugayanjith/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                LinkedIn
              </a>

              <a
                href="https://www.kaggle.com/kalindugayanjith"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                Kaggle
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-card bg-panel p-6 ring-1 ring-black/10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Based in
            </p>

            <p className="mt-2 font-display text-lg uppercase">
              Colombo, Sri Lanka
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Available for remote opportunities worldwide · UTC+5:30
            </p>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
