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
    initials: "DH",
    name: "Ms. Homer",
    role: "Biology Teacher",
    quote: `This spring, Heona submitted an expertly crafted graphic about the
circulatory/respiratory systems and how vaccination works. It has been a pleasure to observe
Heona make use of her already well developed skills (such as graphics and computer
programming) to support her mastery of new skills and content in biology.” - Dana Homer
(NNHS Biology Teacher)`,
    tags: [{ text: "Science", type: "featured" }],
    stats: [
      { icon: Users, text: "Science Dept." },
      { icon: Clock, text: "Junior Year" },
    ],
    avatarGradient: "linear-gradient(135deg, #5ed2af, #13e580)",
  },
];

export default function ConnectBio() {
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
