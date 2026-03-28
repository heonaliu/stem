import Carousel from "@/components/Carousel";
import bio1 from "@/assets/public/bio/bio1.png";
import bio2 from "@/assets/public/bio/bio2.png";
import bio3 from "@/assets/public/bio/bio3.png";
import bio4 from "@/assets/public/bio/bio4.png";
import bio5 from "@/assets/public/bio/bio5.png";
import bio6 from "@/assets/public/bio/bio6.png";

const acslItems = [
  {
    src: bio1,
    title: "Digestive System Diagram",
    description:
      "After reading the text book, to synthesize key ideas and concepts, I drew a diagram of the digestive system. I found this process to be really helpful in solidifying my understanding of digestive systems. Therefore, I continued using this method in future units.",
  },
  {
    src: bio2,
    title: "Photosynthesis Diagram",
    description:
      "Continuing to connect ideas through diagrams, I drew this diagram multiple times throughout my notebook.",
  },
  {
    src: bio3,
    title: "Circulatory System: Heart",
    description:
      "After reading the textbook, I still was confused about which way the blood flows and whether it was oxygen rich or oxygen poor. The bloodflow through the heart was a concept I found to be quite difficult since the directions of the bloodflow are also particularly intricate. Highlighting key terms and directions allowed me to see patterns in names while visualizing the flow.",
  },
  {
    src: bio4,
    title: "Circulatory System: Blood Vessels",
    description:
      "After drawing the heart diagram, I redrew an overall big picture version of the systematic system showing theoxygen rich and oxygen poor flow.",
  },
  {
    src: bio5,
    title: "Cellular Respiration Diagram",
    description: "Cellular respiration was a unit I found to be especially difficult with the complex interactions between the different stages. Therefore, I took the time to search YouTube videos simplifying the explanations, reading different articles, and redrawing the process multiple times without references to see what I know and what I needed to review. ",
  },
  {
    src: bio6,
    title: "Cellular Respiration Diagram: Redrawing",
    description:
      "Redrawing of the cellular respiration diagram without references.",
  },
];

export default function BioCard() {
  return <Carousel items={acslItems} />;
}
