"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItems } from "@/lib/constants";

const BottomNav = () => {
  // VARS
  const pathname = usePathname();

  //FUNCTIONS

  // JSX
  return (
    <nav className="laptopS:hidden fixed right-0 bottom-0 left-0 h-[60px] border-t border-teal-500 bg-stone-100">
      <ul className="flex h-full w-full items-center justify-around">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          const iconColor = isActive ? "text-teal-800" : "text-teal-500";
          const textColor = isActive ? "text-teal-800" : "text-teal-500";

          return (
            <li key={href}>
              <Link
                href={href}
                className="flex flex-col items-center justify-center gap-1 text-xs"
              >
                <Icon className={`h-5 w-5 ${iconColor}`} />
                <span className={`${textColor} text-[11px]`}>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
