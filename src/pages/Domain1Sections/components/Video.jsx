import React, { useState } from "react";
import ThumbnailButton from "../../../components/ui/thumbnail-button-video-player";

export default function Video() {
  return (
    <div className="flex justify-center py-8 dark:bg-zinc-950 transition-colors duration-500">
      <div className="flex flex-col items-center gap-4 max-w-md w-full">
        
        <ThumbnailButton
          youtubeId="nRZnAbe1xRQ"
          title="I Went to My First Hackathon at MIT | Blueprint 2026"
        />

      </div>
    </div>
  );
}
