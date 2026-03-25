import Subheading from "@/components/Subheading";
import Header from "../components/Header";
import Card from "@/components/Card";
import { GlowCard } from "@/components/GlowCard";

import { domain1Content } from "@/data/domain1Content";
import Transcript from "./Domain1Sections/Transcript";
import NCWIT from "./Domain1Sections/NCWIT";
import ACSL from "./Domain1Sections/ACSL";
import Define from "./Domain1Sections/Define";

export default function Domain1() {
  return (
    <div className="p-8 flex flex-col gap-8 items-center">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        <Header domain="1" title="Excellence In Disciplines" />
        <Define />
        <Transcript />
        <NCWIT />
        <ACSL />

        <Subheading title="MIT Blueprint" />
        <Card>MIT Blueprint</Card>
      </div>
    </div>
  );
}
