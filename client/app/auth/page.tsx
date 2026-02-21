"use client";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

import { useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

import Logo from "@/components/global/assets/logo";
import SectionHeading from "@/components/global/components/section-heading";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<"google" | "github" | null>(null);
  const handleSignIn = async (provider: "google" | "github") => {
    setIsLoading(provider);
    try {
      await signIn(provider, { callbackUrl: "/home" });
    } catch (error) {
      toast.error("An unexpected error occurred during sign-in.");
      setIsLoading(null);
    }
  };
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <Logo className="absolute top-12" />

      <div className="flex w-xs flex-col items-center">
        <SectionHeading
          badge="Secure sign in"
          heading="Sign in to Alloy"
          description="Continue with Google  to get started."
        />
        <div className="flex w-full flex-col gap-4">
          <Button
            onClick={() => handleSignIn("google")}
            disabled={!!isLoading}
            className="border-border cursor-pointer rounded-xs border py-6"
          >
            {isLoading === "google" ? (
              <Spinner />
            ) : (
              <BsGoogle className="mr-2" />
            )}{" "}
            Continue In with Google
          </Button>
          <Button
            disabled
            className="border-border cursor-pointer rounded-xs border py-6"
          >
            <BsGithub /> Continue In with Github
          </Button>
        </div>
      </div>
    </div>
  );
}
