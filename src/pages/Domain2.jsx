import Header from "../components/Header";
import Quotes1 from "./Domain2Sections/components/Quotes1";
import IntRobo from "./Domain2Sections/IntRobo";
import PenguinGrowth from "./Domain2Sections/PenguinGrowth";

export default function Domain2() {
  return (
    <>
      <div className="flex flex-col gap-8 p-8">
        <Header domain="2" title="Significant Growth Over Time" />
        <IntRobo />
        <Quotes1 />
        <PenguinGrowth />
      </div>
    </>
  );
}
