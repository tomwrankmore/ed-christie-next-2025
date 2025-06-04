import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { sanityFetch } from "@/src/sanity/lib/live";
import { SETTINGS_QUERY } from "@/src/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const {data: settings} = await sanityFetch({ query: SETTINGS_QUERY });

  return {
    title: settings?.title || "Ed Christie Studio",
    description:
      settings?.description ||
      "Ed Christie is a Motion Design Director with over a decade of experience blending animation, illustration, and typography to create multi-disciplined, energetic work. After four years at MPC, he joined Adam&EveDDB and became Head of Motion. He now freelances across disciplines with a range of clients.",
  };
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
