import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images = [] }) {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => (
        <li key={image.id}>
          <div className={css.imageWrapper}>
            <ImageCard image={image} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
