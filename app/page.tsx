
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#fffaf5] text-[#33221e]">

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-24 lg:px-10">

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
            Elegance Begins With Every Pleat
          </p>

          <h1 className="font-serif text-5xl leading-tight text-[#791f32] sm:text-6xl lg:text-7xl">
            Perfect Pleats.
            <span className="block italic text-[#a77b4e]">
              Timeless Elegance.
            </span>
          </h1>

          <p className="mt-7 max-w-lg leading-8 text-[#76645b]">
            Make every occasion special with beautifully pre-pleated
            sarees. We bring elegance, comfort and perfection to every drape.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#791f32] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#5e1726]"
            >
              Book Your Saree
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-[#791f32] px-8 py-4 text-sm font-semibold text-[#791f32] transition hover:bg-[#791f32] hover:text-white"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#eadfd2] pt-7">
            <div>
              <h3 className="font-serif text-3xl text-[#791f32]">100%</h3>
              <p className="mt-1 text-xs text-[#76645b]">Perfect Finish</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-[#791f32]">Easy</h3>
              <p className="mt-1 text-xs text-[#76645b]">Ready to Wear</p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-[#791f32]">Love</h3>
              <p className="mt-1 text-xs text-[#76645b]">In Every Pleat</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-t-full border border-[#c9a477]" />

          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000"
            alt="Beautiful traditional saree"
            width={700}
            height={900}
            priority
            unoptimized
            className="relative h-[420px] w-full rounded-t-full object-cover shadow-xl sm:h-[550px]"
          />

          <div className="absolute -bottom-5 left-3 rounded-xl bg-white p-5 shadow-lg">
            <p className="font-serif text-lg italic text-[#791f32]">
              The Art of Draping
            </p>
            <p className="mt-1 text-xs text-[#76645b]">
              Designed with love ❤️
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-[#f5eee5] px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
            Welcome to KP Sarees
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#791f32] sm:text-5xl">
            Making Every Saree Special
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#76645b]">
            We make saree wearing easier and more beautiful with
            carefully arranged pleats, professional draping and
            bridal styling services.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-full border border-[#791f32] px-8 py-3 font-semibold text-[#791f32] hover:bg-[#791f32] hover:text-white"
          >
            Discover Our Story →
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
            What We Offer
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#791f32] sm:text-5xl">
            Our Special Services
          </h2>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {[
              {
                title: "Saree Pre-Pleating",
                image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700",
              },
              {
                title: "Saree Draping",
                image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=700",
              },
              {
                title: "Bridal Styling",
                image: "https://images.unsplash.com/photo-1583391733981-849840f1e9e7?w=700",
              },
            ].map((service) => (
              <div key={service.title} className="overflow-hidden rounded-xl bg-white shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover"
                />
                <h3 className="p-5 font-serif text-2xl text-[#791f32]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-10 inline-block rounded-full bg-[#791f32] px-8 py-4 font-semibold text-white hover:bg-[#5e1726]"
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#791f32] px-5 py-16 text-center text-white">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Ready for Your Perfect Saree Look?
        </h2>
        <p className="mt-4 text-white/80">
          Get in touch with KP Sarees today.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#791f32] hover:bg-[#f5eee5]"
        >
          Contact Us →
        </Link>
      </section>

    </main>
  );
}
