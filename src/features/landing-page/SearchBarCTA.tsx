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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

type FormValues = z.infer<typeof formSchema>;

const SearchBarCTA: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const onSubmit = (data: FormValues) => {
    console.log("Submitted data:", data);
    router.push("/search-developers");
  };

  return (
    <div className="mx-w-[1200px] dark:bg-background/90 flex w-full items-center justify-center">
      <div className="tab:px-[50px] tab:py-[50px] w-full px-[20px] py-[30px]">
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
              Find Developers
              <Search />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SearchBarCTA;
