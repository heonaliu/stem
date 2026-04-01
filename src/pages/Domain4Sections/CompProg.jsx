import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain4Content } from "@/data/domain4Content";
import { GlowCard } from "@/components/GlowCard";
import hackathon from "@/assets/public/hackathon.png";
import ExpandCard from "@/components/ExpandCard";
import { Link } from "react-router-dom";
import CompQuote from "./components/CompQuote";

export default function CompProg() {
  return (
    <>
      <Card>
        <Subheading
          title={domain4Content.compProg.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain4Content.compProg.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="w-full flex flex-col gap-6 max-w-auto justify-center">
        <CompQuote />
      </div>
    </>
  );
}
