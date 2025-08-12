import { Outlet, createRootRoute } from "@tanstack/react-router";

import Navbar from "../components/navbar";
import { ThemeProvider } from "@/themes/theme-provider";
import NotFoundPage from "@/pages/not-found-page";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
    </ThemeProvider>
  ),
  notFoundComponent: () => <NotFoundPage />,
});
