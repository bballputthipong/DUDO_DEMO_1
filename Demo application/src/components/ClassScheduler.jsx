import Icon from "./Icon.jsx";

export default function ClassScheduler({ studio, date, selectedTime, setSelectedTime, onBook }) {
  return (
    <div className="rounded-[22px] bg-white p-4 shadow-sys-sm">
      <div className="grid grid-cols-[96px_1fr] gap-4">
        <img src={studio.image} alt={studio.name} className="h-24 w-24 rounded-[22px] object-cover" />
        <div>
          <h3 className="text-xl font-semibold">{studio.name}</h3>
          <p className="mt-1 text-sm text-[#111827]/65">
            <Icon name="ph-star-fill" className="text-primary-500" /> {studio.rating} · {studio.area} ({studio.distance})
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar">
            {studio.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {studio.classes.map((className, classIndex) => (
          <div key={className}>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-semibold">{className}</p>
              <p className="text-sm font-semibold text-primary-500">{studio.credits + classIndex} credits</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {studio.nextTimes.map((time) => (
                <button
                  key={`${className}-${time}`}
                  onClick={() => setSelectedTime(time)}
                  className={`h-10 rounded-[12px] border text-sm font-medium ${
                    selectedTime === time ? "border-[#111827] bg-[#111827] text-white" : "border-[#111827]/20 bg-white text-[#111827]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => onBook({ ...studio, selectedTime, selectedDate: date })}
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#111827] text-base font-semibold text-white"
      >
        Schedule
        <Icon name="ph-shopping-cart" className="text-xl" />
      </button>
    </div>
  );
}
