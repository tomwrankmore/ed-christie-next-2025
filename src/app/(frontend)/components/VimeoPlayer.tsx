"use client";
import ReactPlayer from "react-player/vimeo";

const VimeoPlayer = ({ vimeoId }: { vimeoId: string }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
      }}
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
