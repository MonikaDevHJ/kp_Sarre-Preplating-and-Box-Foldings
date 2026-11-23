
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappNumber = "91XXXXXXXXXX";

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfd2] bg-[#fffaf5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-10">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Elegant KP Gold Emblem.png"
            alt="KP Sarees Logo"
            width={60}
            height={60}
            priority
            className="h-12 w-12 rounded-full object-contain sm:h-[60px] sm:w-[60px]"
          />

          <div className="leading-tight">
            <h1 className="font-serif text-xl font-bold tracking-wide text-[#791f32] sm:text-2xl">
              KP SAREES
            </h1>
            <p className="mt-1 text-[9px] tracking-[3px] text-[#a77b4e]">
              PRE-PLEATING STUDIO
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex lg:gap-9">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-[#a52a43] ${
                  active
                    ? "border-b-2 border-[#791f32] pb-1 font-semibold text-[#791f32]"
                    : "text-[#33221e]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* BOOK APPOINTMENT */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-[#791f32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5e1726] md:block"
        >
          Book Appointment
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#eadfd2] text-2xl md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="flex flex-col gap-5 border-t border-[#eadfd2] bg-[#fffaf5] px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "font-bold text-[#791f32]"
                  : "text-[#33221e]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#791f32] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
