import Header from "../components/Header";
import QuoteCSA from "./Domain3Sections/components/QuoteCSA";
import CSA from "./Domain3Sections/CSA";
import Hack from "./Domain3Sections/Hack";
import Tako from "./Domain3Sections/Tako";
import ThisApp from "./Domain3Sections/ThisApp";
import WebDev from "./Domain3Sections/WebDev";

export default function Domain3() {
  return (
    <div className="flex flex-col gap-8 py-8 pl-8 pr-8">
      <Header domain="3" title="Commitment to Personal Study" />
      <Hack />
      <Tako />
      <WebDev />
      <CSA />
      <QuoteCSA />
      <ThisApp />
    </div>
  );
}
