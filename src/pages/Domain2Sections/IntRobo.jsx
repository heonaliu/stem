import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain2Content } from "@/data/domain2Content";
import { GlowCard } from "@/components/GlowCard";

export default function IntRobo() {
  return (
    <>
      <Card>
        <Subheading
          title={domain2Content.intRobo.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain2Content.intRobo.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-center justify-center">
              <div className="w-full flex justify-center md:w-auto">
                <GlowCard
                  link="https://www.aspirations.org/people/heona-l/155442"
                  
                />
              </div>
              <div className="w-full md:flex-1 min-w-[250px]">
                <Card>
                  <Subheading
                    title={domain2Content.intRobo.explainTitle}
                    color="text-primary-500"
                    size="2"
                  />
    
                  <p className="italic text-sm">click the image to be redirected!</p>
      
                  {domain2Content.intRobo.explain.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Card>
              </div>
            </div>
    </>
  );
}
