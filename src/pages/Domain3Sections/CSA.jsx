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

            {domain3Content.csa.section1.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Button
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/heonaliu/assn05-monster-vs-monster-heonaliu"
            >
              CSA GitHub Track: Monster VS Monster Project{" "}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1B8j1KvWKnp-d_ATCiQFqFY1H7NyBxndf/view?usp=sharing"
            >
              Monster VS Monster: Video Explain Code (8 min){" "}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
