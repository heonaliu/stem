import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain1Content } from "@/data/domain1Content";
import acsl from "../../assets/public/acsl-team-roster.png";
import ACSLCard from "./ACSLCard";
import ACSL3Card from "./ACSL3Card";

export default function ACSL() {
  return (
    <div className="flex flex-col gap-8 max-w-auto mx-auto w-full">
      <Card>
        <Subheading
          title={domain1Content.acsl.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain1Content.acsl.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="shrink-0">
          <GlowCard
            link="https://www.scores.acsl.org/roster/523/"
            image={acsl}
          />
        </div>

        <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain1Content.acsl.explainTitle}
                color="text-primary-500"
                size="2"
              />
            </div>

            <div>
              <p className="italic text-sm">
                click the image to be redirected to the NNHS Team Roster on the ACSL Website!
              </p>
            </div>

            {domain1Content.acsl.explain.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 max-w-auto justify-center">
        <ACSLCard />
        <ACSL3Card />
      </div>
    </div>
  );
}
