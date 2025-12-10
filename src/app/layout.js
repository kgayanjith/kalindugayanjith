import "./style.css";
import "./media.css";
import AppLayout from "./components/AppLayout";

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Kalindu Gayanjith</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="nJg8mApBsm2z1sEZaTvA97xAbUPbc-82QbCvB-UmlG0"
        />
        <meta
          name="description"
          content="Kalindu Gayanjith - Frontend Developer Portfolio, specialized in Vue, Laravel, React, and modern web development."
        ></meta>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kalindu Gayanjith",
              url: "https://kalindugayanjith.vercel.app",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://www.linkedin.com/in/your-linkedin",
                "https://github.com/your-github",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Vue.js",
                "Laravel",
                "Frontend Development",
              ],
            }),
          }}
        />
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
