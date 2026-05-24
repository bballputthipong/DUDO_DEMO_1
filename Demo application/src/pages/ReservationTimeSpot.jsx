import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { reservationDates, reservationTimeSlots } from "../data/mockData.js";

export default function ReservationTimeSpot({ studio, draft, onBack, onContinue }) {
  const [selectedDate, setSelectedDate] = useState(draft.date || reservationDates[1]);
  const [selectedSlot, setSelectedSlot] = useState(draft.slot || reservationTimeSlots[2]);

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-6">
      <header className="flex items-center gap-4">
        <button onClick={onBack} className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-500">Reservation flow</p>
          <h1 className="text-xl font-semibold leading-none">Select Time & Spot</h1>
        </div>
      </header>

      <section className="mt-8 flex justify-between gap-2">
        {reservationDates.map((item) => (
          <button
            key={`${item.day}-${item.date}`}
            onClick={() => setSelectedDate(item)}
            className={`flex h-20 flex-1 flex-col items-center justify-center rounded-[14px] text-xs font-semibold transition ${
              selectedDate.date === item.date ? "bg-[#4D54F8] text-white shadow-sys-lg" : "bg-white text-[#111827] shadow-sys-sm"
            }`}
          >
            <span>{item.day}</span>
            <span className="mt-1 opacity-75">{item.date}</span>
          </button>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/65">Tuesday, Aug 12</h2>
        <div className="mt-4 space-y-3">
          {reservationTimeSlots.map((slot) => {
            const active = selectedSlot.time === slot.time;
            return (
              <button
                key={slot.time}
                onClick={() => setSelectedSlot(slot)}
                className={`grid w-full grid-cols-[1fr_auto] items-center gap-4 rounded-[22px] border p-4 text-left transition ${
                  active ? "border-primary-500 bg-primary-500/5 shadow-sys-sm" : "border-[#111827]/10 bg-white"
                }`}
              >
                <div>
                  <p className={`text-base font-semibold ${active ? "text-primary-500" : "text-[#111827]"}`}>{slot.time}</p>
                  <p className="mt-1 text-sm text-[#111827]/65">{slot.level}</p>
                  <p className={`mt-1 text-xs font-semibold ${active ? "text-primary-500" : "text-[#111827]/55"}`}>{slot.spots} spots left</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-semibold leading-none">{studio.credits}</p>
                    <p className="text-xs text-[#111827]/60">Credits</p>
                  </div>
                  {active && (
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#4D54F8] text-white">
                      <Icon name="ph-check" className="text-xl" />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-5 rounded-[22px] bg-[#E5D9CB] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#111827]/65">Selected</p>
        <p className="mt-2 text-sm font-medium">{selectedDate.day}, {selectedDate.date} · {selectedSlot.time}</p>
        <p className="mt-1 text-sm text-[#111827]/65">{selectedSlot.level} · {studio.name}</p>
      </section>

      <button
        onClick={() => onContinue({
          studio,
          className: studio.classes[0],
          date: selectedDate,
          dateLabel: `${selectedDate.day}, ${selectedDate.date}, 2025`,
          slot: selectedSlot,
          time: selectedSlot.time,
          level: selectedSlot.level,
          spots: selectedSlot.spots,
          instructor: "Ben Parker"
        })}
        className="mt-6 h-14 w-full rounded-full bg-[#4D54F8] text-base font-semibold text-white shadow-sys-lg"
      >
        Continue
      </button>
    </main>
  );
}
