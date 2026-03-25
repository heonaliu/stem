import SpotlightCard from "@/components/SpotlightCard";
import { domain1Content } from "@/data/domain1Content";
import Subheading from "@/components/Subheading";

export default function Define() {
  return (
    <div>
      <SpotlightCard
        className="custom-spotlight-card flex flex-col gap-4"
        spotlightColor="rgba(255, 255, 255, 0.69)"
      >
        <Subheading
                title={domain1Content.define.title}
                color={"text-primary-600"}
                size="4"
              />
        {domain1Content.define.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </SpotlightCard>
    </div>
  );
}
