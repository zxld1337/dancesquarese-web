import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="rolunk" className="section-py">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/csop_kep_v2.jpg"
                alt="Dance Square csapat"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Rólunk</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Dance Square Sportegyesület</h2>
            <div className="gold-divider mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Dance Square Sportegyesület 2022 óta működő társastánc egyesület. Fő profilunk a versenytánc,
                illetve társastánc tanfolyamok indítása. Ugyanakkor szívesen vállaljuk esküvős- és szalagavatós
                táncok betanítását. Valamint lehetőség van egyéni, magánórázásra is! Óvodás kortól egészen a
                seniorokig, minden korosztály megfordul nálunk.
              </p>
              <p>
                Célunk a társastánc és versenytánc népszerűsítése, a gyerekek sport- és egészségtudatosságra
                nevelése, az idősebb korosztály egészségmegőrzése, valamint a prevenció. Fontos számunkra a
                szalontáncokkal járó illemtan és viselkedéskultúra gyakorlása is.
              </p>
              <p>
                Nem titkolt vágyunk a tagok versenyeztetése, az utánpótlás kinevelése. Több tanítványunk aktív
                versenyző, rangos versenyek dobogós helyezettjei.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
