"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const NavBarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <button aria-label="Toggle menu">
          <Menu
            className={`text-teal-500 transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            size={24}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Developer Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href={"/developer-dashboard/projects"}>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
          </Link>{" "}
          <Link href={"/developer-dashboard/profile"}>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>{" "}
          <Link href={"/developer-dashboard/reset-password"}>
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>{" "}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/developer-dashboard/logout"}>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </Link>{" "}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavBarMenu;
