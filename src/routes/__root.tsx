import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-sans text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        title: "Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },

      {
        name: "description",
        content:
          "Portfolio of Kalindu Gayanjith, a Software Engineer and UI/UX Designer from Sri Lanka, specializing in software engineering, UI/UX design, frontend development, backend systems, APIs and modern web applications.",
      },

      {
        property: "og:title",
        content: "Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },

      {
        property: "og:description",
        content:
          "Explore software engineering, UI/UX design, frontend development, backend systems and full stack web projects by Kalindu Gayanjith.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://kalindugayanjith.com/",
      },

      {
        property: "og:site_name",
        content: "Kalindu Gayanjith",
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
        content: "Kalindu Gayanjith Software Engineer and UI/UX Designer portfolio",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: "Kalindu Gayanjith | Software Engineer & UI/UX Designer",
      },

      {
        name: "twitter:description",
        content:
          "Software engineering, UI/UX design, frontend development, backend systems and full stack projects by Kalindu Gayanjith.",
      },

      {
        name: "twitter:image",
        content: "https://kalindugayanjith.com/og-image.PNG",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", type: "image/x-icon" },
      { rel: "icon", href: "favicon-32x32.png", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/x-icon" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
