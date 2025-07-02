import { FolderIcon, UserIcon, LogOutIcon, LockKeyhole } from "lucide-react";

export const navItems = [
  {
    href: "/developer-dashboard/projects",
    label: "Projects",
    icon: FolderIcon,
  },
  {
    href: "/developer-dashboard/profile",
    label: "Profile",
    icon: UserIcon,
  },
  {
    href: "/developer-dashboard/reset-password",
    label: "Reset Password",
    icon: LockKeyhole,
  },
  {
    href: "/developer-dashboard/logout",
    label: "Logout",
    icon: LogOutIcon,
  },
];
