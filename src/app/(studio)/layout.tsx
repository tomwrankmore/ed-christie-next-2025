import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ed Christie - CMS",
  description: "Content Management System for Ed Christie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
