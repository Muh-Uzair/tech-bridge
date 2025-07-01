"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code2, ArrowLeft } from "lucide-react";

import DeveloperSignUp from "./DeveloperSignUp";

const SignUp: React.FC = () => {
  // VARS
  const [identity, setIdentity] = useState<"developer" | "client" | "idle">(
    "idle",
  );

  // FUNCTIONS

  // JSX
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Sign up</Button>
        </DialogTrigger>

        <DialogContent>
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
                  onClick={() => setIdentity("developer")}
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
            <DeveloperSignUp setIdentity={setIdentity} />
          )}
          {identity === "client" && (
            <>
              {" "}
              <DialogHeader>
                <DialogTitle>Sign up as a client</DialogTitle>
                <DialogDescription>
                  Select your role to continue with the sign-up process.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={() => setIdentity("idle")}>
                  <ArrowLeft />
                  Back
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignUp;
