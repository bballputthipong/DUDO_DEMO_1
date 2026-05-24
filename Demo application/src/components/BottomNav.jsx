import Icon from "./Icon.jsx";

export default function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    ["Home", "ph-house"],
    ["Discovery", "ph-magnifying-glass"],
    ["Activity", "ph-pulse"],
    ["Community", "ph-users"],
    ["Profile", "ph-user"]
  ];

  return (
    <nav 
      className="fixed left-1/2 z-40 w-[min(92vw,400px)] -translate-x-1/2 rounded-full glass-light p-2 shadow-sys-lg"
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="grid grid-cols-5 gap-1">
        {tabs.map(([tab, icon]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex h-16 flex-col items-center justify-center gap-1 rounded-full text-[11px] font-semibold tracking-wide leading-none ${
              activeTab === tab ? "bg-[#4D54F8] text-white shadow-md" : "text-[#111827]/75"
            }`}
          >
            <Icon name={activeTab === tab ? `${icon}-fill` : icon} className="text-[24px]" />
            <span>{tab === "Discovery" ? "Discover" : tab}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
