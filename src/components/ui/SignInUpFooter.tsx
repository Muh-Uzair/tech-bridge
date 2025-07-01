import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

interface Props {
  setIdentity: React.Dispatch<
    React.SetStateAction<"developer" | "client" | "idle">
  >;
}

const SignInUpFooter: React.FC<Props> = ({ setIdentity }) => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div className="flex-col space-y-4 pt-[20px]">
      <div>
        <Button className="w-full" type="submit">
          Register
        </Button>
      </div>
      <div>
        <Button
          type="button"
          variant="outline"
          onClick={() => setIdentity("idle")}
          className="w-full"
        >
          <ArrowLeft className="mr-1" size={16} />
          Back
        </Button>
      </div>
    </div>
  );
};

export default SignInUpFooter;
