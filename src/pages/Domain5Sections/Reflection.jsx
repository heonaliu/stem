import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain5Content } from "@/data/domain5Content";


export default function Reflection() {
  return (
    <>
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
