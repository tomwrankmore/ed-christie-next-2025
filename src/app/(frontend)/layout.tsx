// This file is used to define the layout for the frontend application.
// It is a simple layout that wraps the children components in a fragment.
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Ed Christie - Motion Graphics & Animation",
  description: "Motion Graphics & Animation designer. Ed Christie.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
