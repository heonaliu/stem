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
    quote: `Beyond the classroom, Heona is a reliable and consistent ambassador for STEM. She has
dedicated her time to participate at local community events and fairs, representing Penguin
Coding School to the Newton community and inspiring new families to explore the world of
technology. Her ability to keep her classes organized and her students returning month after
month is a testament to the positive, inclusive environment she creates.`,
    tags: [{ text: "Leadership", type: "featured" }],
    stats: [
      { icon: Users, text: "Manager" },
      { icon: Clock, text: "Sophomore - Present" },
    ],
    avatarGradient: "linear-gradient(135deg, #ff5656, #f65cf6)",
  },
];

export default function PenguinQuote2() {
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
