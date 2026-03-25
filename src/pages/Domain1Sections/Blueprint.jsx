import { domain1Content } from "@/data/domain1Content";
import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import elsa from "../../assets/public/ncls-elsa-award.png";
import { GlowCard } from "@/components/GlowCard";
import Video from "./components/Video";

export default function Blueprint() {
  return (
    <>
      <Card>
        <Subheading
          title={domain1Content.blueprint.title}
          color={"text-accent-500"}
          size="4"
        />
        <p className="italic text-sm">
          The official certificate for 2026 isn’t released for recipients yet so
          this email screenshot serves as evidence.
        </p>
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
    </>
  );
}
