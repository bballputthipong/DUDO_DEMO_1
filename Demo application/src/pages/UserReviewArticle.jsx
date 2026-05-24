import Icon from "../components/Icon.jsx";
import Pill from "../components/Pill.jsx";
import ClassScheduler from "../components/ClassScheduler.jsx";
import { discoveryEditorials, studios } from "../data/mockData.js";

export default function UserReviewArticle({ article = discoveryEditorials[0], onBack, onOpenStudio, onBook }) {
  const relatedStudio = studios.find((studio) => studio.id === article.relatedStudioId) || studios[0];

  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-12">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-[#E5D9CB]/90 px-5 py-5 backdrop-blur-xl">
        <button onClick={onBack} className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-arrow-left" className="text-2xl" />
        </button>
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-semibold">{article.author.slice(0, 1)}</div>
          <div>
            <p className="font-semibold leading-none">{article.author}</p>
            <p className="mt-1 text-xs text-[#111827]/55">{article.views} views</p>
          </div>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-dots-three-vertical" className="text-2xl" />
        </button>
      </header>

      <section>
        <div className="relative h-80 bg-[#111827]">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          <div className="absolute bottom-4 left-1/2 h-8 w-16 -translate-x-1/2 rounded-full glass-light text-center text-xl leading-7">•••</div>
        </div>
        <div className="border-b border-[#111827]/10 bg-white p-5">
          <h1 className="text-[32px] font-semibold leading-none">{article.title}</h1>
          <p className="mt-4 text-lg leading-7 text-[#111827]/75">{article.body}</p>
          <button className="mx-auto mt-5 flex items-center gap-1 text-sm font-medium text-[#111827]/55">
            Show More
            <Icon name="ph-caret-down" />
          </button>
        </div>
      </section>

      <section className="border-b border-[#111827]/10 p-5">
        <div className="mb-4 flex gap-2 overflow-x-auto no-scrollbar">
          {["Today", "25 May", "26 May", "27 May", "28 May"].map((item, index) => (
            <Pill key={item} active={index === 0} onClick={() => undefined}>{item}</Pill>
          ))}
        </div>
        <ClassScheduler
          studio={relatedStudio}
          date="Today"
          selectedTime={relatedStudio.nextTimes[0]}
          setSelectedTime={() => undefined}
          onBook={onBook}
        />
      </section>

      <section className="border-b border-[#111827]/10 p-5">
        <h2 className="mb-4 text-3xl font-semibold leading-none">Related Class</h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {relatedStudio.classes.map((className) => (
            <button key={className} onClick={() => onOpenStudio(relatedStudio)} className="grid w-72 shrink-0 grid-cols-[88px_1fr_auto] items-center gap-3 rounded-[22px] border border-[#111827]/10 bg-white p-2 text-left">
              <img src={relatedStudio.image} alt={className} className="h-20 w-20 rounded-[22px] object-cover" />
              <div>
                <p className="font-semibold">{className}</p>
                <p className="mt-1 text-sm text-[#111827]/55">{relatedStudio.name}</p>
              </div>
              <p className="text-xl font-semibold">{relatedStudio.credits}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-semibold leading-none">Other similar review</h2>
          <button className="grid h-10 w-16 place-items-center rounded-full bg-[#E5D9CB]">
            <Icon name="ph-arrow-right" className="text-2xl" />
          </button>
        </div>
        <div className="grid grid-cols-[1fr_92px] gap-3">
          {discoveryEditorials.filter((item) => item.id !== article.id).slice(0, 3).map((item, index) => (
            <button
              key={item.id}
              className={`${index === 0 ? "row-span-2" : ""} overflow-hidden rounded-[24px] bg-white text-left shadow-sys-sm`}
            >
              <img src={item.image} alt={item.title} className={`${index === 0 ? "h-52" : "h-24"} w-full object-cover`} />
              {index === 0 && (
                <div className="p-4">
                  <p className="text-sm font-semibold text-primary-500">{item.className}</p>
                  <h3 className="mt-1 text-xl font-semibold leading-tight">{item.title}</h3>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
