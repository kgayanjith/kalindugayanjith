import { createFileRoute } from "@tanstack/react-router";
import animera from "@/assets/animera.jpeg";
import resilimart from "@/assets/resili.jpeg";
import foodzy from "@/assets/food.jpeg";
import glamaroo from "@/assets/glamaroo.jpeg";
import lankalayouts from "@/assets/lanka.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },
      {
        name: "description",
        content:
          "I work across software engineering and UI/UX design, transforming ideas into refined digital products through thoughtful interfaces, modern technology, and seamless experiences built with purpose.",
      },
      {
        name: "keywords",
        content:
          "Kalindu Gayanjith, Software Engineer Sri Lanka, Software Engineer Colombo, Full Stack Developer Sri Lanka, Full Stack Developer Colombo, UI UX Designer Sri Lanka, UI UX Designer Colombo, Frontend Developer Sri Lanka, Backend Developer Sri Lanka, Web Developer Sri Lanka, Software Engineer, Full Stack Development, UI UX Design, Product Design, Web Development, Frontend Development, Backend Development, Figma Designer, Figma UI UX, Vue.js Developer, React Developer, Next.js Developer, Laravel Developer, PHP Developer, JavaScript Developer, REST API Developer, MySQL Developer, Mobile App Design, Web Design, SaaS Development, Dashboard Design, AI Developer, Artificial Intelligence",
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
        content: "Kalindu Gayanjith | Software Engineer and UI/UX Designer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Kalindu Gayanjith, a Software Engineer and UI/UX Designer from Colombo, Sri Lanka. Explore software engineering, UI/UX design, frontend development, backend systems and digital products.",
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
        content: "https://kalindugayanjith.com/",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Kalindu Gayanjith | Software Engineer, UI/UX Designer & Full Stack Developer",
      },
      {
        name: "twitter:description",
        content:
          "Software engineering, UI/UX design, frontend development and backend development portfolio of Kalindu Gayanjith from Sri Lanka.",
      },
      {
        name: "theme-color",
        content: "#000000",
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
        content: "Kalindu Gayanjith Software Engineer portfolio",
      },
      {
        name: "twitter:image",
        content: "https://kalindugayanjith.com/og-image.PNG",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://kalindugayanjith.com/",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://kalindugayanjith.com/#person",
              name: "Kalindu Gayanjith",
              url: "https://kalindugayanjith.com/",
              jobTitle: "Software Engineer, UI/UX Designer & Full Stack Developer",
              description:
                "Software Engineer and UI/UX Designer based in Colombo, Sri Lanka. I design and build digital products across UI/UX, frontend development, backend development, APIs and modern web applications.",
              sameAs: [
                "https://github.com/kgayanjith",
                "https://www.linkedin.com/in/kalindugayanjith/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Colombo",
                addressCountry: {
                  "@type": "Country",
                  name: "Sri Lanka",
                },
              },
              knowsAbout: [
                "Software Engineering",
                "Full Stack Development",
                "UI/UX Design",
                "User Experience Design",
                "User Interface Design",
                "Product Design",
                "Frontend Development",
                "Backend Development",
                "Web Development",
                "Web Design",
                "Mobile App Development",
                "Mobile App Design",
                "Responsive Web Design",
                "Design Systems",
                "Prototyping",
                "Wireframing",
                "Usability Testing",
                "Figma",
                "Vue.js",
                "React",
                "Next.js",
                "Inertia.js",
                "Laravel",
                "PHP",
                "JavaScript",
                "REST APIs",
                "API Development",
                "Database Design",
                "MySQL",
                "Artificial Intelligence",
                "Machine Learning",
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Ural Federal University",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "University College Dublin",
                },
              ],
            },

            {
              "@type": "WebSite",
              "@id": "https://kalindugayanjith.com/#website",
              url: "https://kalindugayanjith.com/",
              name: "Kalindu Gayanjith",
              description:
                "Software Engineer and UI/UX Designer based in Colombo, Sri Lanka. I design and build digital products across UI/UX, frontend development, backend development, APIs and modern web applications.",
              author: {
                "@id": "https://kalindugayanjith.com/#person",
              },
            },
          ],
        }),
      },
    ],
  }),

  component: Index,
});

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contributions", href: "#contributions" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "Software Engineering",
  "UI/UX Design",
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "Figma",
  "Web Development",
  "Mobile App Design",
];

