import { useState } from "react";
import { gallerySections } from "../data/mockData.js";
import Icon from "./Icon.jsx";
import Pill from "./Pill.jsx";

export default function SnapShareStudio({ booking, onClose, onShare }) {
  const [section, setSection] = useState("ice");
  const [selectedImage, setSelectedImage] = useState(booking.image);
  const [sticker, setSticker] = useState("HRV +8");
  const [caption, setCaption] = useState(`Verified at ${booking.name}. ${booking.classes[0]} locked in.`);
  const activeSection = gallerySections.find((item) => item.id === section);
  const stickers = ["HRV +8", "486 kcal", `${booking.credits} credits`, "9 day streak", "Recovery 82%"];

  return (
    <div className="fixed inset-0 z-50 bg-[#111827]/60 p-4 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-md flex-col overflow-hidden rounded-[22px] bg-[#F9FAFB] shadow-sys-lg">
        <div className="flex items-center justify-between border-b border-[#111827]/10 p-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-500">Snap & Share</p>
            <h2 className="text-2xl font-semibold">Flex studio</h2>
          </div>
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-white">
            <Icon name="ph-x" className="text-2xl" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#111827] shadow-sys-lg">
            <img src={selectedImage} alt="Selected flex background" className="h-full w-full object-cover" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between text-white">
              <div className="rounded-full glass-dark px-3 py-2 text-sm font-semibold">DUDO verified</div>
              <div className="rounded-full bg-[#AAF980] px-3 py-2 text-sm font-semibold text-[#111827]">{sticker}</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-[22px] glass-dark p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#AAF980]">{booking.name}</p>
              <h3 className="mt-1 text-2xl font-semibold leading-tight">{booking.classes[0]}</h3>
              <p className="mt-2 text-sm text-white/75">{caption}</p>
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar">
            {gallerySections.map((item) => (
              <Pill key={item.id} active={section === item.id} onClick={() => setSection(item.id)}>
                {item.label}
              </Pill>
            ))}
          </div>

          <div className="mt-5">
            <div className="mb-3 flex items-center justify-between border-b border-[#111827]/20 pb-2">
              <h3 className="text-2xl font-semibold leading-none">{activeSection.label}</h3>
              <Icon name="ph-arrow-right" className="text-2xl" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {activeSection.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-[22px] border-2 ${selectedImage === image ? "border-primary-500" : "border-transparent"} ${index === 0 ? "row-span-2" : ""}`}
                >
                  <img src={image} alt={`${activeSection.label} gallery ${index + 1}`} className={`w-full object-cover ${index === 0 ? "h-64" : "h-32"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-sm font-semibold">Data sticker</p>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {stickers.map((item) => (
                <Pill key={item} active={sticker === item} onClick={() => setSticker(item)}>
                  {item}
                </Pill>
              ))}
            </div>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-semibold">Caption</span>
            <textarea
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              className="mt-2 min-h-24 w-full rounded-[22px] border border-[#111827]/10 bg-white p-3 text-sm outline-none focus:border-primary-500"
            />
          </label>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-3 border-t border-[#111827]/10 p-5">
          <button
            onClick={() => onShare({ image: selectedImage, sticker, caption, booking })}
            className="h-12 rounded-full bg-[#AAF980] text-base font-semibold text-[#111827]"
          >
            Share to Community
          </button>
          <button className="grid h-12 w-12 place-items-center rounded-full bg-[#111827] text-white">
            <Icon name="ph-paper-plane-tilt" className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
