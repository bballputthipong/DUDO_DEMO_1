import { useState } from "react";
import Icon from "./Icon.jsx";

export default function RatingReviewModal({ booking, onClose, onSubmit }) {
  const [rating, setRating] = useState(5);
  const [tags, setTags] = useState(["Clean", "Great coach"]);
  const [note, setNote] = useState("Verified check-in felt smooth. The pacing was premium and the coach gave useful form cues.");
  const availableTags = ["Clean", "Great coach", "Worth credits", "Social", "Beginner friendly", "Recovery boost"];

  return (
    <div className="fixed inset-0 z-50 bg-[#111827]/60 p-4 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-md flex-col overflow-hidden rounded-[22px] bg-[#F9FAFB] shadow-sys-lg">
        <div className="flex items-center gap-4 border-b border-[#111827]/10 p-5">
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-white">
            <Icon name="ph-x" className="text-2xl" />
          </button>
          <h2 className="text-2xl font-semibold">Rating & Review</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <div className="rounded-[32px] bg-[#E5D9CB] p-5">
            <div className="grid grid-cols-[120px_1fr] gap-5">
              <div>
                <p className="text-6xl font-semibold leading-none">{rating.toFixed(1)}</p>
                <div className="mt-2 flex text-[#4D54F8]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button key={index} onClick={() => setRating(index + 1)}>
                      <Icon name={index < rating ? "ph-star-fill" : "ph-star"} className="text-xl" />
                    </button>
                  ))}
                </div>
                <p className="mt-1 text-sm text-[#111827]/65">Your rating</p>
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((score) => (
                  <div key={score} className="grid grid-cols-[18px_1fr] items-center gap-2">
                    <span className="text-sm font-medium">{score}</span>
                    <div className="h-3 rounded-full bg-white/60">
                      <div className="h-full rounded-full bg-[#4D54F8]" style={{ width: `${score === 5 ? 78 : score === 4 ? 44 : 18}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setTags((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag])}
                className={`h-10 shrink-0 rounded-full px-4 text-sm font-medium ${tags.includes(tag) ? "bg-[#4D54F8] text-white" : "bg-[#E5D9CB] text-[#111827]"}`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-[22px] bg-white p-4 shadow-sys-sm">
            <div className="flex gap-3">
              <img src={booking.image} alt={booking.name} className="h-16 w-16 rounded-[22px] object-cover" />
              <div>
                <h3 className="text-lg font-semibold">{booking.classes[0]}</h3>
                <p className="text-sm text-[#111827]/65">{booking.name} · Verified DUDO booking</p>
              </div>
            </div>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              className="mt-4 min-h-32 w-full rounded-[22px] border border-[#111827]/10 bg-[#F9FAFB] p-3 text-sm outline-none focus:border-primary-500"
            />
          </div>
          <div className="mt-5 space-y-4">
            {[
              { user: "Nina S.", text: "Loved the instructor cues and the recovery zone after class.", className: "Reformer Flow" },
              { user: "Tan R.", text: "Credit price was fair for the equipment and location.", className: "Core Control" }
            ].map((review) => (
              <article key={review.user} className="rounded-[22px] bg-white p-4 shadow-sys-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#E5D9CB] text-sm font-semibold">{review.user.slice(0, 1)}</div>
                  <div>
                    <p className="font-semibold">{review.user}</p>
                    <p className="text-xs text-[#111827]/55">77 reviews · 4d ago</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#111827]/75"><Icon name="ph-star-fill" className="text-primary-500" /> 5.0 · {review.text}</p>
                <div className="mt-3 flex items-center gap-3 rounded-[22px] border border-[#111827]/10 p-2">
                  <img src={booking.image} alt={review.className} className="h-14 w-14 rounded-[12px] object-cover" />
                  <span className="text-sm font-medium">{review.className}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="border-t border-[#111827]/10 p-5">
          <button
            onClick={() => onSubmit({ rating, tags, note })}
            className="h-12 w-full rounded-full bg-[#AAF980] text-base font-semibold text-[#111827]"
          >
            Submit review and create flex
          </button>
        </div>
      </div>
    </div>
  );
}
