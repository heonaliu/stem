import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain4Content } from "@/data/domain4Content";
import { GlowCard } from "@/components/GlowCard";
import hackathon from "@/assets/public/hackathon.png"
import ExpandCard from "@/components/ExpandCard";
import { Link } from "react-router-dom";

export default function Hackathon() {
  return (
    <>
      <Card>
        <Subheading
          title={domain4Content.hackathon.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain4Content.hackathon.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard link="https://unplugged.nnhsprogramming.club/" image={hackathon} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 max-w-auto justify-center">
        <ExpandCard>
          <Subheading
            title={domain4Content.hackathon.explainTitle}
            color={"text-primary-500"}
            size="2"
          />
          <p className="text-sm italic">
            click the image to be redirected to the official site for Unplugged!
          </p>
          {domain4Content.hackathon.explain.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </ExpandCard>
      </div>
    </>
  );
}
