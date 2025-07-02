"use client";
import React from "react";

import SignUp from "../sign-up/SignUp";
import SignIn from "../SignIn.tsx/SignIn";
import { useCheckUserAuthStore } from "@/stores/useCheckUserAuthStore";

import NavBarMenu from "./NavBarMenu";

const NavBar: React.FC = () => {
  //VARS

  const isAuthenticated = useCheckUserAuthStore(
    (state) => state.isAuthenticated,
  );
  const userIdentity = useCheckUserAuthStore((state) => state.userIdentity);

  //FUNCTION

  // JSX
  return (
    <nav className="fixed top-0 right-0 left-0 h-[50px] border-b border-teal-500 bg-stone-100">
      <div className="tab:px-[50px] mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-[20px]">
        <span className="text-[20px] font-bold text-teal-500">TechBridge</span>
        <div className="flex gap-[10px]">
          {isAuthenticated && userIdentity === "developer" && <NavBarMenu />}
          {!isAuthenticated && (
            <>
              {" "}
              <SignUp />
              <SignIn />{" "}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
