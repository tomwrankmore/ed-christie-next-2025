"use client";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

const YouTubePlayer = ({ youTubeId }: { youTubeId: string }) => {
  return (
    <div className="relative aspect-video w-full max-h-[60vh] max-w-[75vw] mx-auto">
      {/* If youTube exist */}
      <ReactPlayer
        url={`https://www.youtube.com/watch?${youTubeId}`}
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

export default YouTubePlayer;