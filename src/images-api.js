import axios from "axios";

// PIXABAY BELOW

// axios.defaults.baseURL = "https://pixabay.com/api/";
const key = "10224742-53a1a7880f946c3462445b43a";

export const fetchImagesPixabay = async (query, page, perPage) => {
  const response = await axios.get("/?", {
    params: { key, q: query, page, per_page: perPage },
  });
  return {
    hits: response.data.hits,
    totalPages: response.data.total,
  };
};

// UNSPLASH BELOW

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const clientId = "93OoqF-JBpYinb9MpOE6KneWhhdIrNwEijJ9VMnNhKk";

//api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

export const fetchImagesUnsplash = async (query, page, perPage) => {
  const { data } = await axios.get("/?", {
    params: { client_id: clientId, query: query, page, per_page: perPage },
  });
  return data;
};

export default { fetchImagesUnsplash, fetchImagesPixabay };
