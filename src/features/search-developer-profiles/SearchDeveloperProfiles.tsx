"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const developers = [
  {
    name: "Uzair Khan",
    role: "Frontend Developer",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Ayesha Malik",
    role: "Full Stack Developer",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Ali Raza",
    role: "Mobile Developer",
    skills: ["Flutter", "React Native"],
  },
];

const SearchDeveloperProfiles: React.FC = () => {
  return (
    <main className="bg-muted/50 min-h-screen px-4 py-10">
      <h1 className="mb-10 text-center text-3xl font-bold">
        Meet the Developers
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {developers.map((dev, index) => (
          <Card key={index} className="transition duration-300 hover:shadow-xl">
            <CardHeader className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback className="bg-gray-200 text-gray-600">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{dev.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{dev.role}</p>
              </div>
            </CardHeader>
            <CardContent className="mt-2 flex flex-wrap gap-2">
              {dev.skills.map((skill, i) => (
                <Badge key={i} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default SearchDeveloperProfiles;
