"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// ✅ Step 1: Define Zod schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

// ✅ Step 2: Infer the type
type FormValues = z.infer<typeof formSchema>;

const SearchBarCTA: React.FC = () => {
  // ✅ Step 3: Setup React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // ✅ Step 4: Handle submit
  const onSubmit = (data: FormValues) => {
    console.log("Submitted data:", data);
  };

  return (
    <div className="mx-w-[1200px] flex w-full items-center justify-center">
      <div className="w-full px-[20px] py-[30px]">
        <div className="mb-[30px] text-center">
          {" "}
          <span className="text-[22px] font-bold">Search For Devs</span>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto max-w-sm space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter developer name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Search
              <Search />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SearchBarCTA;
