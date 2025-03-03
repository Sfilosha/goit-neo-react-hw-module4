import { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { fetchImages } from "./images-api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { useMemo } from "react";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getImageHeight = () => {
    const handleClick = () => {
      const item = refLoadMore.current.getBoundingClientRect();
      console.log(item);
      window.scrollBy({ top: item.height, behavior: "smooth" });
    };
    return handleClick;
  };

  const refLoadMore = useRef();

  // const previousGallery = useMemo(() => {
  //   return a + b;
  // }, [images]);

  const handleSearch = async (queryValue) => {
    try {
      setQuery(queryValue);
      setImages([]);
      setError(false);
      setLoader(true);
      const fetchResult = await fetchImages(queryValue);
      setImages(fetchResult);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
      getImageHeight();
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoader(true);
      const fetchResult = await fetchImages(query);
      setImages([...images, fetchResult]);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
      getImageHeight()();
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loader && <Loader />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery images={images} />}
      {isModalOpen && <ImageModal />}
      <LoadMoreBtn onLoadMore={getImageHeight()} ref={refLoadMore} />
    </>
  );
}
export default App;
