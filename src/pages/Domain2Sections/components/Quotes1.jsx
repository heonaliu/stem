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
    initials: "EA",
    name: "Elizabeth “Betsy” Areizaga",
    role: "Manager of Penguin Coding School, Newton",
    quote: `What stands out most is Heona’s proactive approach to her own professional development. She
is remarkably self-sufficient but possesses the maturity to seek help & guindance when
navigating a difficult student dynamic. For example, her initiative to learn Roblox Studios & Lua
programming in order to teach the class. This was a significant undertaking, as it required, not
only coding, but a complex 3D virtual interface (utilizing a 3-button mouse system and intricate
script organization). By teaching herself this platform to expand our course offerings, she
demonstrated the exact "growth mindset" we encourage in our students.`,
    tags: [{ text: "Growth", type: "featured" }],
    stats: [
      { icon: Users, text: "Manager" },
      { icon: Clock, text: "Sophomore - Present" },
    ],
    avatarGradient: "linear-gradient(135deg, #ff5656, #ff802b)",
  },
];

export default function Quotes1() {
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
