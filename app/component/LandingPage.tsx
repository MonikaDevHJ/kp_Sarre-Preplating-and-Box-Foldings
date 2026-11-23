
"use client";

import React, { useState } from "react";
import Image from "next/image";

const whatsappNumber = "91XXXXXXXXXX"; // Add client's WhatsApp number
const logo = "/images/Elegant KP Gold Emblem.png";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

const services = [
  {
    number: "01",
    title: "Saree Pre-Pleating",
    description:
      "Perfectly arranged saree pleats to give you a beautiful and elegant look.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800",
  },
  {
    number: "02",
    title: "Saree Draping",
    description:
      "Professional saree draping services for weddings and special occasions.",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800",
  },
  {
    number: "03",
    title: "Bridal Saree Styling",
    description:
      "Look stunning on your special day with beautifully styled bridal sarees.",
    image:
      "https://images.unsplash.com/photo-1583391733981-849840f1e9e7?w=800",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=700",
  "https://images.unsplash.com/photo-1583391733981-849840f1e9e7?w=700",
  "https://images.unsplash.com/photo-1610189012906-4c3b4f7c9b7c?w=700",
];

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3">
      <Image
        src={logo}
        alt="KP Sarees Logo"
        width={footer ? 76 : 60}
        height={footer ? 76 : 60}
        priority
        className={`rounded-full object-contain ${
          footer ? "h-[76px] w-[76px]" : "h-12 w-12 sm:h-[60px] sm:w-[60px]"
        }`}
      />

      <div className="leading-tight">
        <h1
          className={`font-serif font-bold tracking-wide ${
            footer
              ? "text-2xl text-[#e6c69c]"
              : "text-xl text-[#791f32] sm:text-2xl"
          }`}
        >
          KP SAREES
        </h1>

        <p
          className={`mt-1 text-[9px] tracking-[3px] ${
            footer ? "text-white/60" : "text-[#a77b4e]"
          }`}
        >
          PRE-PLEATING STUDIO
        </p>
      </div>
    </a>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf5] text-[#33221e]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#eadfd2] bg-[#fffaf5]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-10">

          <BrandLogo />

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex lg:gap-9">
            {navLinks.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="transition hover:text-[#a52a43]"
              >
                {name}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#791f32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5e1726] md:block"
          >
            Book Appointment
          </a>

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

        {/* MOBILE MENU */}
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-[#eadfd2] bg-[#fffaf5] px-6 py-6 md:hidden">
            {navLinks.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium hover:text-[#a52a43]"
              >
                {name}
              </a>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#791f32] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </a>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="scroll-mt-24 overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-24 lg:px-10">

          <div className="order-2 md:order-1">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
              Elegance Begins With Every Pleat
            </p>

            <h2 className="max-w-xl font-serif text-5xl leading-[1.12] text-[#791f32] sm:text-6xl lg:text-7xl">
              Perfect Pleats.
              <span className="block italic text-[#a77b4e]">
                Timeless Elegance.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#76645b]">
              Make every occasion special with beautifully pre-pleated
              sarees. We bring elegance, comfort and perfection to
              every drape.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
              <a
                href={`${whatsappLink}?text=Hi%20KP%20Sarees,%20I%20would%20like%20to%20book%20a%20service.`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#791f32] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#5e1726] sm:px-8"
              >
                Book Your Saree
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#791f32] px-6 py-4 text-sm font-semibold text-[#791f32] transition hover:bg-[#791f32] hover:text-white sm:px-8"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#eadfd2] pt-7">
              {[
                ["100%", "Perfect Finish"],
                ["Easy", "Ready to Wear"],
                ["Love", "In Every Pleat"],
              ].map(([value, label]) => (
                <div key={label}>
                  <h3 className="font-serif text-2xl text-[#791f32] sm:text-3xl">
                    {value}
                  </h3>
                  <p className="mt-1 text-xs text-[#76645b]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-lg md:order-2">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-t-full border border-[#c9a477] sm:-right-5 sm:-top-5" />

            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000"
              alt="Elegant traditional saree"
              className="relative h-[390px] w-full rounded-t-full object-cover shadow-xl sm:h-[540px]"
            />

            <div className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-xl bg-white p-3 shadow-xl sm:-left-8 sm:p-5">
              <Image
                src={logo}
                alt="KP Sarees"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-contain"
              />

              <div>
                <p className="font-serif text-base italic text-[#791f32] sm:text-lg">
                  The Art of Draping
                </p>
                <p className="mt-1 text-xs text-[#76645b]">
                  Designed with love ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#f5eee5] px-5 py-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <img
            src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1000"
            alt="Traditional Indian saree styling"
            className="h-[350px] w-full rounded-lg object-cover shadow-lg sm:h-[420px]"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
              About KP Sarees
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#791f32] sm:text-5xl">
              Every Saree Has A Story. We Make It Beautiful.
            </h2>

            <p className="mt-6 leading-8 text-[#76645b]">
              At KP Sarees, we believe that every woman deserves to feel
              confident and beautiful in a saree. Our pre-pleating
              services make wearing a saree easier, more comfortable
              and elegant.
            </p>

            <p className="mt-4 leading-8 text-[#76645b]">
              From family celebrations to grand weddings, we help you
              get ready with carefully arranged pleats and beautiful
              draping.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block border-b-2 border-[#791f32] pb-2 font-semibold text-[#791f32]"
            >
              Know More About Us →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-24 px-5 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
              What We Offer
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#791f32] sm:text-5xl">
              Our Special Services
            </h2>

            <p className="mt-4 leading-7 text-[#76645b]">
              Making every saree experience effortless, elegant and memorable.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold tracking-widest text-[#b28b5c]">
                    {service.number}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-[#791f32]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#76645b]">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-block text-sm font-semibold text-[#791f32]"
                  >
                    Enquire Now →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#791f32] px-5 py-20 text-white lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs uppercase tracking-[4px] text-[#e6c69c]">
            The KP Experience
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Why Choose KP Sarees?
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["✦", "Perfect Pleats", "Beautifully arranged pleats for a flawless look."],
              ["♡", "Time Saving", "Get ready quickly without the hassle of draping."],
              ["✧", "Expert Styling", "Careful attention to every saree detail."],
              ["❀", "Special Occasions", "Perfect styling for weddings and celebrations."],
            ].map(([icon, title, description]) => (
              <div key={title}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#e6c69c] text-3xl text-[#e6c69c]">
                  {icon}
                </div>

                <h3 className="mt-5 font-serif text-xl">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="scroll-mt-24 px-5 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
              Our Collection
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#791f32] sm:text-5xl">
              Beauty In Every Drape
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <div key={image} className="group overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Saree collection ${index + 1}`}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[#f5eee5] px-5 py-20"
      >
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#fffaf5] px-6 py-14 text-center shadow-lg sm:px-12">

          <Image
            src={logo}
            alt="KP Sarees Logo"
            width={100}
            height={100}
            className="mx-auto h-24 w-24 rounded-full object-contain"
          />

          <p className="mt-5 text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
            Let's Get You Ready
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#791f32] sm:text-5xl">
            Your Perfect Saree Look Is Just A Message Away!
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#76645b]">
            Planning a wedding, celebration or special occasion?
            Get in touch with us and book your saree pre-pleating service.
          </p>

          <a
            href={`${whatsappLink}?text=Hi%20KP%20Sarees,%20I%20would%20like%20to%20enquire%20about%20saree%20pre-pleating.`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-[#791f32] px-9 py-4 font-semibold text-white transition hover:bg-[#5e1726]"
          >
            Chat With Us on WhatsApp →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#321b1e] px-5 py-10 text-center text-white">

        <div className="flex justify-center">
          <BrandLogo footer />
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-5 text-sm text-white/70 sm:gap-6">
          {navLinks.map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="transition hover:text-[#e6c69c]"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2026 KP Sarees. All Rights Reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition hover:scale-110"
      >
        ☎
      </a>

    </main>
  );
}
