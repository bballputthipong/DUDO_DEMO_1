export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed left-1/2 top-4 z-[60] w-[min(92vw,430px)] -translate-x-1/2 rounded-full glass-dark px-4 py-3 text-center text-sm font-semibold text-white shadow-sys-lg">
      {message}
    </div>
  );
}
