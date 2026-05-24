import { useState } from "react";
import Icon from "../components/Icon.jsx";
import ToggleRow from "../components/ToggleRow.jsx";

export default function Profile({ credits, setCredits, subscription, onOpenSubscription }) {
  const [syncApple, setSyncApple] = useState(true);
  const [syncGoogle, setSyncGoogle] = useState(false);
  const [privateMode, setPrivateMode] = useState(true);

  return (
    <main className="dudo-page space-y-5">
      <section className="rounded-[22px] bg-[#F9FAFB] p-1">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#E5D9CB] text-xl font-bold text-[#111827]">A</div>
          <div>
            <h1 className="text-2xl font-semibold leading-none">Aom Dudo</h1>
            <p className="mt-2 text-sm text-[#111827]/60">Welcome back.</p>
          </div>
          <div className="ml-auto flex gap-2">
            <Icon name="ph-bell" className="text-2xl" />
            <Icon name="ph-gear-six" className="text-2xl" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[22px] bg-[#111827] p-5 text-white shadow-sys-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/65">Universal Credit</p>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-[36px] font-semibold leading-none text-[#AAF980]">{credits} <span className="text-sm text-white">Credits</span></p>
          <button onClick={() => setCredits((current) => current + 5)} className="text-sm font-semibold text-white">View details <Icon name="ph-caret-right" /></button>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold text-[#111827]/70">Account</h2>
        <ProfileRow icon="ph-user" title="Personal Information" />
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold text-[#111827]/70">Membership</h2>
        <ProfileRow
          icon="ph-crown"
          title="Subscription"
          detail={subscription?.active ? `${subscription.plan.name} active` : "Manage your plan"}
          active
          onClick={onOpenSubscription}
        />
        <ProfileRow icon="ph-credit-card" title="Payment" detail="Payment methods" />
      </section>

      <section className="rounded-[22px] bg-white p-5 shadow-sys-sm">
        <h2 className="mb-4 text-2xl font-semibold leading-none">Wearable sync</h2>
        <ToggleRow icon="ph-apple-logo" label="Apple HealthKit" value={syncApple} onChange={() => setSyncApple((value) => !value)} />
        <ToggleRow icon="ph-heartbeat" label="Google Health Connect" value={syncGoogle} onChange={() => setSyncGoogle((value) => !value)} />
        <ToggleRow icon="ph-lock-key" label="Private profile metrics" value={privateMode} onChange={() => setPrivateMode((value) => !value)} />
      </section>
      <section className="glass-brand rounded-[22px] p-5">
        <p className="text-sm font-semibold text-primary-900">Privacy contract</p>
        <p className="mt-2 text-sm text-[#111827]/70">Community posts show only verified session stickers you choose. Billing, health sync, and raw biometrics stay private.</p>
      </section>
    </main>
  );
}

function ProfileRow({ icon, title, detail, active, onClick }) {
  return (
    <button onClick={onClick} className={`mb-3 grid h-16 w-full grid-cols-[36px_1fr_auto] items-center gap-3 rounded-[22px] border bg-white px-4 text-left shadow-sys-sm ${active ? "border-primary-500" : "border-transparent"}`}>
      <Icon name={icon} className={`text-xl ${active ? "text-primary-500" : "text-[#111827]"}`} />
      <span>
        <span className={`block text-sm font-semibold ${active ? "text-primary-500" : "text-[#111827]"}`}>{title}</span>
        {detail && <span className="mt-1 block text-xs text-[#111827]/55">{detail}</span>}
      </span>
      <Icon name="ph-caret-right" className="text-[#111827]/40" />
    </button>
  );
}
