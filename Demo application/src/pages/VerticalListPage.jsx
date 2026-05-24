import Icon from "../components/Icon.jsx";
import Pill from "../components/Pill.jsx";

export default function VerticalListPage({ title, studios, favorites, onFavorite, onBack, onOpenStudio, onOpenClass }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-8">
      <header className="sticky top-0 z-20 border-b border-[#111827]/10 bg-[#F9FAFB]/90 p-5 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sys-sm">
            <Icon name="ph-arrow-left" className="text-2xl" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-[#E5D9CB]">
            <Icon name="ph-sliders-horizontal" className="text-xl" />
          </button>
        </div>
        <div className="mt-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-500">Vertical List</p>
          <h1 className="mt-2 text-[32px] font-semibold leading-none">{title}</h1>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
          {["All", "Today", "Near me", "Top rated", "Low credit"].map((item, index) => (
            <Pill key={item} active={index === 0} onClick={() => undefined}>{item}</Pill>
          ))}
        </div>
      </header>

      <section className="space-y-4 p-5">
        {studios.flatMap((studio) => studio.classes.map((className, classIndex) => ({ studio, className, classIndex }))).map(({ studio, className, classIndex }) => (
          <article key={`${studio.id}-${className}`} className="grid grid-cols-[132px_1fr] gap-4 border-b border-[#111827]/10 pb-4">
            <button onClick={() => onOpenClass(studio, className)} className="relative h-32 overflow-hidden rounded-[22px] bg-[#E5D9CB] text-left">
              <img src={studio.image} alt={className} className="h-full w-full object-cover" />
              <span className="absolute bottom-2 left-2 rounded-full bg-[#4D54F8] px-2 py-1 text-xs font-semibold text-white">
                {studio.credits + classIndex} cr
              </span>
            </button>
            <div className="min-w-0">
              <button onClick={() => onOpenClass(studio, className)} className="block text-left">
                <h2 className="text-[19px] font-semibold leading-[1.05] text-[#111827]">{className}</h2>
                <p className="mt-1 text-sm text-[#111827]/75">
                  <Icon name="ph-star-fill" className="align-[-1px] text-primary-500" /> {studio.rating} ({studio.reviews}) · {studio.price}
                </p>
                <p className="mt-1 text-sm text-[#111827]/65">{studio.name} · {studio.area} ({studio.distance})</p>
              </button>
              <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar">
                {studio.nextTimes.slice(0, 3).map((time) => (
                  <span key={time} className="inline-flex h-7 shrink-0 items-center rounded-full bg-white px-3 text-xs font-semibold shadow-sys-sm">
                    {time}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button onClick={() => onOpenStudio(studio)} className="inline-flex h-9 items-center justify-center rounded-full bg-[#E5D9CB] px-4 text-sm font-semibold text-[#111827]">
                  Studio
                </button>
                <button onClick={() => onOpenClass(studio, className)} className="inline-flex h-9 items-center justify-center rounded-full bg-[#AAF980] px-4 text-sm font-semibold text-[#111827]">
                  Select time
                </button>
                <button onClick={() => onFavorite(studio.id)} className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-sys-sm">
                  <Icon name={favorites.includes(studio.id) ? "ph-heart-fill" : "ph-heart"} className={favorites.includes(studio.id) ? "text-primary-500" : ""} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
