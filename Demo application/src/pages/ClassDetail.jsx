import { useState } from "react";
import Icon from "../components/Icon.jsx";
import Pill from "../components/Pill.jsx";
import ReservationBottomSheet from "../components/ReservationBottomSheet.jsx";
import { gallerySections, studios } from "../data/mockData.js";

const dates = ["Today", "25 May", "26 May", "27 May", "28 May"];

export default function ClassDetail({
  studio,
  className,
  onBack,
  onStartReservation,
  onOpenStudio,
  onOpenReview,
  onOpenGallery,
  onOpenGallerySection,
  onOpenVerticalList
}) {
  const [date, setDate] = useState("Today");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const related = studios.filter((item) => item.id !== studio.id).slice(0, 3);

  const selectSlot = (time) => {
    setSelectedSlot({
      studio,
      className,
      selectedTime: time,
      time,
      selectedDate: date,
      dateLabel: date === "Today" ? "Tue, Aug 12, 2025" : date,
      level: "Intermediate",
      instructor: "Ben Parker",
      credits: studio.credits
    });
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-32">
      <section className="relative h-[28rem] overflow-hidden rounded-b-[32px] bg-[#111827]">
        <img src={studio.image} alt={className} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/35 via-transparent to-[#111827]/75"></div>
        <div className="absolute left-5 right-5 top-6 flex items-center justify-between">
          <button onClick={onBack} className="grid h-12 w-12 place-items-center rounded-full glass-dark text-white">
            <Icon name="ph-arrow-left" className="text-2xl" />
          </button>
          <button onClick={() => onOpenGallery()} className="grid h-12 w-12 place-items-center rounded-full glass-light text-[#111827]">
            <Icon name="ph-images" className="text-2xl" />
          </button>
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-[22px] glass-dark p-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#AAF980]">{studio.name}</p>
          <h1 className="mt-2 text-[32px] font-semibold leading-none">{className}</h1>
          <p className="mt-3 text-sm text-white/75">Coach-led class with verified DUDO check-in, progression data, and flex-ready gallery moments.</p>
        </div>
      </section>

      <section className="space-y-6 px-5 pt-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["Duration", studio.time, "ph-clock"],
            ["Level", "Intermediate", "ph-chart-line-up"],
            ["Credits", studio.credits, "ph-coin"]
          ].map(([label, value, icon]) => (
            <div key={label} className="rounded-[22px] bg-white p-4 shadow-sys-sm">
              <Icon name={icon} className="text-2xl text-primary-500" />
              <p className="mt-3 text-xs font-medium text-[#111827]/55">{label}</p>
              <p className="mt-1 text-lg font-semibold leading-none">{value}</p>
            </div>
          ))}
        </div>

        <button onClick={() => onOpenStudio(studio)} className="grid w-full grid-cols-[84px_1fr_auto] items-center gap-3 rounded-[22px] bg-white p-3 text-left shadow-sys-sm">
          <img src={studio.image} alt={studio.name} className="h-20 w-20 rounded-[22px] object-cover" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">Studio</p>
            <h2 className="mt-1 text-lg font-semibold leading-tight">{studio.name}</h2>
            <p className="mt-1 text-sm text-[#111827]/60">{studio.area} · {studio.distance}</p>
          </div>
          <Icon name="ph-arrow-right" className="text-2xl text-[#111827]/50" />
        </button>

        <GalleryStrip onOpenGallery={onOpenGallery} onOpenGallerySection={onOpenGallerySection} />

        <section className="rounded-[22px] bg-white p-4 shadow-sys-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">Schedule</p>
              <h2 className="mt-1 text-2xl font-semibold leading-none">Select Time</h2>
            </div>
            <button onClick={() => onOpenVerticalList("Similar Classes")} className="h-9 rounded-full bg-[#E5D9CB] px-4 text-sm font-semibold">See all</button>
          </div>
          <div className="scroll-edge-fade scroll-edge-fade-container mb-4 flex gap-2 overflow-x-auto no-scrollbar">
            {dates.map((item) => (
              <Pill key={item} active={date === item} onClick={() => setDate(item)}>{item}</Pill>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {studio.nextTimes.map((time, index) => {
              const active = selectedSlot?.selectedTime === time;
              return (
                <button
                  key={time}
                  onClick={() => selectSlot(time)}
                  className={`rounded-[22px] border p-3 text-left transition ${
                    active ? "border-[#4D54F8] bg-[#4D54F8] text-white shadow-sys-sm" : "border-[#111827]/10 bg-[#F9FAFB] text-[#111827]"
                  }`}
                >
                  <p className="font-semibold">{time}</p>
                  <p className={`mt-1 text-xs ${active ? "text-white/75" : "text-[#111827]/55"}`}>{index + 2} spots left</p>
                </button>
              );
            })}
          </div>
        </section>

        <button onClick={onOpenReview} className="w-full rounded-[22px] bg-white p-4 text-left shadow-sys-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold leading-none">Rating & Review</h2>
            <Icon name="ph-arrow-right" className="text-2xl" />
          </div>
          <p className="mt-3 text-sm text-[#111827]/65">
            <Icon name="ph-star-fill" className="text-primary-500" /> {studio.rating} · technique-focused · beginner-friendly
          </p>
        </button>

        <section className="rounded-[22px] bg-white p-4 shadow-sys-sm">
          <h2 className="text-2xl font-semibold leading-none">About this class</h2>
          <p className="mt-3 text-sm leading-6 text-[#111827]/68">
            {className} blends guided warm-up, skill work, and a clear cooldown. The instructor checks form throughout so the session feels structured without losing the studio energy.
          </p>
          <div className="scroll-edge-fade scroll-edge-fade-container mt-4 flex gap-2 overflow-x-auto no-scrollbar">
            {["Form check", "Small group", "DUDO verified"].map((item) => (
              <Pill key={item} active={false} onClick={() => undefined}>{item}</Pill>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold leading-none">Relevant Class</h2>
          <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {related.map((item) => (
              <button key={item.id} onClick={() => onOpenStudio(item)} className="w-44 shrink-0 text-left">
                <img src={item.image} alt={item.classes[0]} className="h-36 w-full rounded-[22px] object-cover" />
                <p className="mt-2 font-semibold leading-tight">{item.classes[0]}</p>
                <p className="mt-1 text-xs text-[#111827]/60">{item.name} · {item.credits} credits</p>
              </button>
            ))}
          </div>
        </section>
      </section>

      <ReservationBottomSheet slot={selectedSlot} onClose={() => setSelectedSlot(null)} onSchedule={onStartReservation} />
    </main>
  );
}

function GalleryStrip({ onOpenGallery, onOpenGallerySection }) {
  return (
    <section className="rounded-[22px] bg-white p-4 shadow-sys-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold leading-none">Gallery</h2>
        <button onClick={() => onOpenGallery()} className="grid h-10 w-10 place-items-center rounded-full bg-[#E5D9CB]">
          <Icon name="ph-arrow-right" className="text-xl" />
        </button>
      </div>
      <div className="scroll-edge-fade scroll-edge-fade-container flex gap-3 overflow-x-auto no-scrollbar">
        {gallerySections.map((section) => (
          <button key={section.id} onClick={() => onOpenGallerySection(section)} className="w-36 shrink-0 overflow-hidden rounded-[22px] bg-[#E5D9CB] text-left">
            <img src={section.images[0]} alt={section.label} className="h-28 w-full object-cover" />
            <p className="p-3 text-sm font-semibold">{section.label}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
