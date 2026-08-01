import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Támogatóink | Dance Square",
  description: "A Dance Square Sportegyesületet támogató partnereink.",
};

export default function TamogatoinkPage() {
  return (
    <section className="page-py">
      <div className="container-custom">
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Köszönjük</p>
          <h1 className="font-heading text-4xl md:text-5xl mb-6">Támogatóink</h1>
          <div className="gold-divider mx-auto" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-lg overflow-hidden grid md:grid-cols-2 md:items-center">
            <div className="relative aspect-[9/10] self-start">
              <Image
                src={withBasePath("/images/supports/expodom-tent-img.png")}
                alt="Expodom rendezvénysátor"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="font-heading text-2xl mb-4">Köszönjük</h2>
              <div className="gold-divider mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Büszkén jelentjük, hogy egyesületünk egy vadonatúj{" "}
                <a
                  href="https://www.expodom.hu/articles/rendezvenysator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-accent hover:underline"
                >
                  rendezvénysátrat
                </a>{" "}
                kapott az{" "}
                <a
                  href="https://www.expodom.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-accent hover:underline"
                >
                  Expodom Kft.
                </a>{" "}
                nagylelkű felajánlásának köszönhetően. A stabil fémszerkezetű pavilon percek alatt
                felállítható. Versenyeken és sportági megjelenéseinken egyaránt egységes, professzionális
                képet biztosít csapatunknak.
              </p>
              <p className="font-body italic text-lg text-foreground/90">
                Ezúton is hálás köszönetünket fejezzük ki a támogatásért!
              </p>
              <a
                href="https://expodom.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block"
              >
                <Image
                  src={withBasePath("/images/supports/expodom-logo-hu.png")}
                  alt="Expodom logo"
                  width={160}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
