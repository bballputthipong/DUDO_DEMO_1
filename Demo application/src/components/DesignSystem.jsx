import Icon from "./Icon.jsx";

export function DudoCard({ as: Tag = "section", className = "", children }) {
  return <Tag className={`dudo-card ${className}`}>{children}</Tag>;
}

export function DudoSoftCard({ as: Tag = "section", className = "", children }) {
  return <Tag className={`dudo-card-soft ${className}`}>{children}</Tag>;
}

export function DudoPageTitle({ eyebrow, title, action }) {
  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-500">{eyebrow}</p>}
        <h1 className="dudo-title-xl mt-1">{title}</h1>
      </div>
      {action}
    </header>
  );
}

export function DudoIconButton({ icon, onClick, label, className = "" }) {
  return (
    <button onClick={onClick} aria-label={label} className={`grid h-12 w-12 place-items-center rounded-full bg-white text-[#111827] shadow-sys-sm ${className}`}>
      <Icon name={icon} className="text-2xl" />
    </button>
  );
}

export function DudoMetric({ icon, label, value, detail, tone = "primary" }) {
  const toneClass = tone === "accent" ? "bg-[#AAF980] text-[#111827]" : tone === "hot" ? "bg-pink-500 text-white" : "bg-[#4D54F8] text-white";
  return (
    <DudoCard as="div" className="p-4">
      <div className="flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-[18px] ${toneClass}`}>
          <Icon name={icon} className="text-2xl" />
        </span>
        <p className="text-sm font-semibold text-[#111827]/72">{label}</p>
      </div>
      <p className="mt-4 text-2xl font-semibold leading-none text-[#06074A]">{value}</p>
      {detail && <p className="mt-2 text-xs font-medium text-[#111827]/52">{detail}</p>}
    </DudoCard>
  );
}
