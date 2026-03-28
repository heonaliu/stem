import Carousel from "../../components/Carousel";
import acsl1 from "../../assets/public/acsl-3/acsl3_1.png";
import acsl2 from "../../assets/public/acsl-3/acsl3_2.png";
import acsl3 from "../../assets/public/acsl-3/acsl3_3.png";
import acsl4 from "../../assets/public/acsl-3/acsl3_4.png"


const acslItems = [
  {
    src: acsl2,
    title: "ACSL Contest 3:",
    description: "First phase was understanding the problem and mapping out what it would look like.",
  },
  {
    src: acsl3,
    title: "Problem Solving",
    description: "Started going around the best way to accomplish my goal by pseudocoding.",
  },
  {
    src: acsl4,
    title: "One Game Run Through",
    description: "Ran through one test case and tried to see any conditionals that I was checking in order to incorporate it into my program.",
  },
  {
    src: acsl1,
    title: "One Game Run Through (continued)",
    description: "Continuation of the example in the previous slide.",
  },
];

export default function ACSL3Card() {
  return <Carousel items={acslItems} />;
}