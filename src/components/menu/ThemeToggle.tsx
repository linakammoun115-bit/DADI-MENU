import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("dadi-theme") : null;
    if (saved === "light") {
      document.documentElement.classList.add("light");
      setLight(true);
    }
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try { localStorage.setItem("dadi-theme", next ? "light" : "dark"); } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Changer le thème"
      className="fixed top-5 right-5 z-50 h-11 w-11 rounded-full glass-strong border border-[color:var(--gold)]/30 text-[color:var(--gold)] flex items-center justify-center hover:bg-[color:var(--gold)]/15 transition-colors"
    >
      {light ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
