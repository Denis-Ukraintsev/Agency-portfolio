import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPictures,
  addRemovedPicture,
  deletePicture
} from "../../store/slices/gallerySlice";
import styled from "styled-components/macro";
import Gallery from "./Gallery";
import Categories from "./CategoriesContainer";

export default function GalleryContainer() {
  const dispatch = useDispatch();
  const { pictures, activeCard } = useSelector(({ gallery }) => gallery || {});

  const testRef = useRef(activeCard);

  useEffect(() => {
    if (pictures.length === 0) {
      dispatch(fetchPictures());
    }
  }, []);

  useEffect(() => {
    testRef.current = activeCard;
  }, [activeCard]);

  const listener = (event) => {
    if (event.keyCode === 46 && testRef.current) {
      dispatch(addRemovedPicture(testRef.current));
      dispatch(deletePicture(testRef.current));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  return (
    <Root>
      <Categories />
      <Gallery pictures={pictures} />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