const SKILL_GROUPS = [
  {
    num: "01",
    title: "Software Engineering",
    items: [
      "Full Stack Development",
      "Software Architecture",
      "Frontend Development",
      "Backend Development",
      "REST APIs",
      "API Integration",
      "Database Design",
      "Web Applications",
      "Responsive Applications",
      "Git",
    ],
  },
  {
    num: "02",
    title: "UI / UX Design",
    items: [
      "UI Design",
      "UX Design",
      "User Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
      "Interaction Design",
      "Figma",
    ],
  },
  {
    num: "03",
    title: "Frontend Development",
    items: [
      "Vue.js",
      "React",
      "Next.js",
      "Inertia.js",
      "Tailwind CSS",
      "Bootstrap",
      "HTML / CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Architecture",
    ],
  },
  {
    num: "04",
    title: "Backend & APIs",
    items: [
      "Laravel",
      "PHP",
      "REST APIs",
      "MySQL",
      "Axios",
      "Jetstream",
      "Postman",
      "API Integration",
      "API Design",
      "Database Design",
    ],
  },
  {
    num: "05",
    title: "Mobile Development",
    items: [
      "Flutter",
      "React Native",
      "Expo",
      "Mobile UI",
      "Responsive UI",
      "Android Studio",
      "Xcode",
      "Cross-platform Development",
    ],
  },
  {
    num: "06",
    title: "AI & Emerging Technology",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "AI-powered Products",
      "AI-assisted Development",
      "ChatGPT",
      "GitHub Copilot",
      "AI Product Concepts",
      "Emerging Technology",
    ],
  },
];

const GITHUB_REPOS = [
  {
    name: "pneumonia-detection-deep-learning",
    year: "2026",
    description:
      "A CNN built with TensorFlow that detects pneumonia from chest X rays, served through a FastAPI backend.",
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    tag: "AI",
    url: "https://github.com/kgayanjith/pneumonia-detection-deep-learning",
  },
  {
    name: "pneumonia-detection-deep-learning-frontend",
    year: "2026",
    description:
      "React frontend for the pneumonia detection project that connects with the backend API to display prediction results.",
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 0,
    tag: "React",
    url: "https://github.com/kgayanjith/pneumonia-detection-deep-learning-frontend",
  },
  {
    name: "face_tracker",
    year: "2026",
    description:
      "Lightweight utility to screen face images for common quality issues before entering face recognition, KYC or profile photo pipelines.",
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    tag: "AI",
    url: "https://github.com/kgayanjith/face_tracker",
  },
  {
    name: "house-price-prediction-neural-network-python",
    year: "2026",
    description: "Deep learning house price prediction project using Python and TensorFlow Keras.",
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    tag: "AI",
    url: "https://github.com/kgayanjith/house-price-prediction-neural-network-python",
  },
  {
    name: "chat-bot",
    year: "2024",
    description:
      "Python chatbot built with Flask that uses pattern matching to process user input and generate responses.",
    language: "Python",
    langColor: "#3572A5",
    stars: 0,
    tag: "AI",
    url: "https://github.com/kgayanjith/chat_bot",
  },
  {
    name: "productviewgsap",
    year: "2026",
    description:
      "Interactive product experience built to present the APEX Shaker through animation and modern web interactions.",
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 0,
    tag: "Next",
    url: "https://github.com/kgayanjith/productviewgsap",
  },
  {
    name: "gym-management-system",
    year: "2023",
    description:
      "Desktop gym management application built with C# Windows Forms, featuring a modern interface and Azure integration.",
    language: "C#",
    langColor: "#178600",
    stars: 0,
    tag: "Desktop",
    url: "https://github.com/kgayanjith/gym-management-system",
  },
  {
    name: "react-todo",
    year: "2023",
    description: "React task management application using Bootstrap, React Router and SweetAlert2.",
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 0,
    tag: "React",
    url: "https://github.com/kgayanjith/react-todo",
  },
];

