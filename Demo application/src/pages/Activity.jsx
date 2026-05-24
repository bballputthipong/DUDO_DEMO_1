import Icon from "../components/Icon.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { reservationFriends, studios } from "../data/mockData.js";

const historyItems = [
  { date: "01/10", title: "Pilates Individual Class", place: "Flow Pilates Studio", icon: "ph-person-simple", tags: ["Instructor: Sarah", "Pilates", "210 kcal"] },
  { date: "30/09", title: "Bouldering", place: "Stonegoat Climbing Gym", icon: "ph-mountains", tags: ["Grade: V6", "Bouldering", "480 kcal"] },
  { date: "27/09", title: "Running", place: "Morning Run", icon: "ph-person-simple-run", tags: ["5.2 km", "Easy", "372 kcal"] }
];

export default function Activity({
  activeBooking,
  checkInStatus,
  onOpenCheckIn,
  onNavigate,
  onOpenHistory,
  onOpenDashboard,
  onOpenTrack,
  onOpenPost,
  onOpenVerticalList
}) {
  const booking = activeBooking || { ...studios[1], className: "Tuesday Climbing", selectedDate: "Sat, 28 Jun 2025", selectedTime: "10:00 AM" };

  return (
    <main className="dudo-page space-y-5">
      <header>
        <h1 className="text-[34px] font-semibold leading-none tracking-normal text-[#06074A]">Activity</h1>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {[
            ["Track", "ph-sneaker-move", onOpenTrack],
            ["Check-in", "ph-map-pin-line", onOpenCheckIn],
            ["Post", "ph-heartbeat", onOpenPost]
          ].map(([label, icon, action]) => (
            <button key={label} onClick={action} className="flex h-[96px] min-w-0 flex-col items-center justify-center gap-2 rounded-[24px] bg-white text-[#111827] shadow-sys-sm">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-500/10">
                <Icon name={icon} className="text-2xl text-primary-500" />
              </span>
              <span className="text-sm font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </header>

      <section>
        <h2 className="mb-3 text-[22px] font-semibold leading-none text-[#06074A]">Upcoming Schedule</h2>
        <div className="relative overflow-hidden rounded-[22px] bg-[#4D54F8] p-4 text-white shadow-sys-lg">
          <div className="absolute -left-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F9FAFB]"></div>
          <div className="absolute -right-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#F9FAFB]"></div>
          <div className="absolute bottom-0 right-14 top-0 w-px border-l border-dashed border-white/35"></div>
          <div className="absolute right-5 top-6 h-28 w-8 bg-[repeating-linear-gradient(90deg,#fff_0_2px,transparent_2px_4px)] opacity-90"></div>
          <p className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">{booking.selectedDate || "Sat, 28 Jun 2025"} · {booking.selectedTime || "10:00 AM"}</p>
          <h2 className="mt-4 max-w-[75%] text-[22px] font-semibold leading-tight">{booking.name}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Climbing", "60 min", "V6-V8", booking.area].map((item) => (
              <span key={item} className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white/90">{item}</span>
            ))}
          </div>
          <div className="mt-5 flex items-end justify-between gap-3">
            <div className="min-w-0">
              <div className="flex -space-x-2">
                {reservationFriends.map((friend) => (
                  <img key={friend.id} src={friend.image} alt={friend.name} className="h-8 w-8 rounded-full border-2 border-[#4D54F8] object-cover" />
                ))}
              </div>
              <p className="mt-1 truncate text-xs font-medium text-white/85">4 friends joining</p>
            </div>
            <button onClick={onOpenCheckIn} className="flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-[#AAF980] px-3 text-xs font-semibold text-[#111827]">
              <Icon name="ph-shield-check-fill" />
              {checkInStatus === "completed" ? "VERIFIED" : "CHECK-IN"}
            </button>
          </div>
        </div>
      </section>

      <CalendarStreak />

      <section>
        <SectionHeader title="Activity History" action="See more" onClick={onOpenHistory} />
        <div className="divide-y divide-[#111827]/10">
          {historyItems.map((item) => (
            <button key={item.date} onClick={onOpenHistory} className="grid w-full grid-cols-[56px_38px_minmax(0,1fr)_20px] items-center gap-3 py-3 text-left">
              <p className="text-[25px] font-semibold leading-none text-[#06074A]">{item.date.split("/")[0]}<span className="block text-sm font-medium text-[#111827]/55">/{item.date.split("/")[1]}</span></p>
              <Icon name={item.icon} className="text-[28px] text-primary-500" />
              <div className="min-w-0">
                <p className="font-semibold leading-tight">{item.title}</p>
                <p className="text-sm text-[#111827]/60">{item.place}</p>
              </div>
              <Icon name="ph-caret-right" className="text-xl text-[#111827]/45" />
            </button>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Personal Dashboard" action="" />
        <button onClick={onOpenDashboard} className="float-right -mt-12 grid h-10 w-10 place-items-center rounded-full bg-[#AAF980] text-[#111827] shadow-sys-sm">
          <Icon name="ph-arrow-right" className="text-xl" />
        </button>
        <div className="grid grid-cols-2 gap-3 pt-1">
          <MetricCard className="col-span-2" icon="ph-sneaker-move" label="Step" value="8,432" suffix="steps" />
          <MetricCard icon="ph-smiley" label="Emotion" value="Good" chart />
          <MetricCard icon="ph-moon" label="Sleep" value="7 h 24 m" chart />
          <div className="space-y-3">
            <MetricCard icon="ph-thermometer" label="Skin Temp" value="36.6°c" compact />
            <MetricCard icon="ph-heart-fill" label="HR" value="72 bpm" compact hot />
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="Booking History" action="" />
        <button onClick={() => onOpenVerticalList("Booking History")} className="float-right -mt-12 grid h-10 w-10 place-items-center rounded-full bg-[#AAF980] text-[#111827] shadow-sys-sm">
          <Icon name="ph-arrow-right" className="text-xl" />
        </button>
        <div className="flex gap-4 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {studios.slice(0, 4).map((studio) => (
            <button key={studio.id} onClick={() => onOpenVerticalList("Booking History")} className="w-52 shrink-0 overflow-hidden rounded-[22px] bg-white text-left shadow-sys-sm">
              <img src={studio.image} alt={studio.name} className="h-32 w-full object-cover" />
              <div className="p-3">
                <p className="line-clamp-1 text-lg font-semibold leading-tight">{studio.name}</p>
                <p className="mt-1 text-sm text-[#111827]/70"><Icon name="ph-star-fill" className="text-primary-500" /> {studio.rating} ({studio.reviews}) · {studio.time}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function CalendarStreak() {
  return (
    <section className="rounded-[24px] bg-white p-4 shadow-sys-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#06074A]">Jun 2025</p>
        <h2 className="text-[22px] font-semibold leading-none text-[#06074A]">Calendar + Streak</h2>
      </div>
      <div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#111827]/55">
          {["S", "M", "T", "W", "T", "F", "S", "25", "26", "27", "28", "29", "30", "31", "1", "2", "3", "4", "5", "6", "7"].map((item) => (
            <span key={item} className={`grid h-7 place-items-center rounded-full ${item === "28" ? "bg-[#4D54F8] font-semibold text-white" : ""}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-[20px] bg-[#F9FAFB] p-3">
            <p className="text-xs text-[#111827]/55">Current Streak</p>
            <p className="mt-1 text-lg font-semibold"><Icon name="ph-fire-fill" className="text-orange-500" /> 7 days</p>
          </div>
          <div className="rounded-[20px] bg-[#F9FAFB] p-3">
            <p className="text-xs text-[#111827]/55">Best Streak</p>
            <p className="mt-1 text-lg font-semibold"><Icon name="ph-trophy" /> 21 days</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <span key={`${day}-${index}`} className={`grid h-8 place-items-center rounded-full text-xs font-semibold ${index < 6 ? "bg-[#AAF980]" : "bg-[#E5D9CB]"}`}>
              {index < 6 ? <Icon name="ph-check-bold" /> : day}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, label, value, suffix, chart, compact, hot, className = "" }) {
  return (
    <button className={`${className} min-w-0 rounded-[22px] p-4 text-left ${compact ? "min-h-[96px] bg-transparent" : "min-h-[124px] bg-white shadow-sys-sm"}`}>
      <div className="flex items-center gap-2">
        <span className={`grid h-11 w-11 place-items-center rounded-full ${hot ? "bg-pink-500 text-white" : compact ? "bg-primary-500/10 text-primary-500" : "bg-[#4D54F8] text-white"}`}>
          <Icon name={icon} className="text-2xl" />
        </span>
        <p className="truncate text-sm font-semibold">{label}</p>
      </div>
      <p className="mt-3 text-xl font-semibold leading-none">{value} {suffix && <span className="text-xs font-medium text-[#111827]/55">{suffix}</span>}</p>
      {chart && <MiniLine />}
      {!chart && !compact && <MiniBars />}
      {compact && <p className="mt-2 text-xs font-semibold text-green-600">Normal</p>}
    </button>
  );
}

function MiniBars() {
  return (
    <div className="mt-4 flex h-9 items-end gap-1">
      {[14, 18, 12, 24, 20, 28, 17, 22, 19, 26].map((height, index) => (
        <span key={index} className="w-2 rounded-full bg-[#4D54F8]" style={{ height }}></span>
      ))}
    </div>
  );
}

function MiniLine() {
  return (
    <svg viewBox="0 0 160 46" className="mt-3 h-12 w-full">
      <path d="M4 32 C 25 8, 42 12, 58 24 S 89 36, 104 17 S 132 8, 156 20" fill="none" stroke="#4D54F8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="156" cy="20" r="5" fill="#4D54F8" />
    </svg>
  );
}
