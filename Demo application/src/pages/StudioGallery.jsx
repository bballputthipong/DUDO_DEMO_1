import { useState } from "react";
import Icon from "../components/Icon.jsx";
import Pill from "../components/Pill.jsx";
import { gallerySections } from "../data/mockData.js";

export default function StudioGallery({ studio, onBack, onOpenReview, onOpenSection }) {
  const [section, setSection] = useState("ice");
  const activeSection = gallerySections.find((item) => item.id === section);

  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-8">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[#111827]/10 bg-[#F9FAFB]/90 px-5 pb-5 dudo-subpage-header backdrop-blur-xl">
        <button onClick={onBack} className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <button onClick={onOpenReview} className="h-10 rounded-full bg-[#AAF980] px-4 text-sm font-semibold text-[#111827]">Review</button>
      </header>

      <section className="space-y-8 p-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-500">{studio.name}</p>
          <h1 className="mt-2 text-[32px] font-semibold leading-none">Gallery</h1>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {gallerySections.map((item) => (
            <Pill key={item.id} active={section === item.id} onClick={() => setSection(item.id)}>
              {item.label}
            </Pill>
          ))}
        </div>

        <section>
          <div className="mb-4 flex items-center justify-between border-b border-[#111827]/20 pb-3">
            <h2 className="text-[32px] font-semibold leading-none">{activeSection.label}</h2>
            <button onClick={() => onOpenSection(activeSection)} className="grid h-10 w-10 place-items-center rounded-full bg-[#E5D9CB]">
              <Icon name="ph-arrow-right" className="text-2xl" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {activeSection.images.map((image, index) => (
              <button key={image} onClick={() => onOpenSection(activeSection)} className={`overflow-hidden rounded-[24px] bg-[#E5D9CB] ${index === 0 ? "row-span-2" : ""}`}>
                <img src={image} alt={`${activeSection.label} ${index + 1}`} className={`w-full object-cover ${index === 0 ? "h-72" : "h-36"}`} />
              </button>
            ))}
          </div>
        </section>

        {gallerySections.filter((item) => item.id !== section).map((item) => (
          <section key={item.id}>
            <div className="mb-4 flex items-center justify-between border-b border-[#111827]/20 pb-3">
              <h2 className="text-[32px] font-semibold leading-none">{item.label}</h2>
              <button onClick={() => onOpenSection(item)} className="grid h-10 w-10 place-items-center rounded-full bg-[#E5D9CB]">
                <Icon name="ph-arrow-right" className="text-2xl" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {item.images.slice(0, 3).map((image, index) => (
                <button key={image} onClick={() => onOpenSection(item)} className={`overflow-hidden rounded-[20px] bg-[#E5D9CB] ${index === 2 ? "row-span-2" : ""}`}>
                  <img src={image} alt={`${item.label} preview ${index + 1}`} className={`w-full object-cover ${index === 2 ? "h-60" : "h-28"}`} />
                </button>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
