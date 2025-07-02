"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Code2, UserRound } from "lucide-react";

const DeveloperProfile = () => {
  const developer = {
    name: "Muhammad Uzair",
    email: "uzair.dev@example.com",
    linkedin: "https://linkedin.com/in/uzair-dev",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
  };

  return (
    <div className="tab:px-[50px] mx-auto max-w-4xl p-4">
      <Card className="shadow-md">
        <CardContent className="laptopS:flex-row flex flex-col items-center gap-8 p-6">
          {/* Avatar + Name */}
          <div className="laptopS:text-left flex flex-col items-center gap-3 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-500 text-4xl text-white shadow">
              <UserRound className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {developer.name}
            </h2>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
          </div>

          {/* Details */}
          <div className="w-full flex-1 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4 text-teal-600" />
              <span>{developer.email}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Linkedin className="h-4 w-4 text-teal-600" />
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:underline"
              >
                {developer.linkedin}
              </a>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Code2 className="mt-1 h-4 w-4 text-teal-600" />
              <div className="flex flex-wrap gap-2">
                {developer.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    className="border border-teal-400 bg-teal-100 text-teal-800"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeveloperProfile;
