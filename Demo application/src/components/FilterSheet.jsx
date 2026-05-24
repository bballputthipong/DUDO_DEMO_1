import { useState } from "react";
import Icon from "./Icon.jsx";

const presets = ["Near me", "Low credits", "Open now", "Friends going"];
const categories = [
  ["Pilates", "ph-person-simple"],
  ["Active Gym", "ph-barbell"],
  ["Climbing", "ph-mountains"],
  ["Recovery", "ph-waves"]
];
const activityTypes = [
  ["Pilates", "ph-person-simple"],
  ["Muay Thai", "ph-boxing-glove"],
  ["Dance", "ph-music-notes"],
  ["Weights", "ph-barbell"],
  ["Boulder", "ph-mountains"],
  ["Swim", "ph-drop"]
];
const durations = ["30 min", "45 min", "60 min", "90 min"];
const spots = ["Any", "1 left", "2-4 left", "5+ left"];
const distances = ["1 km", "3 km", "5 km", "10 km"];
const reviews = ["4.0+", "4.5+", "Top rated", "Verified"];
const amenities = ["Shower", "Parking", "Towels", "Locker"];

export default function FilterSheet({ open, onClose, onApply }) {
  const [sheetSize, setSheetSize] = useState("expanded");
  const [closing, setClosing] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [selectedPresets, setSelectedPresets] = useState(["Near me"]);
  const [selectedCategories, setSelectedCategories] = useState(["Pilates"]);
  const [selectedType, setSelectedType] = useState("Pilates");
  const [creditRange, setCreditRange] = useState([3, 10]);
  const [startRange, setStartRange] = useState([16, 19]);
  const [selectedDuration, setSelectedDuration] = useState("60 min");
  const [selectedSpot, setSelectedSpot] = useState("Any");
  const [selectedDistance, setSelectedDistance] = useState("5 km");
  const [selectedReview, setSelectedReview] = useState("4.5+");
  const [selectedAmenity, setSelectedAmenity] = useState("Shower");

  if (!open) return null;

  const requestClose = () => {
    setClosing(true);
    window.setTimeout(() => {
      setClosing(false);
      setSheetSize("expanded");
      onClose();
    }, 210);
  };

  const handlePointerUp = (event) => {
    if (dragStart === null) return;
    const delta = event.clientY - dragStart;
    setDragStart(null);
    if (delta > 90 && sheetSize === "collapsed") {
      requestClose();
      return;
    }
    if (delta > 50) {
      setSheetSize("collapsed");
      return;
    }
    if (delta < -35) {
      setSheetSize("expanded");
    }
  };

  const toggleListValue = (value, selected, setSelected) => {
    setSelected(selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]);
  };

  const clearAll = () => {
    setSelectedPresets([]);
    setSelectedCategories([]);
    setSelectedType("");
    setCreditRange([3, 10]);
    setStartRange([16, 19]);
    setSelectedDuration("");
    setSelectedSpot("");
    setSelectedDistance("");
    setSelectedReview("");
    setSelectedAmenity("");
  };

  return (
    <div className="sheet-backdrop fixed inset-0 z-[70] bg-[#111827]/45 backdrop-blur-[2px]">
      <button className="absolute inset-0 h-full w-full cursor-default" onClick={requestClose} aria-label="Close filter sheet"></button>
      <div
        className={`bottom-sheet-panel absolute inset-x-0 bottom-0 mx-auto max-w-md overflow-hidden rounded-t-[36px] bg-[#F9FAFB] shadow-sys-lg ${closing ? "sheet-closing" : ""}`}
        style={{ maxHeight: sheetSize === "expanded" ? "86vh" : "58vh" }}
      >
        <button
          className="sheet-handle mx-auto mt-4 block h-8 w-44 rounded-full"
          onClick={() => setSheetSize((current) => current === "expanded" ? "collapsed" : "expanded")}
          onPointerDown={(event) => setDragStart(event.clientY)}
          onPointerUp={handlePointerUp}
          aria-label="Resize filter sheet"
        >
          <span className="mx-auto block h-2 w-44 rounded-full bg-[#111827]"></span>
        </button>
        <header className="flex items-center justify-between border-b border-[#111827]/15 px-5 py-5">
          <h2 className="text-3xl font-semibold leading-none">Refine Your Search</h2>
          <button onClick={requestClose} className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sys-sm">
            <Icon name="ph-x" className="text-3xl" />
          </button>
        </header>

        <div className="overflow-y-auto pb-28" style={{ maxHeight: sheetSize === "expanded" ? "calc(86vh - 9.6rem)" : "calc(58vh - 9.6rem)" }}>
          <FilterSection title="Preset">
            <ChipRow items={presets} selected={selectedPresets} onToggle={(item) => toggleListValue(item, selectedPresets, setSelectedPresets)} />
          </FilterSection>

          <FilterSection title="Activity Category">
            <div className="grid grid-cols-2 gap-3">
              {categories.map(([label, icon]) => {
                const active = selectedCategories.includes(label);
                return (
                  <button
                    key={label}
                    onClick={() => toggleListValue(label, selectedCategories, setSelectedCategories)}
                    className={`flex h-16 items-center gap-3 rounded-[20px] px-4 text-left text-sm font-semibold ${
                      active ? "bg-[#4D54F8] text-white" : "bg-[#E5D9CB] text-[#111827]"
                    }`}
                  >
                    <span className={`grid h-11 w-11 place-items-center rounded-full ${active ? "bg-white/20" : "bg-[#111827] text-white"}`}>
                      <Icon name={icon} className="text-2xl" />
                    </span>
                    {label}
                  </button>
                );
              })}
            </div>
          </FilterSection>

          <FilterSection title="Activity Type">
            <div className="grid grid-cols-3 gap-4">
              {activityTypes.map(([label, icon]) => (
                <button key={label} onClick={() => setSelectedType(label)} className="text-center">
                  <span className={`mx-auto grid h-14 w-14 place-items-center rounded-[18px] shadow-sys-sm ${
                    selectedType === label ? "bg-[#4D54F8] text-white" : "bg-[#111827] text-white"
                  }`}>
                    <Icon name={icon} className="text-2xl" />
                  </span>
                  <span className="mt-2 block text-[11px] font-medium leading-tight text-[#111827]/75">{label}</span>
                </button>
              ))}
            </div>
            <button className="mx-auto mt-4 flex items-center gap-1 text-sm font-medium text-[#111827]/60">
              Show More
              <Icon name="ph-caret-down" />
            </button>
          </FilterSection>

          <FilterSection title="Price">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold leading-none">
                {creditRange[0]}<span className="text-sm font-medium"> credits</span>
                <span className="mx-2 text-2xl">-</span>
                {creditRange[1]}<span className="text-sm font-medium"> credits</span>
              </p>
              <span className="flex rounded-full border border-[#111827] bg-white p-1">
                <span className="rounded-full bg-[#E5D9CB] px-4 py-1 text-sm font-medium">Credit</span>
              </span>
            </div>
            <DualSlider min={1} max={12} values={creditRange} onChange={setCreditRange} />
          </FilterSection>

          <FilterSection title="Duration">
            <SingleChipRow items={durations} value={selectedDuration} onChange={setSelectedDuration} />
          </FilterSection>

          <FilterSection title="Start time">
            <p className="text-right text-2xl font-medium">{startRange[0]}:00 - {startRange[1]}:00</p>
            <DualSlider min={6} max={23} values={startRange} onChange={setStartRange} />
          </FilterSection>

          <FilterSection title="Spot available">
            <SingleChipRow items={spots} value={selectedSpot} onChange={setSelectedSpot} />
          </FilterSection>

          <FilterSection title="Distance">
            <SingleChipRow items={distances} value={selectedDistance} onChange={setSelectedDistance} />
          </FilterSection>

          <FilterSection title="Review">
            <SingleChipRow items={reviews} value={selectedReview} onChange={setSelectedReview} />
          </FilterSection>

          <FilterSection title="Amenity">
            <SingleChipRow items={amenities} value={selectedAmenity} onChange={setSelectedAmenity} />
          </FilterSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-4 bg-[#F9FAFB]/75 px-5 py-4 backdrop-blur-xl">
          <button onClick={clearAll} className="h-14 rounded-full bg-[#111827] text-xl font-medium text-white shadow-sys-lg">Clear</button>
          <button
            onClick={() => {
              onApply?.({
                selectedPresets,
                selectedCategories,
                selectedType,
                creditRange,
                startRange,
                selectedDuration,
                selectedSpot,
                selectedDistance,
                selectedReview,
                selectedAmenity
              });
              requestClose();
            }}
            className="h-14 rounded-full bg-[#111827] text-xl font-medium text-white shadow-sys-lg"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, children }) {
  return (
    <section className="border-b border-[#111827]/15 px-5 py-4">
      <h3 className="mb-4 text-2xl font-semibold leading-none">{title}</h3>
      {children}
    </section>
  );
}

