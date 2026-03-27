import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain4Content } from "@/data/domain4Content";
import { domain2Content } from "@/data/domain2Content";
import { GlowCard } from "@/components/GlowCard";
import penguin from "@/assets/public/penguin-coding.png";
import ExpandCard from "@/components/ExpandCard";

export default function PenguinCitizen() {
  return (
    <>
      <Card>
        <Subheading
          title={domain4Content.pen.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain4Content.pen.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={penguin} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 max-w-auto justify-center">
        <ExpandCard expandable>
          <Subheading
            title={domain2Content.penguin.section2Title}
            color={"text-primary-500"}
            size="2"
          />
          {domain2Content.penguin.section2.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>---</p>
          <p className="text-sm italic">
            *the student's name has been changed for privacy purposes
          </p>

          {domain2Content.penguin.reflection.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </ExpandCard>
        <ExpandCard >
          <Subheading
            title={domain4Content.pen.section1Title}
            color={"text-primary-500"}
            size="2"
          />
          {domain4Content.pen.section1.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </ExpandCard>
      </div>
    </>
  );
}
