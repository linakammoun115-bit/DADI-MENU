import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Hero } from "@/components/menu/Hero";
import { MenuSection } from "@/components/menu/MenuSection";
import { Footer } from "@/components/menu/Footer";
import { FloatingActions } from "@/components/menu/FloatingActions";
import { ThemeToggle } from "@/components/menu/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dadi Salon de Thé — Saveurs, détente et moments inoubliables · Sfax" },
      { name: "description", content: "Salon de thé premium à Sfax, Corniche. Cafés d'exception, thés traditionnels, mojitos, glaces et chicha dans une ambiance lounge luxueuse." },
      { property: "og:title", content: "Dadi Salon de Thé · Sfax" },
      { property: "og:description", content: "Cafés, thés, mojitos, glaces et chicha — une carte raffinée dans un écrin lumineux sur la Corniche." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CafeOrCoffeeShop",
        name: "Dadi Salon de Thé",
        address: { "@type": "PostalAddress", streetAddress: "Korniche", addressLocality: "Sfax", addressCountry: "TN" },
        telephone: "+216 24 254 022",
        openingHours: "Mo-Su 07:00-01:00",
        servesCuisine: ["Café", "Thé", "Pâtisseries", "Mojito", "Chicha"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={menuRef} className="min-h-screen">
      <ThemeToggle />
      <Hero onScrollToMenu={scrollToMenu} />
      <MenuSection />
      <Footer />
      <FloatingActions />
    </div>
  );
}
