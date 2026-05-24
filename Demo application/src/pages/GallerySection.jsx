import Icon from "../components/Icon.jsx";

export default function GallerySection({ studio, section, onBack }) {
  const images = [...section.images, studio.image, ...section.images.slice(0, 2)];

  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-8">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#111827]/10 bg-[#F9FAFB]/90 p-5 backdrop-blur-xl">
        <button onClick={onBack} className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">{studio.name}</p>
          <p className="text-sm font-semibold">{section.images.length + 3} photos</p>
        </div>
      </header>

      <section className="space-y-6 p-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-500">Gallery Section</p>
          <h1 className="mt-2 text-[32px] font-semibold leading-none">{section.label}</h1>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              className={`group overflow-hidden rounded-[20px] bg-[#E5D9CB] shadow-sys-sm ${
                index === 0 || index === 5 ? "col-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`${section.label} ${index + 1}`}
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                  index === 0 || index === 5 ? "h-72" : "h-44"
                }`}
              />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
