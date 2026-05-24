import Icon from "./Icon.jsx";

export default function StudioCard({ studio, compact, onBook, onOpenStudio, onFavorite, favorite }) {
  const openStudio = () => {
    if (onOpenStudio) {
      onOpenStudio(studio);
      return;
    }
    onBook(studio);
  };

  return (
    <article className={`group relative ${compact ? "w-44 shrink-0" : "w-56 shrink-0"}`}>
      <button onClick={openStudio} className="relative block aspect-[1.25/1] w-full overflow-hidden rounded-[22px] bg-[#F3F4F6] text-left">
        <img src={studio.image} alt={studio.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute bottom-2 left-2 rounded-full bg-[#4D54F8] px-2 py-1 text-xs font-semibold text-white">
          {studio.credits} Credits
        </span>
      </button>
      <button
        onClick={() => onFavorite(studio.id)}
        className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full glass-light text-[#111827]"
        aria-label={`Favorite ${studio.name}`}
      >
        <Icon name={favorite ? "ph-heart-fill" : "ph-heart"} className={favorite ? "text-lg text-primary-500" : "text-lg"} />
      </button>
      <button onClick={openStudio} className="mt-2 block min-h-[76px] w-full text-left">
        <h3 className="line-clamp-2 text-[17px] font-semibold leading-[1.08] text-[#111827]">{studio.name}</h3>
        <p className="mt-1 text-sm text-[#111827]/75">
          <Icon name="ph-star-fill" className="align-[-1px] text-primary-500" /> {studio.rating} ({studio.reviews}) · {studio.price}
        </p>
        <p className="mt-1 text-xs text-[#111827]/65">
          {studio.area} ({studio.distance}) | {studio.time}
        </p>
      </button>
    </article>
  );
}
