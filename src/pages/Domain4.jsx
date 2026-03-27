import Header from "../components/Header";
import Hackathon from "./Domain4Sections/Hackathon";
import NclsCitizen from "./Domain4Sections/NclsCitizen";
export default function Domain4() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Header domain="4" title="STEM Citizenship" />
      <NclsCitizen />
      <Hackathon />
    </div>
  );
}
