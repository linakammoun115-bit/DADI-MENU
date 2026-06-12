import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";
import { contact } from "@/data/menu";

const actions = [
  { href: contact.whatsapp, label: "WhatsApp", icon: MessageCircle, color: "bg-emerald-500/90 hover:bg-emerald-500" },
  { href: `tel:${contact.phoneRaw}`, label: "Appeler", icon: Phone, color: "bg-[color:var(--gold)] hover:brightness-110" },
  { href: contact.instagram, label: "Instagram", icon: Instagram, color: "bg-gradient-to-br from-pink-500 to-orange-400" },
  { href: contact.maps, label: "Maps", icon: MapPin, color: "bg-sky-500/90 hover:bg-sky-500" },
];

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {actions.map(({ href, label, icon: Icon, color }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer noopener"
          aria-label={label}
          title={label}
          className={`group h-12 w-12 md:h-13 md:w-13 rounded-full ${color} text-white shadow-card-luxe shadow-glow flex items-center justify-center transition-all hover:scale-110 active:scale-95`}
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </div>
  );
}
