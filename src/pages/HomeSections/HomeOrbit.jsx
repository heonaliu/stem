import { LinkIcon, Users, Brain, TrendingUp, Book, Home } from "lucide-react";
import center from "../../assets/public/center1.png";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Excellence In The Discipline",
    date: "2026",
    content:
      "Applicants should excel in multiple disciplines within STEM. This can be demonstrated through the various STEM classes they take at Newton North, awards and recognitions, success in competitions, etc.",
    icon: Book,
    relatedIds: [2, 5],
    energy: 100,
    path: "/excellence",
  },
  {
    id: 2,
    title: "Significant Growth Over Time",
    date: "2026",
    content:
      "Applicants should be invested in growing their STEM knowledge and math and science practices and/or demonstrate a commitment to future growth and learning. This can be demonstrated through their reflection upon their growth prior to high school, but most specifically during their time at Newton North.",
    icon: TrendingUp,
    relatedIds: [1, 3],
    energy: 90,
    path: "/growth",
  },
  {
    id: 3,
    title: "Commitment to Personal Study",
    date: "2026",
    content:
      "Applicants should be committed to widening their experience and scholarship within the domains.  This can be demonstrated by sharing specific examples that highlight their hard work, persistence, focus and passion connected to STEM learning. This can happen both within and outside the classroom with evidence of student initiative to build upon the baseline expectations in a course.",
    category: "Development",
    icon: Brain,
    relatedIds: [2, 4],
    energy: 60,
    path: "/commitment",
  },
  {
    id: 4,
    title: "Commitment to STEM Citizenship",
    date: "2026",
    content:
      "Applicants should be leaders in their surroundings. This can be demonstrated on a large and small scale.",
    icon: Users,
    relatedIds: [3, 5],
    energy: 30,
    path: "/citizenship",
  },
  {
    id: 5,
    title: "Connections between STEM Disciplines",
    date: "2026",
    content:
      "Applicants should make connections between varied STEM disciplines. This can be demonstrated through their choice of final product, the way they engage in STEM citizenship and/or their personal reflection on their learning and engagement.",
    icon: LinkIcon,
    relatedIds: [4, 1],
    energy: 10,
    path: "/connections",
  },
];

export default function HomeOrbit() {
  return (
    <RadialOrbitalTimeline
      timelineData={timelineData}
      centerTitle="The 5 Domains of the STEM Seal"
      centerSubtitle="Heona Liu"
      centerLogo={center}
      showOrbitalLabels={false}
      enablePageLinks={true}
      showNodes={false}
    />
  );
}
