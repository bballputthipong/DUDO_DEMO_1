import Icon from "./Icon.jsx";

export default function SectionHeader({ title, action, onClick }) {
  return (
    <div className="mb-4 flex min-h-10 items-center justify-between gap-3">
      <h2 className="min-w-0 text-[24px] font-semibold leading-none tracking-normal text-[#06074A]">{title}</h2>
      {action && (
        <button
          onClick={onClick}
          className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#AAF980] px-4 text-sm font-semibold text-[#111827] shadow-sys-sm"
        >
          {action}
          <Icon name="ph-arrow-right" className="text-base" />
        </button>
      )}
    </div>
  );
}
