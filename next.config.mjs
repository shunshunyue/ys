/** @type {import('next').NextConfig} */
const repo = "ys";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix,
};

export default nextConfig;
