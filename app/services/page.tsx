
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Saree Pre-Pleating",
    description:
      "Get perfectly arranged saree pleats that make draping easy and give you a neat, elegant finish.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800",
  },
  {
    number: "02",
    title: "Saree Draping",
    description:
      "Professional saree draping for weddings, festivals, celebrations and special occasions.",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800",
  },
  {
    number: "03",
    title: "Bridal Saree Styling",
    description:
      "Beautiful bridal saree styling to help you look and feel special on your big day.",
    image:
      "https://images.unsplash.com/photo-1583391733981-849840f1e9e7?w=800",
  },
];

export default function Services() {
  return (
    <main className="bg-[#fffaf5] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
            What We Offer
          </p>
          <h1 className="mt-4 font-serif text-5xl text-[#791f32]">
            Our Services
          </h1>
          <p className="mt-5 text-[#76645b]">
            Beautiful styling for every special occasion.
          </p>
        </div>

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <p className="text-xs font-bold tracking-widest text-[#b28b5c]">
                  {service.number}
                </p>

                <h2 className="mt-3 font-serif text-2xl text-[#791f32]">
                  {service.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#76645b]">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-block font-semibold text-[#791f32]"
                >
                  Book This Service →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[#791f32] px-6 py-12 text-center text-white">
          <h2 className="font-serif text-3xl">
            Looking for the Perfect Saree Style?
          </h2>
          <p className="mt-4 text-white/80">
            Contact us to discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#791f32]"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </main>
  );
}
