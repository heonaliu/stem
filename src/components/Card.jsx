export default function Card({ children }) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-5 md:p-6 w-full">
      <div className="flex flex-col gap-3 text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}