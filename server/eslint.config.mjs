import { defineConfig } from "eslint/config";

export default defineConfig({
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: [
    "dist/",
    "build/",
    "node_modules/",
    "out/",
  ],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off"
  },
});