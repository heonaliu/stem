import { useState } from "react";

export default function ExpandCard({ children, expandable = false }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-5 md:p-6 w-full">
      <div className="relative">
        <div
          className={`flex flex-col gap-3 text-text leading-relaxed transition-all duration-300 ${
            expandable && !expanded ? "max-h-48 overflow-hidden" : ""
          }`}
        >
          {children}
        </div>

        {expandable && !expanded && (
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent rounded-b-2xl" />
        )}
      </div>

      {expandable && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 text-sm font-medium text-primary-500 hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
