"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import ProfileSkeleton from "@/components/global/skeletons/profile-page";
import ProfileHeader from "@/components/home/you/profile-header";
import ProfileIdeas from "@/components/home/you/profile-ideas";
import ProfileSkillsSocials from "@/components/home/you/profile-links";
import { Spinner } from "@/components/ui/spinner";
import { profileSchema } from "@/lib/validators/profile";
import { useUserStore } from "@/store/user.store";

export default function Profile() {
  const { userIdeas, fetchUser, fetching, updateUserProfile } = useUserStore();
  const { data: session, update } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formMethods = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      github: session?.user?.socialLinks?.github ?? "",
      linkedIn: session?.user?.socialLinks?.linkedIn ?? "",
      x: session?.user?.socialLinks?.x ?? "",
    },
  });

  useEffect(() => {
    if (session?.user) fetchUser();
  }, [session, fetchUser]);

  const onProfileUpdate = async (data: any) => {
    try {
      const updatedUser = await updateUserProfile(data);
      if (update)
        update({
          ...session,
          user: { ...session?.user, socialLinks: updatedUser.socialLinks },
        });
      toast.success("System updated.");
      setIsDialogOpen(false);
    } catch {
      toast.error("Update failed.");
    }
  };

  if (fetching || !session?.user) return <ProfileSkeleton />;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="animate-in fade-in slide-in-from-bottom-2 mx-auto max-w-5xl space-y-2 p-6 duration-500 md:p-12">
        <ProfileHeader
          name={session.user.name}
          profile={session.user.profile}
          createdAt={session.user.createdAt}
        />
        <ProfileSkillsSocials
          socialLinks={session.user.socialLinks}
          actionProps={{
            ...formMethods,
            isDialogOpen,
            setIsDialogOpen,
            onProfileUpdate,
            isSubmitting: formMethods.formState.isSubmitting,
          }}
        />
        <div className="pt-10">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-xs font-bold tracking-[0.3em] text-white uppercase">
              Your Ideas
            </h2>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          <ProfileIdeas ideas={userIdeas} />
        </div>
      </div>
    </div>
  );
}
