import Image from "next/image";
import Reveal from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

export default function CompetitiveDance() {
  return (
    <section id="versenytanc" className="section-py bg-card/40">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="order-2 md:order-1">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Táncoktatás</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Versenytánc</h2>
          <div className="gold-divider mb-6" />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Versenytánc szakágunk 17 éves versenyzői múlttal rendelkezik. Számos területi- és bajnoki
              címet, dobogós helyezést tudhat magáénak. Célunk egy magas szintű versenytánc tudás átadása —
              a megfelelő alapok, mind elméleti-, mind gyakorlati szintű ismerete.
            </p>
            <p>
              A &bdquo;10 táncos&rdquo; klub révén Standard (angolkeringő, tangó, bécsikeringő, slowfox, quickstep) és
              Latin-amerikai (cha-cha-cha, samba, rumba, paso doble, jive) táncokat oktatunk. Így a gyermekeknek
              lehetőségük nyílik mindkét irányzatot megismerni, elsajátítani, majd később eldönteni, hogy az
              egyik, vagy mindkettő kategóriában versenyeznek.
            </p>
            <p>
              A 2022-es évtől a pontszerzős versenyeken már nem csak párok, hanem szóló lányok is
              versenyezhetnek. Folyamatosan szerveződik lányformációnk is, melyben a gyerekek csapatban
              versenyezhetnek — hatalmas lehetőség a kezdő lányoknak, hogy hamar belekóstolhassanak a
              versenyzés világába.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src={withBasePath("/images/versenytanc_small.png")}
              alt="Versenytánc"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
