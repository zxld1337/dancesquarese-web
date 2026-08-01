import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course, priority }: { course: Course; priority?: boolean }) {
  return (
    <Link
      href={`/tanfolyamok/${course.slug}`}
      className="group flex h-full flex-col rounded-lg overflow-hidden border border-border hover:border-accent transition-colors"
    >
      <div className="relative aspect-[4/3] shrink-0">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 bg-card">
        <h3 className="font-body font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{course.summary}</p>
        <span className="mt-auto pt-4 inline-block text-xs tracking-wide uppercase text-accent">
          Részletek →
        </span>
      </div>
    </Link>
  );
}
