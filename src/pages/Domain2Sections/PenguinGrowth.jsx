import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain2Content } from "@/data/domain2Content";
import { GlowCard } from "@/components/GlowCard";
import penguin from "@/assets/public/penguin-coding.png";

export default function PenguinGrowth() {

      return (
        <>
          <Card>
            <Subheading
              title={domain2Content.penguin.title}
              color={"text-accent-500"}
              size="4"
            />
            {domain2Content.penguin.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
    
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="w-full flex justify-center md:w-auto">
              <GlowCard
                image={penguin}
              />
            </div>
            <div className="w-full md:flex-1 min-w-[250px]">
              <Card>
                <Subheading
                  title={domain2Content.penguin.section1Title}
                  color="text-primary-500"
                  size="2"
                />
    
                {domain2Content.penguin.section1.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Card>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6 max-w-auto justify-center">
          <Card>
                  <Subheading
                    title={domain2Content.penguin.section2Title}
                    color={"text-primary-500"}
                    size="2"
                  />
                  {domain2Content.penguin.section2.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Card>
          </div>
        </>
      );
}