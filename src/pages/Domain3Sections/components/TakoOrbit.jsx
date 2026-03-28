import { ImagesIcon, FileBadge, Play, Code, Sprout, ScrollTextIcon, Clapperboard, Clock, FileUp} from "lucide-react";
import RadialOrbitalTimeline from "../../../components/ui/radial-orbital-timeline";
import logo from "../../../../src/assets/public/tako-ring.png"
const timelineData = [
  {
    id: 1,
    title: "Certificate",
    date: "Mar 1",
    content: "Certificate of Participation",
    icon: FileBadge,
    relatedIds: [2],
    energy: 100,
    link: "https://plume.hackmit.org/project/pzlck-ousva-tjzni-mhcpa"
  },
  {
    id: 2,
    title: "GitHub",
    date: "Mar 1",
    content: "(Full Code) for TakoFocus.",
    icon: Code,
    relatedIds: [1, 3],
    energy: 90,
    link: "https://github.com/heonaliu/tako-focus"
  },
  {
    id: 3,
    title: "Web Application",
    date: "Oct 2025",
    content: "Try It Here!",
    category: "Deployed",
    icon: Sprout,
    relatedIds: [2, 4],
    energy: 60,
    link: "https://takofocus.vercel.app/"
  },
  {
    id: 4,
    title: "Summary",
    date: "Oct 2025",
    content: "Big picture ideas, why it matters, what makes it unique...",
    icon: ScrollTextIcon,
    relatedIds: [3, 5],
    energy: 30,
    link: "https://drive.google.com/file/d/1gUOT7VaHvAkrhrCX34DRkAM78-ThGy1Z/view?usp=sharing"
  },
  {
    id: 5,
    title: "Video Demo",
    date: "Oct 2025",
    content: "Quick demo video on its features and future plans.",
    icon: Play,
    relatedIds: [4,1,3],
    energy: 10,
    link: "https://www.youtube.com/watch?v=yf2oxju56gw"
  },
  {
    id: 6,
    title: "Photos",
    date: "Feb 28-Mar 1",
    content: "Several screenshots of the web application",
    icon: ImagesIcon,
    relatedIds: [3],
    energy: 80,
    link: "https://drive.google.com/drive/folders/1fql5pv7NYAJZ3EpiSBOP-d3E-o0FpzvF",
  },
];

export default function TakoOrbit() {
  return (
    <RadialOrbitalTimeline
      timelineData={timelineData}
      centerLogo={logo}
      centerTitle="TakoFocus"
      centerSubtitle="By Heona Liu"
      showNodes={false}
    />
  );
}
