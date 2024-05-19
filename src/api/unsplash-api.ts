import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

import { Params } from "./unsplash-api-types";

export const fetchPhotosByQuery = async <T>(
  query: string,
  page: number
): Promise<T> => {
  const params: Params = {
    client_id: "4vZI0dFP_Or908TI80rNFUxZAKdy6FT5k357039woys",
    query: query,
    page: page,
    per_page: 12,
    orientation: "landscape",
  };

  const response: AxiosResponse<T> = await axios.get("/search/photos", {
    params,
  });
  const result: T = response.data;
  return result;
};
