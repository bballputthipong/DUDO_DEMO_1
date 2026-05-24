import Icon from "../components/Icon.jsx";
import { TrendCard } from "../components/WellnessCharts.jsx";
import { studios } from "../data/mockData.js";

export default function PersonalDashboard({ onBack, onOpenStudio, onOpenVerticalList }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-28">
      <header className="flex items-center justify-between px-5 py-6">
        <button onClick={onBack} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <h1 className="text-center text-[32px] font-semibold leading-none">Personal Dashboard</h1>
        <button className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-calendar" className="text-2xl" />
        </button>
      </header>

      <section className="space-y-5 px-5">
        <div className="mx-auto grid h-12 w-64 grid-cols-3 rounded-full bg-[#F3F4F6] p-1">
          {["Day", "Week", "Month"].map((item) => (
            <button key={item} className={`rounded-full text-sm font-semibold ${item === "Week" ? "bg-white text-primary-500 shadow-sys-sm" : "text-[#111827]/60"}`}>{item}</button>
          ))}
        </div>

        <section className="rounded-[22px] bg-white p-5 shadow-sys-sm">
          <div className="grid grid-cols-[132px_1fr] gap-4">
            <div className="relative grid h-32 w-32 place-items-center rounded-full" style={{ background: "conic-gradient(#AAF980 0 18%, #4D54F8 18% 82%, #E5D9CB 82% 100%)" }}>
              <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-center">
                <div>
                  <p className="text-xs font-semibold">Recovery Score</p>
                  <p className="text-[36px] font-semibold leading-none">82</p>
                  <p className="text-sm font-semibold">/100</p>
                </div>
              </div>
            </div>
            <div>
              <span className="rounded-full bg-[#AAF980]/55 px-4 py-2 text-sm font-semibold">+11 vs last week</span>
              <h2 className="mt-5 text-2xl font-semibold leading-none">Ready to Train</h2>
              <p className="mt-2 text-sm text-[#111827]/65">Your body is primed and recovery is trending up.</p>
              <MiniLine />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 divide-x divide-[#111827]/10 border-t border-[#111827]/10 pt-4">
            {["52 bpm Resting HR", "68 ms HRV", "85 Sleep Quality"].map((item) => (
              <p key={item} className="text-center text-sm font-semibold">{item}</p>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-3">
          <DashboardCard title="Steps" value="8,432" detail="84% of goal" icon="ph-sneaker-move" bars />
          <DashboardCard title="Sleep" value="7 h 24 m" detail="Good quality" icon="ph-moon" />
          <DashboardCard title="Heart" value="52 bpm" detail="68 ms HRV" icon="ph-heart" hot />
          <DashboardCard title="Skin Temperature" value="36.6°c" detail="+0.2°c vs baseline" icon="ph-thermometer" />
          <DashboardCard title="Emotion" value="Good" detail="Stable mood" icon="ph-smiley" />
          <div className="rounded-[22px] bg-[#AAF980]/45 p-4 shadow-sys-sm">
            <Icon name="ph-sparkle" className="text-3xl text-primary-500" />
            <h2 className="mt-3 font-semibold">AI Insight</h2>
            <p className="mt-2 text-sm text-[#111827]/65">Recovery looks solid today. Climbing, yoga, or a moderate run fits best.</p>
          </div>
        </div>

        <section className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#111827]/45">Trends</p>
          <TrendCard title="Sleep duration" subtitle="Last 7 days" value="9h3m" label="Average" icon="ph-caret-right" tone="#4D54F8" />
          <TrendCard title="Heart Points" subtitle="Last 7 days" value="66 pts" label="Today" icon="ph-caret-right" tone="#2E9D82" type="line" />
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold leading-none">Recommended Activities</h2>
            <button onClick={() => onOpenVerticalList("Recommended Activities")} className="text-sm font-semibold text-green-600">See all</button>
          </div>
          <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {studios.slice(1, 4).map((studio, index) => (
              <button key={studio.id} onClick={() => onOpenStudio(studio)} className="w-52 shrink-0 overflow-hidden rounded-[22px] bg-white text-left shadow-sys-sm">
                <div className="relative h-32">
                  <img src={studio.image} alt={studio.classes[0]} className="h-full w-full object-cover" />
                  {index === 0 && <span className="absolute right-3 top-3 rounded-full bg-[#AAF980] px-3 py-1 text-sm font-semibold">Top Match</span>}
                </div>
                <div className="p-3">
                  <p className="text-lg font-semibold">{studio.classes[0]}</p>
                  <p className="mt-1 text-xs text-[#111827]/60">{studio.time} · {studio.tags[0]}</p>
                  <div className="mt-3 h-10 rounded-full bg-[#4D54F8] py-2 text-center text-sm font-semibold text-white">{index === 2 ? "View" : "Book"}</div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function DashboardCard({ title, value, detail, icon, bars, hot }) {
  return (
    <div className="rounded-[22px] bg-white p-4 shadow-sys-sm">
      <div className="flex items-center gap-2">
        <Icon name={icon} className={`text-2xl ${hot ? "text-pink-500" : "text-primary-500"}`} />
        <p className="font-semibold">{title}</p>
      </div>
      <p className="mt-4 text-3xl font-semibold leading-none">{value}</p>
      <p className="mt-2 text-sm text-[#111827]/60">{detail}</p>
      {bars ? <MiniBars /> : <MiniLine />}
    </div>
  );
}

function MiniBars() {
  return (
    <div className="mt-4 flex h-20 items-end gap-2">
      {[48, 64, 38, 60, 78, 66, 50].map((height, index) => (
        <span key={index} className="flex-1 rounded-t-[4px] bg-[#4D54F8]" style={{ height }}></span>
      ))}
    </div>
  );
}

function MiniLine() {
  return (
    <svg viewBox="0 0 180 58" className="mt-4 h-16 w-full">
      <path d="M4 38 C 24 22, 44 20, 62 34 S 96 48, 112 25 S 143 18, 176 10" fill="none" stroke="#4D54F8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="176" cy="10" r="5" fill="#4D54F8" />
    </svg>
  );
}
