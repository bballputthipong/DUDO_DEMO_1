import Icon from "../components/Icon.jsx";
import BookingSummaryCard from "../components/BookingSummaryCard.jsx";
import { reservationFriends } from "../data/mockData.js";

export default function ReservationReviewConfirm({ booking, credits, onBack, onConfirm }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-6">
      <header className="flex items-center gap-4">
        <button onClick={onBack} className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-500">Secure booking</p>
          <h1 className="text-xl font-semibold leading-none">Review & Confirm</h1>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/65">Booking summary</h2>
        <BookingSummaryCard booking={booking} />
      </section>

      <section className="mt-5 rounded-[22px] bg-white p-4 shadow-sys-sm">
        <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/65">Payment</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between border-b border-[#111827]/10 pb-3">
            <span className="text-sm text-[#111827]/65">Credits to Use</span>
            <span className="font-semibold text-[#4D54F8]">{booking.studio.credits} Credits</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#111827]/65">Your Balance</span>
            <span className="font-semibold text-[#39A800]">{credits} Credits</span>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111827]/65">Friends going (3)</h2>
          <button className="text-xs font-semibold text-primary-500">See all</button>
        </div>
        <div className="flex gap-4">
          {reservationFriends.map((friend) => (
            <div key={friend.id} className="text-center">
              <img src={friend.image} alt={friend.name} className="h-12 w-12 rounded-full object-cover" />
              <p className="mt-2 text-xs font-semibold">{friend.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[22px] glass-brand p-4">
        <h2 className="text-sm font-semibold text-primary-900">Cancellation policy</h2>
        <p className="mt-2 text-sm text-[#111827]/70">Cancel up to 12 hours before class start time to get full credit refund.</p>
      </section>

      <button
        onClick={onConfirm}
        className="mt-8 h-14 w-full rounded-full bg-[#AAF980] text-base font-semibold text-[#111827] shadow-sys-lg"
      >
        Confirm Booking
      </button>
      <p className="mt-3 text-center text-xs text-[#111827]/50">
        <Icon name="ph-lock-key" className="mr-1" />
        Secure Booking
      </p>
    </main>
  );
}
