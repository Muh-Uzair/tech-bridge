import React from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import OrSeparator from "@/components/OrSeparator";
import SignUpFooter from "../../components/ui/SignInUpFooter";

interface Props {
  setIdentity: React.Dispatch<
    React.SetStateAction<"developer" | "client" | "idle">
  >;
  setSignUpSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// 1. Define Zod schema
const clientFormSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// 2. Infer TypeScript type
type ClientFormValues = z.infer<typeof clientFormSchema>;

const ClientSignUp: React.FC<Props> = ({
  setIdentity,
  setSignUpSuccess,
  isLoading,
}) => {
  // 3. Setup React Hook Form
  const clientForm = useForm<ClientFormValues>({
    resolver: zodResolver(clientFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 4. Form submit handler
  const onClientSubmit = (data: ClientFormValues) => {
    console.log("Client form data:", data);
    isLoading(true);
    setTimeout(() => {
      setSignUpSuccess(true);
    }, 3000);

    // handle registration logic here
    // then optionally reset or setIdentity("idle");
    clientForm.reset();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Sign up as a client</DialogTitle>
        <DialogDescription>
          Enter your details to create a client account.
        </DialogDescription>
      </DialogHeader>

      <div>
        <Button
          onClick={() => {
            isLoading(true);
            setTimeout(() => {
              setSignUpSuccess(true);
            }, 3000);
          }}
          className="w-full"
        >
          Sign up with Google
        </Button>
      </div>

      <OrSeparator />

      <Form {...clientForm}>
        <form
          onSubmit={clientForm.handleSubmit(onClientSubmit)}
          className="space-y-4"
        >
          <FormField
            control={clientForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={clientForm.control}
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
          <SignUpFooter setIdentity={setIdentity} />
        </form>
      </Form>
    </>
  );
};

export default ClientSignUp;
