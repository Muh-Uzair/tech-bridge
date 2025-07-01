import { CheckCircle } from "lucide-react";
import React from "react";
import { DialogDescription, DialogHeader, DialogTitle } from "./dialog";

interface Props {
  dialogTitle?: string;
  dialogDescription?: string;
}

const AuthSuccess: React.FC<Props> = ({ dialogTitle, dialogDescription }) => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
        <CheckCircle className="text-teal-500" size={64} />
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            {dialogTitle}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
      </div>
    </>
  );
};

export default AuthSuccess;
