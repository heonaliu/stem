import { domain2Content } from "@/data/domain2Content";
import { domain1Content } from "@/data/domain1Content";
import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import elsa from "../../assets/public/ncls-elsa-award.png";
import { GlowCard } from "@/components/GlowCard";
import Video from "../Domain1Sections/components/Video";
import Orbit from "../Domain1Sections/components/Orbit";

export default function BlueprintGrowth() {
  return (
    <>
      <Card>
        <Subheading
          title={domain1Content.blueprint.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain1Content.blueprint.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>
      <Video />
      <Card>
        <div className="gap-6">
          <Subheading
            title={domain1Content.blueprint.section1}
            color="text-primary-500"
            size="2"
          />
          <p className="italic text-sm py-2">click the video above to watch!</p>
        </div>
        <p className="font-bold">Several Key Timestamps:</p>
        <ul>
          {domain1Content.blueprint.section1Paragraphs.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </Card>
      <div className="w-full flex-1 min-w-[250px] ">
        <Card>
          <Subheading
            title={domain1Content.blueprint.section2}
            color="text-primary-500"
            size="2"
          />
          {domain1Content.blueprint.section2Paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Card>
      </div>
      <div className="w-full mt-60 mb-60 flex items-center justify-center">
        <Orbit />
      </div>
      <div className="w-full flex-1 min-w-[250px] ">
        <Card>
          <Subheading
            title={domain1Content.blueprint.explainTitle}
            color="text-primary-500"
            size="2"
          />
          {domain2Content.blueprint.explain.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Card>
      </div>
    </>
  );
}
