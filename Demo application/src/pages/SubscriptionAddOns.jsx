import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { subscriptionAddOns } from "../data/mockData.js";
import { FlowHeader } from "./SubscriptionPlans.jsx";

export default function SubscriptionAddOns({ selectedPlan, selectedAddOns, onBack, onContinue }) {
  const [addons, setAddons] = useState(selectedAddOns || []);
  const toggle = (addon) => {
    setAddons((current) => current.some((item) => item.id === addon.id) ? current.filter((item) => item.id !== addon.id) : [...current, addon]);
  };
  const total = addons.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-6">
      <FlowHeader title="Add-ons" subtitle="Enhance your wellness journey" onBack={onBack} />
      <section className="mt-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Recommended for you</h2>
        <div className="space-y-3">
          {subscriptionAddOns.map((addon, index) => {
            const active = addons.some((item) => item.id === addon.id);
            return (
              <button key={addon.id} onClick={() => toggle(addon)} className="grid w-full grid-cols-[56px_1fr_auto] items-center gap-3 rounded-[22px] border border-[#111827]/10 bg-white p-3 text-left shadow-sys-sm">
                <span className={`grid h-14 w-14 place-items-center rounded-[22px] ${index < 3 ? "bg-[#E5D9CB]" : "bg-primary-500/10"}`}>
                  <Icon name={addon.icon} className="text-2xl text-primary-500" />
                </span>
                <span>
                  <span className="block font-semibold">{addon.name}</span>
                  <span className="mt-1 block text-sm text-[#111827]/60">{addon.detail}</span>
                  <span className="mt-1 block text-sm font-semibold">{addon.price.toLocaleString()} ฿ / month</span>
                </span>
                <span className={`grid h-9 w-9 place-items-center rounded-full border ${active ? "border-primary-500 bg-primary-500 text-white" : "border-primary-500 text-primary-500"}`}>
                  <Icon name={active ? "ph-check" : "ph-plus"} />
                </span>
              </button>
            );
          })}
        </div>
      </section>
      <div className="mt-5 flex items-center justify-between rounded-[22px] bg-white p-4 shadow-sys-sm">
        <p className="text-sm font-semibold">{addons.length} add-ons selected</p>
        <p className="text-xl font-semibold">{total.toLocaleString()} ฿ <span className="text-sm font-medium text-[#111827]/55">/ month</span></p>
      </div>
      <button onClick={() => onContinue(addons)} className="mt-5 h-14 w-full rounded-full bg-[#4D54F8] text-base font-semibold text-white shadow-sys-lg">
        Continue
      </button>
    </main>
  );
}
