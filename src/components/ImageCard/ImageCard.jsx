import React from "react";

function ImageCard({ image: { previewURL, tags } }) {
  return <img src={previewURL} alt={tags} />;
}

export default ImageCard;
