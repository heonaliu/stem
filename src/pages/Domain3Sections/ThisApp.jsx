import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain3Content } from "@/data/domain3Content";
import hackatime from "@/assets/public/hackatime1.png";
import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";

export default function ThisApp() {
  return (
    <>
      <Card>
        <Subheading
          title={domain3Content.thisApp.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain3Content.thisApp.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={hackatime} />
        </div>
        <div className="w-full md:flex-1 min-w-[450px]">
          <Card>
            <Subheading
              title={domain3Content.thisApp.section1Title}
              color="text-primary-500"
              size="2"
            />

            <p className="italic text-sm">click the image to be redirected!</p>

            {domain3Content.thisApp.section1.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/heonaliu/stem"
          >
            GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
    
          

          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/heonaliu/stem/commits/main/"
          >
            GitHub Commits <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          </Card>
        </div>
        
      </div>
    </>
  );
}
