import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { studioImages } from "../data/mockData.js";
import { MiniBarChart, MiniLineChart } from "../components/WellnessCharts.jsx";

const heroImage = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85";
const peopleImage = "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=900&q=85";
const runImage = "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=900&q=85";

const aboutOptions = ["Get Fit", "Stay Healthy", "Manage Stress", "Have Fun", "Recover Better"];
const activityOptions = [
  ["Running", "ph-person-simple-run"],
  ["Yoga", "ph-person-simple"],
  ["Strength", "ph-barbell"],
  ["Cycling", "ph-bicycle"],
  ["Climbing", "ph-mountains"],
  ["Swimming", "ph-drop"],
  ["Pilates", "ph-person-simple"],
  ["Recovery", "ph-leaf"]
];
const levels = [
  ["Beginner", "New to training or getting back into it.", "ph-seedling"],
  ["Intermediate", "Work out regularly and have some experience.", "ph-lightning"],
  ["Advanced", "Train hard and have advanced experience.", "ph-fire"]
];
const goalOptions = ["Build Strength", "Improve Endurance", "Move More", "Recover Better", "Improve Flexibility"];
const notificationOptions = ["Workout Reminders", "Class Updates", "Community Updates", "Achievement Alerts"];

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [about, setAbout] = useState(["Get Fit", "Stay Healthy", "Manage Stress"]);
  const [activities, setActivities] = useState(["Running", "Yoga", "Strength", "Climbing"]);
  const [level, setLevel] = useState("Beginner");
  const [goals, setGoals] = useState(["Build Strength", "Improve Endurance", "Move More"]);
  const [notifications, setNotifications] = useState(notificationOptions);
  const total = 12;

  const next = () => setStep((current) => Math.min(total - 1, current + 1));
  const back = () => setStep((current) => Math.max(0, current - 1));
  const finish = (tab = "Activity") => onComplete(tab);
  const progress = step === 0 ? 0 : step / (total - 1);

  const toggleLimited = (value, selected, setSelected, limit) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
      return;
    }
    if (selected.length < limit) setSelected([...selected, value]);
  };

  const handleTouchEnd = (event) => {
    if (!touchStart) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = Math.abs(touch.clientY - touchStart.y);
    setTouchStart(null);
    if (dy > 54 || Math.abs(dx) < 64) return;
    if (dx < 0) next();
    if (dx > 0) back();
  };

  return (
    <main
      className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-4"
      onTouchStart={(event) => setTouchStart({ x: event.touches[0].clientX, y: event.touches[0].clientY })}
      onTouchEnd={handleTouchEnd}
    >
      {step > 0 && (
        <header className="mb-4 flex items-center justify-between">
          <button onClick={back} className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sys-sm">
            <Icon name="ph-arrow-left" className="text-xl" />
          </button>
          <div className="mx-4 flex flex-1 gap-1.5">
            {Array.from({ length: total - 1 }).map((_, index) => (
              <span key={index} className={`h-1.5 flex-1 rounded-full ${index < step ? "bg-[#4D54F8]" : "bg-[#E5D9CB]"}`}></span>
            ))}
          </div>
          <button onClick={() => finish("Home")} className="h-10 rounded-full px-3 text-sm font-semibold text-[#111827]/58">Skip</button>
        </header>
      )}

      <div className="min-h-[calc(100vh-7rem)]">
        {step === 0 && <Splash onNext={next} />}
        {step === 1 && <Welcome onNext={next} onLogin={() => finish("Home")} />}
        {step === 2 && <TrackingValue onNext={next} />}
        {step === 3 && <BookingValue onNext={next} />}
        {step === 4 && <CommunityValue onNext={next} />}
        {step === 5 && <AccountStep onNext={next} onLogin={() => finish("Home")} />}
        {step === 6 && (
          <ChoiceList
            title="Tell Us About You"
            body="Select what motivates you (choose up to 3)."
            options={aboutOptions}
            selected={about}
            onToggle={(item) => toggleLimited(item, about, setAbout, 3)}
            onNext={next}
          />
        )}
        {step === 7 && (
          <ActivityPreference
            selected={activities}
            onToggle={(item) => toggleLimited(item, activities, setActivities, 4)}
            onNext={next}
          />
        )}
        {step === 8 && <FitnessLevel level={level} setLevel={setLevel} onNext={next} />}
        {step === 9 && (
          <ChoiceList
            title="What Are Your Top Goals?"
            body="Select your primary goals (choose up to 3)."
            options={goalOptions}
            selected={goals}
            onToggle={(item) => toggleLimited(item, goals, setGoals, 3)}
            onNext={next}
          />
        )}
        {step === 10 && (
          <Notifications
            selected={notifications}
            onToggle={(item) => setNotifications(notifications.includes(item) ? notifications.filter((value) => value !== item) : [...notifications, item])}
            onNext={next}
          />
        )}
        {step === 11 && <AllSet onComplete={() => finish("Activity")} />}
      </div>

      {step > 1 && step < 11 && (
        <div className="mt-4 flex justify-center">
          <span className="rounded-full bg-[#E5D9CB]/60 px-3 py-1 text-xs font-semibold text-[#111827]/55">
            {Math.round(progress * 100)}%
          </span>
        </div>
      )}
    </main>
  );
}

