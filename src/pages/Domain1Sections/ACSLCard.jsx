import Carousel from "../../components/Carousel";
import acsl2 from "../../assets/public/acsl-2/acsl_2.jpeg";
import acsl3 from "../../assets/public/acsl-2/acsl_3.jpeg";
import acsl4 from "../../assets/public/acsl-2/acsl_4.jpeg";
import acsl5 from "../../assets/public/acsl-2/acsl_5.jpeg"
import acsl6 from "../../assets/public/acsl-2/acsl_6.jpeg";
import acsl7 from "../../assets/public/acsl-2/acsl_7.jpeg";
import acsl8 from "../../assets/public/acsl-2/acsl_8.jpeg"

const acslItems = [
  {
    src: acsl4,
    title: "ACSL Contest",
    description: "Worked through competitive programming problems...",
  },
  {
    src: acsl3,
    title: "Problem Solving",
    description: "Focused on algorithmic thinking and efficiency...",
  },
  {
    src: acsl2,
    title: "Team Collaboration",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: acsl5,
    title: "Team",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: acsl6,
    title: "Team Collaboration",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: acsl7,
    title: " Collaboration",
    description: "Collaborated with peers to solve challenges...",
  },
  {
    src: acsl8,
    title: "Team Collaboration",
    description: " with peers to solve challenges...",
  },
];

export default function ACSLCard() {
  return <Carousel items={acslItems} />;
}