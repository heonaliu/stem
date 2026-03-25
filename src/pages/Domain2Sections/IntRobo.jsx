import Card from "@/components/Card";
import Subheading from "@/components/Subheading";

export default function IntRobo() {
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
    </>
  );
}
