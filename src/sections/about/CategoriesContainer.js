import { useDispatch } from "react-redux";
import {
  fetchPictures,
  resetPictures,
  setActiveCategory
} from "../../store/slices/gallerySlice";
import styled from "styled-components/macro";
import Categories from "./Categories";
import CategoriesMobile from "./CategoriesMobile";

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const handleCategorySelection = (category) => {
    dispatch(resetPictures());
    dispatch(setActiveCategory(category));
    dispatch(fetchPictures());
  };

  const categories = [
    { title: "show all", category: "" },
    { title: "animals", category: "animals" },
    { title: "buildings", category: "buildings" },
    { title: "computer", category: "computer" },
    { title: "food", category: "food" }
  ];

  return (
    <Root>
      <Categories categories={categories} actionClb={handleCategorySelection} />
      <CategoriesMobile
        categories={categories}
        actionClb={handleCategorySelection}
      />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
