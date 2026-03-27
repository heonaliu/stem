import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain4Content } from "@/data/domain4Content";
import { GlowCard } from "@/components/GlowCard";
import nclsGrowth from "@/assets/public/nclsGrowth.png";
import nclsGrowth2 from "@/assets/public/nclsGrowth2.png";
import ExpandCard from "@/components/ExpandCard";
import { Link } from "react-router-dom";

export default function NclsCitizen() {
  return (
    <>
      <Card>
        <Subheading
          title={domain4Content.ncls.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain4Content.ncls.purpose.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="text-sm italic">
          *2024-2025 Spring: I went on a 4-month cultural exchange program and
          studied abroad. So, I had to pause volunteering for a bit.
        </p>
      </Card>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={nclsGrowth} />
        </div>
      </div>
      <div className="w-full flex justify-center md:w-auto">
        <GlowCard image={nclsGrowth2} />
      </div>
      <div className="w-full flex flex-col gap-6 max-w-auto justify-center">
        <ExpandCard>
          <Subheading
            title={domain4Content.ncls.explainTitle}
            color={"text-primary-500"}
            size="2"
          />
          {domain4Content.ncls.explain.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            To learn more about{" "}
            <Link
              to="/domain1"
              className="text-primary-500 hover:underline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Excellence
            </Link>
            , check out this page.
          </p>
        </ExpandCard>
      </div>
    </>
  );
}
