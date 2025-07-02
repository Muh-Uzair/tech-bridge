"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DeveloperProjects: React.FC = () => {
  const activeProjects = [
    {
      id: 1,
      title: "Real Estate CRM",
      description: "A dashboard to manage leads, sales, and agents.",
      status: "In Progress",
      startedAt: "2025-06-01",
      dueDate: "2025-07-15",
    },
    {
      id: 2,
      title: "E-Commerce Admin",
      description: "Backend panel to manage products, orders, and inventory.",
      status: "In Review",
      startedAt: "2025-06-10",
      dueDate: "2025-07-20",
    },
    {
      id: 3,
      title: "Task Manager App",
      description: "Collaborative task management tool for remote teams.",
      status: "Development",
      startedAt: "2025-06-20",
      dueDate: "2025-07-30",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-500 text-white";
      case "In Review":
        return "bg-blue-500 text-white";
      case "Development":
        return "bg-teal-600 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="tab:px-[50px] space-y-4 p-4">
      <h2 className="mb-2 text-2xl font-semibold text-teal-500">
        Active Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {activeProjects.map((project) => (
          <Card key={project.id} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {project.title}
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              <p>{project.description}</p>
              <div className="mt-2">
                <span className="block">📅 Start: {project.startedAt}</span>
                <span className="block">⏳ Due: {project.dueDate}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeveloperProjects;
