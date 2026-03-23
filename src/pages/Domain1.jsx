import Subheading from "@/components/Subheading";
import Header from "../components/Header";
import EvidenceCard from "@/components/EvidenceCard";
import Card from "@/components/Card";
import { GlowCard } from "@/components/GlowCard";
import transcript from "../assets/public/transcript.png";

export default function Domain1() {

  return (
    <div className="p-8 flex flex-col gap-8">
      <Header domain="1" title="Excellence In Disciplines" />
      <Subheading title="Transcript" />
      <GlowCard image={transcript} />
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
