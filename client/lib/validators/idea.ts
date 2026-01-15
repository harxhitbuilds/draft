import { z } from "zod";

export const ideaSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long."),
  description: z
    .string()
    .min(20, "Please provide a more detailed description."),
  technologies: z
    .array(z.string())
    .min(1, "Please add at least one technology."),
  status: z.enum(["draft", "open", "in-progress", "completed", "archived"]),
  lookingForCollaboratos: z.boolean().default(false),
  requirements: z.array(z.string()),
});

export type IdeaFormData = z.infer<typeof ideaSchema>;
