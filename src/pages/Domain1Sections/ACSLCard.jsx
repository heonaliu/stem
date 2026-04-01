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
    title: "ACSL Contest 2:",
    description: "Programming Problem: Classifying License Plates - Mapped Out Possibilities, making the coding part much easier for me.",
  },
  {
    src: acsl3,
    title: "ACSL Contest 2:",
    description: "Short Answer Problem Work: Solving a problem with Bit-String Flicking and one that is List Processing Language (LISP).",
  },
  {
    src: acsl2,
    title: "ACSL Contest 2:",
    description: "Short Answer Problem Work: Solving a problem with Bit-String Flicking and conversion from prefix/postfix/infix notation.",
  },
  {
    src: acsl5,
    title: "ACSL Contest 2:",
    description: "Short Answer Problem Work: Prior to the contest, I practiced Bit-String flicking and LISP.",
  },
  {
    src: acsl6,
    title: "ACSL Contest 2:",
    description: "More prefix/postfix/infix practice practice.",
  },
  {
    src: acsl7,
    title: "More Conversion Practice:",
    description: "This was independent practice with infix/prefix/postfix prior to the contest.",
  },
  {
    src: acsl8,
    title: "Bit String Flicking and Conversion Practice:",
    description: "Prior to the contest, I continued to practice postfix/prefix/infix and Bit String Flicking problems.",
  },
];

export default function ACSLCard() {
  return <Carousel items={acslItems} />;
}