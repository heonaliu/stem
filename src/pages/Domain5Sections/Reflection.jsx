import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain5Content } from "@/data/domain5Content";
import ConnectBio from "./components/ConnectBio";

export default function Reflection() {
  return (
    <>
    <ConnectBio />
      <Subheading
        title={domain5Content.ref.title}
        color={"text-accent-500"}
        size="4"
      />
      
      <Card>
        {domain5Content.ref.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>
    </>
  );
}
