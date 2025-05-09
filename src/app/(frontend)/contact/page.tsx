"use client";
import { useSplitText } from "@/lib/hooks/useTextSplit";
import { useRef } from "react";

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);
  useSplitText(".splitLines");

  return (
    <div
      ref={container}
      className="min-h-screen px-8 flex flex-col items-start justify-center"
    >
      <h1 className="text-4xl font-bold mb-2">Contact</h1>
      <p className="splitLines max-w-2xl text-base mb-4">
        Please get in touch if you would like to create or collaborate on any
        projects.
      </p>
      <p className="splitLines">info@edchristie.studio</p>
    </div>
  );
};

export default Contact;
