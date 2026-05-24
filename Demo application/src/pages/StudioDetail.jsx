import { useState } from "react";
import Icon from "../components/Icon.jsx";
import Pill from "../components/Pill.jsx";
import ReservationBottomSheet from "../components/ReservationBottomSheet.jsx";
import StudioCard from "../components/StudioCard.jsx";
import { gallerySections, studios } from "../data/mockData.js";

const dates = ["Today", "25 May", "26 May", "27 May", "28 May"];
const sections = ["All", "Class", "Open Gym", "Private", "Recovery"];

export default function StudioDetail({
  studio,
  onBack,
  onStartReservation,
  onOpenClass,
  onOpenReview,
  onOpenGallery,
  onOpenGallerySection,
  onOpenVerticalList,
  onOpenStudio,
  favorite,
  onFavorite
}) {
  const [tab, setTab] = useState("Main");
  const [date, setDate] = useState("Today");
  const [category, setCategory] = useState("All");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const related = studios.filter((item) => item.id !== studio.id).slice(0, 3);

  const selectSlot = (className, time, classIndex) => {
    setSelectedSlot({
      studio,
      className,
      selectedTime: time,
      time,
      selectedDate: date,
      dateLabel: date === "Today" ? "Tue, Aug 12, 2025" : date,
      level: classIndex === 0 ? "Intermediate" : "All Levels",
      instructor: classIndex === 0 ? "Ben Parker" : "Nina S.",
      credits: studio.credits + classIndex
    });
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-32">
      <section className="relative h-[29rem] overflow-hidden rounded-b-[32px] bg-[#111827]">
        <img src={studio.image} alt={studio.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/35 via-transparent to-[#111827]/70"></div>
        <div className="absolute left-5 right-5 top-6 flex items-center justify-between">
          <button onClick={onBack} className="grid h-12 w-12 place-items-center rounded-full glass-dark text-white">
            <Icon name="ph-arrow-left" className="text-2xl" />
          </button>
          <div className="flex gap-2">
            <button onClick={() => onOpenGallery()} className="grid h-12 w-12 place-items-center rounded-full glass-light text-[#111827]">
              <Icon name="ph-images" className="text-2xl" />
            </button>
            <button onClick={() => onFavorite(studio.id)} className="grid h-12 w-12 place-items-center rounded-full glass-light text-[#111827]">
              <Icon name={favorite ? "ph-heart-fill" : "ph-heart"} className={favorite ? "text-2xl text-primary-500" : "text-2xl"} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="mb-4 flex w-fit rounded-full bg-white/95 p-1 shadow-sys-sm">
            {["Main", "Detail"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`h-10 rounded-full px-8 text-sm font-semibold transition ${
                  tab === item ? "bg-[#111827] text-white" : "text-[#111827]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="rounded-[22px] glass-dark p-4 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#AAF980]">{studio.area} · {studio.distance}</p>
            <h1 className="mt-2 text-[32px] font-semibold leading-none">{studio.name}</h1>
            <p className="mt-3 text-sm text-white/75">{studio.vibe}</p>
          </div>
        </div>
      </section>

      {tab === "Main" ? (
        <section className="space-y-6 px-5 pt-5">
          <StudioSummary studio={studio} onOpenReview={onOpenReview} />

          <div className="flex max-w-full gap-2 overflow-x-auto no-scrollbar">
            {studio.tags.map((tag) => (
              <Pill key={tag} active={false} onClick={() => setCategory(tag)}>{tag}</Pill>
            ))}
          </div>

          <div className="rounded-[24px] bg-white p-4 shadow-sys-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">Class schedule</p>
                <h2 className="mt-1 text-[26px] font-semibold leading-none text-[#06074A]">Pick class & time</h2>
              </div>
              <button onClick={() => onOpenVerticalList("All Studio Classes")} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#E5D9CB]">
                <Icon name="ph-arrow-right" className="text-xl" />
              </button>
            </div>

            <div className="mb-3 flex max-w-full gap-2 overflow-x-auto no-scrollbar">
              {sections.map((item) => (
                <Pill key={item} active={category === item} onClick={() => setCategory(item)}>{item}</Pill>
              ))}
            </div>
            <div className="mb-4 flex max-w-full gap-2 overflow-x-auto no-scrollbar">
              {dates.map((item) => (
                <Pill key={item} active={date === item} onClick={() => setDate(item)}>{item}</Pill>
              ))}
            </div>

            <div className="space-y-4">
              {studio.classes.map((className, classIndex) => (
                <article key={className} className="rounded-[22px] border border-[#111827]/10 bg-[#F9FAFB] p-3">
                  <button onClick={() => onOpenClass(studio, className)} className="mb-3 flex w-full items-start justify-between gap-3 text-left">
                    <div className="min-w-0">
                      <p className="truncate text-lg font-semibold leading-tight">{className}</p>
                      <p className="mt-1 truncate text-sm text-[#111827]/60">{classIndex === 0 ? "Intermediate" : "All Levels"} · {studio.time} · {classIndex === 0 ? "Ben Parker" : "Nina S."}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#AAF980] px-3 py-1 text-sm font-semibold text-[#111827]">{studio.credits + classIndex} cr</span>
                  </button>
                  <div className="grid grid-cols-4 gap-2 max-[390px]:grid-cols-2">
                    {studio.nextTimes.map((time) => {
                      const active = selectedSlot?.className === className && selectedSlot?.selectedTime === time;
                      return (
                        <button
                          key={`${className}-${time}`}
                          onClick={() => selectSlot(className, time, classIndex)}
                          className={`h-11 rounded-[22px] border text-sm font-semibold transition ${
                            active ? "border-[#4D54F8] bg-[#4D54F8] text-white shadow-sys-sm" : "border-[#111827]/10 bg-white text-[#111827]"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <GalleryPreview onOpenGallery={onOpenGallery} onOpenGallerySection={onOpenGallerySection} />
          <ReviewPreview studio={studio} onOpenReview={onOpenReview} />
          <RelatedStudios studios={related} onOpenStudio={onOpenStudio} onFavorite={onFavorite} favorites={[]} />
        </section>
      ) : (
        <section className="space-y-6 px-5 pt-5">
          <StudioSummary studio={studio} onOpenReview={onOpenReview} />
          <GalleryPreview onOpenGallery={onOpenGallery} onOpenGallerySection={onOpenGallerySection} />
          <ReviewPreview studio={studio} onOpenReview={onOpenReview} />
          <InfoBlock studio={studio} />
          <RelatedClasses studio={studio} onOpenClass={onOpenClass} onOpenVerticalList={onOpenVerticalList} />
        </section>
      )}

      {tab === "Main" && (
        <ReservationBottomSheet slot={selectedSlot} onClose={() => setSelectedSlot(null)} onSchedule={onStartReservation} />
      )}
    </main>
  );
}

function StudioSummary({ studio, onOpenReview }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {[
        ["Rating", studio.rating, "ph-star-fill"],
        ["Reviews", studio.reviews, "ph-chat-circle-text"],
        ["From", `${studio.credits} cr`, "ph-coin"]
      ].map(([label, value, icon]) => (
        <button
          key={label}
          onClick={label === "Reviews" ? onOpenReview : undefined}
          className="rounded-[22px] bg-white p-4 text-left shadow-sys-sm"
        >
          <Icon name={icon} className="text-2xl text-primary-500" />
          <p className="mt-3 text-xs font-medium text-[#111827]/55">{label}</p>
          <p className="mt-1 text-xl font-semibold leading-none">{value}</p>
        </button>
      ))}
    </div>
  );
}

function GalleryPreview({ onOpenGallery, onOpenGallerySection }) {
  return (
    <section className="rounded-[22px] bg-white p-4 shadow-sys-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold leading-none">Gallery</h2>
        <button onClick={() => onOpenGallery()} className="grid h-10 w-10 place-items-center rounded-full bg-[#E5D9CB]">
          <Icon name="ph-arrow-right" className="text-xl" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {gallerySections.slice(0, 3).map((section, index) => (
          <button
            key={section.id}
            onClick={() => onOpenGallerySection(section)}
            className={`relative overflow-hidden rounded-[22px] bg-[#E5D9CB] text-left ${index === 0 ? "col-span-2 row-span-2 h-40" : "h-[76px]"}`}
          >
            <img src={section.images[0]} alt={section.label} className="h-full w-full object-cover" />
            <span className="absolute bottom-2 left-2 rounded-full glass-dark px-2 py-1 text-xs font-semibold text-white">{section.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ReviewPreview({ studio, onOpenReview }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold leading-none">Rating & Review</h2>
        <button onClick={onOpenReview} className="h-9 rounded-full bg-[#E5D9CB] px-4 text-sm font-semibold">See all</button>
      </div>
      <button onClick={onOpenReview} className="w-full rounded-[22px] bg-white p-4 text-left shadow-sys-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[#AAF980] text-2xl font-semibold">{studio.rating}</div>
          <div>
            <p className="font-semibold">Verified visits love this studio</p>
            <p className="text-sm text-[#111827]/60">{studio.reviews} reviews · clean space · strong coach cues</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-[#111827]/70">"Coach gave precise cues and the room felt premium. Booking by credits was quick."</p>
      </button>
    </section>
  );
}

function InfoBlock({ studio }) {
  return (
    <section className="space-y-4 rounded-[22px] bg-white p-4 shadow-sys-sm">
      <div>
        <h2 className="text-2xl font-semibold leading-none">About</h2>
        <p className="mt-3 text-sm leading-6 text-[#111827]/68">{studio.vibe} DUDO members use this studio for structured sessions, verified check-ins, and community flex posts.</p>
      </div>
      {[
        ["Open - Close", "06:00 - 22:00", "ph-clock"],
        ["Contact", "02-456-1290", "ph-phone"],
        ["Address", `${studio.area}, Bangkok`, "ph-map-pin"]
      ].map(([label, value, icon]) => (
        <div key={label} className="flex items-center gap-3 rounded-[22px] bg-[#F3F4F6] p-3">
          <Icon name={icon} className="text-2xl text-primary-500" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#111827]/45">{label}</p>
            <p className="text-sm font-semibold">{value}</p>
          </div>
        </div>
      ))}
      <div className="map-field relative h-40 overflow-hidden rounded-[22px]">
        <div className="absolute left-[45%] top-[38%] grid h-12 w-12 place-items-center rounded-full bg-[#AAF980] shadow-sys-lg">
          <Icon name="ph-map-pin-fill" className="text-2xl" />
        </div>
      </div>
    </section>
  );
}

function RelatedClasses({ studio, onOpenClass, onOpenVerticalList }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold leading-none">Relevant Class</h2>
        <button onClick={() => onOpenVerticalList("Relevant Classes")} className="h-9 rounded-full bg-[#E5D9CB] px-4 text-sm font-semibold">See all</button>
      </div>
      <div className="space-y-3">
        {studio.classes.map((className) => (
          <button key={className} onClick={() => onOpenClass(studio, className)} className="grid w-full grid-cols-[72px_1fr_auto] items-center gap-3 rounded-[22px] bg-white p-3 text-left shadow-sys-sm">
            <img src={studio.image} alt={className} className="h-16 w-16 rounded-[22px] object-cover" />
            <div>
              <p className="font-semibold leading-tight">{className}</p>
              <p className="mt-1 text-sm text-[#111827]/60">{studio.name}</p>
            </div>
            <Icon name="ph-arrow-right" className="text-2xl text-[#111827]/50" />
          </button>
        ))}
      </div>
    </section>
  );
}

function RelatedStudios({ studios, onOpenStudio, onFavorite, favorites }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold leading-none">Related Studio</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        {studios.map((studio) => (
          <StudioCard
            key={studio.id}
            studio={studio}
            compact
            onBook={onOpenStudio}
            onOpenStudio={onOpenStudio}
            onFavorite={onFavorite}
            favorite={favorites.includes(studio.id)}
          />
        ))}
      </div>
    </section>
  );
}
