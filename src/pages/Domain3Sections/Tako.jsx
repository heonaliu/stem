import Card from "@/components/Card";
import Subheading from "@/components/Subheading";
import { GlowCard } from "@/components/GlowCard";
import { domain1Content } from "@/data/domain1Content";
import tako from "../../assets/public/takofocus.png";
import { domain3Content } from "@/data/domain3Content";
import TakoOrbit from "./components/TakoOrbit";
import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";
export default function Tako() {
  return (
    <>
      <Card>
        <Subheading
          title={domain3Content.tako.title}
          color={"text-accent-500"}
          size="4"
        />
        {domain3Content.tako.desc.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Card>

      <div className="flex flex-wrap gap-6 items-start justify-center">
        <div className="shrink-0">
          <GlowCard image={tako} link="https://takofocus.vercel.app/" />
        </div>

        <div className="flex-1 min-w-[250px] max-w-auto">
          <Card>
            <div>
              <Subheading
                title={domain3Content.tako.section1Title}
                color="text-primary-500"
                size="2"
              />
            </div>
            <p className="text-sm italic">
              click the image to be redirected to try the web app! P.S (You'll need to "sign in with Google" that's not under NPS to try the app)
            </p>
            {domain3Content.tako.section1.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1gUOT7VaHvAkrhrCX34DRkAM78-ThGy1Z/view"
          >
            TakoFocus Summary <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="italic text-sm">*Feb 20, 2026 UPDATE: I decided to keep this web application simpler with just a pomodoro timer and remove the task feature due to several issues with Supabase database.</p>
          </Card>
          <div className="flex-1 py-6 min-w-[250px] max-w-auto">
            <Card>
              <div>
                <Subheading
                  title={domain3Content.tako.section2Title}
                  color="text-primary-500"
                  size="2"
                />
              </div>
              {domain3Content.tako.section2.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Card>
          </div>
        </div>
        <div className="w-full mt-60 mb-60 flex items-center justify-center">
          <TakoOrbit />
        </div>
      </div>

      <div className="flex-1 min-w-[250px] max-w-auto">
        <Card>
          <div>
            <Subheading
              title={domain3Content.tako.section3Title}
              color="text-primary-500"
              size="2"
            />
          </div>
          {domain3Content.tako.section3.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Card>
      </div>
      <div className="flex-1 min-w-[250px] max-w-auto">
        <Card>
          <div>
            <Subheading
              title={domain3Content.tako.explainTitle}
              color="text-primary-500"
              size="2"
            />
          </div>
          {domain3Content.tako.explain.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Card>
      </div>
    </>
  );
}
