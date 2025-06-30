import React from "react";
import NavBar from "./NavBar";
import MakingBridge from "./MakingBridge";
import { BriefcaseBusiness, CircleCheck, CodeXml } from "lucide-react";
import TechBridgeDoesCard from "./TechBridgeDoesCard";

const LandingPage: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div className="w-full">
      <NavBar />
      <main className="mt-[50px]">
        <MakingBridge />
        <div className="flex w-full items-center justify-center bg-stone-100">
          <div className="max-w-[1200px]">
            {" "}
            <div className="bg-stone-100">
              <div className="px-[20px] py-[30px]">
                <div className="text-center">
                  {" "}
                  <span className="text-[22px] font-bold">
                    {" "}
                    What TechBridge Does
                  </span>
                </div>
                <div className="flex flex-col gap-[20px] pt-[30px]">
                  <div>
                    <TechBridgeDoesCard
                      icon={<CodeXml size={40} className="text-teal-500" />}
                      cardTitle="Find Talented Devs"
                      cardDescription="Connect with skilled developers who bring your projects to life"
                      cardContent="Explore a curated network of experienced developers specializing in various technologies. Whether you need a quick prototype or a full-scale product, find the right talent to deliver quality solutions on time. Collaborate easily and bring your vision to reality with confidence."
                    />
                  </div>
                  <div>
                    <TechBridgeDoesCard
                      icon={<CircleCheck size={40} className="text-teal-500" />}
                      cardTitle="Make you next project successful"
                      cardDescription="Transform ideas into successful products with expert help"
                      cardContent="Access a diverse pool of talented developers ready to turn your ideas into reality. Whether building a new app or scaling an existing product, collaborate effectively to reach your project milestones and exceed expectations."
                    />
                  </div>
                  <div>
                    <TechBridgeDoesCard
                      icon={
                        <BriefcaseBusiness
                          size={40}
                          className="text-teal-500"
                        />
                      }
                      cardTitle="Find good projects"
                      cardDescription="Connect with meaningful projects that fuel your growth"
                      cardContent="Browse a diverse selection of high-quality projects looking for talented developers like you. Whether you want to work on innovative startups or established enterprises, find the perfect project to grow your career and showcase your expertise."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
