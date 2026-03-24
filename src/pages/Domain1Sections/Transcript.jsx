import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain1Content } from "@/data/domain1Content";
import transcript from "../../assets/public/transcript.png";

export default function Transcript() {
  return (
    <>
      <Card>
        <Subheading
          title={domain1Content.transcript.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain1Content.transcript.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="shrink-0">
          <GlowCard image={transcript} />
        </div>

        <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain1Content.transcript.titleCore}
                color="text-primary-500"
                size="2"
              />
            </div>

            <ul>
              {domain1Content.transcript.coreContent.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}
