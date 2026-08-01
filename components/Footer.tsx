import Image from "next/image";
import Link from "next/link";
import CurrentYear from "@/components/CurrentYear";
import { withBasePath } from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-custom py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/#fooldal" className="flex items-center gap-3">
          <Image src={withBasePath("/icon/DS.png")} alt="Dance Square" width={40} height={40} className="rounded-full" />
          <span className="font-heading text-lg">Dance Square</span>
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <li><Link href="/#rolunk" className="hover:text-foreground transition-colors">Rólunk</Link></li>
          <li><Link href="/tanfolyamok" className="hover:text-foreground transition-colors">Tanfolyamok</Link></li>
          <li><Link href="/#araink" className="hover:text-foreground transition-colors">Áraink</Link></li>
          <li><Link href="/#kapcsolat" className="hover:text-foreground transition-colors">Kapcsolat</Link></li>
          <li><Link href="/tamogatoink" className="hover:text-foreground transition-colors">Támogatóink</Link></li>
        </ul>

        <p className="text-sm text-muted-foreground">
          © <CurrentYear /> Dance Square SE
        </p>
      </div>
    </footer>
  );
}
