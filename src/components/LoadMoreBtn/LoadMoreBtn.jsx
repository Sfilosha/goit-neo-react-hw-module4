import React from "react";

function LoadMoreBtn({ onLoadMore }) {
  return (
    <button
      type="button"
      onClick={() => {
        onLoadMore;
      }}
    >
      LoadMoreBtn
    </button>
  );
}

export default LoadMoreBtn;
