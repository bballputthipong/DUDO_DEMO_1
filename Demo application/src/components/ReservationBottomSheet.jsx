import { useState } from "react";
import Icon from "./Icon.jsx";

export default function ReservationBottomSheet({ slot, onClose, onSchedule }) {
  const [dragStart, setDragStart] = useState(null);
  const [offset, setOffset] = useState(0);
  const [closing, setClosing] = useState(false);

  if (!slot) return null;

  const requestClose = () => {
    setClosing(true);
    window.setTimeout(() => {
      setClosing(false);
      setOffset(0);
      onClose?.();
    }, 180);
  };

  const handlePointerMove = (event) => {
    if (dragStart === null) return;
    setOffset(Math.max(0, event.clientY - dragStart));
  };

  const handlePointerUp = () => {
    if (dragStart === null) return;
    setDragStart(null);
    if (offset > 70) {
      requestClose();
      return;
    }
    setOffset(0);
  };

  return (
    <div className="fixed inset-0 z-[65] pointer-events-none">
      <div
        className={`pointer-events-auto absolute bottom-0 inset-x-0 mx-auto w-full max-w-[430px] rounded-t-[28px] glass-light p-4 pb-5 shadow-sys-lg sheet-pop ${closing ? "sheet-closing" : ""}`}
        style={{ transform: `translateY(${offset}px)` }}
      >
        <button
          className="sheet-handle mx-auto mb-3 block h-7 w-28"
          onClick={requestClose}
          onPointerDown={(event) => setDragStart(event.clientY)}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          aria-label="Close reservation sheet"
        >
          <span className="mx-auto block h-1.5 w-24 rounded-full bg-[#111827]/80"></span>
        </button>
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">Selected</p>
            <h3 className="mt-1 text-xl font-semibold leading-tight">{slot.className}</h3>
            <p className="mt-1 text-sm text-[#111827]/60">{slot.selectedDate} · {slot.selectedTime} · {slot.level}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-semibold leading-none">{slot.credits}</p>
            <p className="text-xs font-semibold text-[#111827]/55">credits</p>
          </div>
        </div>
        <button onClick={() => onSchedule(slot)} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#111827] text-base font-semibold text-white">
          Schedule
          <Icon name="ph-calendar-check" className="text-xl" />
        </button>
      </div>
    </div>
  );
}
