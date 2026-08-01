import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SignupForm from "@/components/SignupForm";
import { courses, getCourse } from "@/lib/courses";
import { withBasePath } from "@/lib/basePath";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  return {
    title: course ? `${course.title} | Dance Square` : "Dance Square",
    description: course?.summary,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <section className="page-py">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <Reveal>
              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={withBasePath(course.image)}
                  alt={course.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Tanfolyam</p>
              <h1 className="font-heading text-4xl md:text-5xl mb-2">{course.title}</h1>
              {course.subtitle && <p className="text-lg text-muted-foreground mb-6">{course.subtitle}</p>}
              <div className="gold-divider mb-8" />
            </Reveal>

            <div className="space-y-6">
              {course.sections.map((section, i) => (
                <Reveal key={i} delay={Math.min(i * 0.05, 0.3)}>
                  <div>
                    {section.heading && (
                      <h2 className="font-body font-semibold text-lg mb-2 text-foreground">{section.heading}</h2>
                    )}
                    <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <Reveal delay={0.15}>
              <SignupForm courseTag={course.emailTag} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
