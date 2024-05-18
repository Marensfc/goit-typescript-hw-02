import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotosByQuery = async (query, page) => {
  const params = {
    client_id: "4vZI0dFP_Or908TI80rNFUxZAKdy6FT5k357039woys",
    query: query,
    page: page,
    per_page: 12,
    orientation: "landscape",
  };

  const response = await axios.get("/search/photos", { params });
  return response.data;
};
