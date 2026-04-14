import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain3Content } from "@/data/domain3Content";
import hack from "@/assets/public/unplugged-cover.png";
import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";
import commits from "@/assets/public/commits.png"

export default function Hack() {
  return (
    <>
      <Card>
        <Subheading
          title={domain3Content.hack.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain3Content.hack.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard link="https://nnhs-unplugged-28c10.web.app/" image={hack} />
        </div>
        <div className="w-full md:flex-1 min-w-[450px]">
          <Card>
            <Subheading
              title={domain3Content.hack.section1Title}
              color="text-primary-500"
              size="2"
            />

            <p className="italic text-sm">click the image to be redirected to the website I created!</p>

            {domain3Content.hack.section1.map((p, i) => (
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
            <Button
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1kUcZwa0vXcLnFuPjghcoG8QMcdDKNN-z/view?usp=sharing"
            >
              Video Explaining Code (4 min) <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={commits} />
        </div>
      </div>
    </>
  );
}
