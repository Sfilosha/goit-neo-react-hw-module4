import React from "react";

function ImageCard({ image }) {
  return (
    <div>
      <img src={image.src} alt={image.alt} />
    </div>
  );
}

export default ImageCard;
