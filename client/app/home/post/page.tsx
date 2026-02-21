"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useState } from "react";
import { type Resolver, useForm } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { IdeaFormData, ideaSchema } from "@/lib/validators/idea";
import { useIdeaStore } from "@/store/idea.store";

export default function PostIdeaForm() {
  const router = useRouter();
  const { uploadIdea, loading } = useIdeaStore();
  const [techInput, setTechInput] = useState("");
  const [reqInput, setReqInput] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IdeaFormData>({
    resolver: zodResolver(ideaSchema) as unknown as Resolver<IdeaFormData>,
    defaultValues: {
      title: "",
      description: "",
      technologies: [],
      status: "open",
      lookingForCollaboratos: false,
      requirements: [],
    },
  });

  const technologies = watch("technologies");
  const requirements = watch("requirements");
  const lookingForCollaborators = watch("lookingForCollaboratos");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  };

  const addTechnology = () => {
    if (!techInput.trim()) return;
    if (technologies.includes(techInput.trim())) return;
    setValue("technologies", [...technologies, techInput.trim()]);
    setTechInput("");
  };

  const removeTechnology = (tech: string) => {
    setValue(
      "technologies",
      technologies.filter((t) => t !== tech),
    );
  };

  const addRequirement = () => {
    if (!reqInput.trim()) return;
    if (requirements.includes(reqInput.trim())) return;
    setValue("requirements", [...requirements, reqInput.trim()]);
    setReqInput("");
  };

  const removeRequirement = (req: string) => {
    setValue(
      "requirements",
      requirements.filter((r) => r !== req),
    );
  };

  const onSubmit = async (data: IdeaFormData) => {
    if (!coverImage) {
      toast.error("A cover image is required.");
      return;
    }
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("status", data.status);
    formData.append(
      "lookingForCollaboratos",
      String(data.lookingForCollaboratos),
    );
    formData.append("coverImage", coverImage);

    data.technologies.forEach((tech, index) => {
      formData.append(`technologies[${index}][name]`, tech);
    });

    if (data.lookingForCollaboratos) {
      data.requirements.forEach((req, index) => {
        formData.append(`requirements[${index}]`, req);
      });
    }

    await uploadIdea(formData as any, () => {
      router.push("/home");
    });
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-3xl rounded-md border-none bg-transparent shadow-sm">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-4">
              <Label className="text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase">
                Cover_Image
              </Label>
              <div className="border-border bg-secondary/30 hover:bg-secondary/50 flex items-center gap-4 rounded-md border border-dashed p-6 transition-colors">
                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-sm">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <Input
                    id="coverImage"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file:bg-primary file:text-primary-foreground hover:file:bg-accent hover:file:text-accent-foreground cursor-pointer font-mono text-sm transition-colors file:mr-4 file:rounded-sm file:border-0 file:px-4 file:py-2 file:font-mono file:text-xs"
                  />
                  <p className="text-muted-foreground font-mono text-xs">
                    High resolution images work best. Max size: 5MB.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-border h-px w-full" />

            <div className="space-y-6">
              <Label className="text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase">
                Core_Details
              </Label>

              <div className="space-y-3">
                <Label htmlFor="title" className="font-mono text-sm">
                  Title
                </Label>
                <Input
                  id="title"
                  className="focus-visible:ring-accent rounded-sm font-mono"
                  placeholder="e.g., Nimbus Task Manager"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-destructive font-mono text-sm">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <Label htmlFor="description" className="font-mono text-sm">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Outline the problem you are solving..."
                  className="focus-visible:ring-accent min-h-40 resize-y rounded-sm font-mono"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-destructive font-mono text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-border h-px w-full" />

            <div className="space-y-6">
              <Label className="text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase">
                Technical_Stack
              </Label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTechnology())
                    }
                    placeholder="e.g., Next.js, PostgreSQL"
                    className="focus-visible:ring-accent rounded-sm font-mono"
                  />
                  <Button
                    type="button"
                    onClick={addTechnology}
                    variant="secondary"
                    className="hover:bg-accent hover:text-accent-foreground rounded-sm font-mono transition-colors"
                  >
                    Append
                  </Button>
                </div>
                <div className="border-border bg-secondary/30 flex min-h-8 flex-wrap gap-2 rounded-md border p-3">
                  {technologies.length === 0 && (
                    <span className="text-muted-foreground font-mono text-xs">
                      No stack defined
                    </span>
                  )}
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="border-border bg-card hover:border-destructive hover:text-destructive cursor-pointer rounded-sm border font-mono text-xs transition-colors"
                      onClick={() => removeTechnology(tech)}
                    >
                      {tech} <span className="ml-1 opacity-50">&times;</span>
                    </Badge>
                  ))}
                </div>
                {errors.technologies && (
                  <p className="text-destructive font-mono text-sm">
                    {errors.technologies.message}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-border h-px w-full" />

            <div className="space-y-6">
              <Label className="text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase">
                Team_Assembly
              </Label>
              <div className="border-border flex items-center justify-between rounded-md border p-4">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="lookingForCollaboratos"
                    className="font-mono text-sm"
                  >
                    Open to Collaborators
                  </Label>
                  <p className="text-muted-foreground font-mono text-xs">
                    Allow other developers to request to join this build.
                  </p>
                </div>
                <Switch
                  id="lookingForCollaboratos"
                  checked={lookingForCollaborators}
                  onCheckedChange={(checked: boolean) =>
                    setValue("lookingForCollaboratos", checked)
                  }
                  className="data-[state=checked]:bg-accent"
                />
              </div>

              {lookingForCollaborators && (
                <div className="animate-in fade-in slide-in-from-top-4 space-y-3 pt-2">
                  <Label className="font-mono text-sm">Required Roles</Label>
                  <div className="flex gap-2">
                    <Input
                      value={reqInput}
                      onChange={(e) => setReqInput(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        (e.preventDefault(), addRequirement())
                      }
                      placeholder="e.g., Backend Developer"
                      className="focus-visible:ring-accent rounded-sm font-mono"
                    />
                    <Button
                      type="button"
                      onClick={addRequirement}
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground rounded-sm font-mono transition-colors"
                    >
                      Add Role
                    </Button>
                  </div>
                  <div className="border-border bg-secondary/30 flex min-h-8 flex-wrap gap-2 rounded-md border p-3">
                    {requirements.length === 0 && (
                      <span className="text-muted-foreground font-mono text-xs">
                        No roles defined
                      </span>
                    )}
                    {requirements.map((req) => (
                      <Badge
                        key={req}
                        variant="secondary"
                        className="border-border bg-card hover:border-destructive hover:text-destructive cursor-pointer rounded-sm border font-mono text-xs transition-colors"
                        onClick={() => removeRequirement(req)}
                      >
                        {req} <span className="ml-1 opacity-50">&times;</span>
                      </Badge>
                    ))}
                  </div>
                  {errors.requirements && (
                    <p className="text-destructive font-mono text-sm">
                      {errors.requirements.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="bg-border h-px w-full" />

            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase">
                  Deployment_Status
                </Label>
                <Select
                  defaultValue="open"
                  onValueChange={(value) =>
                    setValue("status", value as IdeaFormData["status"])
                  }
                >
                  <SelectTrigger className="focus:ring-accent rounded-sm font-mono">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="rounded-sm font-mono">
                    <SelectItem value="open">Open for Collaboration</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground h-12 w-full rounded-sm font-mono text-sm tracking-wide uppercase transition-all"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? "Executing..." : "Publish Build"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
