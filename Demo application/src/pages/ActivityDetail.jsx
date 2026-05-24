import Icon from "../components/Icon.jsx";
import Pill from "../components/Pill.jsx";
import { studioImages, studios } from "../data/mockData.js";

export default function ActivityDetail({ activity, onBack, onOpenVerticalList }) {
  const item = activity || { date: "30/09", title: "Bouldering", place: "Stonegoat Climbing Gym", image: studioImages.climbing };

  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-28">
      <header className="flex items-center justify-between px-5 py-6">
        <button onClick={onBack} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <h1 className="text-[32px] font-semibold leading-none">Activity Detail</h1>
        <button className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-bookmark-simple" className="text-2xl" />
        </button>
      </header>

      <section className="space-y-5 px-5">
        <div className="relative overflow-hidden rounded-[24px] bg-[#111827] text-white shadow-sys-lg">
          <img src={item.image || studioImages.climbing} alt={item.title} className="h-72 w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/82 to-transparent"></div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[32px] font-semibold leading-none">{item.date || "30/09"}</p>
            <h2 className="mt-3 text-[32px] font-semibold leading-none">{item.title || "Bouldering"}</h2>
            <p className="mt-3 text-lg"><Icon name="ph-map-pin" /> {item.place || "Stonegoat Climbing Gym"}</p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-[#4D54F8] px-3 py-2 text-sm font-semibold">Verified</span>
              <span className="rounded-full bg-[#AAF980] px-3 py-2 text-sm font-semibold text-[#111827]">Completed</span>
            </div>
          </div>
        </div>

        <div className="scroll-edge-fade scroll-edge-fade-container flex gap-2 overflow-x-auto no-scrollbar">
          {["Bouldering", "Agility", "Endurance", "Intelligence"].map((tag, index) => (
            <Pill key={tag} active={index === 0} onClick={() => undefined}>{tag}</Pill>
          ))}
        </div>

        <section className="rounded-[22px] bg-white p-4 shadow-sys-sm">
          <h2 className="text-2xl font-semibold leading-none">Session Stats</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["Duration", "1 h 18 m", "ph-clock"],
              ["Calories", "486 kcal", "ph-fire"],
              ["Avg HR", "142 bpm", "ph-heart"],
              ["Max HR", "171 bpm", "ph-heartbeat"],
              ["Routes Attempted", "12", "ph-mountains"],
              ["Routes Sent", "8", "ph-check-circle"],
              ["Highest Grade", "V6", "ph-chart-line-up"],
              ["Success Rate", "67%", "ph-target"]
            ].map(([label, value, icon]) => (
              <div key={label} className="rounded-[22px] border border-[#111827]/10 p-3">
                <Icon name={icon} className="text-2xl text-primary-500" />
                <p className="mt-2 text-sm text-[#111827]/60">{label}</p>
                <p className="mt-1 text-2xl font-semibold leading-none">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[22px] bg-white p-4 shadow-sys-sm">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#AAF980]">
              <Icon name="ph-sparkle" className="text-3xl" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">Performance Insight</h2>
              <p className="mt-1 text-sm leading-6 text-[#111827]/65">You performed best on technical overhang problems. V5-V6 completion improved versus your last session.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold leading-none">Do Again / Similar Activities</h2>
            <button onClick={() => onOpenVerticalList("Similar Activities")} className="text-sm font-semibold">View all <Icon name="ph-caret-right" /></button>
          </div>
          <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {studios.slice(1, 4).map((studio) => (
              <button key={studio.id} onClick={() => onOpenVerticalList("Similar Activities")} className="w-44 shrink-0 overflow-hidden rounded-[22px] bg-white text-left shadow-sys-sm">
                <img src={studio.image} alt={studio.classes[0]} className="h-28 w-full object-cover" />
                <div className="p-3">
                  <p className="font-semibold leading-tight">{studio.classes[0]}</p>
                  <p className="mt-1 text-xs text-[#111827]/60">{studio.name}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
