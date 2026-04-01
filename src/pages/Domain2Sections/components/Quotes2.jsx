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
    initials: "DH",
    name: "Ms. Homer",
    role: "Biology Teacher",
    quote: `While biology is a new subject for Heona, she dives into all class activities, speaks up with
questions both to clarify her understanding and explore her curiosity, and takes steps to deepen
her understanding outside of class. In particular, Heona takes meticulous notes and
demonstrates strong attention to detail in the diagrams and drawings she creates as part of her
notes. When we covered the details of cellular respiration (which is often a challenging topic for
students), she took the time to watch extra resource videos and rewrite notes to master the new
concepts.`,
    tags: [{ text: "Science", type: "featured" }],
    stats: [
      { icon: Users, text: "Science Dept." },
      { icon: Clock, text: "Junior Year" },
    ],
    avatarGradient: "linear-gradient(135deg, #5ed2af, #13e580)",
  },
];

export default function Quotes2() {
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
