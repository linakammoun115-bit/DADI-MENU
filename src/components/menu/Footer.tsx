import { contact } from "@/data/menu";
import { MapPin, Phone, Instagram, Clock, Navigation } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative mt-32 pt-20 pb-10 px-4 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-4xl bg-[image:var(--gradient-gold)] opacity-50" />
        <div className="absolute top-20 left-1/4 h-80 w-80 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <img
            src="/images/dadi-logo.jpg"
            alt="DADI"
            className="h-24 w-24 mx-auto object-contain drop-shadow-[0_0_30px_oklch(0.78_0.13_85/0.5)]"
          />

          <h2 className="font-display italic text-3xl md:text-4xl text-gold-gradient mt-4">
            Dadi Salon de Thé
          </h2>
          <p className="text-xs uppercase tracking-[0.45em] text-muted-foreground mt-2">
            Sfax · Tunisia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard icon={<MapPin className="h-5 w-5" />} title="Adresse" lines={[contact.address]} />
          <ContactCard icon={<Phone className="h-5 w-5" />} title="Téléphone" lines={[contact.phone]} href={`tel:${contact.phoneRaw}`} />
          <ContactCard icon={<Instagram className="h-5 w-5" />} title="Instagram" lines={[contact.instagramHandle]} href={contact.instagram} />
          <ContactCard icon={<Clock className="h-5 w-5" />} title="Horaires" lines={["Tous les jours", "07h00 – 01h00"]} />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={contact.maps}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[image:var(--gradient-gold)] text-[color:var(--primary-foreground)] font-medium tracking-wide uppercase text-sm shadow-glow hover:scale-[1.03] transition-transform"
          >
            <Navigation className="h-4 w-4" />
            Ouvrir Google Maps
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--gold)]/15 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dadi Salon de Thé · Korniche, Sfax · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}

function ContactCard({
  icon,
  title,
  lines,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div className="glass rounded-2xl p-6 h-full hover-lift transition-all group">
      <div className="h-11 w-11 rounded-full bg-[color:var(--gold)]/15 border border-[color:var(--gold)]/30 flex items-center justify-center text-[color:var(--gold)] group-hover:bg-[color:var(--gold)]/30 transition-colors">
        {icon}
      </div>
      <div className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
        {title}
      </div>
      <div className="mt-1.5 text-foreground">
        {lines.map((l) => (
          <div key={l} className="leading-relaxed">
            {l}
          </div>
        ))}
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener">
      {inner}
    </a>
  ) : (
    inner
  );
} 