import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { reservationFriends, studios } from "../data/mockData.js";

export default function ActivityPostFlow({ booking, onBack, onPublish }) {
  const [step, setStep] = useState("choose");
  const [caption, setCaption] = useState("Beautiful morning, strong legs, grateful mind. Let's keep showing up.");
  const current = booking || { ...studios[1], className: "Morning Run", selectedTime: "7:12 AM" };

  if (step === "choose") {
    return (
      <main className="min-h-screen bg-[#F9FAFB] px-5 pb-28 pt-6">
        <button onClick={onBack} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <section className="mt-16 space-y-4">
          <h1 className="text-[32px] font-semibold leading-none">What would you like to share?</h1>
          {[
            ["Tracked Workout", "Share a run, ride, hike or any cardio.", "ph-sneaker-move"],
            ["Class / Check-in", "Share a class or gym visit you checked in.", "ph-map-pin-line"],
            ["Recovery Log", "Share your recovery, sleep or wellness.", "ph-heartbeat"]
          ].map(([title, body, icon]) => (
            <button key={title} onClick={() => setStep("compose")} className="grid w-full grid-cols-[64px_1fr_auto] items-center gap-4 rounded-[20px] bg-white p-4 text-left shadow-sys-sm">
              <span className="grid h-16 w-16 place-items-center rounded-[18px] bg-primary-500/12 text-primary-500">
                <Icon name={icon} className="text-3xl" />
              </span>
              <span>
                <span className="block text-lg font-semibold">{title}</span>
                <span className="mt-1 block text-sm text-[#111827]/60">{body}</span>
              </span>
              <Icon name="ph-caret-right" className="text-2xl text-[#111827]/45" />
            </button>
          ))}
        </section>
      </main>
    );
  }

  if (step === "preview") {
    return (
      <main className="min-h-screen bg-[#F9FAFB] px-5 pb-28 pt-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setStep("compose")} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
            <Icon name="ph-arrow-left" className="text-2xl" />
          </button>
          <h1 className="text-xl font-semibold">Preview</h1>
          <span className="w-12"></span>
        </div>
        <PostCard booking={current} caption={caption} />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button onClick={() => setStep("compose")} className="h-12 rounded-full border border-[#4D54F8] text-sm font-semibold text-primary-500">Back</button>
          <button onClick={() => onPublish(current, caption)} className="h-12 rounded-full bg-[#4D54F8] text-sm font-semibold text-white">Post to DUDO</button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-28 pt-6">
      <div className="flex items-center justify-between">
        <button onClick={() => setStep("choose")} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <h1 className="text-xl font-semibold">Create Post</h1>
        <button onClick={() => setStep("preview")} className="text-sm font-semibold text-primary-500">Next</button>
      </div>
      <section className="mt-6 space-y-4">
        <label className="block rounded-[22px] bg-white p-4 shadow-sys-sm">
          <span className="text-sm font-semibold text-[#111827]/60">Headline</span>
          <input value={`${current.className || current.classes?.[0]} in Bangkok`} readOnly className="mt-2 h-11 w-full bg-transparent text-base font-semibold outline-none" />
        </label>
        <label className="block rounded-[22px] bg-white p-4 shadow-sys-sm">
          <span className="text-sm font-semibold text-[#111827]/60">Caption</span>
          <textarea value={caption} onChange={(event) => setCaption(event.target.value)} className="mt-2 h-24 w-full resize-none bg-transparent text-base outline-none" />
        </label>
        <div className="rounded-[22px] bg-white p-4 shadow-sys-sm">
          <p className="font-semibold">Add to Post</p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {["Map", "Chart", "Photo", "Stats"].map((item) => (
              <button key={item} className="h-20 rounded-[22px] border border-[#4D54F8] bg-primary-500/5 text-sm font-semibold text-primary-500">
                <Icon name={item === "Map" ? "ph-map-trifold" : item === "Chart" ? "ph-chart-line" : item === "Photo" ? "ph-image" : "ph-list-numbers"} className="mb-1 text-2xl" />
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="scroll-edge-fade scroll-edge-fade-container flex gap-2 overflow-x-auto no-scrollbar">
          {["Distance", "Pace", "Duration", "Calories", "Heart Rate"].map((item) => (
            <span key={item} className="shrink-0 rounded-full bg-[#E5D9CB] px-3 py-2 text-sm font-semibold">{item}</span>
          ))}
        </div>
        <button onClick={() => setStep("preview")} className="h-12 w-full rounded-full bg-[#4D54F8] text-base font-semibold text-white">Preview Post</button>
      </section>
    </main>
  );
}

function PostCard({ booking, caption }) {
  return (
    <article className="mt-6 overflow-hidden rounded-[22px] bg-white shadow-sys-sm">
      <div className="flex items-center gap-3 p-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#E5D9CB] font-semibold">E</div>
        <div>
          <p className="font-semibold">Ed Wellness</p>
          <p className="text-sm text-[#111827]/55">Just now · Bangkok, TH</p>
        </div>
      </div>
      <div className="px-4 pb-3">
        <h2 className="text-xl font-semibold">{booking.className || booking.classes?.[0]}</h2>
        <p className="mt-1 text-sm text-[#111827]/65">{caption}</p>
      </div>
      <div className="map-field h-44"></div>
      <div className="grid grid-cols-3 gap-3 p-4 text-center">
        {["5.21 km", "5'42 Pace", "29:42 Duration"].map((stat) => (
          <div key={stat} className="rounded-[22px] bg-[#F9FAFB] p-3 text-sm font-semibold">{stat}</div>
        ))}
      </div>
      <div className="flex -space-x-2 px-4 pb-4">
        {reservationFriends.map((friend) => (
          <img key={friend.id} src={friend.image} alt={friend.name} className="h-8 w-8 rounded-full border-2 border-white object-cover" />
        ))}
      </div>
    </article>
  );
}
