import React from "react";

import { GraduationCap, Handshake, ShieldCheck } from "lucide-react";
import TechBridgeDoesCard from "./TechBridgeDoesCard";

const TechBridgeCriteria: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div className="flex w-full items-center justify-center border-[1px] border-teal-700 bg-teal-500">
      <div className="max-w-[1200px]">
        {" "}
        <div className="bg-teal-500">
          <div className="px-[20px] py-[30px]">
            <div className="text-center">
              {" "}
              <span className="text-[22px] font-bold text-teal-800">
                {" "}
                TechBridge&apos;s Criteria For Developers
              </span>
            </div>
            <div className="flex flex-col gap-[20px] pt-[30px]">
              <div>
                <TechBridgeDoesCard
                  icon={<GraduationCap size={40} className="text-teal-500" />}
                  cardTitle="TechBridge Connects You With Talented Devs Only"
                  cardDescription="Work with top-tier developers carefully vetted for skill and reliability"
                  cardContent="At TechBridge, we don’t list just anyone — we feature only the most qualified and proven developers. Each dev is reviewed for technical expertise, communication, and past work. Whether you’re building a startup or upgrading an enterprise app, you can trust you're hiring talent that delivers. Focus on your vision — we’ll handle the quality."
                />
              </div>
              <div>
                <TechBridgeDoesCard
                  icon={<ShieldCheck size={40} className="text-teal-500" />}
                  cardTitle="TechBridge Conducts Tough Screening"
                  cardDescription="Every developer is thoroughly tested and verified before joining"
                  cardContent="At TechBridge, we believe that quality starts with trust. That’s why every developer goes through a multi-step screening process that includes technical assessments, portfolio reviews, and live interviews. We ensure that only capable, reliable, and passionate professionals make it to our platform — so you can focus on your project with peace of mind."
                />
              </div>
              <div>
                <TechBridgeDoesCard
                  icon={<Handshake size={40} className="text-teal-500" />}
                  cardTitle="Collaborate Seamlessly From Day One"
                  cardDescription="Streamlined tools and clear communication for productive teamwork"
                  cardContent="TechBridge provides the foundation for smooth and efficient collaboration between clients and developers. From real-time updates to milestone tracking and built-in communication tools, everything is designed to keep you in sync. Focus on building great products while we simplify the process of working together."
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
