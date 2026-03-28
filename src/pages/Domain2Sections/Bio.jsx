import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain2Content } from "@/data/domain2Content";
import { GlowCard } from "@/components/GlowCard";
import influ from "@/assets/public/influ.png";
import cellmem from "@/assets/public/cellmem.png";
import Quotes2 from "./components/Quotes2";
import BioCard from "./components/BioCard";

export default function Biology() {
  return (
    <>
      <Card>
        <Subheading
          title={domain2Content.bio.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain2Content.bio.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>
      <Quotes2 />
      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={influ} />
        </div>
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={cellmem} />
        </div>
        <div className="w-full md:flex-1 min-w-[250px]">
          <Card>
            <Subheading
              title={domain2Content.bio.explainTitle}
              color="text-primary-500"
              size="2"
            />
            <p className="italic text-sm">
              *the images above are my projects for cell and cell respiration
              unit!
            </p>

            {domain2Content.bio.explain.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        </div>
        <BioCard />
      </div>
    </>
  );
}
