import React from "react";

function BackgroundVideo() {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src="/assets/bg-video.mp4" type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
}

export default BackgroundVideo;
