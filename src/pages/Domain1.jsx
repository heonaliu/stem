import Subheading from "@/components/Subheading";
import Header from "../components/Header";
import Card from "@/components/Card";
import { GlowCard } from "@/components/GlowCard";


import { domain1Content } from "@/data/domain1Content";
import Transcript from "./Domain1Sections/Transcript";
import NCWIT from "./Domain1Sections/NCWIT"
import ACSL from "./Domain1Sections/ACSL";

export default function Domain1() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <Header domain="1" title="Excellence In Disciplines" />
      <Transcript />
      <NCWIT />
      <ACSL />


      <Subheading title="MIT Blueprint" />
      <Card title="MIT Blueprint" />
    </div>
  );
}
