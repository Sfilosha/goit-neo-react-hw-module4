import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { forwardRef } from "react";

const ImageGallery = forwardRef(({ images = [], onImageClick }, ref) => {
  return (
    <ul className={css.galleryList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} ref={ref} />
        </li>
      ))}
    </ul>
  );
});

export default ImageGallery;
