import React from "react";
import { useEffect, useState, useRef } from "react";
import { fetchImagesUnsplash } from "./images-api.js";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import EmptyMessage from "./components/EmptyMessage/EmptyMessage.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [isLoadMore, setLoadMore] = useState(false);
  const [isLoadMoreClicked, setLoadMoreClicked] = useState(false);
  const [imageClicked, setImageClicked] = useState("");
  const [empty, setEmpty] = useState("");
  // const [totalPage, setTotalPages] = useState(0);

  const perPage = 20;

  const refImage = useRef();

  const handleSearch = (queryValue) => {
    setQuery(queryValue);
    setPage(1);
    setImages([]);
    setLoadMoreClicked(false);
    setLoadMore(false);
  };

  useEffect(() => {
    if (!query) return;

    const fetching = async () => {
      try {
        setError(false);
        setLoader(true);
        setEmpty(false);

        // Робимо запит та рендеримо галерею
        const fetchResult = await fetchImagesUnsplash(query, page, perPage);
        // console.log(fetchResult);
        setImages((prevImg) => [...prevImg, ...fetchResult.results]);

        if (fetchResult.results.length === 0) {
          setEmpty(true);
          return;
        }

        // Прибираємо Load More якщо результатів менше ніж perPage та якщо остання сторінка
        // setTotalPages(fetchResult.total_pages);
        // console.log(fetchResult.total_pages);
        fetchResult.results.length < perPage
          ? setLoadMore(false)
          : setLoadMore(true);
        page < fetchResult.total_pages ? setLoadMore(true) : setLoadMore(false);

        // Скролл по кліку на Load More із затримкою 250ms
        if (isLoadMoreClicked) {
          setTimeout(() => {
            const item = refImage.current.getBoundingClientRect();
            // console.log("ImageCard item is:", item);
            window.scrollBy({ top: item.height * 3, behavior: "smooth" });
          }, 250);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetching();
  }, [query, page]);

  const handleLoadMore = async () => {
    setPage(page + 1);
    setLoadMoreClicked(true);
  };

  // MODAL

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // HandleImageClick

  const handleImageClick = (e) => {
    setImageClicked(e.target.dataset.full);
    openModal();
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          firstImageRef={refImage}
          onImageClick={handleImageClick}
        />
      )}
      {
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          imageSrc={imageClicked}
        />
      }
      {isLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      {empty && <EmptyMessage />}
    </>
  );
}
export default App;
