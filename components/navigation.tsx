"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const links = [
  ["/", "Úvod"],
  ["/sluzby", "Služby"],
  ["/projekty", "Moje práce"],
  ["/o-mne", "O mně"],
  ["/blog", "Blog"],
  ["/kontakt", "Kontakt"],
] as const;
export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="cf-header">
      <a className="cf-skip" href="#main-content">
        Přejít na obsah
      </a>
      <div className="cf-wrap cf-nav-row">
        <Link href="/" className="cf-brand" aria-label="Linklady – úvod">
          linklady<span>.</span>
        </Link>
        <nav className="cf-desktop-nav" aria-label="Hlavní navigace">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="cf-button cf-blue cf-nav-cta" href="/kontakt">
          Probrat projekt ↗
        </Link>
        <button
          ref={button}
          type="button"
          className="cf-menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="cf-mobile-nav cf-wrap"
        aria-label="Mobilní navigace"
        hidden={!open}
      >
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/kontakt"
          className="cf-button cf-blue"
          onClick={() => setOpen(false)}
        >
          Probrat projekt ↗
        </Link>
      </nav>
    </header>
  );
}
