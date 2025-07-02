"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CircularProgress from "@/components/CircularProgress";
import AuthSuccess from "@/components/AuthSuccess";
import { KeyRound } from "lucide-react";

const DeveloperResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmClicked, setConfirmClicked] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleRequestReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setDialogOpen(true);
    }
  };

  const handleConfirm = () => {
    setConfirmClicked(true);
    setTimeout(() => {
      setIsComplete(true);
    }, 3000);
  };

  return (
    <div className="flex min-h-[calc(100vh-60px)] flex-col items-center justify-center bg-stone-50 px-4 text-center">
      <div className="flex max-w-md flex-col items-center gap-4">
        <KeyRound className="h-12 w-12 text-teal-500" />
        <h2 className="text-2xl font-semibold text-teal-700">Reset Password</h2>
        <p className="text-muted-foreground text-sm">
          Enter your email to receive a reset link.
        </p>

        <form
          onSubmit={handleRequestReset}
          className="flex w-full max-w-sm flex-col gap-3"
        >
          <Input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" disabled={!email.trim()}>
            Request Reset
          </Button>
        </form>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            {!confirmClicked && (
              <>
                <DialogHeader>
                  <DialogTitle>Confirm Reset</DialogTitle>
                  <DialogDescription>
                    We’ll send a reset link to: <strong>{email}</strong>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleConfirm}>Send Link</Button>
                </DialogFooter>
              </>
            )}
            {confirmClicked && !isComplete && (
              <>
                <DialogHeader>
                  <DialogTitle>Processing your request...</DialogTitle>
                  <DialogDescription>
                    Please wait while we send the reset link.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex w-full items-center justify-center py-8">
                  <CircularProgress />
                </div>
              </>
            )}
            {isComplete && (
              <AuthSuccess
                dialogTitle="Reset link sent!"
                dialogDescription="Check your inbox to continue password reset."
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DeveloperResetPassword;
