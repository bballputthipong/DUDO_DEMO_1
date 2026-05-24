import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { subscriptionPlans } from "../data/mockData.js";

export default function SubscriptionPlans({ currentPlan, onBack, onContinue }) {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan || subscriptionPlans[0]);
  const [tab, setTab] = useState("Membership");

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-6">
      <FlowHeader title="Subscription" subtitle="Choose the plan that fits your lifestyle" onBack={onBack} />
      <div className="mt-5 grid grid-cols-2 border-b border-[#111827]/10">
        {["Membership", "Credit Packs"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`h-11 text-sm font-semibold ${tab === item ? "border-b-2 border-primary-500 text-primary-500" : "text-[#111827]/55"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <section className="mt-5 space-y-4">
        {subscriptionPlans.map((plan) => {
          const active = selectedPlan.id === plan.id;
          return (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={`w-full rounded-[22px] border p-4 text-left shadow-sys-sm ${active ? "border-primary-500 bg-white" : "border-[#111827]/10 bg-white"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">{plan.name}</h2>
                    {plan.badge && <span className="rounded-full bg-[#AAF980] px-2 py-1 text-[10px] font-semibold">{plan.badge}</span>}
                  </div>
                  <p className="mt-1 text-xl font-semibold">{plan.price.toLocaleString()} ฿ <span className="text-sm font-medium text-[#111827]/55">/ {plan.cadence}</span></p>
                  <p className="mt-2 text-sm text-[#111827]/65">{plan.description}</p>
                </div>
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border ${active ? "border-primary-500 bg-primary-500 text-white" : "border-[#111827]"}`}>
                  {active && <Icon name="ph-check" />}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {plan.benefits.map((benefit) => (
                  <p key={benefit} className="flex items-center gap-2 text-sm text-[#111827]/75">
                    <Icon name="ph-check-circle" className="text-[#39A800]" />
                    {benefit}
                  </p>
                ))}
              </div>
            </button>
          );
        })}
      </section>
      <button onClick={() => onContinue(selectedPlan)} className="mt-6 h-14 w-full rounded-full bg-[#4D54F8] text-base font-semibold text-white shadow-sys-lg">
        Continue
      </button>
    </main>
  );
}

export function FlowHeader({ title, subtitle, onBack }) {
  return (
    <header className="flex items-center gap-4">
      <button onClick={onBack} className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sys-sm">
        <Icon name="ph-arrow-left" className="text-2xl" />
      </button>
      <div className="min-w-0 flex-1 text-center">
        <h1 className="text-xl font-semibold uppercase leading-none">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-[#111827]/60">{subtitle}</p>}
      </div>
      <div className="h-11 w-11"></div>
    </header>
  );
}