function ChipRow({ items, selected, onToggle }) {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onToggle(item)}
          className={`h-11 shrink-0 rounded-full px-6 text-sm font-semibold ${
            selected.includes(item) ? "bg-[#4D54F8] text-white" : "bg-[#E5D9CB] text-[#111827]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function SingleChipRow({ items, value, onChange }) {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`h-11 shrink-0 rounded-full px-6 text-sm font-semibold ${
            value === item ? "bg-[#4D54F8] text-white" : "bg-[#E5D9CB] text-[#111827]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function DualSlider({ min, max, values, onChange }) {
  const [low, high] = values;

  return (
    <div className="relative mt-8 h-10">
      <div className="absolute left-4 right-4 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#E5D9CB]"></div>
      <div
        className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#111827]"
        style={{
          left: `${((low - min) / (max - min)) * 100}%`,
          right: `${100 - ((high - min) / (max - min)) * 100}%`
        }}
      ></div>
      <input
        type="range"
        min={min}
        max={max}
        value={low}
        onChange={(event) => onChange([Math.min(Number(event.target.value), high - 1), high])}
                className="range-control absolute inset-x-0 top-0 h-10 w-full appearance-none bg-transparent"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={high}
        onChange={(event) => onChange([low, Math.max(Number(event.target.value), low + 1)])}
        className="range-control absolute inset-x-0 top-0 h-10 w-full appearance-none bg-transparent"
      />
    </div>
  );
}
