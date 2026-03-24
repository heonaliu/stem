import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain1Content } from "@/data/domain1Content";
import acsl from "../../assets/public/acsl-team-roster.png";
import ACSLCard from "./ACSLCard";

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

      <div className="flex flex-wrap gap-6 items-start">
        <div className="shrink-0">
          <GlowCard
            link="https://www.aspirations.org/people/heona-l/155442"
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
                click the image to be redirected!
              </p>
            </div>

            {domain1Content.acsl.explain.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-auto">
            <ACSLCard />
        </div>
      </div>
    </div>
  );
}
