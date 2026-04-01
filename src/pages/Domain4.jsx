import Header from "../components/Header";
import CompProg from "./Domain4Sections/CompProg";
import Hackathon from "./Domain4Sections/Hackathon";
import NclsCitizen from "./Domain4Sections/NclsCitizen";
import PenguinCitizen from "./Domain4Sections/PenguinCitizen";
export default function Domain4() {
  return (
    <div className="flex flex-col pb-24 gap-8 p-8">
      <Header domain="4" title="STEM Citizenship" />
      <NclsCitizen />
      <Hackathon />
      <CompProg />
      <PenguinCitizen />
    </div>
  );
}
