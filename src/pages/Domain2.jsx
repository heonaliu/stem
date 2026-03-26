import Header from "../components/Header";
import BlueprintGrowth from "./Domain2Sections/BlueprintGrowth";
import Quotes1 from "./Domain2Sections/components/Quotes1";
import IntRobo from "./Domain2Sections/IntRobo";
import NclsGrowth from "./Domain2Sections/NclsGrowth";
import PenguinGrowth from "./Domain2Sections/PenguinGrowth";

export default function Domain2() {
  return (
    <>
      <div className="flex flex-col gap-8 p-8">
        <Header domain="2" title="Significant Growth Over Time" />
        <IntRobo />
        <Quotes1 />
        <PenguinGrowth />
        <NclsGrowth />
        <BlueprintGrowth />
      </div>
    </>
  );
}
