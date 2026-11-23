
"use client";

import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Saree Pre-Pleating");
  const [message, setMessage] = useState("");

  const whatsappNumber = "91XXXXXXXXXX";

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
    <main className="bg-[#fffaf5] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">

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

            <div className="mt-10 space-y-7">

              <div>
                <p className="text-sm font-semibold text-[#e6c69c]">
                  WhatsApp
                </p>
                <p className="mt-2 text-white/90">
                  +91 XXXXXXXXXX
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#e6c69c]">
                  Our Services
                </p>
                <p className="mt-2 text-white/90">
                  Saree Pre-Pleating, Draping & Bridal Styling
                </p>
              </div>

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

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-[#eadfd2] px-4 py-3 outline-none focus:border-[#791f32]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-[#eadfd2] px-4 py-3 outline-none focus:border-[#791f32]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Select Service
                </label>

                <select
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
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
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
      </div>
    </main>
  );
}
