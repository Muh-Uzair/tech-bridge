import React from "react";
import { GraduationCap, Handshake, ShieldCheck } from "lucide-react";
import TechBridgeDoesCard from "./TechBridgeDoesCard";

const TechBridgeCriteria: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center border-[1px] border-teal-700 bg-teal-500">
      <div className="max-w-[1200px]">
        <div className="bg-teal-500">
          <div className="tab:px-[50px] tab:py-[50px] px-[20px] py-[30px]">
            <div className="text-center">
              <span className="text-[22px] font-bold text-teal-800">
                TechBridge&apos;s Criteria For Developers
              </span>
            </div>

            <div className="laptopS:grid laptopS:grid-cols-3 flex flex-col gap-[20px] pt-[30px]">
              <div>
                <TechBridgeDoesCard
                  icon={<GraduationCap size={40} className="text-teal-500" />}
                  cardTitle="TechBridge Works With Talented Devs"
                  cardDescription="Work with top-tier developers carefully vetted for skill and reliability"
                  cardContent="TechBridge features only developers who meet high standards of expertise and professionalism. Each candidate is evaluated for coding skill, past experience, and project delivery. You get access to proven talent that is passionate, to contribute value from day one."
                />
              </div>

              <div>
                <TechBridgeDoesCard
                  icon={<ShieldCheck size={40} className="text-teal-500" />}
                  cardTitle="TechBridge Conducts Tough Screening"
                  cardDescription="Every developer is thoroughly tested and verified before joining"
                  cardContent="Before joining TechBridge, developers must pass a multi-step screening process. This includes skill assessments, portfolio checks, and live technical interviews. Our goal is to maintain a trusted, high-performing network of professionals so clients can hire confidently and build successfully."
                />
              </div>

              <div>
                <TechBridgeDoesCard
                  icon={<Handshake size={40} className="text-teal-500" />}
                  cardTitle="Collaborate Seamlessly From Day One"
                  cardDescription="Streamlined tools and clear communication for productive teamwork"
                  cardContent="We equip developers and clients with tools that foster clear communication and efficient collaboration. With built-in updates, progress tracking, and milestone visibility, you’ll always be on the same page. TechBridge ensures that working together feels effortless from the start."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBridgeCriteria;
