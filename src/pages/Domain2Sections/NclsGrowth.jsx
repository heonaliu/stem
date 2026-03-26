import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain2Content } from "@/data/domain2Content";
import { GlowCard } from "@/components/GlowCard";
import nclsGrowth from "@/assets/public/nclsGrowth.png";
import nclsGrowth2 from "@/assets/public/nclsGrowth2.png";
import ExpandCard from "@/components/ExpandCard";

export default function NclsGrowth() {
  return (
    <>
      <Card>
        <Subheading
          title={domain2Content.nclsGrowth.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain2Content.nclsGrowth.purpose.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={nclsGrowth} />
        </div>
        <div className="w-full gap-6 md:flex-1 min-w-[250px]">
          <Card>
            <Subheading
              title={domain2Content.nclsGrowth.growthTitle}
              color="text-primary-500"
              size="2"
            />

            {domain2Content.nclsGrowth.growth.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        </div>
      </div>
      <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={nclsGrowth2} />
        </div>
      <div className="w-full flex flex-col gap-6 max-w-auto justify-center">
        <ExpandCard expandable>
          <Subheading
            title={domain2Content.nclsGrowth.growthTitle}
            color={"text-primary-500"}
            size="2"
          />
          {domain2Content.nclsGrowth.growth.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>---</p>
          <p className="text-sm italic">
            *the student's name has been changed for privacy purposes
          </p>
        </ExpandCard>
      </div>
    </>
  );
}
