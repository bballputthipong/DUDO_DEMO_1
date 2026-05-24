import Icon from "./Icon.jsx";

export default function BookingSummaryCard({ booking, compact = false }) {
  const studio = booking.studio || booking;

  return (
    <article className={`rounded-[22px] border border-[#111827]/10 bg-white shadow-sys-sm ${compact ? "p-3" : "p-4"}`}>
      <div className="grid grid-cols-[88px_1fr] gap-3">
        <img src={studio.image} alt={studio.name} className="h-28 w-[88px] rounded-[22px] object-cover" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">{booking.className || studio.classes[0]}</p>
          <h3 className="mt-1 text-base font-semibold leading-tight">{studio.name}</h3>
          <p className="mt-1 text-sm text-[#111827]/60">{booking.level || "Intermediate"} · 90 min</p>
          <div className="mt-3 space-y-2 text-sm text-[#111827]/70">
            <p><Icon name="ph-map-pin" className="mr-2 text-primary-500" />{studio.area}, Bangkok</p>
            <p><Icon name="ph-calendar-blank" className="mr-2 text-primary-500" />{booking.dateLabel || "Tue, Aug 12, 2025"}</p>
            <p><Icon name="ph-clock" className="mr-2 text-primary-500" />{booking.time || studio.nextTimes[0]}</p>
            <p><Icon name="ph-user" className="mr-2 text-primary-500" />Instructor: {booking.instructor || "Ben Parker"}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
