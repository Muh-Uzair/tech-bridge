import { Button } from "@/components/ui/button";
import React from "react";

const NavBar: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <nav className="fixed top-0 right-0 left-0 flex h-[50px] items-center justify-between border-b-[1px] border-teal-500 bg-stone-100 p-[10px]">
      <div>
        <span className="text-[20px] font-bold text-teal-500">TechBridge</span>
      </div>
      <div className="flex gap-[10px]">
        <div>
          <Button variant="outline">Sign up</Button>
        </div>
        <div>
          <Button>Sign in</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
