import { useMemo, useState } from "react";
import Icon from "../components/Icon.jsx";
import Pill from "../components/Pill.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StudioCard from "../components/StudioCard.jsx";
import VerticalStudioList from "../components/VerticalStudioList.jsx";
import ClassScheduler from "../components/ClassScheduler.jsx";
import {
  categories,
  discoveryCommunities,
  discoveryEditorials,
  discoveryLocations,
  studios
} from "../data/mockData.js";

export default function Discovery({ onBook, onNavigate, onOpenStudio, onOpenArticle, onOpenVerticalList, onOpenFilter, favorites, onFavorite }) {
  const [subTab, setSubTab] = useState("Main");
  const [nearbyMode, setNearbyMode] = useState("Map");
  const [category, setCategory] = useState("pilates");
  const [date, setDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("18:30");
  const [locationQuery, setLocationQuery] = useState("");
  const dates = ["Today", "25 May", "26 May", "27 May", "28 May", "29 May"];
  const filtered = useMemo(() => {
    if (category === "recovery") return studios.filter((studio) => studio.tags.includes("Recovery") || studio.tags.includes("Ice Bath"));
    if (category === "climb") return studios.filter((studio) => studio.tags.includes("Climb"));
    if (category === "weights") return studios.filter((studio) => studio.tags.includes("Strength") || studio.tags.includes("HIIT"));
    if (category === "dance") return studios.filter((studio) => studio.tags.includes("Yoga") || studio.tags.includes("Social"));
    if (category === "muay-thai") return studios.filter((studio) => studio.tags.includes("HIIT") || studio.tags.includes("Strength"));
    return studios;
  }, [category]);
  const heroStudio = filtered[0] || studios[0];

  return (
    <main style={{ paddingBottom: "calc(124px + env(safe-area-inset-bottom, 0px))" }}>
      <DiscoveryHeader subTab={subTab} setSubTab={setSubTab} />
      {subTab === "Main" && (
        <MainLanding
          category={category}
          setCategory={setCategory}
          onOpenNearby={() => setSubTab("Near by")}
          dates={dates}
          date={date}
          setDate={setDate}
          studios={filtered}
          onNavigate={onNavigate}
          onOpenStudio={onOpenStudio}
          onBook={onBook}
          onOpenFilter={onOpenFilter}
          onOpenVerticalList={onOpenVerticalList}
          favorites={favorites}
          onFavorite={onFavorite}
        />
      )}
      {subTab === "Near by" && (
        <NearbyLanding
          mode={nearbyMode}
          setMode={setNearbyMode}
          locationQuery={locationQuery}
          setLocationQuery={setLocationQuery}
          category={category}
          setCategory={setCategory}
          date={date}
          setDate={setDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          dates={dates}
          heroStudio={heroStudio}
          studios={filtered}
          onBook={onBook}
          onOpenStudio={onOpenStudio}
          onNavigate={onNavigate}
          onOpenFilter={onOpenFilter}
          favorites={favorites}
          onFavorite={onFavorite}
        />
      )}
      {subTab === "Explore" && (
        <ExploreLanding onOpenArticle={onOpenArticle} onOpenFilter={onOpenFilter} />
      )}
    </main>
  );
}

function DiscoveryHeader({ subTab, setSubTab }) {
  return (
    <div className="sticky top-0 z-30 glass-light px-5 pb-3" style={{ paddingTop: "max(32px, calc(16px + env(safe-area-inset-top, 0px)))" }}>
      <div className="flex items-center gap-3">
        <div className="flex flex-1 rounded-full bg-white/80 p-1">
          {["Main", "Near by", "Explore"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSubTab(tab)}
              className={`h-10 flex-1 rounded-full text-lg font-medium transition ${subTab === tab ? "bg-[#111827] text-white" : "text-[#111827]"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#111827] shadow-sys-sm">
          <Icon name="ph-magnifying-glass" className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

function MainLanding({ category, setCategory, onOpenNearby, dates, date, setDate, studios, onNavigate, onOpenStudio, onBook, onOpenFilter, onOpenVerticalList, favorites, onFavorite }) {
  return (
    <div className="space-y-8 px-5 pt-5">
      <section className="glass-brand rounded-[22px] p-4">
        <p className="text-sm font-semibold text-primary-900">Use your credits across premium studios.</p>
        <p className="mt-1 text-sm text-[#111827]/70">Browse class sections, coupon drops, recommended studios, recent activity, and low-credit slots.</p>
      </section>

      <section>
        <SectionHeader title="Category" action="See map" onClick={onOpenNearby} />
        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`h-24 rounded-[22px] border p-3 text-center transition ${
                category === cat.id ? "border-primary-500 bg-[#4D54F8] text-white" : "border-white/80 bg-white/75 text-[#111827]"
              }`}
            >
              <Icon name={cat.icon} className="text-3xl" />
              <span className="mt-2 block text-sm font-medium leading-tight">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Coupon" action="More" />
        <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto no-scrollbar">
          {["Move More Challenge", "Recovery Duo", "Low-credit Lunch"].map((title, index) => (
            <button key={title} className={`h-40 w-36 shrink-0 rounded-[22px] p-4 text-left shadow-sys-sm ${index === 0 ? "bg-[#4D54F8] text-white" : "bg-white text-[#111827]"}`}>
              <Icon name={index === 0 ? "ph-ticket" : "ph-gift"} className={`text-3xl ${index === 0 ? "text-[#AAF980]" : "text-primary-500"}`} />
              <p className="mt-8 text-lg font-semibold leading-tight">{title}</p>
              <p className="mt-2 text-xs opacity-70">Save up to 60%</p>
            </button>
          ))}
        </div>
      </section>

      <HorizontalStudioSection title="Recommended for U" studios={studios} onOpenStudio={onOpenStudio} onBook={onBook} onOpenVerticalList={onOpenVerticalList} favorites={favorites} onFavorite={onFavorite} />
      <HorizontalStudioSection title="Recent Activity" studios={[...studios].reverse()} onOpenStudio={onOpenStudio} onBook={onBook} onOpenVerticalList={onOpenVerticalList} favorites={favorites} onFavorite={onFavorite} />
      <HorizontalStudioSection title="Low Credits" studios={studios.filter((studio) => studio.credits <= 4)} onOpenStudio={onOpenStudio} onBook={onBook} onOpenVerticalList={onOpenVerticalList} favorites={favorites} onFavorite={onFavorite} dark />

      <section>
        <div className="scroll-edge-fade scroll-edge-fade-container mb-3 flex gap-2 overflow-x-auto no-scrollbar">
          <Pill active onClick={onOpenFilter}>
            <Icon name="ph-sliders-horizontal" className="mr-1 align-[-1px]" />
            Filter
          </Pill>
          {dates.map((item) => (
            <Pill key={item} active={date === item} onClick={() => setDate(item)}>
              {item}
            </Pill>
          ))}
        </div>
        <VerticalStudioList studios={studios} favorites={favorites} onFavorite={onFavorite} onBook={onBook} onOpenStudio={onOpenStudio} />
      </section>
    </div>
  );
}

function HorizontalStudioSection({ title, studios, onOpenStudio, onBook, onOpenVerticalList, favorites, onFavorite, dark = false }) {
  return (
    <section className={dark ? "rounded-[22px] bg-[#E5D9CB] p-4" : ""}>
      <SectionHeader title={title} action="Open" onClick={() => onOpenVerticalList?.(title)} />
      <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        {studios.map((studio) => (
          <StudioCard
            key={studio.id}
            studio={studio}
            compact
            onBook={onBook}
            onOpenStudio={onOpenStudio}
            onFavorite={onFavorite}
            favorite={favorites.includes(studio.id)}
          />
        ))}
      </div>
    </section>
  );
}

function NearbyLanding({ mode, setMode, locationQuery, setLocationQuery, category, setCategory, date, setDate, selectedTime, setSelectedTime, dates, heroStudio, studios, onBook, onOpenStudio, onNavigate, onOpenFilter, favorites, onFavorite }) {
  const [sheetSize, setSheetSize] = useState("expanded");
  const [dragStart, setDragStart] = useState(null);
  const handlePointerUp = (event) => {
    if (dragStart === null) return;
    const delta = event.clientY - dragStart;
    setDragStart(null);
    if (delta > 45) {
      setSheetSize("collapsed");
      return;
    }
    if (delta < -35) {
      setSheetSize("expanded");
    }
  };

  if (mode === "Commu") {
    return (
      <NearbyCommunity
        mode={mode}
        setMode={setMode}
        locationQuery={locationQuery}
        setLocationQuery={setLocationQuery}
        dates={dates}
        date={date}
        setDate={setDate}
        studios={studios}
        onBook={onBook}
        onOpenStudio={onOpenStudio}
        onOpenFilter={onOpenFilter}
        favorites={favorites}
        onFavorite={onFavorite}
      />
    );
  }

  return (
    <section className="relative h-[calc(100vh-4.9rem)] overflow-hidden">
      <AppleMapFallback />
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <div className="rounded-full glass-light px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">Current location</p>
          <p className="text-sm font-semibold">Silom · within 2 km</p>
        </div>
        <NearbyToggle mode={mode} setMode={setMode} />
      </div>
      {[
        ["left-[16%] top-[34%]", studios[0]],
        ["left-[45%] top-[44%]", studios[1]],
        ["left-[70%] top-[31%]", studios[4]]
      ].map(([position, studio]) => (
        <button key={studio.id} onClick={() => onOpenStudio(studio)} className={`absolute ${position} grid h-12 w-12 place-items-center rounded-full bg-[#AAF980] text-[#111827] shadow-sys-lg`}>
          <Icon name="ph-map-pin-fill" className="text-2xl" />
          <span className="absolute -bottom-7 rounded-full bg-white px-2 py-1 text-xs font-semibold">{studio.credits} cr</span>
        </button>
      ))}
      <div
        className="bottom-sheet-panel absolute bottom-0 left-0 right-0 overflow-hidden rounded-t-[32px] bg-[#F9FAFB] shadow-sys-lg"
        style={{ maxHeight: sheetSize === "expanded" ? "58vh" : "25vh" }}
      >
        <button
          className="sheet-handle mx-auto mt-4 block h-8 w-28"
          onClick={() => setSheetSize((current) => current === "expanded" ? "collapsed" : "expanded")}
          onPointerDown={(event) => setDragStart(event.clientY)}
          onPointerUp={handlePointerUp}
          aria-label="Resize nearby results"
        >
          <span className="block h-1.5 w-28 rounded-full bg-[#111827]"></span>
        </button>
        <div className="overflow-y-auto px-5 pb-5" style={{ maxHeight: sheetSize === "expanded" ? "calc(58vh - 3rem)" : "calc(25vh - 3rem)" }}>
        <SectionHeader title="Closed friend near you" action="View" onClick={() => onNavigate("Community")} />
        <div className="scroll-edge-fade scroll-edge-fade-container mb-5 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <Pill key={cat.id} active={category === cat.id} onClick={() => setCategory(cat.id)}>
              <Icon name={cat.icon} className="mr-1 align-[-1px]" />
              {cat.label}
            </Pill>
          ))}
        </div>
        <ClassScheduler studio={heroStudio} date={date} selectedTime={selectedTime} setSelectedTime={setSelectedTime} onBook={onBook} />
        </div>
      </div>
    </section>
  );
}

