import React from "react";
import { forwardRef } from "react";
import css from "./ImageCard.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ImageCard = forwardRef(
  ({ image: { urls, alt_description, likes }, onClick }, ref) => {
    return (
      <>
        <a className={css.imageWrapper} ref={ref}>
          <img
            src={urls.small}
            alt={alt_description}
            onClick={onClick}
            name="image"
            data-full={urls.regular}
          />
        </a>
        <p className={css.likes}>
          <FavoriteIcon />
          {likes}
        </p>
      </>
    );
  }
);

export default ImageCard;
