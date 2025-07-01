import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignUp from "../sign-up/SignUp";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 h-[50px] border-b border-teal-500 bg-stone-100">
      <div className="tab:px-[50px] mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-[20px]">
        <span className="text-[20px] font-bold text-teal-500">TechBridge</span>
        <div className="flex gap-[10px]">
          <SignUp />
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Sign in</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
