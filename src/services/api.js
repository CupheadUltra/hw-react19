import axios from "axios";

const API_KEY = "53703295-e75262fb494aab51a48093056";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: "photo",
      orientation: "horizontal",
      per_page: 12,
    },
  });

  return response.data.hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));
};
