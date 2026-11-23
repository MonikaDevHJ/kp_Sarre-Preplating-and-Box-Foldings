
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Saree Pre-Pleating");
  const [message, setMessage] = useState("");

  const whatsappNumber = "91XXXXXXXXXX"; // Replace with client's number

  const googleMapsLink =
    "https://www.google.com/maps/place/kp+saree+pre+pleating+and+Box+folding/@12.9762124,77.51133,14z/data=!4m14!1m7!3m6!1s0x3bae3f04dcd7a85f:0x13bb56dbc9c64231!2skp+saree+pre+pleating+and+Box+folding!8m2!3d12.9761875!4d77.5278125!16s%2Fg%2F11mdw8w409!3m5!1s0x3bae3f04dcd7a85f:0x13bb56dbc9c64231!8m2!3d12.9761875!4d77.5278125!16s%2Fg%2F11mdw8w409";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enquiry = `
Hello KP Sarees!

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}

I would like to enquire about your services.
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`;

    window.open(url, "_blank");
  };

  return (
    <main className="bg-[#fffaf5] px-5 py-16 text-[#33221e] sm:py-20">
      <div className="mx-auto max-w-6xl">

        {/* PAGE HEADING */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
            Get In Touch
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#791f32]">
            Contact Us
          </h1>

          <p className="mt-5 text-[#76645b]">
            We would love to hear from you.
          </p>
        </div>

        {/* CONTACT INFORMATION + FORM */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* CONTACT INFORMATION */}
          <div className="rounded-2xl bg-[#791f32] p-8 text-white sm:p-10">
            <h2 className="font-serif text-3xl">
              Let's Talk!
            </h2>

            <p className="mt-5 leading-8 text-white/80">
              Have questions about saree pre-pleating or bridal styling?
              Send us an enquiry. We will be happy to help.
            </p>

            <div className="mt-10 space-y-8">

              {/* WHATSAPP */}
              <div>
                <p className="text-sm font-semibold text-[#e6c69c]">
                  WhatsApp
                </p>

                <p className="mt-2 text-white/90">
                  +91 XXXXXXXXXX
                </p>
              </div>

              {/* SERVICES */}
              <div>
                <p className="text-sm font-semibold text-[#e6c69c]">
                  Our Services
                </p>

                <p className="mt-2 leading-7 text-white/90">
                  Saree Pre-Pleating, Draping & Bridal Styling
                </p>
              </div>

              {/* LOCATION */}
              <div>
                <p className="text-sm font-semibold text-[#e6c69c]">
                  Our Location
                </p>

                <p className="mt-2 leading-7 text-white/90">
                  KP Saree Pre Pleating and Box Folding
                </p>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#e6c69c] px-5 py-3 text-sm font-semibold text-[#e6c69c] transition hover:bg-[#e6c69c] hover:text-[#791f32]"
                >
                  📍 View Location on Google Maps →
                </a>
              </div>

              {/* BUSINESS HOURS */}
              <div>
                <p className="text-sm font-semibold text-[#e6c69c]">
                  Business Hours
                </p>

                <p className="mt-2 text-white/90">
                  Contact us for appointment availability.
                </p>
              </div>

            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="rounded-2xl border border-[#eadfd2] bg-white p-6 shadow-lg sm:p-10">

            <h2 className="font-serif text-3xl text-[#791f32]">
              Send an Enquiry
            </h2>

            <p className="mt-3 text-sm text-[#76645b]">
              Fill in your details and connect with us through WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-[#eadfd2] px-4 py-3 outline-none focus:border-[#791f32]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-[#eadfd2] px-4 py-3 outline-none focus:border-[#791f32]"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  Select Service
                </label>

                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-lg border border-[#eadfd2] bg-white px-4 py-3 outline-none focus:border-[#791f32]"
                >
                  <option>Saree Pre-Pleating</option>
                  <option>Saree Draping</option>
                  <option>Bridal Saree Styling</option>
                  <option>Other Enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-lg border border-[#eadfd2] px-4 py-3 outline-none focus:border-[#791f32]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#791f32] px-6 py-4 font-semibold text-white transition hover:bg-[#5e1726]"
              >
                Send Enquiry on WhatsApp →
              </button>

            </form>
          </div>
        </div>

        {/* GOOGLE MAP SECTION */}
        <section className="mt-16">

          <div className="mb-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
              Find Our Store
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#791f32]">
              Visit KP Sarees
            </h2>

            <p className="mt-3 text-sm text-[#76645b]">
              Find our store easily using Google Maps.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#eadfd2] bg-white shadow-lg">

            {/* INTERACTIVE GOOGLE MAP */}
            <iframe
              title="KP Saree Pre Pleating and Box Folding Location"
              src="https://www.google.com/maps?q=12.9761875,77.5278125&z=16&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* MAP FOOTER */}
            <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-7">

              <div>
                <h3 className="font-serif text-xl text-[#791f32]">
                  KP Saree Pre Pleating and Box Folding
                </h3>

                <p className="mt-2 text-sm text-[#76645b]">
                  Find us on Google Maps and plan your visit.
                </p>
              </div>

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#791f32] px-7 py-3 font-semibold text-white transition hover:bg-[#5e1726]"
              >
                Get Directions →
              </a>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
