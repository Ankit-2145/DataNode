import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pbs.twimg.com",
        protocol: "https",
      },
      {
        hostname: "cdn-icons-png.flaticon.com",
        protocol: "https",
      },
      {
        hostname: "cdn.worldvectorlogo.com",
        protocol: "https",
      },
      {
        hostname: "api.microlink.io",
        protocol: "https",
      },
      {
        hostname: "vercel.com",
        protocol: "https",
      },
    ],
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra(nextConfig);
