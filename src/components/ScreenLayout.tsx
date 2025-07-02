"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/lib/constants";

interface Props {
  children: React.ReactNode;
}

const ScreenLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      {/* Header */}
      <header className="laptopS:fixed laptopS:top-0 laptopS:right-0 laptopS:left-0 laptopS:h-[50px] laptopS:bg-stone-100 laptopS:border-b-[1px] laptopS:border-teal-500 laptopS:flex hidden items-center px-4">
        <h1 className="font-semibold text-teal-800">Developer Dashboard</h1>
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
      <main>{children}</main>
    </div>
  );
};

export default ScreenLayout;
