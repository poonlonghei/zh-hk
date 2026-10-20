import type { NextConfig } from "next";
import { SITE_BASE_PATH } from "./src/site-config";

const nextConfig: NextConfig = {
  output: "export",
  basePath: SITE_BASE_PATH,
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
