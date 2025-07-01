import React from "react";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import CircularProgress from "./CircularProgress";

interface Props {
  dialogTitle?: string;
  dialogDescription?: string;
}

const AuthLoadingScreen: React.FC<Props> = ({
  dialogTitle,
  dialogDescription,
}) => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div>
      <DialogHeader>
        <DialogTitle className="text-center text-2xl font-semibold">
          {dialogTitle}
        </DialogTitle>
        <DialogDescription className="text-center text-gray-600">
          {dialogDescription}
        </DialogDescription>

        <div className="flex items-center justify-center py-8">
          <CircularProgress />
        </div>
      </DialogHeader>
    </div>
  );
};

export default AuthLoadingScreen;
