import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { domain2Content } from "@/data/domain2Content";

export default function IntRobo() {
  return (
    <>
      <Card>
        <Subheading
          title={domain2Content.intRobo.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain2Content.intRobo.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>
    </>
  );
}
