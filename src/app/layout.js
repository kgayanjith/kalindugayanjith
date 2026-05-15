import "./style.css";
import "./media.css";
import AppLayout from "./components/AppLayout";

export const metadata = {
  title: "Kalindu Gayanjith | Software Engineer",
  description:
    "Software Engineer specializing in React, Next.js, Vue.js, Laravel, and modern web development in Sri Lanka.",
  metadataBase: new URL("https://kalindugayanjith.vercel.app"),

  openGraph: {
    title: "Kalindu Gayanjith | Software Engineer",
    description:
      "Frontend Developer specializing in React, Next.js, Vue.js, Laravel.",
    url: "https://kalindugayanjith.vercel.app",
    siteName: "Kalindu Gayanjith Portfolio",
    images: [
      {
        url: "/assets/portfolio-bwr.png",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kalindu Gayanjith | Software Engineer",
    description:
      "Frontend Developer specializing in React, Next.js, Vue.js, Laravel.",
    images: ["/assets/portfolio-bwr.png"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:site_name" content="Kalindu Gayanjith Portfolio" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="nJg8mApBsm2z1sEZaTvA97xAbUPbc-82QbCvB-UmlG0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kalindu Gayanjith",
              url: "https://kalindugayanjith.vercel.app",
              image: "https://kalindugayanjith.vercel.app/assets/portfolio-bwr.png",
              jobTitle: "Software Engineer",
              nationality: "Sri Lankan",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://www.linkedin.com/in/kalindugayanjith",
                "https://github.com/kgayanjith",
              ],

              knowsAbout: [
                "React.js",
                "Next.js",
                "Vue.js",
                "Laravel",
                "JavaScript",
                "TypeScript",
                "Frontend Development",
                "Full Stack Development",
                "Web Development",
                "Responsive Design",
                "UI UX Design",
                "SEO",
                "Tailwind CSS",
                "REST API Integration",
              ],
            }),
          }}
        />
        <meta
          name="keywords"
          content="Kalindu Gayanjith, Portfolio, Developer, Sri Lanka"
        ></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body cz-shortcut-listen="true">
        <AppLayout>{children}</AppLayout>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js"></script>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
