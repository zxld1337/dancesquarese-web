import Image from "next/image";
import Reveal from "@/components/Reveal";
import { withBasePath } from "@/lib/basePath";

const count = 12;
const appearImages = Array.from({ length: count }, (_, i) => {
  const n = i + 1;
  const ext = n === 10 ? "jpg" : "png";
  return withBasePath(`/images/appear/appear${n}.${ext}`);
});

export default function Appearances() {
  return (
    <section className="section-py">
      <div className="container-custom">
        <Reveal className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Megjelenéseink</p>
          <h2 className="font-heading text-4xl md:text-5xl">Ahol találkozhattál velünk</h2>
          <div className="gold-divider mx-auto mt-6" />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {appearImages.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 0.05}>
              <div className="relative aspect-square rounded-md overflow-hidden bg-card">
                <Image
                  src={src}
                  alt={`Megjelenés ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-contain p-3"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
