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
import { TestimonialStack } from "../../../components/ui/glass-testimonial-swiper";

import React from "react";
const testimonialsData = [
  {
    id: 1,
    initials: "MD",
    name: "Ms. Daley",
    role: "Computer Science Teacher",
    quote: `Heona’s performance in Computer Programming consistently exceeded the expectations of the course. Heona
not only completed her assignments well, but she used them as a springboard for deeper inquiry into Python.
She frequently tackled more challenging extensions to exercise her skills once standard assignments were
complete. Heona consistently stretched herself beyond what was required to earn a high grade. This drive
represents a clear commitment to personal growth and study.`,
    tags: [{ text: "Commitment & Personal Study", type: "featured" }],
    stats: [
      { icon: Users, text: "Math Dept." },
      { icon: Clock, text: "Sophmore Year" },
    ],
    avatarGradient: "linear-gradient(135deg, #ff5656, #f65cf6)",
  },
];

export default function QuoteCS() {
  return (
    <div className="w-full max-w-4xl mx-auto">
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
  );
}
