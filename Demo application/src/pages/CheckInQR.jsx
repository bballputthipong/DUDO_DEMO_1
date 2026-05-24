import Icon from "../components/Icon.jsx";
import QRTicket from "../components/QRTicket.jsx";

export default function CheckInQR({ booking, onBack, onVerified }) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] px-5 pb-8 pt-6">
      <header className="flex items-center gap-4">
        <button onClick={onBack} className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-500">{booking.studio.name}</p>
          <h1 className="text-xl font-semibold leading-none">Check-in</h1>
        </div>
      </header>

      <section className="mt-12 text-center">
        <p className="mx-auto max-w-[16rem] text-sm text-[#111827]/70">Show this QR code to the instructor to verify your check-in.</p>
        <div className="relative mt-8">
          <QRTicket />
          <div className="absolute left-1/2 top-1/2 grid h-12 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[22px] bg-white text-xl font-black italic text-[#06074A] shadow-sys-sm">DUDO</div>
        </div>
        <p className="mt-8 text-sm text-[#111827]/60">This QR code will refresh in</p>
        <p className="mt-2 text-3xl font-semibold text-[#39A800]">00:45</p>
      </section>

      <section className="mt-16 text-center">
        <p className="text-sm text-[#111827]/65">Having trouble?</p>
        <button className="mt-1 text-sm font-semibold text-primary-500">Enter code manually</button>
      </section>

      <button onClick={onVerified} className="mt-8 h-14 w-full rounded-full bg-[#AAF980] text-base font-semibold text-[#111827] shadow-sys-lg">
        Simulate Verified Check-in
      </button>
    </main>
  );
}
