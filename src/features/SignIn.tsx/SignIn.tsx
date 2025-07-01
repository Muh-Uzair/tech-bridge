"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, User } from "lucide-react";
import DeveloperSignIn from "./DeveloperSignIn";
import ClientSignIn from "./ClientSignIn";
import AuthLoadingScreen from "@/components/AuthLoadingScreen";
import AuthSuccess from "@/components/ui/AuthSuccess";

const SignIn: React.FC = () => {
  // VARS
  const [identity, setIdentity] = useState<"developer" | "client" | "idle">(
    "idle",
  );
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // FUNCTIONS

  // JSX
  return (
    <div>
      <Dialog
        onOpenChange={(open) => {
          if (!open) {
            setTimeout(() => {
              setIdentity("idle");
              setSignInSuccess(false);
              setIsLoading(false);
            }, 1000);
          }
        }}
      >
        <DialogTrigger asChild>
          <Button>Sign in</Button>
        </DialogTrigger>
        <DialogContent>
          {isLoading && !signInSuccess && (
            <AuthLoadingScreen
              dialogTitle="Signing In..."
              dialogDescription="Please wait while we sign in to your account. This may take a few
                  seconds."
            />
          )}
          {signInSuccess && (
            <AuthSuccess
              dialogTitle="Sign In Successful!"
              dialogDescription="You have successfully logged into your account"
            />
          )}
          {!signInSuccess && !isLoading && (
            <>
              {identity === "idle" && !signInSuccess && !isLoading && (
                <>
                  <DialogHeader>
                    <DialogTitle>Who are you signing in as?</DialogTitle>
                    <DialogDescription>
                      Select your role to continue with the sign-in process.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="tab:grid-cols-2 grid grid-cols-1 gap-4">
                    {/* Developer Option */}
                    <Card
                      onClick={() => setIdentity("developer")}
                      className="cursor-pointer transition-all duration-200 hover:shadow-md"
                    >
                      <CardContent className="flex flex-col items-center justify-center py-6 text-center">
                        <Code2 className="mb-2 text-teal-500" size={36} />
                        <h3 className="text-lg font-semibold">Developer</h3>
                        <p className="text-muted-foreground text-sm">
                          Access your dashboard, manage your profile, and
                          discover new project opportunities.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Client Option */}
                    <Card
                      onClick={() => setIdentity("client")}
                      className="cursor-pointer transition-all duration-200 hover:shadow-md"
                    >
                      <CardContent className="flex flex-col items-center justify-center py-6 text-center">
                        <User className="mb-2 text-teal-500" size={36} />
                        <h3 className="text-lg font-semibold">Client</h3>
                        <p className="text-muted-foreground text-sm">
                          Post projects, review developer proposals, and manage
                          your product development.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
              {identity === "developer" && (
                <DeveloperSignIn
                  setIdentity={setIdentity}
                  setSignInSuccess={setSignInSuccess}
                  setIsLoading={setIsLoading}
                />
              )}
              {identity === "client" && <ClientSignIn />}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignIn;
