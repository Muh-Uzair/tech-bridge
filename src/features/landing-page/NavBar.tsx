import { Button } from "@/components/ui/button";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 h-[50px] border-b border-teal-500 bg-stone-100">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-[20px]">
        <span className="text-[20px] font-bold text-teal-500">TechBridge</span>
        <div className="flex gap-[10px]">
          <Button variant="outline">Sign up</Button>
          <Button>Sign in</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
