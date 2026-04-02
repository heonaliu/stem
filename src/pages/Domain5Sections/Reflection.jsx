import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain5Content } from "@/data/domain5Content";
import ConnectBio from "./components/ConnectBio";

export default function Reflection() {
  return (
    <>
    <ConnectBio />
    <Card>
        <Subheading
        title={domain5Content.connect.title}
        color={"text-accent-500"}
        size="4"
      />
        {domain5Content.connect.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>
      
      
      <Card>
        <Subheading
        title={domain5Content.ref.title}
        color={"text-accent-500"}
        size="4"
      />
        {domain5Content.ref.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>
    </>
  );
}
