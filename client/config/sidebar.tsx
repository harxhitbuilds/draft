import { HomeIcon, SendIcon, User } from "lucide-react";
import { Session } from "next-auth";

export const getSidebarConfig = (session: Session | null) => {
  const username = session?.user?.username;

  return {
    sections: [
      {
        label: "General",
        links: [
          {
            label: "Home",
            icon: <HomeIcon size={18} />,
            link: "/home",
          },
        ],
      },
      {
        label: "My Dashboard",
        links: [
          {
            label: "Profile",
            icon: <User size={18} />,
            link: `/home/profile/${username}`,
          },
        ],
      },
      {
        label: "Contact Us",
        links: [
          {
            label: "Submit",
            icon: <SendIcon size={18} />,
            link: "/#",
          },
        ],
      },
    ],
  };
};

export const iconColors = [
  "text-red-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-purple-400",
  "text-pink-400",
  "text-orange-400",
];
