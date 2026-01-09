"use client";
import { navConfig } from "@/config/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Lock } from "lucide-react";
import Image from "next/image";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function AuthPage() {
  const router = useRouter();
  const { continueWithGoogle, loading } = useAuthStore();
  const handleLogin = async () => {
    await continueWithGoogle();
    router.refresh();
    router.push("/");
  };
  if (loading) {
    return (
      <div className="h-screen bg-background flex items-center justify-center">
        <Spinner className="text-foreground" />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-popover">
      <div className="flex items-center gap-2 absolute md:top-12 top-12 md:left-24">
        <Image
          src={navConfig.logo.src}
          alt={navConfig.logo.src}
          height={30}
          width={30}
          className="dark:invert"
        />
        <h1 className="pb-1 font-semibold text-2xl">{navConfig.product}</h1>
      </div>

      <div className="w-xs flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-8">
          <Badge>
            <Lock />
            Log In
          </Badge>
          <h1 className="text-3xl font-bold">Log into Alloy</h1>
        </div>
        <div className="w-full flex flex-col gap-4">
          <Button
            onClick={handleLogin}
            className="rounded-xs py-6 border border-border cursor-pointer"
          >
            <BsGoogle /> Continue In with Google
          </Button>
          <Button
            disabled
            className="rounded-xs py-6 border border-border cursor-pointer"
          >
            <BsGithub /> Continue In with Github
          </Button>
        </div>
      </div>
    </div>
  );
}
