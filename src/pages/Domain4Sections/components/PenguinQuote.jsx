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
    quote: `Heona has been an integral part of our teaching staff, contributing approximately 3.5 to 4 hours
every Sunday. In this role, she manages classrooms of students ranging from ages 6 to 13.
She’s learned to navigate the diverse needs and learning styles of students in her classroom.
Her teaching spans a variety of platforms, including Minecraft Education, Python, Scratch, and
Roblox Studios. She adapts her instruction to meet students at their levels, balancing learning
and fun. Which is the base that all Penguin Coding Schools strive to deliver.`,
    tags: [{ text: "Leadership", type: "featured" }],
    stats: [
      { icon: Users, text: "Manager" },
      { icon: Clock, text: "Sophomore - Present" },
    ],
    avatarGradient: "linear-gradient(135deg, #ff5656, #ff802b)",
  },
];

export default function PenguinQuote() {
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
