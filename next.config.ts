import mdx from "@next/mdx";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"], // Enable MDX files as pages
};

export default mdx()(nextConfig);
