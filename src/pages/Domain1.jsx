import Subheading from "@/components/Subheading";
import Header from "../components/Header";
import Card from "@/components/Card";
import { GlowCard } from "@/components/GlowCard";


import { domain1Content } from "@/data/domain1Content";
import Transcript from "./Domain1Sections/Transcript";

export default function Domain1() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <Header domain="1" title="Excellence In Disciplines" />
      <Transcript />

      <Subheading title="NCWIT" />
      <Card title="NCWIT" />

      <Subheading title="ACSL" />
      <Card title="ACSL" />

      <Subheading title="MIT Blueprint" />
      <Card title="MIT Blueprint" />
    </div>
  );
}
