import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain3Content } from "@/data/domain3Content";
import csa from "@/assets/public/csa.png";
import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";
import QuoteCSA2 from "./components/QuoteCSA2";

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
      <QuoteCSA2 />

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
            href="https://github.com/AP-CSA-PAH-Coding-Projects/assn04-monast-array-heonaliu"
          >
            CSA GitHub Track: Building Our Own ArrayLists <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          </Card>
        </div>
        
      </div>
    </>
  );
}
