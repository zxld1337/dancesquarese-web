import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="kapcsolat" className="section-py">
      <div className="container-custom">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Vegyük fel a kapcsolatot</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Kapcsolat</h2>
          <div className="gold-divider mx-auto mb-10" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-lg overflow-hidden border border-border h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1739032349969!6m8!1m7!1sD4wuA-SuYjp0gTp2hf7ytQ!2m2!1d47.66668000559262!2d19.6868520422916!3f30.614014886745395!4f-5.126094735949735!5f0.4002360200620913"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="accelerometer; gyroscope"
                title="Dance Square Studio térkép"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-lg p-8 h-full">
              <p className="font-heading text-2xl mb-1">Silkó Rebeka</p>
              <p className="text-muted-foreground mb-6">
                Egyesületi elnök · diplomás sportszakember, versenytánc edző
              </p>
              <dl className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <dt className="font-medium text-accent w-24 shrink-0">Email</dt>
                  <dd>
                    <a href="mailto:silko.rebeka.dance@gmail.com" className="hover:text-accent transition-colors">
                      silko.rebeka.dance@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-accent w-24 shrink-0">Telefon</dt>
                  <dd>
                    <a href="tel:+36203761207" className="hover:text-accent transition-colors">
                      +36 20 376 1207
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-accent w-24 shrink-0">Edzések</dt>
                  <dd>Hatvan, Erzsébet tér 4/1, 3000</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} id="hirek" className="mt-16 max-w-2xl mx-auto text-center">
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Friss hírek</p>
          <h3 className="font-heading text-2xl md:text-3xl mb-4">Kövess minket</h3>
          <p className="text-muted-foreground mb-8">
            A legfrissebb híreket, eredményeket és bemutatóinkat a Facebook oldalunkon osztjuk meg.
          </p>
          <a
            href="https://www.facebook.com/dancesquarese/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
            </svg>
            Dance Square SE Facebook oldala
          </a>
        </Reveal>
      </div>
    </section>
  );
}
