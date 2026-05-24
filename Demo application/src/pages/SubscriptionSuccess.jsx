import Icon from "../components/Icon.jsx";

export default function SubscriptionSuccess({ plan, addOns, checkout, onGoHome }) {
  const total = checkout?.total || plan.price;

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-10">
      <section className="text-center">
        <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#AAF980]">
          <Icon name="ph-check" className="text-[36px]" />
          {["left-[-24px] top-4", "right-[-20px] top-6", "left-0 bottom-[-18px]", "right-2 bottom-[-14px]"].map((position, index) => (
            <span key={index} className={`absolute ${position} h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-[#4D54F8]" : "bg-[#E5D9CB]"}`}></span>
          ))}
        </div>
        <h1 className="mt-8 text-2xl font-semibold">Payment Successful!</h1>
        <p className="mt-2 text-sm text-[#111827]/65">Welcome to {plan.name}. Your subscription is now active.</p>
      </section>
      <section className="mt-8 rounded-[22px] bg-white p-4 shadow-sys-sm">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Subscription Details</h2>
        <Detail label="Plan" value={`${plan.name} (Monthly)`} />
        <Detail label="Next billing date" value="Jun 12, 2025" />
        <Detail label="Amount" value={`${total.toLocaleString()} ฿ / month`} />
        <Detail label="Payment Method" value="K PLUS" />
        <Detail label="Transaction ID" value="TXN202505120941" />
      </section>
      <section className="mt-5 rounded-[22px] bg-white p-4 shadow-sys-sm">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Your Benefits</h2>
        {[...plan.benefits, ...addOns.map((item) => item.name)].map((benefit) => (
          <p key={benefit} className="mb-2 flex items-center gap-2 text-sm text-[#111827]/75">
            <Icon name="ph-check-circle" className="text-[#16A34A]" />
            {benefit}
          </p>
        ))}
      </section>
      <button onClick={onGoHome} className="mt-8 h-14 w-full rounded-full bg-[#AAF980] text-base font-semibold text-[#111827] shadow-sys-lg">
        Go to Home
        <Icon name="ph-arrow-right" className="ml-2" />
      </button>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-[#111827]/10 py-3 last:border-b-0">
      <span className="text-sm text-[#111827]/55">{label}</span>
      <span className="text-right text-sm font-semibold">{value}</span>
    </div>
  );
}
