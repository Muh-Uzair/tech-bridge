import React from "react";
import SignInForm from "./SignInForm";

interface Props {
  setIdentity: React.Dispatch<
    React.SetStateAction<"developer" | "client" | "idle">
  >;
  setSignInSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  identity: "developer" | "client" | "idle";
}

const DeveloperSignIn: React.FC<Props> = ({
  setIdentity,
  setIsLoading,
  setSignInSuccess,
  identity,
}) => {
  return (
    <SignInForm
      setIdentity={setIdentity}
      setIsLoading={setIsLoading}
      setSignInSuccess={setSignInSuccess}
      dialogTitle={"Welcome Back, Developer"}
      dialogDescription={
        "Sign in to manage your projects and connect with clients."
      }
      identity={identity}
    />
  );
};

export default DeveloperSignIn;
