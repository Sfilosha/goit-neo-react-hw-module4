import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const clientId = "93OoqF-JBpYinb9MpOE6KneWhhdIrNwEijJ9VMnNhKk";

//api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
export const fetchImagesUnsplash = async (query, page, perPage) => {
  const { data } = await axios.get("/?", {
    params: { client_id: clientId, query: query, page, per_page: perPage },
  });
  return data;
};

export default { fetchImagesUnsplash };
