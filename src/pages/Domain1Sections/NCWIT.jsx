import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain1Content } from "@/data/domain1Content";
import ncwit from "../../assets/public/ncwit.png";

export default function NCWIT() {
  return (
    <>
      <Card>
        <Subheading
          title={domain1Content.ncwit.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain1Content.ncwit.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start">

        <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain1Content.ncwit.explainTitle}
                color="text-primary-500"
                size="2"
              />
            </div>

            <div>
                <p class="italic text-sm">click the image to be redirected!</p>
            </div>

            <ul>
              {domain1Content.ncwit.explain.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="shrink-0">
          <GlowCard
            link="https://www.scores.acsl.org/roster/523/"
            image={ncwit}
          />
        </div>
      </div>
    </>
  );
}
