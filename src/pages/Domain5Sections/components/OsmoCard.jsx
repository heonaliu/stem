import { GlowCard } from "@/components/GlowCard";
import osmo from "@/assets/public/osmo.jpg";
import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain5Content } from "@/data/domain5Content";

export default function OsmoCard() {
  return (
    <>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <GlowCard image={osmo} />
        </div>
      </div>

      <Card>
        <Subheading
          title={domain5Content.osmo.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain5Content.osmo.desc.map((p, i) => (
          <div className="italic text-sm"><p key={i}>{p}</p></div>
        ))}
      </Card>
    </>
  );
}
