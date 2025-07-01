"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code2, CheckCircle } from "lucide-react";

import DeveloperSignUp from "./DeveloperSignUp";
import ClientSignUp from "./ClientSignUp";
import CircularProgress from "@/components/CircularProgress";

const SignUp: React.FC = () => {
  // VARS
  const [identity, setIdentity] = useState<"developer" | "client" | "idle">(
    "idle",
  );
  const [signUpSuccess, setSignUpSuccess] = useState(false);
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
              setSignUpSuccess(false);
              setIsLoading(false);
            }, 1000);
          }
        }}
      >
        <DialogTrigger asChild>
          <Button variant="outline">Sign up</Button>
        </DialogTrigger>

        <DialogContent>
          {isLoading && !signUpSuccess && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-semibold">
                  Signing Up...
                </DialogTitle>
                <DialogDescription className="text-center text-gray-600">
                  Please wait while we create your account. This may take a few
                  seconds.
                </DialogDescription>

                <div className="flex items-center justify-center py-8">
                  <CircularProgress />
                </div>
              </DialogHeader>
            </div>
          )}
          {signUpSuccess && (
            <>
              <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
                <CheckCircle className="text-teal-500" size={64} />
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-semibold">
                    Sign Up Successful!
                  </DialogTitle>
                  <DialogDescription className="text-center text-gray-600">
                    Your account has been created successfully. You can now log
                    in and start using the platform.
                  </DialogDescription>
                </DialogHeader>
              </div>
            </>
          )}
          {!signUpSuccess && !isLoading && (
            <>
              {" "}
              {identity === "idle" && (
                <>
                  <DialogHeader>
                    <DialogTitle>Who are you signing up as?</DialogTitle>
                    <DialogDescription>
                      Select your role to continue with the sign-up process.
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
                          Join the platform to find projects and build your
                          portfolio.
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
                          Post your ideas and connect with skilled developers to
                          build your product.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
              {identity === "developer" && (
                <DeveloperSignUp
                  setIdentity={setIdentity}
                  setSignUpSuccess={setSignUpSuccess}
                  isLoading={setIsLoading}
                />
              )}
              {identity === "client" && (
                <ClientSignUp
                  setIdentity={setIdentity}
                  setSignUpSuccess={setSignUpSuccess}
                  isLoading={setIsLoading}
                />
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignUp;
