import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";
import { teamMembers } from "@/config/land";
import { techStack } from "@/config/land";

export default function ExampleIdea() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Example Idea
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See what a real collaboration looks like
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <div className="px-6 pt-6">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 hover:bg-green-100"
              >
                Looking for collaborators
              </Badge>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                AI-Powered Expense Tracker
              </CardTitle>
              <CardDescription className="text-base">
                Smart budgeting app that uses AI to categorize and analyze
                spending patterns
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  Team Members (3)
                </h4>
                <div className="flex -space-x-3">
                  {teamMembers.map((member) => (
                    <Avatar
                      key={member.name}
                      className="border-2 border-background w-10 h-10"
                    >
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                      />
                      <AvatarFallback
                        className={`${member.color} text-white text-xs font-semibold`}
                      >
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Looking for: Frontend Developer, Backend Developer
                </p>
              </div>

              <Button className="w-full gap-2">
                View Idea
                <ExternalLink className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
