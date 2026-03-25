import Carousel from "@/components/Carousel";
import int1 from "@/assets/public/intRobo/int1.png";
import int2 from "@/assets/public/intRobo/int2.png";
import int3 from "@/assets/public/intRobo/int3.png";
import int4 from "@/assets/public/intRobo/int4.png";
import int5 from "@/assets/public/intRobo/int5.png";
import int6 from "@/assets/public/intRobo/int6.png";
import int7 from "@/assets/public/intRobo/int7.png";

const acslItems = [
  {
    src: int7,
    title: "Early Stages of our Build",
    description:
      "This was when we first uploaded code onto the Arduino and got it to move forward.",
  },
  {
    src: int1,
    title: "Battery Holder Fix",
    description:
      "Our robot was assembled however, there were no suitable holes that would securely attach the battery stand. However, I found a hole on the side of the L bracket. We removed one screw from the structure in order to fit a screw through. Not only were we able to secure the battery stand onto the structure, it could turn rotate slightly, allowing us to easily take the battery in and out.",
  },
  {
    src: int2,
    title: "Problem Solving: Front Wheel",
    description:
      "The measurements our class was given instructed us to drill holes in specific areas of the bracket. Turns out, those measurement didn't align with the front wheel we were given. Seeing this, we used several flat brackets in order to adjust the alignment. Eventually, we were able engineer our way around this issue, proving that we can find solutions when facing obstacles in our build.",
  },
  {
    src: int3,
    title: "Progress Check",
    description:
      "This is when we were connecting the wires with the ESC, Arduino, and battery",
  },
  {
    src: int6,
    title: "Connecting the Pieces",
    description: "This is what it looked like with all the components attached.",
  },
  {
    src: int5,
    title: "Metal Bracket",
    description:
      "After connecting our wires, our Arduino was simply floating in the center without any support or base. Seeing this, I took initiative to find a bracket that could hold the Arduino. At this time, the metal cutter's blade was being replaced, so that meant I would have to cut this piece of metal by hand. After lots of persistence, I managed to cut through, contributing toward my build and helping my team.",
  },
  {
    src: int4,
    title: "Metal Bracket: Result",
    description:
      "After hand cutting the metal bracket, this is what our robot looked like.",
  },
];

export default function IntRoboCard() {
  return <Carousel items={acslItems} />;
}
