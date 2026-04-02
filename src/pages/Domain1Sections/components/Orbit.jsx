import { ImagesIcon, Projector, Play, Code, Sprout, Clapperboard, Clock, FileUp} from "lucide-react";
import RadialOrbitalTimeline from "../../../components/ui/radial-orbital-timeline";
import logo from "../../../../src/assets/public/skilltrade-logo.png"
const timelineData = [
  {
    id: 1,
    title: "Submission",
    date: "Mar 1",
    content: "Our team's submitted project on offical HackMIT's website.",
    icon: FileUp,
    relatedIds: [2,5],
    energy: 100,
    link: "https://plume.hackmit.org/project/pzlck-ousva-tjzni-mhcpa"
  },
  {
    id: 2,
    title: "GitHub",
    date: "Mar 1",
    content: "(Full Code) for Skill Trade. You may look under contributors and commit contributions.",
    icon: Code,
    relatedIds: [1, 3],
    energy: 90,
    link: "https://github.com/alantao5056/skill-trade"
  },
  {
    id: 3,
    title: "Planning",
    date: "Feb 28-Mar 1",
    content: "Project planning & scaffolding took place here. All ideas developed, planning, and resources.",
    category: "Development",
    icon: Sprout,
    relatedIds: [2, 4],
    energy: 60,
    link: "https://docs.google.com/document/d/1VhXALHeKuEflh3I_AO3YFSPrZiCnGgVQ4jWsbAimBzo/edit?usp=sharing"
  },
  {
    id: 4,
    title: "Presentation",
    date: "Mar 1",
    content: "Presentation slides we created for judging and pitching our project.",
    icon: Projector,
    relatedIds: [3, 5],
    energy: 30,
    link: "https://docs.google.com/presentation/d/1ZY4pmHHKyF9BZLrpe6WtJygd2XKi6_Z_yU4CeQNc3Ag/edit?usp=sharing"
  },
  {
    id: 5,
    title: "Video Demo",
    date: "Mar 1",
    content: "Quick 1 Min Demo Video of our Project Skill Trade in action!",
    icon: Play,
    relatedIds: [4,1],
    energy: 10,
    link: "https://www.youtube.com/watch?v=fsbw0sRnPw4"
  },
  {
    id: 6,
    title: "Photos",
    date: "Feb 28-Mar 1",
    content: "A few photos from the event.",
    icon: ImagesIcon,
    relatedIds: [7],
    energy: 80,
    link: "https://drive.google.com/drive/folders/1REDejJwWQDEeIlMgohGMKAMAD2easVio?usp=sharing",
  },
  {
    id: 7,
    title: "Vlog",
    date: "Feb 28-Mar 1",
    content: "Vlog of my hackathon experience posted on YouTube",
    icon: Clapperboard,
    relatedIds: [6],
    energy: 80,
    link: "https://youtu.be/nRZnAbe1xRQ?si=c_Vmw5b3nLPbeD5s",
  },
];

export default function Orbit() {
  return (
    <RadialOrbitalTimeline
      timelineData={timelineData}
      centerLogo={logo}
      centerTitle="Skill Trade"
      centerSubtitle="By Leran Tao, Heona Liu, Ryan Lee"
    />
  );
}
