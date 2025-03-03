import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export const fetchImages = async (query) => {
  const response = await axios.get(
    `/?key=10224742-53a1a7880f946c3462445b43a&q=${query}`
  );
  return response.data.hits;
};

export default fetchImages;
