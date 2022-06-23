import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { galleryApi } from "../../api/api";

export const fetchPictures = createAsyncThunk(
  "gallery/fetchPictures",
  async (_, { dispatch, getState }) => {
    const { nextPage, activeCategory } = getState()?.gallery;
    dispatch(setLoading(true));

    const response = await galleryApi.getPictures({
      page: nextPage,
      category: activeCategory
    });
    dispatch(setLoading(false));

    return response.data;
  }
);

const initialState = {
  nextPage: 1,
  loading: false,
  pictures: [],
  activeCategory: "",
  activeCard: "",
  removedPictures: []
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setNextPage: (state) => {
      state.nextPage = state.nextPage + 1;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setActiveCard: (state, { payload }) => {
      state.activeCard = payload;
    },
    resetPictures: (state) => {
      state.pictures = [];
      state.nextPage = 1;
    },
    deletePicture: (state, { payload }) => {
      state.pictures = state.pictures.filter((pic) => pic.id !== payload);
    },
    setActiveCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
    addRemovedPicture: (state, { payload }) => {
      state.removedPictures.push(payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPictures.fulfilled, (state, { payload }) => {
      // this is a mock data because free API doesn't provide a category
      const categories = ["animals", "buildings", "computer", "food"];

      const filteredArray = payload.hits
        .filter((pic) => !state.removedPictures.includes(pic.id))
        .map((pic) => ({
          ...pic,
          category: categories[Math.floor(Math.random() * 4)]
        }));
      state.pictures.push(...filteredArray);
    });
  }
});

export const {
  setNextPage,
  setLoading,
  resetPictures,
  setActiveCategory,
  setActiveCard,
  addRemovedPicture,
  deletePicture
} = gallerySlice.actions;

export default gallerySlice.reducer;
