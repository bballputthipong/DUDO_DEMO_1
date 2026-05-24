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
    <nav className="fixed bottom-4 left-1/2 z-40 w-[min(86vw,372px)] -translate-x-1/2 rounded-full glass-light p-1.5 shadow-sys-lg">
      <div className="grid grid-cols-5 gap-0.5">
        {tabs.map(([tab, icon]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex h-12 flex-col items-center justify-center gap-0.5 rounded-full text-[10px] font-medium leading-none ${
              activeTab === tab ? "bg-[#4D54F8] text-white" : "text-[#111827]/75"
            }`}
          >
            <Icon name={activeTab === tab ? `${icon}-fill` : icon} className="text-[20px]" />
            <span>{tab === "Discovery" ? "Discover" : tab}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
