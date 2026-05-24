import Icon from "../components/Icon.jsx";
import Pill from "../components/Pill.jsx";
import { studioImages } from "../data/mockData.js";

const activities = [
  { date: "01/10", day: "Tue", title: "Pilates Individual Class", place: "Pillar Pilates Studio", tags: ["Strength", "Agility", "Intelligence", "Endurance"], image: studioImages.pilates },
  { date: "30/09", day: "Mon", title: "Bouldering", place: "Stonegoat Climbing Gym", tags: ["Bouldering", "Agility", "Intelligence", "Endurance"], image: studioImages.climbing },
  { date: "27/09", day: "Fri", title: "Running", place: "Benjakitti", tags: ["Cardio", "Agility", "Endurance", "Intelligence"], meta: "5.2 km · 32 min" },
  { date: "20/09", day: "Fri", title: "Ice Bath", place: "Benjakitti", tags: ["Recovery", "Wellness", "Endurance", "Resilience"], meta: "10 min" },
  { date: "17/09", day: "Tue", title: "Sauna", place: "Benjakitti", tags: ["Recovery", "Wellness", "Endurance", "Mindfulness"], image: studioImages.sauna },
  { date: "16/09", day: "Mon", title: "Badminton Playing", place: "Benjakitti", tags: ["Cardio", "Agility", "Endurance", "Coordination"], image: studioImages.court }
];

export default function ActivityHistory({ onBack, onOpenDetail }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-28">
      <header className="sticky top-0 z-20 flex items-center gap-3 bg-[#F9FAFB]/90 px-5 pb-5 dudo-subpage-header backdrop-blur-xl">
        <button onClick={onBack} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <h1 className="min-w-0 text-[32px] font-semibold leading-none text-[#06074A]">Activity History</h1>
      </header>

      <section className="px-5">
        {activities.map((activity) => (
          <button key={`${activity.date}-${activity.title}`} onClick={() => onOpenDetail(activity)} className="grid w-full grid-cols-[86px_minmax(0,1fr)] gap-5 border-b border-[#111827]/10 py-5 text-left">
            <div className="min-w-0">
              <p className="text-[25px] font-semibold leading-none text-[#06074A]">{activity.date}</p>
              <p className="mt-1 text-sm text-[#111827]/55">{activity.day}</p>
            </div>
            <div className="min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="truncate text-xl font-semibold leading-tight">{activity.title}</h2>
                  <p className="mt-1 text-base text-[#111827]/65">{activity.place}</p>
                </div>
                <Icon name="ph-caret-right" className="mt-2 shrink-0 text-2xl text-[#111827]/55" />
              </div>
              <div className="mt-3 flex max-w-full gap-2 overflow-x-auto no-scrollbar">
                {activity.tags.map((tag, index) => (
                  <Pill key={tag} active={index === 0} onClick={() => undefined} className={index === 0 ? "" : "border-[#111827]/10 bg-transparent"}>{tag}</Pill>
                ))}
              </div>
              {activity.image ? (
                <img src={activity.image} alt={activity.title} className="mt-4 h-40 w-full rounded-[24px] object-cover" />
              ) : (
                <p className="mt-4 text-sm font-semibold text-[#111827]/70">{activity.meta}</p>
              )}
            </div>
          </button>
        ))}
      </section>
    </main>
  );
}
