import React from "react";
import NavBar from "./NavBar";
import MakingBridge from "./MakingBridge";
import TechBridgeDoes from "./TechBridgeDoes";

const LandingPage: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div className="w-full">
      <NavBar />
      <main className="mt-[50px]">
        <MakingBridge />
        <TechBridgeDoes />
      </main>
    </div>
  );
};

export default LandingPage;
