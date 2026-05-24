import Icon from "../components/Icon.jsx";
import { studios } from "../data/mockData.js";

export default function Community({ posts, setPosts, onBook }) {
  const updatePost = (id, key) => {
    setPosts((current) => current.map((post) => post.id === id ? { ...post, [key]: !post[key] } : post));
  };

  return (
    <main className="dudo-page space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-12 flex-1 items-center gap-3 rounded-full bg-white px-4 shadow-sys-sm">
          <Icon name="ph-magnifying-glass" className="text-2xl" />
          <span className="text-[#111827]/50">Search</span>
        </div>
        <button className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sys-sm">
          <Icon name="ph-tray" className="text-2xl" />
        </button>
      </div>
      <CommunityTabs />
      <Stories />
      <div className="space-y-5">
        {posts.map((post) => (
          <article key={post.id} className="overflow-hidden rounded-[22px] bg-white shadow-sys-sm">
            <div className="flex items-center gap-3 p-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#E5D9CB] font-semibold">{post.user.slice(0, 1)}</div>
              <div className="min-w-0 flex-1">
                <p className="text-lg font-semibold leading-none">{post.user}</p>
                <p className="mt-1 text-sm text-[#111827]/55">{post.meta}</p>
              </div>
              <span className="rounded-full bg-[#E5D9CB] px-3 py-2 text-xs font-semibold">{post.status}</span>
            </div>
            <div className="px-4 pb-3">
              <h2 className="text-2xl font-semibold leading-tight">{post.headline}</h2>
            </div>
            <div className="relative h-96 bg-[#111827]">
              <img src={post.image} alt={post.headline} className="h-full w-full object-cover" />
              <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
                {post.stats.map((stat) => (
                  <span key={stat} className="rounded-full glass-light px-3 py-2 text-sm font-semibold text-[#111827]">{stat}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-5 border-t border-[#111827]/10">
              {[
                ["ph-thumbs-up", "liked"],
                ["ph-chat-circle-text", "comment"],
                ["ph-repeat", "repeat"],
                ["ph-paper-plane-tilt", "share"],
                ["ph-bookmark-simple", "saved"]
              ].map(([icon, key]) => (
                <button
                  key={key}
                  onClick={() => key === "liked" || key === "saved" ? updatePost(post.id, key) : undefined}
                  className="grid h-12 place-items-center text-2xl text-[#111827]"
                >
                  <Icon name={(key === "liked" && post.liked) || (key === "saved" && post.saved) ? `${icon}-fill` : icon} className={(key === "liked" && post.liked) || (key === "saved" && post.saved) ? "text-primary-500" : ""} />
                </button>
              ))}
            </div>
            <div className="p-4">
              <button onClick={() => onBook(studios[0])} className="h-11 w-full rounded-full bg-[#AAF980] text-sm font-semibold text-[#111827]">Book a similar class</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function CommunityTabs() {
  const tabs = ["Silom", "Friend", "Following", "For you"];
  const activeTab = "Friend";

  return (
    <div className="flex gap-5 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`text-2xl font-medium leading-none ${activeTab === tab ? "border-b-2 border-[#111827] pb-1" : "text-[#111827]/70"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function Stories() {
  return (
    <div className="flex gap-4 overflow-x-auto no-scrollbar">
      <button className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full bg-[#E5D9CB] text-3xl">
        <Icon name="ph-plus" />
      </button>
      {["Maya", "Krit", "Nina", "Tan", "June"].map((name) => (
        <div key={name} className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#AAF980] p-1">
          <img src={studios[name.length % studios.length].image} alt={`${name} story`} className="h-full w-full rounded-full object-cover" />
        </div>
      ))}
    </div>
  );
}
