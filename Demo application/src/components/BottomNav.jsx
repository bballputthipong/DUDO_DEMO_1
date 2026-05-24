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
      className="fixed left-1/2 z-40 w-[min(90vw,390px)] -translate-x-1/2 rounded-full glass-light p-1 shadow-sys-lg"
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="flex items-center justify-between px-0.5">
        {tabs.map(([tab, icon]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex h-[44px] w-[44px] flex-col items-center justify-center gap-0.5 rounded-full text-[9px] font-semibold tracking-wide leading-tight ${
              activeTab === tab ? "bg-[#4D54F8] text-white shadow-md" : "text-[#111827]/75"
            }`}
          >
            <Icon name={activeTab === tab ? `${icon}-fill` : icon} className="text-[18px]" />
            <span>{tab === "Discovery" ? "Discover" : tab}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
