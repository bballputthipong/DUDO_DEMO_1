import Icon from "./Icon.jsx";

export default function VerticalStudioList({ studios, favorites, onFavorite, onBook, onOpenStudio }) {
  const openStudio = (studio) => {
    if (onOpenStudio) {
      onOpenStudio(studio);
      return;
    }
    onBook(studio);
  };

  return (
    <div className="space-y-4">
      {studios.map((studio) => (
        <article key={studio.id} className="grid grid-cols-[132px_1fr] gap-4 border-b border-[#111827]/10 pb-4">
          <div className="relative h-28 overflow-hidden rounded-[22px] bg-[#F3F4F6]">
            <button onClick={() => openStudio(studio)} className="block h-full w-full text-left">
              <img src={studio.image} alt={studio.name} className="h-full w-full object-cover" />
            </button>
            <button
              onClick={() => onFavorite(studio.id)}
              className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full glass-light"
              aria-label={`Favorite ${studio.name}`}
            >
              <Icon name={favorites.includes(studio.id) ? "ph-heart-fill" : "ph-heart"} className={favorites.includes(studio.id) ? "text-primary-500" : ""} />
            </button>
          </div>
          <div className="min-w-0">
            <button onClick={() => openStudio(studio)} className="block text-left">
              <h3 className="text-[19px] font-semibold leading-[1.05] text-[#111827]">{studio.name}</h3>
              <p className="mt-1 text-sm text-[#111827]/75">
                <Icon name="ph-star-fill" className="align-[-1px] text-primary-500" /> {studio.rating} ({studio.reviews}) · {studio.price}
              </p>
              <p className="mt-1 text-sm text-[#111827]/65">
                {studio.area} ({studio.distance}) | {studio.time}
              </p>
            </button>
            <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar">
              {studio.tags.map((tag) => (
                <span key={tag} className="inline-flex h-7 shrink-0 items-center gap-1 rounded-full border border-primary-500/20 bg-white/70 px-2 text-xs font-medium text-[#111827]/75">
                  <Icon name="ph-tag-fill" className="text-[#111827]/45" />
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => onBook(studio)}
              className="mt-3 inline-flex h-9 items-center justify-center rounded-full bg-[#AAF980] px-4 text-sm font-semibold leading-none text-[#111827]"
            >
              Book {studio.credits} credits
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
