import * as axios from "axios";

// API Docs
// https://pixabay.com/api/docs/
const instance = axios.create({
  baseURL: `https://pixabay.com/api/`
});

export const galleryApi = {
  getPictures({ page, category, pageSize = 9 }) {
    const categoryStr = category ? `&category=${category}` : "";

    return instance
      .get(
        `?key=${process.env.REACT_APP_API_KEY}&page=${page}&per_page=${pageSize}${categoryStr}`
      )
      .then((response) => response);
  }
};
