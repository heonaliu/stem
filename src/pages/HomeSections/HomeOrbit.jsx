import {
  ImagesIcon,
  LinkIcon,
  Users,
  Brain,
  TrendingUp,
  Book,
  Projector,
  Play,
  Code,
  Sprout,
  Home,
  Clapperboard,
  Clock,
  FileUp,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import logo from "../../assets/public/skilltrade-logo.png";
import { useNavigate } from "react-router-dom";
const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/excellence", label: "Excellence", icon: Book },
  { path: "/growth", label: "Growth", icon: TrendingUp },
  { path: "/commitment", label: "Commitment", icon: Brain },
  { path: "/citizenship", label: "Citizenship", icon: Users },
  { path: "/connections", label: "Connections", icon: LinkIcon },
];

const timelineData = [
  {
    id: 1,
    title: "Excellence In The Discipline",
    date: "Mar 1",
    content: "Our team's submitted project on offical HackMIT's website.",
    icon: Book,
    relatedIds: [2, 5],
    energy: 100,
    path: "/excellence",
  },
  {
    id: 2,
    title: "Growth Over Time",
    date: "Mar 1",
    content:
      "(Full Code) for Skill Trade. You may look under contributors and commit contributions.",
    icon: TrendingUp,
    relatedIds: [1, 3],
    energy: 90,
    path: "/growth",
  },
  {
    id: 3,
    title: "Commitment to Personal Study",
    date: "Feb 28-Mar 1",
    content:
      "Project planning & scaffolding took place here. All ideas developed, planning, and resources.",
    category: "Development",
    icon: Brain,
    relatedIds: [2, 4],
    energy: 60,
    path: "/commitment",
  },
  {
    id: 4,
    title: "STEM citizenship",
    date: "Mar 1",
    content:
      "Presentation slides we created for judging and pitching our project.",
    icon: Users,
    relatedIds: [3, 5],
    energy: 30,
    path: "/citizenship",
  },
  {
    id: 5,
    title: "Connections between STEM",
    date: "Mar 1",
    content: "Quick 1 Min Demo Video of our Project Skill Trade in action!",
    icon: LinkIcon,
    relatedIds: [4, 1],
    energy: 10,
    path: "/connections",
  },
];

export default function HomeOrbit() {
  const navigate = useNavigate();
  return (
    <RadialOrbitalTimeline
      timelineData={timelineData}
      centerTitle="STEM Seal Application"
      centerSubtitle="Heona Liu"
      showOrbitalLabels={false}
      enablePageLinks={true}
    />
  );
}
