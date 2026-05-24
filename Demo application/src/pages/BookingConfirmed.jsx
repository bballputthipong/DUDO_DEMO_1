import Icon from "../components/Icon.jsx";
import BookingSummaryCard from "../components/BookingSummaryCard.jsx";

export default function BookingConfirmed({ booking, onViewActivity, onAddCalendar }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-10">
      <section className="text-center">
        <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#AAF980]">
          <Icon name="ph-check" className="text-[36px] text-[#111827]" />
          {["left-[-28px] top-3", "right-[-24px] top-6", "left-[-12px] bottom-[-18px]", "right-[-10px] bottom-[-12px]"].map((position, index) => (
            <span key={index} className={`absolute ${position} h-2 w-2 rounded-full bg-[#4D54F8]`}></span>
          ))}
        </div>
        <h1 className="mt-7 text-2xl font-semibold">Booking Confirmed!</h1>
        <p className="mt-2 text-sm text-[#111827]/60">You're all set. See you there.</p>
      </section>

      <section className="mt-8">
        <BookingSummaryCard booking={booking} />
      </section>

      <section className="mt-4 rounded-[22px] bg-white p-4 shadow-sys-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Booking ID</p>
        <p className="mt-2 text-base font-semibold">#DUDO-250812-1823</p>
      </section>

      <button onClick={onViewActivity} className="mt-6 h-14 w-full rounded-full bg-[#4D54F8] text-base font-semibold text-white shadow-sys-lg">
        View My Activity
      </button>
      <button onClick={onAddCalendar} className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-full border border-[#111827]/10 bg-white text-base font-semibold text-primary-500">
        <Icon name="ph-calendar-plus" className="text-xl" />
        Add to Calendar
      </button>
    </main>
  );
}
