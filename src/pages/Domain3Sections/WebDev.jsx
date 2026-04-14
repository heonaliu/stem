import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain3Content } from "@/data/domain3Content";
import WebCard from "./components/WebDevCard";

export default function WebDev() {
  return (
    <>
      <Card>
        <Subheading
          title={domain3Content.webDev.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain3Content.webDev.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        <div className="w-full flex justify-center md:w-auto">
          <WebCard />
        </div>
      </div>
      
    </>
  );
}
