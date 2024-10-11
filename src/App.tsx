import { useState } from "react";
import Login from "./components/login";
import { cn } from "./lib/utils";
import TermsCondition from "./components/tnc";
import Success from "./components/success";

export type Screen = "login" | "tnc" | "success";

function App() {
  const [screen, setScreen] = useState<Screen>("login");

  const changeScreen = (screen: Screen) => {
    setScreen(screen);
  };

  return (
    <main className="container mx-auto flex min-h-dvh items-center justify-center p-4">
      <section
        className={cn(
          "w-full bg-primary-foreground p-2 text-primary shadow-md",
          {
            "max-w-md": screen === "login" || screen === "success",
            "max-w-xl": screen === "tnc",
          }
        )}>
        {screen === "login" && <Login changeScreen={changeScreen} />}
        {screen === "tnc" && <TermsCondition changeScreen={changeScreen} />}
        {screen === "success" && <Success changeScreen={changeScreen} />}
      </section>
    </main>
  );
}

export default App;
