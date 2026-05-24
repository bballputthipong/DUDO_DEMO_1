import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { FlowHeader } from "./SubscriptionPlans.jsx";

export default function SubscriptionPayment({ plan, addOns, checkout, onBack, onComplete }) {
  const [countdown, setCountdown] = useState(3);
  const addOnTotal = addOns.reduce((sum, item) => sum + item.price, 0);
  const total = checkout?.total || plan.price + addOnTotal;

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-6">
      <FlowHeader title="Payment" subtitle="Complete your payment" onBack={onBack} />
      <section className="mt-16 text-center">
        <div className="mx-auto grid h-28 w-28 place-items-center text-6xl font-black text-[#111827]">
          K<span className="text-[#16A34A]">+</span>
        </div>
        <p className="mx-auto mt-8 max-w-[17rem] text-sm text-[#111827]/65">You will be redirected to K PLUS to complete the payment.</p>
      </section>
      <section className="mt-10 rounded-[22px] bg-white p-4 shadow-sys-sm">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Payment Summary</h2>
        <div className="space-y-3 text-sm">
          <Row label={`${plan.name} (Monthly)`} value={`${plan.price.toLocaleString()} ฿`} />
          {addOns.map((addon) => <Row key={addon.id} label={addon.name} value={`${addon.price.toLocaleString()} ฿`} />)}
          {checkout?.discount > 0 && <Row label="Discount (WELCOME15)" value={`-${checkout.discount} ฿`} green />}
          <div className="flex items-end justify-between border-t border-[#111827]/10 pt-3">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-2xl font-semibold">{total.toLocaleString()} ฿</span>
          </div>
        </div>
      </section>
      <button onClick={() => setCountdown((value) => Math.max(0, value - 1))} className="mx-auto mt-8 block w-52 rounded-[22px] bg-primary-500/10 p-5 text-center">
        <span className="block text-sm font-semibold text-primary-500">Redirecting in</span>
        <span className="mt-1 block text-[36px] font-semibold text-primary-500">{countdown}</span>
        <span className="block text-sm font-medium text-primary-500">seconds</span>
      </button>
      <button onClick={onComplete} className="mt-8 h-14 w-full rounded-full border border-[#111827]/15 bg-white text-base font-semibold text-[#111827]">
        Open K PLUS
        <Icon name="ph-arrow-square-out" className="ml-2" />
      </button>
    </main>
  );
}

function Row({ label, value, green }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium">{label}</span>
      <span className={`font-semibold ${green ? "text-[#16A34A]" : ""}`}>{value}</span>
    </div>
  );
}
