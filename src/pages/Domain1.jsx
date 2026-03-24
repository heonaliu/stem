import Subheading from "@/components/Subheading";
import Header from "../components/Header";
import Card from "@/components/Card";
import { GlowCard } from "@/components/GlowCard";
import transcript from "../assets/public/transcript.png";

import { domain1Content } from "@/data/domain1Content";

export default function Domain1() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <Header domain="1" title="Excellence In Disciplines" />

      <Card>
        <Subheading
          title={domain1Content.transcript.title}
          color={"text-accent-500"}
        />
        {domain1Content.transcript.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start">
        <div className="shrink-0">
          <GlowCard image={transcript} />
        </div>

        <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain1Content.transcript.titleCore}
                color="text-primary-500"
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

      <Subheading title="NCWIT" />
      <Card title="NCWIT" />

      <Subheading title="ACSL" />
      <Card title="ACSL" />

      <Subheading title="MIT Blueprint" />
      <Card title="MIT Blueprint" />
    </div>
  );
}
