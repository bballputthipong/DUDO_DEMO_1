import { progressionData } from "../data/mockData.js";
import { DudoSoftCard } from "./DesignSystem.jsx";

export default function ProgressionChart() {
  const width = 360;
  const height = 188;
  const padX = 26;
  const padY = 22;
  const makePath = (key) => progressionData.map((point, index) => {
    const x = padX + (index * (width - padX * 2)) / (progressionData.length - 1);
    const y = height - padY - ((point[key] - 40) / 52) * (height - padY * 2);
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");
  const last = progressionData[progressionData.length - 1];

  return (
    <DudoSoftCard className="p-5">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-500">Recent progression</p>
          <h3 className="mt-1 text-2xl font-semibold leading-none text-[#06074A]">Recovery and pace trending up</h3>
        </div>
        <span className="rounded-full bg-[#AAF980] px-3 py-1 text-sm font-semibold">+18%</span>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-52 w-full overflow-visible rounded-[24px] bg-white/60 p-2" role="img" aria-label="Line chart for HRV, pace, and training load without grid lines">
        <path d={`${makePath("hrv")} L ${width - padX} ${height - padY} L ${padX} ${height - padY} Z`} fill="#4D54F8" opacity="0.07" />
        <path d={makePath("hrv")} fill="none" stroke="#4D54F8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={makePath("pace")} fill="none" stroke="#AAF980" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={makePath("load")} fill="none" stroke="#06074A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" />
        {progressionData.map((point, index) => {
          const x = padX + (index * (width - padX * 2)) / (progressionData.length - 1);
          const y = height - padY - ((point.hrv - 40) / 52) * (height - padY * 2);
          return (
            <g key={point.label}>
              <circle cx={x} cy={y} r="5" fill="#4D54F8" stroke="#F9FAFB" strokeWidth="3" />
              <text x={x} y={height - 4} textAnchor="middle" fontSize="11" fill="#111827" opacity="0.62">{point.label}</text>
            </g>
          );
        })}
      </svg>
      <div className="grid grid-cols-3 gap-2">
        {[
          ["HRV", `${last.hrv} ms`, "bg-[#4D54F8] text-white"],
          ["Pace", "5:18/km", "bg-[#AAF980] text-[#111827]"],
          ["Load", `${last.load}`, "bg-[#06074A] text-white"]
        ].map(([label, value, className]) => (
          <div key={label} className={`rounded-[18px] p-3 ${className}`}>
            <p className="text-xs font-medium opacity-75">{label}</p>
            <p className="mt-1 text-lg font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </DudoSoftCard>
  );
}
