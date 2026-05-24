import Icon from "./Icon.jsx";

export function MiniBarChart({ values = [42, 58, 44, 68, 52, 76, 60], color = "#4D54F8", accentIndex = 5 }) {
  return (
    <div className="flex h-20 items-end gap-2">
      {values.map((value, index) => (
        <span
          key={`${value}-${index}`}
          className="flex-1 rounded-full"
          style={{
            height: `${value}%`,
            background: index === accentIndex ? "#AAF980" : color,
            opacity: index === values.length - 1 ? 0.42 : 1
          }}
        ></span>
      ))}
    </div>
  );
}

export function MiniLineChart({ color = "#4D54F8", fill = true }) {
  return (
    <svg viewBox="0 0 180 62" className="h-16 w-full overflow-visible">
      {fill && <path d="M4 42 C26 20 44 22 62 36 S93 48 111 25 S146 18 176 10 L176 62 L4 62 Z" fill={color} opacity="0.08" />}
      <path d="M4 42 C26 20 44 22 62 36 S93 48 111 25 S146 18 176 10" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="176" cy="10" r="5.5" fill={color} stroke="#fff" strokeWidth="3" />
    </svg>
  );
}

export function DotMatrixChart({ rows = 5, cols = 11 }) {
  return (
    <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {Array.from({ length: rows * cols }).map((_, index) => {
        const active = [3, 6, 7, 12, 16, 20, 23, 25, 29, 34, 37, 41, 48, 52].includes(index);
        return <span key={index} className={`aspect-square rounded-full ${active ? "bg-[#4D54F8]/58" : "bg-[#4D54F8]/12"}`}></span>;
      })}
    </div>
  );
}

export function TrendCard({ title, subtitle, value, label, icon, tone = "#4D54F8", type = "bars" }) {
  return (
    <article className="dudo-card-soft p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold leading-none text-[#06074A]">{title}</h3>
          <p className="mt-2 text-sm text-[#111827]/55">{subtitle}</p>
        </div>
        <Icon name={icon || "ph-caret-right"} className="text-2xl text-[#111827]/45" />
      </div>
      <div className="mt-5 grid grid-cols-[104px_1fr] items-end gap-4">
        <div>
          <p className="text-3xl font-semibold leading-none" style={{ color: tone }}>{value}</p>
          <p className="mt-1 text-sm font-medium" style={{ color: tone }}>{label}</p>
        </div>
        <div className="dudo-chart-surface p-3">
          {type === "line" ? <MiniLineChart color={tone} /> : type === "dots" ? <DotMatrixChart /> : <MiniBarChart color={tone} />}
        </div>
      </div>
    </article>
  );
}
