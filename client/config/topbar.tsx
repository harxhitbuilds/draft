import { BsMailbox, BsTwitterX, BsGithub } from "react-icons/bs";

export const topbarConfig = {
  product: "Alloy",
  logo: {
    src: "/assets/logo.svg",
    alt: "Product Name",
  },
  link: [
    {
      icon: <BsTwitterX />,
      href: "#",
    },
    {
      icon: <BsMailbox />,
      href: "#",
    },
    {
      icon: <BsGithub />,
      href: "#",
    },
  ],
};
