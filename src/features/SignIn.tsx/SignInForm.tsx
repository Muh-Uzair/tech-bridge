"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import OrSeparator from "@/components/OrSeparator";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SignInUpFooter from "@/components/ui/SignInUpFooter";

// ✅ Zod schema for validation
const signInSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// ✅ Infer type from schema
type SignInFormValues = z.infer<typeof signInSchema>;

interface Props {
  setIdentity: React.Dispatch<
    React.SetStateAction<"developer" | "client" | "idle">
  >;
  setSignInSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dialogTitle: string;
  dialogDescription: string;
}

const ClientSignIn: React.FC<Props> = ({
  setIdentity,
  setIsLoading,
  setSignInSuccess,
  dialogTitle,
  dialogDescription,
}) => {
  // ✅ Form setup
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // ✅ Submit handler
  const onSubmit = (data: SignInFormValues) => {
    console.log("Sign-in data:", data);
    setIsLoading(true);
    setTimeout(() => {
      setSignInSuccess(true);
    }, 3000);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogDescription>{dialogDescription}</DialogDescription>
      </DialogHeader>

      <div>
        <Button
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setSignInSuccess(true);
            }, 3000);
          }}
          className="w-full"
        >
          Sign in with Google
        </Button>
      </div>

      <OrSeparator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SignInUpFooter setIdentity={setIdentity} />
        </form>
      </Form>
    </>
  );
};

export default ClientSignIn;
