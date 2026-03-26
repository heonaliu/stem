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
];

export default function WebCard() {
  return <Carousel items={acslItems} />;
}
