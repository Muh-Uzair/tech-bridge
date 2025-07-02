import React from "react";
import { BriefcaseBusiness, CircleCheck, CodeXml } from "lucide-react";
import TechBridgeDoesCard from "./TechBridgeDoesCard";

const TechBridgeDoes: React.FC = () => {
  return (
    <div className="dark:bg-background flex w-full items-center justify-center bg-stone-100">
      <div className="max-w-[1200px]">
        <div className="dark:bg-background bg-stone-100">
          <div className="tab:px-[50px] tab:py-[50px] px-[20px] py-[30px]">
            <div className="text-center">
              <span className="text-[22px] font-bold">
                What TechBridge Does
              </span>
            </div>

            <div className="laptopS:grid laptopS:grid-cols-3 flex flex-col gap-[20px] pt-[30px]">
              <div>
                <TechBridgeDoesCard
                  icon={<CodeXml size={40} className="text-teal-500" />}
                  cardTitle="Find Talented Devs"
                  cardDescription="Connect with skilled developers who bring your projects to life"
                  cardContent="Browse a curated list of experienced developers across various technologies. Whether you're starting from scratch or need extra hands, find reliable experts who match your goals and timelines. Collaborate with confidence and move your ideas forward."
                />
              </div>

              <div>
                <TechBridgeDoesCard
                  icon={<CircleCheck size={40} className="text-teal-500" />}
                  cardTitle="Make Your Next Project Successful"
                  cardDescription="Transform ideas into successful products with expert help"
                  cardContent="Access vetted developers who are ready to deliver real results. From MVPs to scalable platforms, get the skills you need to meet your milestones. Work closely with trusted professionals and turn your vision into a product that users will love."
                />
              </div>

              <div>
                <TechBridgeDoesCard
                  icon={
                    <BriefcaseBusiness size={40} className="text-teal-500" />
                  }
                  cardTitle="Find Good Projects"
                  cardDescription="Connect with meaningful projects that fuel your growth"
                  cardContent="Discover a variety of quality projects tailored to your skills and interests. Join teams that value collaboration and expertise. Whether freelancing or looking for long-term work, find the right opportunities to grow your experience and portfolio."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBridgeDoes;
