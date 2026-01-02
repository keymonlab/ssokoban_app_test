type NavLink = {
  name: string;
  title: string;
  href: string;
};

export const navLinks: Record<string, NavLink> = {
  features: {
    name: "Features",
    title: "Features",
    href: "#features",
  },
  pricing: {
    name: "Pricing",
    title: "Pricing",
    href: "#pricing",
  },
  blog: {
    name: "Blog",
    title: "Blog",
    href: "/blog",
  },
};
