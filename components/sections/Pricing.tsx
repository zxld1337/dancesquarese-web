import Reveal from "@/components/Reveal";

const rows = [
  { label: "Havi tagdíj (kezdő)", price: "14.000 HUF" },
  { label: "Havi tagdíj (haladó)", price: "14.000 HUF" },
  { label: "Magánóra (egyesületi tag)", price: "7.000 HUF" },
  { label: "Magánóra (külsős)", price: "8.000 HUF" },
  { label: "Esküvős táncoktatás", price: "10.000 HUF" },
  { label: "Szalagavatós táncoktatás", price: "Egyedi árajánlat" },
];

export default function Pricing() {
  return (
    <section id="araink" className="section-py bg-card/40">
      <div className="container-custom flex flex-col items-center text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Díjszabás</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Áraink</h2>
          <div className="gold-divider mx-auto mb-10" />
        </Reveal>

        <Reveal delay={0.1} className="w-full max-w-2xl">
          <div className="glass rounded-lg divide-y divide-border">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-6 px-6 py-4 md:px-8 md:py-5">
                <span className="text-left text-foreground/90">{row.label}</span>
                <span className="font-body font-semibold text-accent whitespace-nowrap">{row.price}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
