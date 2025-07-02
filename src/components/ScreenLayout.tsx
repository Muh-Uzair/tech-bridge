"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import TechBridgeLogo from "./TechBridgeLogo";

interface Props {
  children: React.ReactNode;
}

const ScreenLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const isCurrentlyDark = html.classList.contains("dark");
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
    <div>
      {/* Header */}
      <header className="laptopS:fixed laptopS:top-0 laptopS:right-0 laptopS:left-0 laptopS:h-[50px] laptopS:bg-stone-100 laptopS:border-b-[1px] laptopS:border-teal-500 laptopS:flex dark:bg-background hidden items-center justify-between px-4">
        <TechBridgeLogo />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-teal-500" />
          ) : (
            <Moon className="h-5 w-5 text-teal-600" />
          )}
        </Button>
      </header>

      {/* Sidebar */}
      <aside className="laptopS:fixed laptopS:top-[50px] laptopS:bottom-0 laptopS:left-0 laptopS:w-[180px] laptopM:w-[200px] laptopS:bg-teal-500 laptopS:flex hidden flex-col px-[3px] py-4">
        <nav>
          <ul className="flex flex-col gap-2">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 rounded-sm px-3 py-2 text-white transition-colors hover:bg-teal-600 ${
                      isActive ? "bg-teal-700" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="dark:bg-background">{children}</main>
    </div>
  );
};

export default ScreenLayout;
