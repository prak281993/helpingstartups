import React from "react";
import './BackgroundImage.scss';

function BackgroundImage({ imageUrl }) {
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgb(101 73 73 / 70%), rgb(66 63 63 / 70%)), url(${imageUrl})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:"100vw 100vh"
      }}
      className="bg-image"
    ></div>
  );
}

export default BackgroundImage;
