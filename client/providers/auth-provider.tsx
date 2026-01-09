"use client";

import { useEffect, useState, ReactNode } from "react";
import { useAuthStore } from "@/store/auth.store";
import { Spinner } from "@/components/ui/spinner";

export default function AuthProvider({
  children,
  showSpinnerOnLoading = false, // optional
}: {
  children: ReactNode;
  showSpinnerOnLoading?: boolean;
}) {
  const { initAuth, user, authenticating } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  if (authenticating && !user) {
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
}
