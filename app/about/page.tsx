
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-[#fffaf5] px-5 py-16 text-[#33221e] sm:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
            Get To Know Us
          </p>
          <h1 className="mt-4 font-serif text-5xl text-[#791f32]">
            About KP Sarees
          </h1>
          <p className="mt-5 text-[#76645b]">
            The beauty of tradition, the comfort of perfection.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=1000"
            alt="Traditional saree"
            width={800}
            height={900}
            unoptimized
            className="h-[380px] w-full rounded-xl object-cover shadow-lg sm:h-[480px]"
          />

          <div>
            <h2 className="font-serif text-4xl leading-tight text-[#791f32]">
              Every Saree Has A Story. We Make It Beautiful.
            </h2>

            <p className="mt-6 leading-8 text-[#76645b]">
              At KP Sarees, we believe every woman deserves to feel
              confident and beautiful in a saree.
            </p>

            <p className="mt-4 leading-8 text-[#76645b]">
              Our saree pre-pleating and styling services help make
              traditional dressing easier, more comfortable and elegant.
              Whether it is a wedding, festival or family celebration,
              we want you to enjoy every special moment.
            </p>

            <p className="mt-4 leading-8 text-[#76645b]">
              Our focus is on beautiful pleats, careful styling and
              making every saree experience memorable.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-block rounded-full bg-[#791f32] px-8 py-4 font-semibold text-white hover:bg-[#5e1726]"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-[#f5eee5] px-6 py-12 text-center">
          <h2 className="font-serif text-3xl text-[#791f32]">
            Our Promise
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#76645b]">
            Every detail matters. Our aim is to help you feel comfortable,
            confident and elegant in every saree you wear.
          </p>
        </div>
      </div>
    </main>
  );
}
