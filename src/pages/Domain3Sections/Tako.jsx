import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain1Content } from "@/data/domain1Content";
import tako from "../../assets/public/takofocus.png";
import { domain3Content } from "@/data/domain3Content";

export default function Tako() {
  return (
    <>
      <Card>
        <Subheading
          title={domain3Content.tako.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain3Content.tako.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="shrink-0">
          <GlowCard image={tako} link="https://takofocus.vercel.app/" />
        </div>

        <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain3Content.tako.section1Title}
                color="text-primary-500"
                size="2"
              />
            </div>
            {domain3Content.tako.section1.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
          
        </div>
        
      </div>
      <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain3Content.tako.section2Title}
                color="text-primary-500"
                size="2"
              />
            </div>
            {domain3Content.tako.section2.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        </div>
        <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain3Content.tako.section3Title}
                color="text-primary-500"
                size="2"
              />
            </div>
            {domain3Content.tako.section3.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        </div>
        <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain3Content.tako.explainTitle}
                color="text-primary-500"
                size="2"
              />
            </div>
            {domain3Content.tako.explain.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
          
        </div>
    </>
  );
}
