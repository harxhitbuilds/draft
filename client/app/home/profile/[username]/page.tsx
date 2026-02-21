"use client";

import { notFound, useParams } from "next/navigation";

import { useEffect } from "react";

import ProfileSkeleton from "@/components/global/skeletons/profile-page";
import ProfileHeader from "@/components/home/profile/profile-header";
import ProfileIdeas from "@/components/home/profile/profile-ideas";
import ProfileSidebar from "@/components/home/profile/profile-sidebar";
import { useUserStore } from "@/store/user.store";

export default function ProfilePage() {
  const { searchedUser, searchedUserIdeas, fetchSearchedUser, fetching } =
    useUserStore();

  const params = useParams();
  const username = params.username as string;

  useEffect(() => {
    if (!username) return;
    fetchSearchedUser(username).catch(() => notFound());
  }, [username, fetchSearchedUser]);

  if (fetching || !searchedUser) return <ProfileSkeleton />;

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4 sm:p-6 lg:p-8">
      <ProfileHeader
        name={searchedUser.name}
        profile={searchedUser.profile}
        createdAt={searchedUser.createdAt}
      />

      <section className="bg-background w-full rounded-md">
        <div className="max-w-full">
          <ProfileSidebar
            skills={searchedUser.skills}
            socialLinks={searchedUser.socialLinks}
          />
        </div>
      </section>
      <section>
        <ProfileIdeas name={searchedUser.name} ideas={searchedUserIdeas} />
      </section>
    </div>
  );
}
