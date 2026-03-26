import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain3Content } from "@/data/domain3Content";
import csa from "@/assets/public/csa.png";
import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";

export default function CSA() {
  return (
    <>
      <Card>
        <Subheading
          title={domain3Content.csa.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain3Content.csa.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={csa} />
        </div>
        <div className="w-full md:flex-1 min-w-[250px]">
          <Card>
            <Subheading
              title={domain3Content.csa.section1Title}
              color="text-primary-500"
              size="2"
            />

            <p className="italic text-sm">click the image to be redirected!</p>

            {domain3Content.csa.section1.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/heonaliu/unplugged-hackathon"
          >
            GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
    
          

          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/heonaliu/unplugged-hackathon/commits/main/"
          >
            GitHub Commits <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          </Card>
        </div>
        
      </div>
    </>
  );
}
