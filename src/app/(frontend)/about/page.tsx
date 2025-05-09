"use client";
import { useSplitText } from "@/lib/hooks/useTextSplit";
import { useRef } from "react";

const About = () => {
  const container = useRef<HTMLDivElement>(null);
  useSplitText(".splitLines");
  return (
    <div
      ref={container}
      className="min-h-screen px-8 flex flex-col items-start justify-center"
    >
      <h1 className="text-4xl font-bold mb-2">About</h1>
      <p className="splitLines max-w-2xl text-base mb-4">
        Ed Christie is a Motion Design Director with 14 years experience
        blending animation, illustration, and typography to create
        multi-disciplined, energetic work. After four years at MPC, he joined
        Adam&EveDDB and became Head of Motion. He now freelances across
        disciplines with a range of clients.
      </p>
    </div>
  );
};

export default About;
