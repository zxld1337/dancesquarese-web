import Image from "next/image";
import Reveal from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

export default function WeddingDance() {
  return (
    <section id="eskuvostanc" className="section-py">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
            <Image
              src={withBasePath("/images/eskuvo_small.png")}
              alt="Esküvőstánc"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              quality={90}
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Táncoktatás</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Esküvőstánc</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Esküvős táncoktatásunk a jegyespár egyedi igényeihez igazodva történik. Legyen az keringő, vagy
            egy pörgős rocky, minden kérést teljesítünk! Válasszatok partnereink szolgáltatásai közül, hogy
            kedvezményes árajánlatot kapjatok!
          </p>
          <div className="glass rounded-lg p-6">
            <h3 className="font-heading text-xl mb-3">Partnereink</h3>
            <ul className="text-muted-foreground">
              <li>Nádas Mátyás (Fotográfus)</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
