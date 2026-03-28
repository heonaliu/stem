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
    title: "Early Stages of our Build",
    description:
      "This was when we first uploaded code onto the Arduino and got it to move forward.",
  },
  {
    src: web2,
    title: "Battery Holder Fix",
    description:
      "Our robot was assembled however, there were no suitable holes that would securely attach the battery stand. However, I found a hole on the side of the L bracket. We removed one screw from the structure in order to fit a screw through. Not only were we able to secure the battery stand onto the structure, it could turn rotate slightly, allowing us to easily take the battery in and out.",
  },
  {
    src: web3,
    title: "Problem Solving: Front Wheel",
    description:
      "The measurements our class was given instructed us to drill holes in specific areas of the bracket. Turns out, those measurement didn't align with the front wheel we were given. Seeing this, we used several flat brackets in order to adjust the alignment. Eventually, we were able engineer our way around this issue, proving that we can find solutions when facing obstacles in our build.",
  },
  {
    src: web4,
    title: "Progress Check",
    description:
      "This is when we were connecting the wires with the ESC, Arduino, and battery",
  },
  {
    src: web5,
    title: "Progress Check",
    description:
      "This is when we were connecting the wires with the ESC, Arduino, and battery",
  },
  {
    src: web6,
    title: "Progress Check",
    description:
      "This is when we were connecting the wires with the ESC, Arduino, and battery",
  },
];

export default function WebCard() {
  return <Carousel items={web} />;
}
