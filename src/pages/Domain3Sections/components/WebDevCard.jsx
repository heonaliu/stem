import Carousel from "@/components/Carousel";
import web1 from "@/assets/public/web/web1.png";
import web2 from "@/assets/public/web/web2.png";
import web3 from "@/assets/public/web/web3.png";
import web4 from "@/assets/public/web/web4.png";
import web5 from "@/assets/public/web/web5.png";
import web6 from "@/assets/public/web/web6.png";


const web = [
  {
    src: web1,
    title: "Javascript Basics",
    description:
      "Learned the different syntax, data types, truthy falsy values, type conversion and coercion, and how to use functions. I also learned how to use the console to test out my code and debug it.",
  },
  {
    src: web2,
    title: "Conditionals with Javascript",
    description:
      "Learned about if statements, conditionals, loose and strict equality operators, logical operators, switch statements and more.",
  },
  {
    src: web3,
    title: "Web Stack Bootcamp Independently Paced",
    description:
      "Learned the basics of HTML, internet protocols, basic html tags, and how to structure a simple webpage.",
  },
  {
    src: web4,
    title: "Web Stack: CSS Basics",
    description:
      "Learned Cascading Style Sheets (CSS). I learned how styling is like a waterfall, styling priorities, classes, ids, and attributes.",
  },
  {
    src: web5,
    title: "CSS Properties",
    description:
      "Margins, padding, borders, and box model. I learned how to use the console and see the styling properties applied to my webpage.",
  },
  {
    src: web6,
    title: "More Advanced CSS",
    description:
      "Touched on key topics like media queries, inline displays, flexbox, and grid. I also learned how to use the developer tools to inspect and edit our code.",
  },
];

export default function WebCard() {
  return <Carousel items={web} />;
}
