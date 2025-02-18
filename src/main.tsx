import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import NavLayout from "./NavLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<NavLayout />}>
            <Route path="/" element={<App />} />
          </Route>
          {/* Catch all path, will return 404 error page if no valid path found. */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
