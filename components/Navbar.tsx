"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NAV_LINKS = [
  {
    label: "Rólunk",
    children: [
      { label: "Rólunk", href: "/#rolunk" },
      { label: "Támogatóink", href: "/tamogatoink" },
    ],
  },
  {
    label: "Táncoktatás",
    children: [
      { label: "Versenytánc", href: "/#versenytanc" },
      { label: "Esküvőstánc", href: "/#eskuvostanc" },
      { label: "Tanfolyamok", href: "/tanfolyamok" },
    ],
  },
  { label: "Áraink", href: "/#araink" },
  { label: "Kapcsolat", href: "/#kapcsolat" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-gradient-to-b from-black/35 via-black/10 to-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between py-3">
        <Link href="/#fooldal" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/icon/ds_logo_white.png"
            alt="Dance Square"
            width={140}
            height={64}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <button
          className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground cursor-pointer"
          aria-label="Menü megnyitása"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <ul className="hidden xl:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <li key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button className="nav-link cursor-pointer">{item.label}</button>
                  <ul className="invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 min-w-[200px]">
                    <li className="solid-panel rounded-md overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-foreground/90 hover:bg-primary/15 hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </li>
                  </ul>
                </>
              ) : (
                <Link href={item.href!} className="nav-link">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="xl:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="container-custom py-4 flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-left text-lg font-heading cursor-pointer"
                      onClick={() => setOpenDropdown((v) => (v === NAV_LINKS.indexOf(item) ? null : NAV_LINKS.indexOf(item)))}
                    >
                      {item.label}
                      <span className={clsx("transition-transform", openDropdown === NAV_LINKS.indexOf(item) && "rotate-180")}>
                        ⌄
                      </span>
                    </button>
                    {openDropdown === NAV_LINKS.indexOf(item) && (
                      <ul className="pl-4 pb-2 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block py-2 text-foreground/80"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block py-3 text-lg font-heading"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