function Splash({ onNext }) {
  return (
    <button onClick={onNext} className="relative block h-[calc(100vh-3rem)] w-full overflow-hidden rounded-[32px] bg-[#111827] text-left text-white shadow-sys-lg">
      <img src={heroImage} alt="DUDO training" className="absolute inset-0 h-full w-full object-cover opacity-72" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/10 via-[#111827]/42 to-[#111827]/88"></div>
      <div className="absolute bottom-14 left-6 right-6">
        <p className="text-[44px] font-black italic leading-none tracking-tight">DUDO</p>
        <p className="mt-4 text-xl font-semibold">Train. Share. <span className="text-[#AAF980]">Grow.</span></p>
        <div className="mt-8 h-1 w-28 rounded-full bg-[#AAF980]"></div>
      </div>
    </button>
  );
}

function Welcome({ onNext, onLogin }) {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col">
      <div>
        <h1 className="text-[30px] font-semibold leading-tight text-[#06074A]">Welcome to DUDO</h1>
        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[#111827]/68">Your all-in-one home for fitness, wellness, and community. Let’s build a stronger you, together.</p>
      </div>
      <img src={peopleImage} alt="DUDO community" className="mt-auto h-[48vh] w-full rounded-[28px] object-cover" />
      <button onClick={onNext} className="mt-5 h-14 rounded-[18px] bg-[#4D54F8] text-base font-semibold text-white shadow-sys-sm">Get Started</button>
      <button onClick={onLogin} className="mt-4 h-10 text-sm font-semibold text-primary-500">Log in</button>
    </section>
  );
}

function TrackingValue({ onNext }) {
  return (
    <OnboardingFrame title="Track What Moves You" body="Monitor workouts, activities and wellness metrics that matter." onNext={onNext}>
      <div className="space-y-3">
        <MetricPreview title="This Week" value="5 Workouts" delta="+2 from last week"><MiniBarChart /></MetricPreview>
        <MetricPreview title="Active Minutes" value="240 min" delta="+20%"><div className="mx-auto h-24 w-24 rounded-full" style={{ background: "conic-gradient(#AAF980 0 24%, #4D54F8 24% 78%, #E5D9CB 78% 100%)" }}></div></MetricPreview>
        <div className="grid grid-cols-2 gap-3">
          <MetricPreview title="Calories" value="2,320" delta="kcal"><MiniLineChart /></MetricPreview>
          <MetricPreview title="Sleep" value="7h 45m" delta="Good"><Icon name="ph-moon-fill" className="text-3xl text-primary-500" /></MetricPreview>
        </div>
      </div>
    </OnboardingFrame>
  );
}

function BookingValue({ onNext }) {
  return (
    <OnboardingFrame title="Book Classes & Facilities" body="Discover and book premium classes, studios and recovery experiences." onNext={onNext}>
      <div className="space-y-3">
        {[
          ["Yoga Flow", "Sat 7:00 AM", "Mae D Body Studio", studioImages.yoga],
          ["Climbing Session", "Sat 5:00 PM", "Summit Climbing", studioImages.climbing],
          ["Ice Bath", "Daily", "Recovery Lab", studioImages.sauna],
          ["Strength Class", "Mon 6:30 PM", "DUDO Performance", studioImages.gym]
        ].map(([title, time, studio, image]) => (
          <button key={title} className="grid w-full grid-cols-[64px_minmax(0,1fr)_24px] items-center gap-3 rounded-[18px] bg-white p-3 text-left shadow-sys-sm">
            <img src={image} alt={title} className="h-14 w-14 rounded-[14px] object-cover" />
            <span className="min-w-0">
              <span className="block font-semibold">{title}</span>
              <span className="block text-xs text-[#111827]/55">{time} · {studio}</span>
            </span>
            <Icon name="ph-caret-right" className="text-xl" />
          </button>
        ))}
      </div>
    </OnboardingFrame>
  );
}

function CommunityValue({ onNext }) {
  return (
    <OnboardingFrame title="Be Part of a Supportive Community" body="Share wins, get inspired and stay accountable together." onNext={onNext}>
      <article className="overflow-hidden rounded-[24px] bg-white shadow-sys-sm">
        <div className="flex items-center gap-3 p-4">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[#E5D9CB] font-semibold">A</div>
          <div>
            <p className="font-semibold">Alex R.</p>
            <p className="text-xs text-[#111827]/55">2h ago</p>
          </div>
        </div>
        <p className="px-4 pb-3 text-sm text-[#111827]/70">Early morning run to clear the mind.</p>
        <img src={runImage} alt="Community run" className="h-52 w-full object-cover" />
        <div className="flex gap-5 p-4 text-sm text-[#111827]/65">
          <span><Icon name="ph-heart-fill" className="text-pink-500" /> 128</span>
          <span><Icon name="ph-chat-circle" /> 24</span>
          <span className="ml-auto"><Icon name="ph-bookmark-simple" /></span>
        </div>
      </article>
    </OnboardingFrame>
  );
}

function AccountStep({ onNext, onLogin }) {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col">
      <h1 className="text-[30px] font-semibold leading-tight text-[#06074A]">Create Your Account</h1>
      <p className="mt-3 text-sm leading-6 text-[#111827]/65">Join DUDO and start your wellness journey.</p>
      <div className="mt-10 space-y-3">
        {[
          ["Continue with Apple", "ph-apple-logo"],
          ["Continue with Google", "ph-google-logo"],
          ["Continue with Email", "ph-envelope"]
        ].map(([label, icon]) => (
          <button key={label} onClick={onNext} className="flex h-14 w-full items-center justify-center gap-3 rounded-[18px] bg-white text-sm font-semibold shadow-sys-sm">
            <Icon name={icon} className="text-xl" />
            {label}
          </button>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 text-xs text-[#111827]/45">
        <span className="h-px flex-1 bg-[#111827]/10"></span>
        or
        <span className="h-px flex-1 bg-[#111827]/10"></span>
      </div>
      <button onClick={onLogin} className="mt-6 text-sm font-semibold text-primary-500">Already have an account? Log in</button>
    </section>
  );
}

function ChoiceList({ title, body, options, selected, onToggle, onNext }) {
  return (
    <OnboardingFrame title={title} body={body} onNext={onNext}>
      <div className="space-y-3">
        {options.map((item) => {
          const active = selected.includes(item);
          return (
            <button key={item} onClick={() => onToggle(item)} className={`flex h-14 w-full items-center justify-between rounded-[18px] px-4 text-sm font-semibold ${active ? "bg-[#AAF980]" : "bg-white shadow-sys-sm"}`}>
              <span>{item}</span>
              <span className={`grid h-6 w-6 place-items-center rounded-full border ${active ? "border-green-700 bg-green-700 text-white" : "border-[#111827]/25"}`}>
                {active && <Icon name="ph-check-bold" className="text-sm" />}
              </span>
            </button>
          );
        })}
      </div>
    </OnboardingFrame>
  );
}

function ActivityPreference({ selected, onToggle, onNext }) {
  return (
    <OnboardingFrame title="What Activities Do You Enjoy?" body="Select your favorite activities (choose up to 4)." onNext={onNext}>
      <div className="grid grid-cols-3 gap-3">
        {activityOptions.map(([label, icon]) => {
          const active = selected.includes(label);
          return (
            <button key={label} onClick={() => onToggle(label)} className={`flex h-24 flex-col items-center justify-center gap-2 rounded-[18px] text-xs font-semibold ${active ? "bg-[#AAF980]" : "bg-white shadow-sys-sm"}`}>
              <Icon name={icon} className="text-2xl text-primary-500" />
              {label}
            </button>
          );
        })}
      </div>
    </OnboardingFrame>
  );
}

function FitnessLevel({ level, setLevel, onNext }) {
  return (
    <OnboardingFrame title="What’s Your Fitness Level?" body="This helps us personalize your experience." onNext={onNext}>
      <div className="space-y-3">
        {levels.map(([label, body, icon]) => {
          const active = level === label;
          return (
            <button key={label} onClick={() => setLevel(label)} className={`grid w-full grid-cols-[42px_minmax(0,1fr)_28px] items-center gap-3 rounded-[18px] p-4 text-left ${active ? "bg-[#AAF980]" : "bg-white shadow-sys-sm"}`}>
              <Icon name={icon} className="text-2xl text-[#111827]" />
              <span>
                <span className="block font-semibold">{label}</span>
                <span className="mt-1 block text-xs text-[#111827]/60">{body}</span>
              </span>
              {active && <Icon name="ph-check-circle-fill" className="text-2xl text-green-700" />}
            </button>
          );
        })}
      </div>
    </OnboardingFrame>
  );
}

function Notifications({ selected, onToggle, onNext }) {
  return (
    <OnboardingFrame title="Stay in the Loop" body="Choose the notifications you want to receive." onNext={onNext} cta="Continue">
      <div className="space-y-3">
        {notificationOptions.map((item) => {
          const active = selected.includes(item);
          return (
            <button key={item} onClick={() => onToggle(item)} className="grid w-full grid-cols-[40px_minmax(0,1fr)_52px] items-center gap-3 rounded-[18px] bg-white p-4 text-left shadow-sys-sm">
              <Icon name="ph-bell-ringing" className="text-2xl text-primary-500" />
              <span>
                <span className="block text-sm font-semibold">{item}</span>
                <span className="mt-1 block text-xs text-[#111827]/55">Personalized updates from DUDO.</span>
              </span>
              <span className={`relative h-8 rounded-full ${active ? "bg-[#4D54F8]" : "bg-[#E5D9CB]"}`}>
                <span className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${active ? "right-1" : "left-1"}`}></span>
              </span>
            </button>
          );
        })}
      </div>
    </OnboardingFrame>
  );
}

function AllSet({ onComplete }) {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center text-center">
      <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[#AAF980]">
        <Icon name="ph-check-bold" className="text-6xl text-[#111827]" />
        {["left-2 top-2", "right-1 top-8", "left-8 -top-5", "right-8 -bottom-4"].map((pos, index) => (
          <span key={pos} className={`absolute ${pos} h-2 w-2 rounded-full ${index % 2 ? "bg-[#4D54F8]" : "bg-[#AAF980]"}`}></span>
        ))}
      </div>
      <h1 className="mt-8 text-[34px] font-semibold leading-none text-[#06074A]">All Set!</h1>
      <p className="mt-4 max-w-[16rem] text-sm leading-6 text-[#111827]/65">You’re ready to train, connect and grow with DUDO.</p>
      <button onClick={onComplete} className="mt-12 h-14 w-full rounded-[18px] bg-[#4D54F8] text-base font-semibold text-white shadow-sys-sm">Go to Activity</button>
    </section>
  );
}

function OnboardingFrame({ title, body, children, onNext, cta = "Next" }) {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col">
      <div>
        <h1 className="text-[30px] font-semibold leading-tight text-[#06074A]">{title}</h1>
        <p className="mt-3 max-w-[19rem] text-sm leading-6 text-[#111827]/65">{body}</p>
      </div>
      <div className="mt-5 flex-1">{children}</div>
      <button onClick={onNext} className="mt-5 h-14 w-full rounded-[18px] bg-[#4D54F8] text-base font-semibold text-white shadow-sys-sm">{cta}</button>
    </section>
  );
}

function MetricPreview({ title, value, delta, children }) {
  return (
    <article className="rounded-[18px] bg-white p-4 shadow-sys-sm">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-[#111827]/55">{title}</p>
          <p className="mt-1 text-xl font-semibold leading-none">{value}</p>
          <p className="mt-1 text-xs font-semibold text-green-600">{delta}</p>
        </div>
      </div>
      {children}
    </article>
  );
}
