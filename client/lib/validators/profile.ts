import * as zod from "zod";

export const profileSchema = zod.object({
  github: zod.string().url().or(zod.literal("")).optional(),
  linkedIn: zod.string().url().or(zod.literal("")).optional(),
  x: zod.string().url().or(zod.literal("")).optional(),
});
