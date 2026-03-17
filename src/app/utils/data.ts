import {
  Linkedin,
  Twitter,
  Instagram,
  Code,
  PenTool,
  Video,
  Package,
  BarChart,
  Megaphone,
  DollarSign,
  Headphones,
} from "lucide-react";

export const NavLinks = [
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#howItWorks",
    text: "How it works",
  },
  {
    href: "#roles",
    text: "Roles",
  },
  {
    href: "#faq",
    text: "FAQ",
  },
];

export const socialLinks = [
  {
    link: "https://www.linkedin.com/company/networkhercomm//",
    icon: Linkedin,
  },
  {
    link: "https://x.com/networkhercomm?s=21",
    icon: Twitter,
  },
  {
    link: "https://www.instagram.com/networkhercomm?igsh=ZXdkYTg1eXNzaGs5&utm_source=qr",
    icon: Instagram,
  },
];

export const roles = [
  {
    title: "Frontend Developer",
    description:
      "Build the user-facing part of our products using clean, responsive, and functional interfaces.",
    icon: Code,
  },
  {
    title: "Backend Developer",
    description:
      "Work on the server-side logic, APIs, databases, and everything that keeps the system running smoothly.",
    icon: DollarSign,
  },
  {
    title: "Data Analyst",
    description:
      "Collect and interpret data from the project, uncover insights, and help the team make informed decisions.",
    icon: BarChart,
  },
  {
    title: "Product Designer",
    description:
      "Create user flows, wireframes, layouts, and seamless experiences that guide how users interact with the product.",
    icon: PenTool,
  },
  {
    title: "Product Manager",
    description:
      "Plan, organize, and coordinate the project. Define goals, gather requirements, and ensure the team moves in the right direction.",
    icon: Package,
  },
  // {
  //   title: "Content & Communications",
  //   description:
  //     "Craft clear, engaging written content for pages, features, updates, and internal communication throughout the project.",
  //   icon: Video,
  // },

  {
    title: "Social Media Manager",
    description:
      "Manage digital presence, share project updates, and help the community stay informed and active.",
    icon: Megaphone,
  },
  {
    title: "Virtual Assistant",
    description:
      "Support project organization with scheduling, documentation, message coordination, and day-to-day operations.",
    icon: Headphones,
  },
];
