import React from "react";

function BackgroundVideo() {
  const awsSrc = process.env.REACT_APP_AWS_URL;
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={`${awsSrc}/bg-video.mp4`} type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
}

export default BackgroundVideo;
