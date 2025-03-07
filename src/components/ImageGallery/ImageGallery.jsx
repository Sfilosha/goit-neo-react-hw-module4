import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { forwardRef } from "react";

function ImageGallery({ images = [], onImageClick, firstImageRef }) {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} ref={firstImageRef} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
