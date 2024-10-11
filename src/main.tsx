import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { ModeToggle } from "./components/theme-toggle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <App />
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
    </ThemeProvider>
  </StrictMode>
);
