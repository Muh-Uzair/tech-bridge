"use client";

import React, { useEffect, useState } from "react";
import SignUp from "../sign-up/SignUp";
import SignIn from "../SignIn.tsx/SignIn";
import { useCheckUserAuthStore } from "@/stores/useCheckUserAuthStore";
import NavBarMenu from "./NavBarMenu";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBridgeLogo from "@/components/TechBridgeLogo";

const NavBar: React.FC = () => {
  const isAuthenticated = useCheckUserAuthStore(
    (state) => state.isAuthenticated,
  );
  const userIdentity = useCheckUserAuthStore((state) => state.userIdentity);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Set initial mode based on <html> class
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="dark:bg-background fixed top-0 right-0 left-0 h-[50px] border-b border-teal-500 bg-stone-100">
      <div className="tab:px-[50px] mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-[20px]">
        <TechBridgeLogo />

        <div className="flex items-center gap-[10px]">
          {/* Toggle Dark Mode */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-teal-500" />
            ) : (
              <Moon className="h-5 w-5 text-teal-600" />
            )}
          </Button>

          {/* Auth Buttons */}
          {isAuthenticated && userIdentity === "developer" && <NavBarMenu />}
          {!isAuthenticated && (
            <>
              <SignUp />
              <SignIn />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
