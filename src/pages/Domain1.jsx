import Subheading from "@/components/Subheading";
import Header from "../components/Header";
import EvidenceCard from "@/components/EvidenceCard";
import Card from "@/components/Card";
import { GlowCard } from "@/components/GlowCard";
import transcript from "../assets/public/transcript.png";

export default function Domain1() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <Header domain="1" title="Excellence In Disciplines" />

      <Card>
        <Subheading title="Transcript" />
        <p>
          First of all, starting with one of the most obvious ways of
          demonstration of excellence is through my transcript. Besides pursuing
          some of the most rigorous coursework in Math, Engineering, and
          Sciences, I have completed all of Newton North’s Computer Science
          offerings and pathways, performing strongly and earning high grades
          across various fields of STEM.
        </p>
        <p>
          My transcript reflects consistent academic excellence across a
          rigorous course load, including multiple AP and honors classes. I
          challenged myself while maintained a high GPA while balancing
          extracurricular commitments such as programming club, hackathons, and
          independent projects.
        </p>

        <p>
          Throughout my NNHS journey, my coursework demonstrates a strong focus
          on STEM disciplines, particularly computer science and mathematics,
          while still maintaining balance in humanities subjects.
        </p>
        <p>
          The following year, I am enrolled in AP Physics C, AP Calculus BC,
          Data Science, and Advanced Robotics, further aiming to continue
          challenging myself.
        </p>
      </Card>

      <div className="flex flex-wrap gap-6 items-start">
        <div className="shrink-0">
          <GlowCard image={transcript} />
        </div>

        <div className="flex-1 min-w-[250px] max-w-md">
          <Card>
            <Subheading title="Transcript" />
          </Card>
        </div>
      </div>

      <Subheading title="NCWIT" />
      <Card title="NCWIT" />

      <Subheading title="ACSL" />
      <Card title="ACSL" />

      <Subheading title="MIT Blueprint" />
      <Card title="MIT Blueprint" />
    </div>
  );
}
