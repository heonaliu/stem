import Carousel from "../../components/Carousel";
import int1 from "../../assets/public/intRobo/int1.png";
import int2 from "../../assets/public/intRobo/int2.png";
import int3 from "../../assets/public/intRobo/int3.png";
import int4 from "../../assets/public/intRobo/int4.png"
import int5 from "../../assets/public/intRobo/int5.png";
import int6 from "../../assets/public/intRobo/int6.png";
import int7 from "../../assets/public/intRobo/int7.png"

const acslItems = [
  {
    src: int1,
    title: "int Contest 2:",
    description: "Worked through competitive programming problems...",
  },
  {
    src: int2,
    title: "Problem Solving",
    description: "Focused on algorithmic thinking and efficiency...",
  },
  {
    src: int3,
    title: "Team Collaboration",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: int4,
    title: "Team",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: int5,
    title: "Team Collaboration",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: int6,
    title: " Collaboration",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: int7,
    title: "Team Collaboration",
    description: " with peers to solve challenges...",
  },
];

export default function IntRoboCard() {
  return <Carousel items={acslItems} />;
}