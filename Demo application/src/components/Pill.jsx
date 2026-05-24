export default function Pill({ active, children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex h-10 shrink-0 items-center justify-center rounded-full border px-4 text-sm font-medium leading-none ${
        active
          ? "border-primary-500 bg-[#4D54F8] text-white shadow-sys-sm"
          : "border-white/70 bg-white/70 text-[#111827]"
      } ${className}`}
    >
      {children}
    </button>
  );
}
