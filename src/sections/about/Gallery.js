import styled from "styled-components/macro";
import mediaQueryFor from "../../theme/mediaQueries";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPictures,
  setNextPage,
  setActiveCard,
  resetPictures,
  setActiveCategory
} from "../../store/slices/gallerySlice";
import { primaryGreen, primaryWhite } from "../../theme/colors";
import LoadMoreButton from "../../components/LoadMoreButton";

export default function Gallery({ pictures }) {
  const { activeCard, loading, activeCategory } = useSelector(
    ({ gallery }) => gallery || {}
  );
  const dispatch = useDispatch();

  const handleClick = (cardId) => {
    if (activeCard === cardId) {
      dispatch(setActiveCard(""));
      return;
    }
    dispatch(setActiveCard(cardId));
  };

  const handleLoadMore = () => {
    dispatch(setNextPage());
    dispatch(fetchPictures());
  };

  const handleCategorySelection = (category) => (event) => {
    event.stopPropagation();

    if (activeCategory === "") {
      dispatch(resetPictures());
      dispatch(setActiveCategory(category));
      dispatch(fetchPictures());
    }
  };

  return (
    <Root>
      <ListContainer>
        <List>
          {pictures.map((pic) => (
            <CardContainer
              key={pic.id}
              isSelected={activeCard === pic.id}
              onClick={() => handleClick(pic.id)}
            >
              <ImgContainer>
                <PreviewImg src={pic.previewURL} alt={pic.tags} />
                <CategoryBtn onClick={handleCategorySelection(pic.category)}>
                  {activeCategory ? activeCategory : pic.category}
                </CategoryBtn>
                <Description>Views: {pic.views}</Description>
              </ImgContainer>
            </CardContainer>
          ))}
        </List>
        <LoadMoreContainer>
          <LoadMoreButton loading={loading} clickClb={handleLoadMore} />
        </LoadMoreContainer>
      </ListContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  max-height: calc(100vh - 430px);
  overflow-y: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  flex: 1 1 30%;
  max-width: 1300px;
  ${mediaQueryFor.mobile} {
    max-width: 330px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 280px;
  height: 310px;
  border-radius: 13px;
  ${({ isSelected }) => isSelected && `border: 5px solid ${primaryGreen}`};
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 300px;
`;

const PreviewImg = styled.img`
  width: 270px;
  height: 300px;
  border-radius: 8px;
`;

const LoadMoreContainer = styled.div`
  padding: 30px 0 90px;
`;
const CategoryBtn = styled.button`
  background-color: ${primaryWhite};
  padding: 10px;
  border-radius: 15px;
  border: none;
  text-transform: capitalize;

  position: absolute;
  bottom: 80px;
  left: 20px;
`;
const Description = styled.span`
  position: absolute;
  bottom: 40px;
  left: 20px;
  color: ${primaryWhite};
  font-size: 26px;
  font-weight: 600;
`;
