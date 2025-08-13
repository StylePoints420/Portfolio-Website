import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import { ThemeProvider } from "@/themes/theme-provider";
import NotFoundPage from "@/pages/not-found-page";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        {/* use vercel analytics and speed insights */}
        <Analytics />
        <SpeedInsights />
      </>
    </ThemeProvider>
  ),
  notFoundComponent: () => <NotFoundPage />,
});
