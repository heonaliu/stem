import Header from "../components/Header";

import {
  Users,
  Calendar,
  ThumbsUp,
  ShieldCheck,
  Clock,
  Share,
  Rocket,
  Zap,
  Gem,
} from "lucide-react";
import { TestimonialStack } from "../components/ui/glass-testimonial-swiper";

import React from "react";
const testimonialsData = [
  {
    id: 1,
    initials: "MD",
    name: "Ms. Daley",
    role: "Computer Science Teacher",
    quote:
      "xyz",
    tags: [
      { text: "Computer Science", type: "featured" },
      { text: "Enterprise", type: "default" },
    ],
    stats: [
      { icon: Users, text: "Math Dept." },
      { icon: Calendar, text: "2 Years Ago" },
    ],
    avatarGradient: "linear-gradient(135deg, #5e6ad2, #8b5cf6)",
  },
];

export default function Domain2() {
  return (
    <>
      <div className="flex flex-col gap-8 p-8">
        <Header domain="2" title="Significant Growth Over Time" />

        <div className="w-full max-w-2xl mx-auto">
  <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6">

    <div
      className="absolute inset-0 bg-cover bg-center opacity-60 scale-110"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/drhx7imeb/image/upload/v1756215257/gradient-optimized_nfrakk.svg")',
      }}
    />


    <div className="relative z-10">
      <TestimonialStack testimonials={testimonialsData} />
    </div>

  </div>
</div>
      </div>
    </>
  );
}
