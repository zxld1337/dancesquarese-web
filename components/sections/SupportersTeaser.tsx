import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function SupportersTeaser() {
  return (
    <section className="section-py bg-card/40">
      <div className="container-custom text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Köszönjük</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-8">Támogatóink</h2>
          <div className="gold-divider mx-auto mb-10" />
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/tamogatoink"
            className="inline-flex items-center gap-6 glass rounded-lg px-8 py-6 hover:border-accent transition-colors"
          >
            <Image
              src="/images/supports/expodom-logo-hu.png"
              alt="Expodom logo"
              width={140}
              height={56}
              className="h-10 w-auto object-contain"
            />
            <span className="text-sm text-muted-foreground">Ismerd meg partnereinket →</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
