import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tam Đảo 2023 | Microlens",
  description: "Kỷ niệm chuyến đi Tam Đảo 2023",
  openGraph: {
    title: "Tam Đảo 2023 | Microlens",
    description: "Kỷ niệm chuyến đi Tam Đảo 2023",
    url: "https://tamdao2023.netlify.app",
    siteName: "Tam Đảo 2023 | Microlens",
    images: [
      {
        url: "https://tamdao2023.netlify.app/og.jpg",
      },
    ],
    locale: "vi-VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Tam Đảo 2023 | Microlens",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
