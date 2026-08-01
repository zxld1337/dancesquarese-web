import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Tanfolyamaink | Dance Square",
  description: "Dance Square tánctanfolyamok minden korosztálynak — óvodástól a seniorokig.",
};

export default function TanfolyamokPage() {
  return (
    <section className="page-py">
      <div className="container-custom">
        <Reveal className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Táncoktatás</p>
          <h1 className="font-heading text-4xl md:text-5xl mb-6">Tanfolyamaink</h1>
          <div className="gold-divider mx-auto" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <Reveal key={course.slug} delay={(i % 3) * 0.08}>
              <CourseCard course={course} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
