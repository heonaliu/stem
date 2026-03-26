import Header from "../components/Header";
import Hack from "./Domain3Sections/Hack";
import Tako from "./Domain3Sections/Tako";

export default function Domain3() {
  return (
    <div className="flex flex-col gap-8 py-8 pl-8 pr-8">
      <Header domain="3" title="Commitment to Personal Study" />
      <Hack />
      <Tako />
    </div>
  );
}
