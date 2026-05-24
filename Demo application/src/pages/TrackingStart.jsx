import Icon from "../components/Icon.jsx";

export default function TrackingStart({ onBack, onStartSport, onBookedCheckIn, onRecoveryLogged }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-28 pt-6">
      <button onClick={onBack} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
        <Icon name="ph-arrow-left" className="text-2xl" />
      </button>
      <section className="mt-16 space-y-4">
        <div>
          <h1 className="text-[32px] font-semibold leading-none">How would you like to get started?</h1>
          <p className="mt-3 text-sm text-[#111827]/60">Choose the option that best fits your activity.</p>
        </div>
        {[
          ["Track a Sport", "Track a run, ride, swim, lift, or any workout.", "ph-person-simple-run", "bg-[#4D54F8]", onStartSport],
          ["Booked Activity / Check-in", "Check in to a class or booked session.", "ph-calendar-check", "bg-[#7C5CFF]", onBookedCheckIn],
          ["Recovery / Non-trackable", "Log wellness like ice bath, sauna, massage, stretch and more.", "ph-leaf", "bg-green-500", onRecoveryLogged]
        ].map(([title, body, icon, color, action]) => (
          <button key={title} onClick={action} className="grid w-full grid-cols-[64px_1fr_auto] items-center gap-4 rounded-[20px] border border-[#111827]/10 bg-white p-4 text-left shadow-sys-sm">
            <span className={`grid h-16 w-16 place-items-center rounded-[18px] ${color} text-white`}>
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
