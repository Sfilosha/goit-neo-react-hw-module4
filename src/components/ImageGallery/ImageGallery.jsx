import React from "react";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images = [] }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <div>
            <ImageCard image={image} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
