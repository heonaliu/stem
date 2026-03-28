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
      "This was when we first uploaded code onto the Arduino and got it to move forward.",
  },
  {
    src: bio2,
    title: "Photosynthesis Diagram",
    description:
      "Our robot was assembled however, there were no suitable holes that would securely attach the battery stand. However, I found a hole on the side of the L bracket. We removed one screw from the structure in order to fit a screw through. Not only were we able to secure the battery stand onto the structure, it could turn rotate slightly, allowing us to easily take the battery in and out.",
  },
  {
    src: bio3,
    title: "Circulatory System: Heart",
    description:
      "The measurements our class was given instructed us to drill holes in specific areas of the bracket. Turns out, those measurement didn't align with the front wheel we were given. Seeing this, we used several flat brackets in order to adjust the alignment. Eventually, we were able engineer our way around this issue, proving that we can find solutions when facing obstacles in our build.",
  },
  {
    src: bio4,
    title: "Circulatory System: Blood Vessels",
    description:
      "This is when we were connecting the wires with the ESC, Arduino, and battery",
  },
  {
    src: bio5,
    title: "Cellular Respiration Diagram",
    description: "This is what it looked like with all the components attached.",
  },
  {
    src: bio6,
    title: "Cellular Respiration Diagram: Redrawing",
    description:
      "After connecting our wires, our Arduino was simply floating in the center without any support or base. Seeing this, I took initiative to find a bracket that could hold the Arduino. At this time, the metal cutter's blade was being replaced, so that meant I would have to cut this piece of metal by hand. After lots of persistence, I managed to cut through, contributing toward my build and helping my team.",
  },
];

export default function BioCard() {
  return <Carousel items={acslItems} />;
}
