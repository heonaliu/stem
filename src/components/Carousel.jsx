import React from "react";
import { useState } from "react";

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  const current = items[index];

  return (
    <>
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-5 md:p-6 w-full">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="relative w-full max-w-sm">
            <img
              src={current.src}
              alt={current.title}
              onClick={() => setOpen(true)}
              className="w-full h-64 object-cover rounded-xl cursor-pointer transition duration-300 hover:scale-105"
            />

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-muted bg-white/70 backdrop-blur px-2 py-1 rounded-md hover:bg-white"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted text-sm bg-white/70 backdrop-blur px-2 py-1 rounded-md hover:bg-white"
            >
              →
            </button>

            <div className="flex justify-center gap-2 mt-3">
              {items.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition ${
                    i === index ? "bg-accent-600" : "bg-accent-500/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 text-text leading-relaxed">
            <h3 className="text-lg font-semibold">{current.title}</h3>
            <p className="text-sm mt-2">{current.description}</p>
          </div>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-muted/30 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-4 max-w-3xl w-full"
          >
            <img
              src={current.src}
              alt=""
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />

            <div className="mt-4">
              <h3 className="text-lg font-semibold">{current.title}</h3>
              <p className="text-sm mt-2">{current.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
