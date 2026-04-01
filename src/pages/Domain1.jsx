import Subheading from "@/components/Subheading";
import Header from "../components/Header";
import Card from "@/components/Card";

import Transcript from "./Domain1Sections/Transcript";
import NCWIT from "./Domain1Sections/NCWIT";
import ACSL from "./Domain1Sections/ACSL";
import Define from "./Domain1Sections/Define";
import ELSA from "./Domain1Sections/ELSA";
import Blueprint from "./Domain1Sections/Blueprint";
import Conclusion from "./Domain1Sections/Conclusion";
import ExcelQuote from "./Domain1Sections/components/ExcelQuote";

export default function Domain1() {
  return (
    <div className="p-8 flex flex-col gap-8 pb-24 items-center">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        <Header domain="1" title="Excellence In Disciplines" />
        <Define />
        <Transcript />
        <ExcelQuote />
        <NCWIT />
        <ACSL />
        <ELSA />
        <Blueprint />
        <Conclusion />
      </div>
    </div>
  );
}
