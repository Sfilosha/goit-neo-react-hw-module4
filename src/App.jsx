import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { fetchImages } from "./images-api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchImagesByQuery() {
      try {
        setLoader(true);
        // 2. Використовуємо HTTP-функцію
        const data = await fetchImages("cat");
        setImages(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchImagesByQuery();
  }, []);

  const handleSearch = async (query) => {
    try {
      setImages([]);
      setError(false);
      setLoader(true);
      const data = await fetchImages(query);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
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
    </>
  );
}
export default App;
