import Icon from "../components/Icon.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StudioCard from "../components/StudioCard.jsx";
import VerticalStudioList from "../components/VerticalStudioList.jsx";
import { studioImages, studios } from "../data/mockData.js";

export default function Home({ credits, activeBooking, onNavigate, onBook, onOpenStudio, onOpenClass, onOpenVerticalList, onOpenFilter, onFavorite, favorites }) {
  const recommended = studios.slice(0, 4);

  return (
    <main className="dudo-page space-y-6">
      <section>
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate("Profile")} className="grid h-14 w-14 place-items-center rounded-full bg-[#E5D9CB] text-[#111827]">
            <Icon name="ph-user" className="text-2xl" />
          </button>
          <div>
            <span className="inline-flex h-5 items-center rounded-[12px] bg-[#E5D9CB] px-5 text-[10px] font-semibold text-[#4D54F8]">Pro</span>
            <h1 className="mt-2 text-2xl font-semibold leading-none tracking-normal">Hi , Puttipong</h1>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-2">
          {[
            ["Wallet", "ph-wallet", "Profile"],
            ["Credit", "ph-coins", "Profile"],
            ["Recommend", "ph-sparkle", "Discovery"],
            ["Recovery", "ph-waves", "Discovery"],
            ["Trending", "ph-trend-up", "Discovery"],
            ["Invite", "ph-users-three", "Community"],
            ["Check-in", "ph-qr-code", "Activity"],
            ["Saved", "ph-map-pin", "Discovery"]
          ].map(([label, icon, tab]) => (
            <button
              key={label}
              onClick={() => onNavigate(tab)}
              className="flex h-[84px] min-w-0 flex-col items-center justify-center gap-1.5 rounded-[22px] bg-primary-500/10 px-1 text-center text-[10px] font-semibold leading-[1.1] text-[#111827] shadow-sys-sm"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-primary-500 shadow-sys-sm">
                <Icon name={icon} className="text-xl" />
              </span>
              <span className="line-clamp-2">{label}</span>
            </button>
          ))}
        </div>
      </section>

      <WellnessRingsCard />
      <ActivitySummariesCard />
      <StreakActivityCard />

      {activeBooking && (
        <section className="glass-light rounded-[22px] p-4">
          <div className="flex items-center gap-4">
            <img src={activeBooking.image} alt={activeBooking.name} className="h-20 w-20 rounded-[22px] object-cover" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-500">Next action</p>
              <h2 className="mt-1 text-lg font-semibold leading-tight">{activeBooking.classes[0]}</h2>
              <p className="text-sm text-[#111827]/65">{activeBooking.name} · Today {activeBooking.selectedTime || activeBooking.nextTimes[0]}</p>
            </div>
            <button onClick={() => onNavigate("Activity")} className="h-10 rounded-full bg-[#4D54F8] px-4 text-sm font-semibold text-white">Open</button>
          </div>
        </section>
      )}

      <section>
        <SectionHeader title="Trending studio" action="See all" onClick={() => onOpenVerticalList("Trending Studios")} />
        <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {recommended.map((studio) => (
            <StudioCard
              key={studio.id}
              studio={studio}
              compact
              onBook={onBook}
              onOpenStudio={onOpenStudio}
              onFavorite={onFavorite}
              favorite={favorites.includes(studio.id)}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Promotion" action="Join" onClick={() => onNavigate("Activity")} />
        <div className="overflow-hidden rounded-[22px] bg-white shadow-sys-sm">
          <div className="relative h-44 bg-[#F3F4F6]">
            <div className="absolute inset-0 bg-[#4D54F8]/10"></div>
            <img src={studioImages.run} alt="Move More Challenge" className="absolute bottom-0 right-0 h-full w-1/2 object-cover" />
            <div className="absolute inset-y-0 left-0 w-3/5 p-5">
              <p className="text-sm font-black italic tracking-tight text-[#06074A]">DUDO</p>
              <h3 className="mt-2 text-3xl font-bold leading-none text-[#4D54F8]">Move More Challenge</h3>
              <p className="mt-2 text-xs font-medium text-[#111827]/70">Complete 5 activities in 7 days and earn bonus tokens.</p>
              <div className="mt-3 inline-flex items-center gap-1 rounded-[22px] bg-[#AAF980] px-3 py-1 text-sm font-bold text-[#111827]">
                <Icon name="ph-plus-circle-fill" />
                +2 bonus
              </div>
            </div>
          </div>
          <p className="p-4 text-base font-medium">Complete 5 activities in 7 days and earn 2 bonus tokens.</p>
        </div>
      </section>

      <section>
        <SectionHeader title="Recommend Studio" action="Open" onClick={() => onOpenVerticalList("Recommended Studios")} />
        <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {studios.slice(1, 5).map((studio) => (
            <StudioCard
              key={studio.id}
              studio={studio}
              compact
              onBook={onBook}
              onOpenStudio={onOpenStudio}
              onFavorite={onFavorite}
              favorite={favorites.includes(studio.id)}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Trending class" action="Book" onClick={() => onOpenVerticalList("Trending Classes")} />
        <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {studios.slice(0, 5).map((studio) => (
            <article key={studio.id} className="w-44 shrink-0">
              <button onClick={() => onOpenClass(studio, studio.classes[0])} className="relative h-36 w-full overflow-hidden rounded-[22px] bg-[#F3F4F6] text-left">
                <img src={studio.image} alt={studio.classes[0]} className="h-full w-full object-cover" />
                <span className="absolute right-2 top-2 rounded-full glass-light px-2 py-1 text-xs font-semibold text-[#111827]">
                  <Icon name="ph-star-fill" className="text-primary-500" /> {studio.rating}
                </span>
                <span className="absolute bottom-2 right-2 rounded-[22px] bg-[#4D54F8] px-3 py-2 text-sm font-semibold leading-tight text-white">
                  {studio.credits} Credits<br />or ฿{studio.cash}
                </span>
              </button>
              <button onClick={() => onOpenClass(studio, studio.classes[0])} className="mt-2 text-left">
                <h3 className="text-base font-semibold leading-tight">{studio.classes[0]}</h3>
                <p className="mt-1 text-xs text-[#111827]/65">{studio.name} · {studio.time}</p>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="scroll-edge-fade scroll-edge-fade-container mb-3 flex gap-2 overflow-x-auto no-scrollbar">
          {["Filter", "Pilates", "Yoga", "Silom-Sathorn", "Sukhumvit"].map((item, index) => (
            <button
              key={item}
              onClick={index === 0 ? onOpenFilter : undefined}
              className={`h-10 shrink-0 rounded-full border px-4 text-sm font-medium ${
                index === 0 ? "border-primary-500 bg-[#4D54F8] text-white" : "border-primary-500/20 bg-white/75 text-[#111827]"
              }`}
            >
              {index === 0 && <Icon name="ph-sliders-horizontal" className="mr-1 align-[-1px]" />}
              {item}
            </button>
          ))}
        </div>
        <VerticalStudioList
          studios={studios}
          favorites={favorites}
          onFavorite={onFavorite}
          onBook={onBook}
          onOpenStudio={onOpenStudio}
        />
      </section>
    </main>
  );
}

function WellnessRingsCard() {
  const rings = [
    ["45%", "Strain", "#4D54F8", "#AAF980"],
    ["87%", "Recovery", "#4D54F8", "#AAF980"],
    ["70%", "Sleep", "#4D54F8", "#AAF980"]
  ];

  return (
    <section className="rounded-[22px] bg-[#F3F4F6] p-5 shadow-sys-sm">
      <div className="grid grid-cols-3 gap-3">
        {rings.map(([value, label, primary, accent]) => (
          <div key={label} className="text-center">
            <div className="relative mx-auto h-20 w-20">
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: `conic-gradient(${accent} 0 ${value}, ${primary} ${value} 82%, #E5D9CB 82% 100%)` }}
              ></div>
              <div className="absolute inset-4 grid place-items-center rounded-full bg-[#F9FAFB]">
                <p className="text-base font-semibold leading-none">{value}</p>
              </div>
            </div>
            <p className="mt-2 text-sm font-semibold leading-none">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ActivitySummariesCard() {
  const segments = [
    ["Ice bath & sauna", "27%", "bg-[#4D54F8]"],
    ["Boxing", "13%", "bg-[#AAF980]"],
    ["Pilates", "11%", "bg-[#E5D9CB]"],
    ["Climbing & Bouldering", "8.7%", "bg-[#06074A]"]
  ];

  return (
    <section className="rounded-[22px] bg-[#F3F4F6] p-5 shadow-sys-sm">
      <h2 className="text-lg font-semibold leading-none">Activity Summaries</h2>
      <div className="mt-3 flex items-end gap-1">
        <p className="text-3xl font-semibold leading-none">34</p>
        <p className="pb-0.5 text-sm font-medium text-[#111827]/60">/78 tokens (56%)</p>
      </div>
      <div className="mt-3 flex gap-1">
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className={`h-3 flex-1 rounded-full ${
              index < 5
                ? "bg-[#4D54F8]"
                : index < 10
                  ? "bg-[#AAF980]"
                  : index < 13
                    ? "bg-[#E5D9CB]"
                    : index < 16
                      ? "bg-[#06074A]"
                      : "bg-[#E5D9CB]/45"
            }`}
          ></span>
        ))}
      </div>

      <div className="mt-4 space-y-1.5">
        {segments.map(([label, value, color]) => (
          <div key={label} className="grid grid-cols-[10px_1fr_auto] items-center gap-2 text-xs">
            <span className={`h-2.5 w-2.5 rounded-[2px] ${color}`}></span>
            <span className="font-medium text-[#111827]/75">{label}</span>
            <span className="font-semibold">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        {[
          ["Move", "14", "Sessions", "ph-person-simple-run"],
          ["Explore", "6", "New Places", "ph-compass"],
          ["Recover", "5", "Recovery Visits", "ph-sparkle"]
        ].map(([label, value, detail, icon]) => (
          <div key={label}>
            <p className="text-sm font-semibold">{label}</p>
            <p className="mt-1 text-3xl font-semibold leading-none text-[#111827]">
              <Icon name={icon} className="mr-1 text-lg text-[#111827]/35" />
              {value}
            </p>
            <p className="mt-1 text-[10px] font-medium leading-tight text-[#111827]/55">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StreakActivityCard() {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const rows = [
    [
      ["30", false],
      ["31", false],
      ["1", false],
      ["2", false],
      ["3", true],
      ["4", true],
      ["5", true]
    ],
    [
      ["6", true],
      ["7", true],
      ["8", false],
      ["9", true],
      ["10", false],
      ["11", false],
      ["12", false]
    ]
  ];

  return (
    <section className="rounded-[22px] bg-[#F3F4F6] p-4 shadow-sys-sm">
      <div className="grid grid-cols-[1fr_auto_auto] items-start gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold leading-tight">Streak Activity</h2>
          <p className="mt-2 text-xs font-medium text-[#111827]/55">Your Streak</p>
          <p className="mt-1 whitespace-nowrap text-2xl font-semibold leading-none text-primary-500">
            5 <span className="text-sm font-semibold text-[#111827]">weeks</span>
          </p>
        </div>
        <div className="w-20 text-center">
          <p className="text-xs font-medium text-[#111827]/55">Streak Activity</p>
          <p className="mt-1 text-2xl font-semibold leading-none text-primary-500">12</p>
        </div>
        <button className="h-9 whitespace-nowrap rounded-full bg-[#AAF980] px-4 text-xs font-semibold text-[#111827]">See more</button>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-7">
          {weekDays.map((day, index) => (
            <p key={`${day}-${index}`} className="text-center text-[11px] font-semibold text-[#111827]/55">{day}</p>
          ))}
        </div>
        <div className="mt-2 space-y-2">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-7">
              {row.map(([date, active]) => (
                <div key={`${rowIndex}-${date}`} className="grid place-items-center">
                  <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-semibold ${
                    active ? "bg-[#AAF980] text-[#4D54F8]" : "bg-white text-[#111827]/55"
                  }`}>
                    {active ? <Icon name="ph-lightning-fill" className="text-base" /> : date}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
