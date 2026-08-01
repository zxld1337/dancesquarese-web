import type { NextConfig } from "next";

const repoName = "dancesquarese-web";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    qualities: [75, 90, 100],
    unoptimized: true,
  },
  basePath,
  assetPrefix: isGithubActions ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
