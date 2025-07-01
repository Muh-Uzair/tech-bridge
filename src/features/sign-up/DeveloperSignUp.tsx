"use client";

import React from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import OrSeparator from "@/components/OrSeparator";

const developerSignUpSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  techStack: z.string().min(1, "Tech Stack Name is required"),
  githubLinkedIn: z
    .string()
    .url("Invalid URL")
    .optional()
    .refine(
      (value) => !!value && value.length > 0,
      "GitHub or LinkedIn profile URL is required",
    ),
});

type DeveloperSignUpValues = z.infer<typeof developerSignUpSchema>;

interface Props {
  setIdentity: React.Dispatch<
    React.SetStateAction<"developer" | "client" | "idle">
  >;
}

const DeveloperSignUp: React.FC<Props> = ({ setIdentity }) => {
  // VARS

  const developerForm = useForm<DeveloperSignUpValues>({
    resolver: zodResolver(developerSignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      techStack: "",
      githubLinkedIn: "",
    },
  });

  // FUNCTIONS
  const onDeveloperSubmit = (values: DeveloperSignUpValues) => {
    console.log("Developer form submitted:", values);

    developerForm.reset();
  };
  // JSX
  return (
    <>
      <DialogHeader>
        <DialogTitle>Sign up as a Developer</DialogTitle>
        <DialogDescription>
          Enter your details to create a developer account.
        </DialogDescription>
      </DialogHeader>

      <div>
        <Button className="w-full">Sign up with Google</Button>
      </div>

      <OrSeparator />

      <Form {...developerForm}>
        <form
          onSubmit={developerForm.handleSubmit(onDeveloperSubmit)}
          className="space-y-4 pt-4"
        >
          <FormField
            control={developerForm.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={developerForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={developerForm.control}
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

          <FormField
            control={developerForm.control}
            name="techStack"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tech Stack</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your tech stack"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={developerForm.control}
            name="githubLinkedIn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub / LinkedIn</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your GitHub or LinkedIn profile URL"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex-col space-y-4">
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
            <div>
              <Button className="w-full" type="submit">
                Register
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};
export default DeveloperSignUp;
