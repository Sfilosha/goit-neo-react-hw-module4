import React from "react";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((el) => (
        <li>
          <div>
            <ImageCard image={el} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