const PROJECTS = [
  {
    name: "Foodzy mobile app",
    tagline:
      "Mobile food ordering app focused on a simple, intuitive and enjoyable user experience.",
    year: "2026",
    image: foodzy,
    alt: "Foodzy mobile food ordering app UI UX design",
    flip: false,
    delay: 0,
    url: "https://www.figma.com/proto/amlgeyPPmHkYEe8G4fCMxV/Food-App-UI?node-id=2003-32&p=f&viewport=987%2C399%2C0.13&t=n0l4RT6gPSnVdvAl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "ResiliMart",
    tagline:
      "AI-powered ERP and supply chain risk intelligence platform for monitoring business risks.",
    year: "2026",
    image: resilimart,
    alt: "ResiliMart AI powered ERP dashboard UI UX design",
    flip: true,
    delay: 80,
    url: "https://resilimart.online/backend/login",
  },
  {
    name: "Glamaroo",
    tagline:
      "Beauty service booking experience designed to make discovering and booking services easier.",
    year: "2026",
    image: glamaroo,
    alt: "Glamaroo beauty service booking website UI UX design",
    flip: false,
    delay: 160,
    url: "https://glamaroo.lk/",
  },
  {
    name: "LankaLayouts",
    tagline:
      "Responsive website for architectural design and technical documentation services in Sri Lanka.",
    year: "2025",
    image: lankalayouts,
    alt: "LankaLayouts architectural design services website",
    flip: true,
    delay: 240,
    url: "https://lankalayouts.com/",
  },
  {
    name: "Pet Care Management System",
    tagline:
      "Pet management system for registering pets and managing health records, appointments and daily care activities.",
    year: "2024",
    image: animera,
    alt: "Pet care management system web application",
    flip: false,
    delay: 320,
    url: "",
  },
];

const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "Associate Software Engineer",
    company: "Plexxas Solution (Pvt) Ltd",
    copy: "Working on web applications across software engineering, frontend development, UI implementation, API integration and responsive interfaces. I work with modern development technologies and design tools to turn product ideas and designs into practical digital products.",
  },
  {
    period: "2024 — 2025",
    role: "Full Stack Developer",
    company: "Weblook International (Pvt) Ltd",
    copy: "Worked on production web applications using Vue.js, Laravel, Tailwind CSS and Bootstrap. Built responsive interfaces, integrated REST APIs, worked across frontend and backend features, fixed bugs and collaborated with design and development teams to improve application usability and reliability.",
  },
];

const EDUCATION = [
  {
    period: "2025 — Present",
    degree: "MSc in Artificial Intelligence",
    school: "Ural Federal University, Russia",
  },
  {
    period: "2019 — 2023",
    degree: "BSc (Hons) in Management Information Systems",
    school: "University College Dublin, Ireland",
  },
];

const CONTRIBUTIONS = [
  {
    type: "Plexxas Solution (Pvt) Ltd",
    title: "Yanko.lk Dashboard",
    period: "2024 — 2025",
    copy: "Enhanced and optimized an admin dashboard for a vehicle booking system, improving responsiveness and simplifying the management of bookings, drivers and vehicles.",
    meta: "Vue.js · Laravel",
  },
  {
    type: "Weblook International (Pvt) Ltd",
    title: "Yummygle",
    period: "2024",
    copy: "Worked on a SaaS based food delivery platform that connects customers with restaurants while providing vendors with tools to manage menus, orders and daily operations.",
    meta: "Laravel · Inertia.js · MySQL",
  },
  {
    type: "Weblook International (Pvt) Ltd",
    title: "Nikoba",
    period: "2024",
    copy: "Developed features for a web based vehicle auction platform connecting Sri Lankan users with Japanese auctions, supporting vehicle management and online bidding workflows.",
    meta: "Laravel · Inertia.js · MySQL",
  },
  {
    type: "Weblook International (Pvt) Ltd",
    title: "Saptify",
    period: "2024",
    copy: "Designed and developed a responsive vendor management web application using React, Tailwind CSS and MUI while integrating backend APIs for a smooth user experience.",
    meta: "React · Tailwind CSS · MUI",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Software Engineering",
    copy: "Web applications and digital products built across frontend, backend, APIs, databases and practical software architecture.",
  },
  {
    num: "02",
    title: "UI / UX Design",
    copy: "User flows, wireframes, prototypes and polished interfaces designed around real users and clear product goals.",
  },
  {
    num: "03",
    title: "Full Stack Development",
    copy: "Responsive applications built across frontend and backend technologies including Vue.js, React, Next.js and Laravel.",
  },
  {
    num: "04",
    title: "Design to Code",
    copy: "Turning Figma designs into responsive, maintainable interfaces while keeping the original design details and user experience intact.",
  },
];

