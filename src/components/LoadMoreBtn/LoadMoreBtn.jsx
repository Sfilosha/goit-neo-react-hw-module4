import React from "react";
import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onLoadMore }) {
  return (
    <button
      className={css.button}
      type="button"
      onClick={() => {
        () => onLoadMore;
      }}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn;
