"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

const VimeoPlayer = ({ vimeoId }: { vimeoId: string }) => {
  return (
    <div className="relative aspect-video w-full max-h-[60vh]">
      <ReactPlayer
        url={`https://player.vimeo.com/video/${vimeoId}`}
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        style={{ position: "absolute", top: 0, left: 0, margin: "0 auto" }}
        controls
      />
    </div>
  );
};

export default VimeoPlayer;
