import Icon from "./Icon.jsx";

export default function ToggleRow({ icon, label, value, onChange }) {
  return (
    <button onClick={onChange} className="flex w-full items-center justify-between border-b border-[#111827]/10 py-4 last:border-b-0">
      <span className="flex items-center gap-3 text-left font-medium">
        <Icon name={icon} className="text-2xl text-primary-500" />
        {label}
      </span>
      <span className={`relative h-8 w-14 rounded-full transition ${value ? "bg-[#AAF980]" : "bg-[#E5D9CB]"}`}>
        <span className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sys-sm transition ${value ? "left-7" : "left-1"}`}></span>
      </span>
    </button>
  );
}