function Index() {
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-background/80 px-5 py-3 backdrop-blur-md">
          <a
            href="#"
            className="font-display text-lg tracking-wide"
            aria-label="Kalindu Gayanjith home"
          >
            KALINDU<span className="text-primary">/</span>GAYANJITH
          </a>

          <nav
            className="hidden gap-7 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="bg-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-hover rounded-btn"
          >
            Available
          </a>
        </header>

        {/* Hero */}
        <section id="home" className="relative overflow-hidden" aria-labelledby="hero-title">
          <div className="absolute -top-32 -right-24 size-[520px] rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute top-44 -left-24 size-[380px] rounded-full bg-glow-blue/25 blur-[110px]" />

          <div className="relative mx-auto max-w-[90rem] px-5 pt-16 pb-12">
            <p className="anim-rise font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Software Engineer · UI/UX Designer — Colombo, Sri Lanka
            </p>

            <h1
              id="hero-title"
              className="anim-rise mt-5 font-display uppercase leading-[0.86] tracking-tight text-balance text-[clamp(3.5rem,12vw,11rem)]"
              style={{ animationDelay: "60ms" }}
            >
              Software
              <br />
              <span className="text-primary">&</span> Product
              <br />
              Development
            </h1>

            <p
              className="anim-rise mt-7 max-w-[52ch] text-pretty text-base text-muted-foreground md:text-lg"
              style={{ animationDelay: "140ms" }}
            >
              I'm Kalindu Gayanjith, a Software Engineer and UI/UX Designer from Colombo, Sri Lanka.
              I design and build digital products across user experience, frontend development,
              backend systems, APIs and responsive web applications.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary-hover rounded-btn"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="border border-line px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition-colors hover:border-primary hover:text-primary rounded-btn"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>
                <span className="text-foreground text-sm">6+</span> selected projects
              </span>

              <span>
                <span className="text-foreground text-sm">2+</span> years experience
              </span>

              <span>
                <span className="text-foreground text-sm">Design</span> + development
              </span>
            </div>
          </div>
        </section>

        {/* Skills Marquee */}
        <div
          className="overflow-hidden border-y border-line bg-band"
          aria-label="Software engineering design and development skills"
        >
          <div className="marquee-track flex w-max items-center gap-x-8 py-6 font-display text-[clamp(1.1rem,3vw,2rem)] uppercase tracking-wide text-muted-foreground/70">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-x-8" aria-hidden={copy === 1}>
                {SKILLS.map((skill, i) => (
                  <span key={skill} className={i % 3 === 0 ? "text-primary" : undefined}>
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Work */}
        <section
          id="work"
          className="mx-auto max-w-[90rem] px-5 py-16"
          aria-labelledby="work-title"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Software Engineering · UI/UX · Product Development
              </p>

              <h2
                id="work-title"
                className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]"
              >
                Selected work
              </h2>
            </div>

            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              05 Projects
            </span>
          </div>

          <p className="mt-5 max-w-[65ch] text-pretty text-base text-muted-foreground">
            A selection of software engineering, UI/UX design, web development, mobile app design,
            SaaS and full stack development projects. I combine product thinking, interface design
            and practical development to build useful digital experiences.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <a
                key={project.name}
                href={project.url}
                className="group anim-slide relative overflow-hidden rounded-card bg-panel ring-1 ring-black/10"
                style={{ animationDelay: `${i * 80}ms` }}
                aria-label={`View ${project.name} project`}
                target="_blank"
              >
                <div
                  className={
                    project.flip
                      ? "sheen-lift card-sheen-flip pointer-events-none absolute -inset-8"
                      : "sheen-lift card-sheen pointer-events-none absolute -inset-8"
                  }
                />

                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={900}
                    height={640}
                    loading="lazy"
                    className="aspect-[16/10] w-full bg-panel-2 object-cover"
                  />

                  <div className="relative flex items-center justify-between border-t border-line bg-background/50 px-5 py-4 backdrop-blur-sm">
                    <div>
                      <h3 className="font-display text-2xl uppercase leading-none">
                        {project.name}
                      </h3>

                      <p className="mt-1 max-w-[48ch] text-sm text-muted-foreground">
                        {project.tagline}
                      </p>
                    </div>

                    <span className="font-mono text-[11px] text-primary">{project.year}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-line bg-band" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-16 md:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                About me
              </p>

              <h2
                id="about-title"
                className="mt-3 font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]"
              >
                I design
                <br />
                and build
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I'm Kalindu Gayanjith, a Software Engineer and UI/UX Designer based in Colombo, Sri
                Lanka. My background allows me to work across both product design and software
                development, from early ideas and user flows to production applications.
              </p>

              <p>
                I enjoy turning ideas into clear user experiences, thoughtful interfaces and
                reliable digital products. My work includes web applications, SaaS dashboards,
                business websites, mobile app design and full stack systems.
              </p>

              <p>
                I use Figma for UI/UX design and prototyping and work with technologies such as
                Vue.js, React, Next.js and Laravel across frontend and backend development.
              </p>

              <p>
                Alongside my professional work, I'm currently studying for an MSc in Artificial
                Intelligence, expanding my understanding of AI, machine learning and AI-powered
                digital products.
              </p>
            </div>
          </div>
        </section>

        {/* Design + Development */}
        <section
          id="development"
          className="border-b border-line bg-band"
          aria-labelledby="development-title"
        >
          <div className="mx-auto grid max-w-[90rem] items-center gap-8 px-5 py-14 md:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Software Engineering + UI/UX Design
              </p>

              <h2
                id="development-title"
                className="mt-3 font-display uppercase leading-none tracking-tight text-[clamp(1.8rem,4vw,3rem)]"
              >
                From idea
                <br />
                to production
              </h2>
            </div>

            <p className="text-pretty text-base text-muted-foreground md:text-lg">
              I work across design and development, taking ideas from user flows and Figma
              prototypes to responsive production-ready applications. My experience with Vue.js,
              React, Next.js, Laravel, REST APIs and databases helps me design with real
              implementation in mind and build products from both sides of the stack.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-[90rem] px-5 py-16"
          aria-labelledby="skills-title"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Software Engineering · Design · Development
              </p>

              <h2
                id="skills-title"
                className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]"
              >
                Skills
              </h2>
            </div>

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
                  <h3 className="font-display text-xl uppercase leading-none">{group.title}</h3>

                  <span className="font-mono text-[11px] text-primary">{group.num}</span>
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

        {/* Experience + Education */}
        <section
          id="experience"
          className="mx-auto max-w-[90rem] px-5 py-16"
          aria-labelledby="experience-title"
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Software Engineering Experience
              </p>

              <h2
                id="experience-title"
                className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]"
              >
                Experience
              </h2>

              <div className="mt-8">
                {EXPERIENCE.map((job) => (
                  <article
                    key={`${job.period}-${job.company}`}
                    className="border-t border-line py-5 transition-colors hover:bg-panel/50"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl uppercase leading-none">{job.role}</h3>

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
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Education
              </p>

              <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
                Education
              </h2>

              <div className="mt-8">
                {EDUCATION.map((edu) => (
                  <article
                    key={`${edu.period}-${edu.school}`}
                    className="border-t border-line py-5 transition-colors hover:bg-panel/50"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl uppercase leading-none">{edu.degree}</h3>

                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                        {edu.period}
                      </span>
                    </div>

                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {edu.school}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="mx-auto max-w-[90rem] px-5 py-16"
          aria-labelledby="services-title"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            What I do
          </p>

          <h2
            id="services-title"
            className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]"
          >
            Software & Product
          </h2>

          <p className="mt-5 max-w-[65ch] text-pretty text-base text-muted-foreground md:text-lg">
            I work across software engineering, UI/UX design and full stack development to turn
            digital ideas into useful, responsive and production-ready products.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article
                key={service.num}
                className="rounded-card bg-panel p-5 ring-1 ring-black/10 transition-colors duration-300 hover:ring-primary/40"
              >
                <span className="font-mono text-[11px] text-primary">{service.num}</span>

                <h3 className="mt-3 font-display text-xl uppercase leading-none">
                  {service.title}
                </h3>

                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* GitHub Projects */}
        <section id="projects" className="border-y border-line bg-band">
          <div className="mx-auto max-w-[90rem] px-5 py-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                  Code & Experiments
                </p>

                <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
                  GitHub projects
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {GITHUB_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  className="group rounded-card bg-panel p-5 ring-1 ring-black/10 transition-all duration-300 hover:ring-primary/40"
                  target="_blank"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg uppercase leading-none transition-colors group-hover:text-primary">
                      {repo.name}
                    </h3>

                    <span className="font-mono text-[11px] text-primary">{repo.year}</span>
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
          </div>
        </section>

        {/* Contributions */}
        <section id="contributions" className="mx-auto max-w-[90rem] px-5 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display uppercase leading-none tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
              Other contributions
            </h2>

            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              More work
            </span>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {CONTRIBUTIONS.map((item) => (
              <div
                key={item.title}
                className="rounded-card bg-panel p-5 ring-1 ring-black/10 transition-colors duration-300 hover:ring-primary/40"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl uppercase leading-none">{item.title}</h3>

                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {item.period}
                  </span>
                </div>

                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.type}
                </p>

                <p className="mt-2 text-pretty text-sm text-muted-foreground">{item.copy}</p>

                <p className="mt-4 inline-block rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground">
                  {item.meta}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto mt-16 max-w-[70rem] px-5 pb-16">
          <div className="relative overflow-hidden rounded-4xl bg-primary p-8 text-primary-foreground md:p-12">
            <div className="absolute -top-24 -right-16 size-[360px] rounded-full bg-primary-foreground/15 blur-[100px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary-foreground/100">
                  Start a project
                </p>

                <h2 className="mt-3 font-display uppercase leading-[0.9] tracking-tight text-[clamp(2.2rem,7vw,6rem)]">
                  Let's build
                  <br />
                  something useful.
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:kalindugayanjith@gmail.com"
                    className="bg-background px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-band rounded-btn"
                  >
                    Email me
                  </a>
                </div>
              </div>

              <div className="rounded-card bg-primary-foreground/10 p-6 ring-1 ring-primary-foreground/20 backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-foreground opacity-60" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-primary-foreground" />
                  </span>

                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/100">
                    Available for new projects
                  </span>
                </div>

                <div className="mt-5 border-t border-primary-foreground/20 pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/100">
                    Direct line
                  </p>

                  <a
                    href="mailto:kalindugayanjith@gmail.com"
                    className="mt-1 block break-all font-display text-lg uppercase tracking-wide transition-colors hover:text-primary-foreground/70"
                  >
                    kalindugayanjith@gmail.com
                  </a>
                </div>

                <div className="mt-5 border-t border-primary-foreground/20 pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/100">
                    Elsewhere
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      href="https://github.com/kgayanjith"
                      className="rounded-full border border-primary-foreground/30 px-3 py-1.5 text-xs transition-colors hover:bg-primary-foreground/15"
                      target="_blank"
                    >
                      GitHub
                    </a>

                    <a
                      href="https://www.linkedin.com/in/kalindugayanjith"
                      className="rounded-full border border-primary-foreground/30 px-3 py-1.5 text-xs transition-colors hover:bg-primary-foreground/15"
                      target="_blank"
                    >
                      LinkedIn
                    </a>

                    <a
                      href="https://www.kaggle.com/kalindugayanjith"
                      className="rounded-full border border-primary-foreground/30 px-3 py-1.5 text-xs transition-colors hover:bg-primary-foreground/15"
                      target="_blank"
                    >
                      Kaggle
                    </a>
                  </div>
                </div>

                <a
                  href="mailto:kalindugayanjith@gmail.com?subject=Project%20inquiry"
                  className="mt-6 block bg-primary-foreground px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary transition-colors duration-300 hover:bg-band rounded-btn"
                >
                  Start a project inquiry
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>© 2026 Kalindu Gayanjith</span>

            <span className="text-primary">Software Engineer · UI/UX · Development</span>

            <span>Colombo · Sri Lanka · Remote</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
