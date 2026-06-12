const logoUrl = "/images/dadi-logo.jpg";

export function Hero({ onScrollToMenu }: { onScrollToMenu: () => void }) {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden flex items-center justify-center px-4 py-20">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#2a2112_0%,#090806_45%,#030303_100%)]"
      />

      {/* Light effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[color:var(--gold)]/20 blur-[100px]" />
        <div className="absolute top-1/3 -left-32 h-[380px] w-[380px] rounded-full bg-yellow-500/10 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-10 -right-32 h-[420px] w-[420px] rounded-full bg-amber-300/10 blur-3xl animate-glow-pulse delay-500" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,var(--background)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Logo */}
        <div className="relative animate-fade-up">
          <div className="absolute inset-0 -m-16 rounded-full bg-[color:var(--gold)]/25 blur-[90px]" />

          <div className="relative flex h-64 w-64 md:h-80 md:w-80 items-center justify-center rounded-full">
            <div className="absolute inset-0 rounded-full border border-[color:var(--gold)]/30 animate-ring-rotate" />
            <div className="absolute inset-4 rounded-full border border-[color:var(--gold)]/20" />
            <div className="absolute inset-8 rounded-full border border-[color:var(--gold)]/10" />
            <div className="absolute inset-0 rounded-full border-2 border-[color:var(--gold)]/15 animate-pulse" />
            <div className="absolute inset-6 rounded-full bg-black/40 backdrop-blur-xl" />

            <div className="relative h-44 w-44 md:h-56 md:w-56 overflow-hidden rounded-full border-2 border-[color:var(--gold)]/40 shadow-[0_0_55px_rgba(212,175,55,0.45)] bg-black">
              <img
                src={logoUrl}
                alt="DADI Salon de Thé"
                loading="eager"
                className="h-full w-full rounded-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <span className="absolute top-8 right-12 text-[color:var(--gold)] animate-pulse">✦</span>
            <span className="absolute bottom-12 left-10 text-[color:var(--gold)]/80 animate-pulse delay-300">✦</span>
            <span className="absolute top-16 left-8 text-[color:var(--gold)]/60 animate-pulse delay-700">✦</span>
          </div>
        </div>

        {/* Tag */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[color:var(--gold)]/25 bg-white/[0.05] px-5 py-2 backdrop-blur-xl animate-fade-up delay-100">
          <span className="h-2 w-2 rounded-full bg-[color:var(--gold)] shadow-glow" />
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
            Salon de Thé · Sfax
          </p>
        </div>

        <h1 className="mt-6 font-display text-5xl font-light leading-[0.98] md:text-7xl lg:text-8xl animate-fade-up delay-200">
          <span className="block text-white/95">Le goût du</span>
          <span className="block text-gold-gradient italic">moment parfait</span>
          <span className="block text-white/90">chez DADI.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg animate-fade-up delay-300">
          Cafés raffinés, thés parfumés, crêpes gourmandes, gaufres et créations fraîches
          dans une ambiance moderne, chaleureuse et premium.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up delay-500">
          <button
            onClick={onScrollToMenu}
            className="group relative overflow-hidden rounded-full bg-[image:var(--gradient-gold)] px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-glow transition-all hover:scale-[1.04] active:scale-[0.98]"
          >
            <span className="relative z-10">Voir le menu</span>
            <span className="relative z-10 ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/[0.05] px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl transition-all hover:border-[color:var(--gold)]/40 hover:bg-white/[0.09]"
          >
            Nous trouver
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid w-full max-w-2xl grid-cols-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl animate-fade-up delay-700">
          {[
            ["Fresh", "Produits"],
            ["DADI", "Signature"],
            ["Sfax", "Corniche"],
          ].map(([big, small], index) => (
            <div key={big} className={`p-4 ${index === 1 ? "border-x border-white/10" : ""}`}>
              <p className="font-display text-2xl text-gold-gradient">{big}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/45">
                {small}
              </p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/45 animate-fade-up delay-700">
          {["Café", "Thé", "Crêpes", "Gaufres", "Lounge"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-4 py-2 transition-all hover:border-[color:var(--gold)]/40 hover:text-[color:var(--gold-soft)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onScrollToMenu}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]/70 animate-float-slow"
      >
        ↓ Découvrir
      </button>
    </section>
  );
}