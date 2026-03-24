import { GlowEffect } from "@/components/ui/glow-effect";

export function GlowCard({ image, link }) {
  const clickable = !!link;

  return (
    <div
      onClick={() => clickable && window.open(link, "_blank")}
      className={`relative inline-block w-fit ${
        clickable ? "cursor-pointer" : ""
      }`}
    >
      {/* Glow */}
      <GlowEffect
        colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
        mode="static"
        blur="medium"
      />

      {/* Card */}
      <div
        className={`relative w-fit rounded-xl bg-white p-2 shadow-xl border border-gray-200 ${
          clickable ? "hover:scale-105 transition" : ""
        }`}
      >
        {/* Image */}
        <img
          src={image}
          alt="card"
          className="block w-auto h-auto max-h-[70vh] max-w-[calc(100vw-4rem)] object-contain transition-all duration-300"
        />
      </div>
    </div>
  );
}
