import { domain1Content } from "@/data/domain1Content";
import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import elsa from "../../assets/public/ncls-elsa-award.png";
import { GlowCard } from "@/components/GlowCard";

export default function ELSA() {
  return (
    <>
      <Card>
        <Subheading
          title={domain1Content.elsa.title}
          color={"text-accent-500"}
          size="4"
        />
        <p className="italic text-sm">
          The official certificate for 2026 isn’t released yet so this email
          screenshot serves as evidence.
        </p>
        {domain1Content.elsa.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start">
        <div className="flex-1 min-w-[250px] max-w-md">
          <Card>
            <div>
              <Subheading
                title={domain1Content.elsa.roleTitle}
                color="text-primary-500"
                size="2"
              />
            </div>

            <div>
              <p className="italic text-sm">
                click the image to be redirected to info about ELSA!
              </p>
            </div>

            {domain1Content.elsa.roleParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        </div>
        <div className="shrink-0">
          <GlowCard
            link="https://www.newtonchineseschool.org/handbook/Emerging-Leader-Service-Award.pdf"
            image={elsa}
          />
        </div>
        <Card>
          <div>
            <Subheading
              title={domain1Content.elsa.explainTitle}
              color="text-primary-500"
              size="2"
            />
          </div>

          <div>
            <p className="italic text-sm">
              click the image to be redirected to info about ELSA!
            </p>
          </div>

          {domain1Content.elsa.explain.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Card>
      </div>
    </>
  );
}
