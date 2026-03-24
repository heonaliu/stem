import Carousel from "../../components/Carousel";
import acsl1 from "../../assets/public/acsl-3/acsl3_1.png";
import acsl2 from "../../assets/public/acsl-3/acsl3_2.png";
import acsl3 from "../../assets/public/acsl-3/acsl3_3.png";
import acsl4 from "../../assets/public/acsl-3/acsl3_4.png"


const acslItems = [
  {
    src: acsl2,
    title: "ACSL Contest 3:",
    description: "Worked through competitive programming problems...",
  },
  {
    src: acsl3,
    title: "Problem Solving",
    description: "Focused on algorithmic thinking and efficiency...",
  },
  {
    src: acsl4,
    title: "Team Collaboration",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: acsl1,
    title: "Team",
    description: "Collaborated with peers to solve challenges...",
  },
];

export default function ACSL3Card() {
  return <Carousel items={acslItems} />;
}