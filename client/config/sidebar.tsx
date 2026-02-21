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
            link: "/home/you",
          },
        ],
      },
      {
        label: "Contact Us",
        links: [
          {
            label: "Submit",
            icon: <SendIcon size={18} />,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSd-Sx-LnJDjl7Es1W2AvlBHW24P90BswMMqfUvE9RPmC2hPHg/viewform?usp=publish-editor",
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
