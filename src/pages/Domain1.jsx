import Subheading from "@/components/Subheading";
import Header from "../components/Header";
import EvidenceCard from "@/components/EvidenceCard";
import Card from "@/components/Card";

export default function Domain1() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <Header domain="1" title="Excellence In Disciplines" />
      <Subheading title="Transcript" />
      <Card children={"yayy"} />

      <Subheading title="NCWIT" />
      <Card children={"yayy"} />

      <Subheading title="ACSL" />
      <Card children={"yayy"} />

      <Subheading title="MIT Blueprint" />
      <Card children={"yayy"} />
    </div>
  );
}
