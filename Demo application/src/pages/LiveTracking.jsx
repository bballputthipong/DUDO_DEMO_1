import { useState } from "react";
import Icon from "../components/Icon.jsx";

const sports = ["Running", "Cycling", "Strength Training", "Swimming", "Yoga", "Hiking"];

export default function LiveTracking({ onBack, onComplete }) {
  const [selectedSport, setSelectedSport] = useState("Running");
  const [live, setLive] = useState(false);

  if (live) {
    return (
      <main className="min-h-screen bg-[#F9FAFB] px-5 pb-28 pt-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setLive(false)} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
            <Icon name="ph-arrow-left" className="text-2xl" />
          </button>
          <p className="text-sm font-semibold text-green-600">GPS <Icon name="ph-heart-fill" /> 142</p>
        </div>
        <section className="mt-8 rounded-[24px] bg-white p-5 shadow-sys-lg">
          <p className="text-center text-[32px] font-semibold leading-none">00:32:48</p>
          <p className="mt-1 text-center text-sm text-[#111827]/55">Duration</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {["5.23 km", "6'16 /km", "162 bpm", "486 kcal", "142 Cadence", "8.2 km/h"].map((item) => (
              <div key={item} className="rounded-[22px] bg-[#F9FAFB] p-3 text-sm font-semibold">{item}</div>
            ))}
          </div>
          <div className="map-field relative mt-5 h-56 overflow-hidden rounded-[20px]">
            <svg viewBox="0 0 260 180" className="absolute inset-0 h-full w-full">
              <path d="M22 134 C58 110 64 58 98 72 S151 119 177 72 S217 30 239 48" fill="none" stroke="#4D54F8" strokeWidth="6" strokeLinecap="round" />
              <circle cx="22" cy="134" r="8" fill="#AAF980" />
              <circle cx="239" cy="48" r="8" fill="#4D54F8" />
            </svg>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="h-12 rounded-full bg-[#E5D9CB] text-sm font-semibold">Pause</button>
            <button onClick={onComplete} className="h-12 rounded-full bg-pink-500 text-sm font-semibold text-white">Finish</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-28 pt-6">
      <button onClick={onBack} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
        <Icon name="ph-arrow-left" className="text-2xl" />
      </button>
      <section className="mt-8">
        <h1 className="text-center text-3xl font-semibold leading-none">Choose Your Sport</h1>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`h-24 rounded-[22px] border p-3 text-center font-semibold ${
                selectedSport === sport ? "border-[#4D54F8] bg-[#4D54F8] text-white" : "border-[#111827]/10 bg-white text-[#111827]"
              }`}
            >
              <Icon name={sport === "Running" ? "ph-person-simple-run" : sport === "Cycling" ? "ph-bicycle" : "ph-sparkle"} className="mb-2 text-3xl" />
              {sport}
            </button>
          ))}
        </div>
        <button onClick={() => setLive(true)} className="mt-5 h-12 w-full rounded-full bg-[#4D54F8] text-base font-semibold text-white">Start Tracking</button>
      </section>
    </main>
  );
}
