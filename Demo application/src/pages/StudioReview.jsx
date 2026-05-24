import { useState } from "react";
import Icon from "../components/Icon.jsx";

export default function StudioReview({ studio, onBack }) {
  const [activeTag, setActiveTag] = useState("All");
  const tags = ["All", "Coach", "Clean", "Credit value", "Beginner"];
  const reviews = [
    { user: "Nina S.", count: 77, rating: 5, date: "4d ago", text: "Coach cues were precise, check-in was fast, and the studio felt calm even during peak hour.", className: studio.classes[0] },
    { user: "Tan R.", count: 43, rating: 5, date: "1w ago", text: "Great value for credits. The amenities and location make it easy to repeat weekly.", className: studio.classes[1] },
    { user: "Maya V.", count: 101, rating: 4.8, date: "2w ago", text: "Loved the verified booking flow. I would book earlier slots next time.", className: studio.classes[0] },
    { user: "Krit P.", count: 65, rating: 4.9, date: "3w ago", text: "Premium experience without feeling too formal. Instructor adapted the level well.", className: studio.classes[1] }
  ];

  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-8">
      <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-[#111827]/10 bg-[#F9FAFB]/90 p-5 backdrop-blur-xl">
        <button onClick={onBack} className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-x" className="text-2xl" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold leading-none">Rating & Review</h1>
          <p className="mt-1 text-sm text-[#111827]/55">{studio.name}</p>
        </div>
      </header>

      <section className="p-5">
        <div className="rounded-[32px] bg-[#E5D9CB] p-5">
          <div className="grid grid-cols-[120px_1fr] gap-5">
            <div>
              <p className="text-6xl font-semibold leading-none">{studio.rating}</p>
              <div className="mt-2 flex text-[#4D54F8]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon key={index} name="ph-star-fill" className="text-xl" />
                ))}
              </div>
              <p className="mt-1 text-sm text-[#111827]/65">{studio.reviews} ratings</p>
            </div>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((score) => (
                <div key={score} className="grid grid-cols-[18px_1fr] items-center gap-2">
                  <span className="text-sm font-medium">{score}</span>
                  <div className="h-3 rounded-full bg-white/60">
                    <div className="h-full rounded-full bg-[#4D54F8]" style={{ width: `${score === 5 ? 82 : score === 4 ? 38 : 12}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto no-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`h-10 shrink-0 rounded-full px-5 text-sm font-medium ${activeTag === tag ? "bg-[#4D54F8] text-white" : "bg-[#E5D9CB] text-[#111827]"}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-5 space-y-4">
          {reviews.map((review) => (
            <article key={review.user} className="rounded-[22px] bg-white p-4 shadow-sys-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#E5D9CB] text-sm font-semibold">{review.user.slice(0, 1)}</div>
                <div>
                  <p className="text-lg font-semibold leading-none">{review.user}</p>
                  <p className="mt-1 text-sm text-[#111827]/55">{review.count} reviews</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#111827]/70">
                <Icon name="ph-star-fill" className="text-primary-500" /> {review.rating} · {review.date}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#111827]/75">{review.text}</p>
              <p className="mt-4 text-sm font-medium text-[#111827]/65">Class booked</p>
              <div className="mt-2 flex items-center gap-3 rounded-[22px] border border-[#111827]/10 p-2">
                <img src={studio.image} alt={review.className} className="h-16 w-16 rounded-[12px] object-cover" />
                <div>
                  <p className="font-semibold">{review.className}</p>
                  <p className="text-sm text-[#111827]/55">{studio.credits} credits · verified</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
