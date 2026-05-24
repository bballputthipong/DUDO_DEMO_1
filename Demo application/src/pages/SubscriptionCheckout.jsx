import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { FlowHeader } from "./SubscriptionPlans.jsx";

export default function SubscriptionCheckout({ plan, addOns, onBack, onProceed }) {
  const [method, setMethod] = useState("K PLUS");
  const addOnTotal = addOns.reduce((sum, item) => sum + item.price, 0);
  const subtotal = plan.price + addOnTotal;
  const discount = addOns.length > 0 ? 150 : 0;
  const total = subtotal - discount;

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-6">
      <FlowHeader title="Checkout" subtitle="Review your order" onBack={onBack} />
      <section className="mt-6 space-y-4">
        <SummaryPanel title="Your Plan" action="Edit">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-1 text-sm text-[#111827]/65">{plan.price.toLocaleString()} ฿ / month</p>
              <p className="mt-2 text-xs text-[#111827]/50">Next billing date: Jun 12, 2025</p>
            </div>
            <span className="rounded-full bg-[#AAF980] px-2 py-1 text-xs font-semibold">Monthly</span>
          </div>
        </SummaryPanel>
        <SummaryPanel title="Add-ons" action="Edit">
          {addOns.length === 0 ? (
            <p className="text-sm text-[#111827]/55">No add-ons selected</p>
          ) : addOns.map((addon) => (
            <div key={addon.id} className="flex items-center justify-between py-1">
              <p className="font-medium">{addon.name}</p>
              <p className="font-semibold">{addon.price.toLocaleString()} ฿</p>
            </div>
          ))}
        </SummaryPanel>
        <div className="rounded-[22px] bg-white p-4 shadow-sys-sm">
          <Line label="Subtotal" value={`${subtotal.toLocaleString()} ฿`} />
          <Line label="Discount" value={discount ? `-${discount} ฿` : "0 ฿"} green={discount > 0} />
          <div className="mt-3 flex items-end justify-between border-t border-[#111827]/10 pt-3">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-2xl font-semibold">{total.toLocaleString()} ฿ <span className="text-sm font-medium text-[#111827]/55">/ month</span></p>
          </div>
        </div>
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Payment Method</h2>
          {["K PLUS", "PromptPay", "Credit / Debit Card"].map((item) => (
            <button key={item} onClick={() => setMethod(item)} className={`mb-3 grid h-16 w-full grid-cols-[44px_1fr_auto] items-center gap-3 rounded-[22px] border bg-white px-4 text-left shadow-sys-sm ${method === item ? "border-primary-500" : "border-[#111827]/10"}`}>
              <span className={`grid h-10 w-10 place-items-center rounded-[22px] ${method === item ? "bg-[#16A34A] text-white" : "bg-[#F3F4F6]"}`}>
                <Icon name={item === "K PLUS" ? "ph-bank" : item === "PromptPay" ? "ph-qr-code" : "ph-credit-card"} />
              </span>
              <span>
                <span className="block font-semibold">{item}</span>
                <span className="text-sm text-[#111827]/55">Pay via {item}</span>
              </span>
              <span className={`grid h-6 w-6 place-items-center rounded-full border ${method === item ? "border-primary-500 bg-primary-500 text-white" : "border-[#111827]/40"}`}>
                {method === item && <Icon name="ph-check" className="text-xs" />}
              </span>
            </button>
          ))}
        </section>
      </section>
      <button onClick={() => onProceed({ method, total, discount })} className="mt-4 h-14 w-full rounded-full bg-[#4D54F8] text-base font-semibold text-white shadow-sys-lg">
        Proceed to Payment
      </button>
      <p className="mt-3 text-center text-xs text-[#111827]/50"><Icon name="ph-lock-key" /> Secure payment 100%</p>
    </main>
  );
}

function SummaryPanel({ title, action, children }) {
  return (
    <section className="rounded-[22px] bg-white p-4 shadow-sys-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/55">{title}</h2>
        <button className="text-sm font-semibold text-primary-500">{action}</button>
      </div>
      {children}
    </section>
  );
}

function Line({ label, value, green }) {
  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-sm text-[#111827]/65">{label}</p>
      <p className={`font-semibold ${green ? "text-[#16A34A]" : ""}`}>{value}</p>
    </div>
  );
}
