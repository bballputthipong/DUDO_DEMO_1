import Icon from "../components/Icon.jsx";
import BookingSummaryCard from "../components/BookingSummaryCard.jsx";

export default function CheckInSuccess({ booking, onViewActivity, onShareFlex }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-10">
      <section className="text-center">
        <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#AAF980]">
          <Icon name="ph-check" className="text-[36px] text-[#111827]" />
          {["left-[-28px] top-3", "right-[-24px] top-6", "left-[-12px] bottom-[-18px]", "right-[-10px] bottom-[-12px]"].map((position, index) => (
            <span key={index} className={`absolute ${position} h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-[#4D54F8]" : "bg-[#E5D9CB]"}`}></span>
          ))}
        </div>
        <h1 className="mt-7 text-2xl font-semibold">Check-in Verified!</h1>
        <p className="mt-2 text-sm text-[#111827]/60">Let's crush this session.</p>
      </section>

      <section className="mt-8">
        <BookingSummaryCard booking={booking} />
      </section>

      <section className="mt-5 rounded-[22px] bg-white p-4 shadow-sys-sm">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Earned today</h2>
        <div className="grid grid-cols-3 divide-x divide-[#111827]/10 text-center">
          {[
            ["5", "Credits Used"],
            ["92", "Session Score"],
            ["245", "Calories"]
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-2xl font-semibold leading-none">{value}</p>
              <p className="mt-1 text-xs text-[#111827]/55">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <button onClick={onViewActivity} className="mt-6 h-14 w-full rounded-full bg-[#4D54F8] text-base font-semibold text-white shadow-sys-lg">
        View My Activity
      </button>
      <button onClick={onShareFlex} className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-full border border-[#111827]/10 bg-white text-base font-semibold text-primary-500">
        <Icon name="ph-upload-simple" className="text-xl" />
        Share Your Flex
      </button>
    </main>
  );
}
