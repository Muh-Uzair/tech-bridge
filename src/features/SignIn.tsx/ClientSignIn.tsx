import React from "react";
import SignInForm from "./SignInForm";

interface Props {
  setIdentity: React.Dispatch<
    React.SetStateAction<"developer" | "client" | "idle">
  >;
  setSignInSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientSignIn: React.FC<Props> = ({
  setIdentity,
  setIsLoading,
  setSignInSuccess,
}) => {
  return (
    <SignInForm
      setIdentity={setIdentity}
      setIsLoading={setIsLoading}
      setSignInSuccess={setSignInSuccess}
      dialogTitle={"Welcome Back, Client"}
      dialogDescription={
        "Sign in to manage your projects and connect with top developers."
      }
    />
  );
};

export default ClientSignIn;
