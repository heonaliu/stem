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
    role: "Computer Programming Teacher",
    quote: `What sets Heona apart is her natural leadership, which strengthened our class culture and learning
environment. By consistently volunteering answers and asking the "why" behind the code, Heona deepened
her own understanding of the curriculum as well as her peers’ understanding. Her peers frequently sought her
out for support. In addition, Heona took her STEM knowledge into the professional world. She showed
incredible initiative in securing a position at Penguin Coding School. During the application process, she was
proactive in preparing for her interview by bringing an outlined demo lesson to me for critique. She immediately
applied my feedback to improve her teaching. By teaching coding to others, she has moved beyond peer
collaboration into true leadership and connection with the STEM community.`,
    tags: [{ text: "Leadership", type: "featured" }],
    stats: [
      { icon: Users, text: "Math Dept." },
      { icon: Clock, text: "Sophomore Year" },
    ],
    avatarGradient: "linear-gradient(135deg, #56eeff, #0f77b7)",
  },
];

export default function CompQuote() {
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
