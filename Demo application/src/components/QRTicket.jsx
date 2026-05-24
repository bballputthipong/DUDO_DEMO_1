export default function QRTicket() {
  return (
    <div className="mx-auto grid h-56 w-56 grid-cols-9 grid-rows-9 gap-1 rounded-[22px] bg-white p-4 shadow-sys-lg">
      {Array.from({ length: 81 }).map((_, index) => {
        const corner =
          index < 21 && index % 9 < 3 ||
          index < 27 && index % 9 > 5 ||
          index > 53 && index % 9 < 3;
        const active = corner || [13, 14, 22, 31, 33, 35, 39, 40, 41, 45, 47, 49, 56, 58, 60, 62, 66, 70, 73].includes(index);
        return <span key={index} className={`${active ? "bg-[#111827]" : "bg-[#E5D9CB]"} rounded-[2px]`}></span>;
      })}
      <div className="pointer-events-none absolute"></div>
    </div>
  );
}
