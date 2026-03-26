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
import { TestimonialStack } from "../../../components/ui/glass-testimonial-swiper"

import React from "react";
const testimonialsData = [
  {
    id: 1,
    initials: "RC",
    name: "Rebekah Collipp",
    role: "AP Computer Science A Teacher",
    quote: "xyz",
    tags: [{ text: "Technology", type: "featured"}],
    stats: [
      { icon: Users, text: "AP Homeschoolers Teacher" },
      { icon: Clock, text: "Junior Year" },
    ],
    avatarGradient: "linear-gradient(135deg, #5e6ad2, #8b5cf6)",
  },
];

export default function QuoteCSA() {
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