function AppleMapFallback() {
  return (
    <div className="map-field absolute inset-0">
      <div className="absolute inset-0 opacity-55">
        <div className="absolute left-[-20%] top-[18%] h-12 w-[140%] rotate-[18deg] bg-white/70"></div>
        <div className="absolute left-[-10%] top-[50%] h-10 w-[130%] rotate-[-28deg] bg-white/60"></div>
        <div className="absolute left-[20%] top-0 h-full w-8 rotate-[8deg] bg-white/45"></div>
      </div>
      <div className="absolute bottom-32 left-5 rounded-[22px] glass-light px-3 py-2 text-xs font-semibold text-[#111827]/70">
        Apple Maps-ready surface · MapKit token required for live tiles
      </div>
    </div>
  );
}

function NearbyToggle({ mode, setMode }) {
  return (
    <div className="flex rounded-full bg-white p-1 shadow-sys-sm">
      {["Map", "Commu"].map((item) => (
        <button
          key={item}
          onClick={() => setMode(item)}
          className={`h-10 rounded-full px-5 text-sm font-semibold ${mode === item ? "bg-[#111827] text-white" : "text-[#111827]"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function NearbyCommunity({ mode, setMode, locationQuery, setLocationQuery, dates, date, setDate, studios, onBook, onOpenStudio, onOpenFilter, favorites, onFavorite }) {
  return (
    <div className="px-5 pt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="ph-map-pin" className="text-3xl" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">Target location</p>
            <p className="text-xl font-semibold leading-none">Your Current location</p>
          </div>
        </div>
        <NearbyToggle mode={mode} setMode={setMode} />
      </div>
      <label className="mt-5 flex h-14 items-center gap-3 rounded-[22px] border border-[#111827]/15 bg-white px-4 shadow-sys-sm">
        <Icon name="ph-magnifying-glass" className="text-2xl text-[#111827]/55" />
        <input
          value={locationQuery}
          onChange={(event) => setLocationQuery(event.target.value)}
          placeholder="Search location or neighbourhood name"
          className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[#111827]/40"
        />
      </label>

      <DiscoveryShelf title="Location" items={discoveryLocations} />
      <DiscoveryShelf title="Community" items={discoveryCommunities} />

      <section className="mt-6">
        <div className="scroll-edge-fade scroll-edge-fade-container mb-3 flex gap-2 overflow-x-auto no-scrollbar">
          <Pill active onClick={onOpenFilter}>
            <Icon name="ph-sliders-horizontal" className="mr-1 align-[-1px]" />
            Sort By
          </Pill>
          {dates.map((item) => (
            <Pill key={item} active={date === item} onClick={() => setDate(item)}>
              {item}
            </Pill>
          ))}
        </div>
        <VerticalStudioList studios={studios} favorites={favorites} onFavorite={onFavorite} onBook={onBook} onOpenStudio={onOpenStudio} />
      </section>
    </div>
  );
}

function DiscoveryShelf({ title, items }) {
  return (
    <section className="mt-7 border-t border-[#111827]/10 pt-5">
      <h2 className="mb-4 inline-flex bg-[#E5D9CB] px-3 py-1 text-2xl font-semibold leading-none">{title}</h2>
      <div className="scroll-edge-fade scroll-edge-fade-container flex gap-4 overflow-x-auto no-scrollbar">
        {items.map((item) => (
          <button key={item.id} className="relative h-36 w-36 shrink-0 overflow-hidden rounded-[24px] bg-[#E5D9CB] text-left shadow-sys-sm">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-xl font-semibold leading-none text-white">{item.name}</p>
              <p className="mt-1 text-xs text-white/75">{item.count} activities</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ExploreLanding({ onOpenArticle, onOpenFilter }) {
  return (
    <div className="px-5 pt-5">
      <div className="scroll-edge-fade scroll-edge-fade-container mb-5 flex gap-2 overflow-x-auto no-scrollbar">
        {["Filter", "Following", "Citywide", "Nearby", "Recovery", "Climb"].map((item, index) => (
          <button
            key={item}
            onClick={index === 0 ? onOpenFilter : undefined}
            className={`h-10 shrink-0 rounded-full px-4 text-sm font-semibold ${
              index === 2 ? "bg-[#4D54F8] text-white" : "bg-white text-[#111827]"
            } shadow-sys-sm`}
          >
            {index === 0 && <Icon name="ph-funnel" className="mr-1 align-[-1px]" />}
            {item}
          </button>
        ))}
      </div>

      <section className="grid grid-cols-2 gap-3">
        {discoveryEditorials.map((article, index) => (
          <button
            key={article.id}
            onClick={() => onOpenArticle(article)}
            className={`overflow-hidden rounded-[24px] bg-white text-left shadow-sys-sm ${index === 0 || index === 3 ? "row-span-2" : ""}`}
          >
            <div className={`relative ${index === 0 || index === 3 ? "h-72" : "h-40"} bg-[#E5D9CB]`}>
              <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full glass-light px-2 py-1 text-xs font-semibold">
                <Icon name="ph-eye" className="mr-1 align-[-1px]" />
                {article.views}
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-primary-500">{article.className}</p>
              <h2 className="mt-1 text-xl font-semibold leading-tight">{article.title}</h2>
              <p className="mt-2 text-sm text-[#111827]/60">{article.subtitle}</p>
              <p className="mt-4 text-xs font-semibold text-[#111827]/55">By {article.author}</p>
            </div>
          </button>
        ))}
      </section>

      <section className="mt-5 rounded-[24px] bg-[#E5D9CB] p-5">
        <p className="text-2xl font-semibold leading-tight">Marketing sentence: discover where your next credit should go before you book.</p>
      </section>
    </div>
  );
}
