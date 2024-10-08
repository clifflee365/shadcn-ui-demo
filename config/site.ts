export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "shadcn/ui demo",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "New Components",
      href: "/new",
    },
    {
      title: "Blocks",
      href: "/blocks"
    },
    {
      title: "Charts",
      href: "/charts"
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
