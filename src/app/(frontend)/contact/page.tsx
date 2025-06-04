import { sanityFetch } from "@/src/sanity/lib/live";
import { CONTACT_QUERY } from "@/src/sanity/lib/queries";
import { PortableText } from "next-sanity";

const Contact = async () => {
  const { data } = await sanityFetch({
    query: CONTACT_QUERY,
  });
  return (
    <div className="min-h-screen px-8 flex flex-col items-start justify-center max-w-[1280px] w-full mx-auto">
      <h1 className="text-4xl font-bold mb-2">{data?.title}</h1>
      {data?.body && <PortableText value={data.body} />}
    </div>
  );
};

export default Contact;
