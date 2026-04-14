import Header from "../components/Header";
import OsmoCard from "./Domain5Sections/components/OsmoCard";
import Reflection from "./Domain5Sections/Reflection";
export default function Domain5() {
  return (
    <div className="p-8 flex flex-col pb-24 gap-8">
      <Header
        domain="5"
        title="Connections Between/Among Experiences in STEM"
      />
      <Reflection />
      <OsmoCard />
    </div>
  );
}
