"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const VimeoPlayer = ({ vimeoId }: { vimeoId: string }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
      }}
      className="w-full max-w-[800px] h-0"
    >
      <ReactPlayer
        url={`https://vimeo.com/${vimeoId}`}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
        controls
      />
    </div>
  );
};

export default VimeoPlayer;
