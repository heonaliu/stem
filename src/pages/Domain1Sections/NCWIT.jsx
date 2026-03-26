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

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard
            link="https://www.aspirations.org/people/heona-l/155442"
            image={ncwit}
          />
        </div>
        <div className="w-full md:flex-1 min-w-[250px]">
          <Card>
            <Subheading
              title={domain1Content.ncwit.explainTitle}
              color="text-primary-500"
              size="2"
            />

            <p className="italic text-sm">click the image to be redirected!</p>

            {domain1Content.ncwit.explain.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}
