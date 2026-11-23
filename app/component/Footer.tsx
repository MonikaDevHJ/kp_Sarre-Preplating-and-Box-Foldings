
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#321b1e] px-5 py-10 text-center text-white">

      <Link href="/" className="flex flex-col items-center">
        <Image
          src="/images/Elegant KP Gold Emblem.png"
          alt="KP Sarees Logo"
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-contain"
        />

        <h2 className="mt-3 font-serif text-2xl font-bold text-[#e6c69c]">
          KP SAREES
        </h2>

        <p className="mt-1 text-[9px] tracking-[3px] text-white/60">
          PRE-PLEATING STUDIO
        </p>
      </Link>

      <div className="mt-7 flex flex-wrap justify-center gap-6 text-sm text-white/70">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-[#e6c69c]"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
        © 2026 KP Sarees. All Rights Reserved.
      </div>
    </footer>
  );
}
