
const gallery = [
  {
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800",
    title: "Traditional Saree",
  },
  {
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800",
    title: "Elegant Draping",
  },
  {
    image: "https://images.unsplash.com/photo-1583391733981-849840f1e9e7?w=800",
    title: "Bridal Collection",
  },
  {
    image: "https://images.unsplash.com/photo-1610189012906-4c3b4f7c9b7c?w=800",
    title: "Beautiful Saree",
  },
];

export default function Gallery() {
  return (
    <main className="bg-[#fffaf5] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#a77b4e]">
            Our Collection
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#791f32]">
            Saree Gallery
          </h1>

          <p className="mt-5 text-[#76645b]">
            A glimpse of elegance and traditional beauty.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl bg-white shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-80"
              />

              <div className="p-4 text-center">
                <h2 className="font-serif text-lg text-[#791f32]">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-serif text-3xl text-[#791f32]">
            Love What You See?
          </h2>

          <a
            href="/contact"
            className="mt-7 inline-block rounded-full bg-[#791f32] px-8 py-4 font-semibold text-white hover:bg-[#5e1726]"
          >
            Book Your Appointment →
          </a>
        </div>
      </div>
    </main>
  );
}
