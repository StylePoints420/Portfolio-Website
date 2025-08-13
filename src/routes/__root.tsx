import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import { ThemeProvider } from "@/themes/theme-provider";
import NotFoundPage from "@/pages/not-found-page";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import FooterSection from "@/components/sections/footer/footer-section";

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
        <section>
          <FooterSection />
        </section>
      </>
    </ThemeProvider>
  ),
  notFoundComponent: () => <NotFoundPage />,
});
