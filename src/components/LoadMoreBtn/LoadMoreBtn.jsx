import React from "react";
import css from "./LoadMoreBtn.module.css";
import { forwardRef } from "react";

function LoadMoreBtn({ onClick, ref }) {
  return (
    <button className={css.button} type="button" onClick={onClick} ref={ref}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
