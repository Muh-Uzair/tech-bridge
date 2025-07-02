import React from "react";
import NavBar from "./NavBar";
import MakingBridge from "./MakingBridge";
import TechBridgeDoes from "./TechBridgeDoes";
import SearchBarCTA from "./SearchBarCTA";
import OnTechBridge from "./OnTechBridge";
import TechBridgeCriteria from "./TechBridgeCriteria";
import LandingPageFooter from "./LandingPageFooter";

const LandingPage: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div className="w-full">
      <NavBar />
      <main className="mt-[50px] h-[100vh]">
        <MakingBridge />
        <SearchBarCTA />
        <TechBridgeDoes />
        <OnTechBridge />
        <TechBridgeCriteria />
        <LandingPageFooter />
      </main>
    </div>
  );
};

export default LandingPage;
