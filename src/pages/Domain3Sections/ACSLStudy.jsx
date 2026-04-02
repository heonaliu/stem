import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain1Content } from "@/data/domain1Content";
import { domain3Content } from "@/data/domain3Content";
import acsl from "../../assets/public/acsl-team-roster.png";
import ACSLCard from "../Domain1Sections/ACSLCard";
import ACSL3Card from "../Domain1Sections/ACSL3Card";
import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";
import QuoteCS from "./components/QuoteCS";
export default function ACSLStudy() {
  return (
    <div className="flex flex-col gap-8 max-w-auto mx-auto w-full">
      <Card>
        <Subheading
          title={domain3Content.acsl.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain3Content.acsl.desc.map((p, i) => (
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
                title={domain3Content.acsl.explainTitle}
                color="text-primary-500"
                size="2"
              />
            </div>

            <div>
              <p className="italic text-sm">
                click the image to be redirected to NNHS' ACSL Team Roster!
              </p>
            </div>

            {domain3Content.acsl.explain.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/heonaliu/acsl-practice"
          >
            GitHub Repository of ACSL Practice Problems <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          </Card>
        </div>
      </div>
      <QuoteCS />
      <div className="w-full flex flex-col gap-6 max-w-auto justify-center">
        <ACSLCard />
        <ACSL3Card />
      </div>
    </div>
  );
}
