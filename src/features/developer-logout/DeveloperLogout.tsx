"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import CircularProgress from "@/components/CircularProgress";
import AuthSuccess from "@/components/AuthSuccess";
import { useRouter } from "next/navigation";

const DeveloperLogout: React.FC = () => {
  const [logoutClicked, setLogoutClicked] = useState(false);
  const [logoutComplete, setLogOutComplete] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    console.log("User confirmed logout");
    setLogoutClicked(true);
    setTimeout(() => {
      setLogOutComplete(true);
    }, 3000);
    setTimeout(() => {
      router.push("/");
    }, 3400);
  };

  return (
    <div className="dark:bg-background flex min-h-[calc(100vh-60px)] flex-col items-center justify-center bg-stone-50 px-4 text-center">
      <div className="flex max-w-md flex-col items-center gap-4">
        <LogOutIcon className="h-12 w-12 text-teal-500" />
        <h2 className="text-2xl font-semibold text-teal-700">
          Ready to log out?
        </h2>
        <p className="text-muted-foreground text-sm">
          You are about to end your session. Make sure you’ve saved all your
          changes.
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 w-full max-w-[200px]">Log out</Button>
          </DialogTrigger>
          <DialogContent>
            {!logoutClicked && (
              <>
                <DialogHeader>
                  <DialogTitle>Confirm Logout</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to log out? You will be redirected to
                    the home screen.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4 flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button onClick={handleLogout}>Log out</Button>
                </DialogFooter>
              </>
            )}
            {logoutClicked && !logoutComplete && (
              <>
                <DialogHeader>
                  <DialogTitle>Logging you out...</DialogTitle>
                  <DialogDescription>
                    Please wait a moment while we securely end your session.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <div className="flex w-full items-center justify-center py-8">
                    <CircularProgress />
                  </div>
                </DialogFooter>
              </>
            )}
            {logoutComplete && (
              <AuthSuccess
                dialogTitle="Logout complete"
                dialogDescription="You will be redirected to home screen."
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DeveloperLogout;
