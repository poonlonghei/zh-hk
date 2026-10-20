import type { Metadata } from "next";
import "@/styles/site.css";
import { SITE_BASE_PATH } from "@/site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chavezpoon.com"),
  title: { default: "潘朗希 | Chavez Poon", template: "%s | 潘朗希" },
  description: "潘朗希的香港繁體中文個人網站。",
  icons: { icon: `${SITE_BASE_PATH}/assets/favicon/favicon.svg` },
  openGraph: { siteName: "潘朗希 | Chavez Poon", type: "website", url: "https://www.chavezpoon.com/zh-hk/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant-HK"><body>{children}</body></html>;
}
