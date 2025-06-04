import { sanityFetch } from "@/src/sanity/lib/live";
import { SETTINGS_QUERY } from "@/src/sanity/lib/queries";

const About = async () => {
  const { data: settings } = await sanityFetch({ query: SETTINGS_QUERY });
  return (
    <div className="min-h-screen px-8 flex flex-col items-start justify-center max-w-[1280px] w-full mx-auto">
      <h1 className="text-4xl font-bold mb-2">About</h1>
      <p className="max-w-2xl text-base mb-4">{settings?.description}</p>
    </div>
  );
};

export default About;
