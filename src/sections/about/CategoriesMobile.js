import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import LinkButton from "../../components/LinkButton";
import mediaQueryFor from "../../theme/mediaQueries";
import { primaryOrange, primaryWhite, primaryBrown } from "../../theme/colors";
import dropdownArrow from "../../assets/icons/dropdownArrow.png";

export default function CategoriesMobile({
  categories = [],
  actionClb = () => {}
}) {
  const { activeCategory } = useSelector(({ gallery }) => gallery || {});

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleDropDown = () => {
    setIsShowDropdown((prev) => !prev);
  };

  return (
    <Root>
      <DropDown onClick={handleDropDown}>
        {activeCategory ? activeCategory : "show all"}
        <DropDownIcon src={dropdownArrow} isShowDropdown={isShowDropdown} />
      </DropDown>
      <DropDownList isShowDropdown={isShowDropdown}>
        {categories
          .filter((cat) => cat.category !== activeCategory)
          .map((item) => {
            return (
              <DropDownItem
                key={item.title}
                onClick={() => {
                  actionClb(item.category);
                  handleDropDown();
                }}
              >
                <LinkButton
                  isActive={activeCategory === item.category}
                  title={item.title}
                />
              </DropDownItem>
            );
          })}
      </DropDownList>
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  display: none;

  ${mediaQueryFor.mobile} {
    display: flex;
  }
`;
const DropDown = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  border: 1px solid ${primaryOrange};
  background-color: ${primaryWhite};
  border-radius: 5px;
  width: 270px;
  height: 40px;
  text-transform: capitalize;
  color: ${primaryBrown};
`;
const DropDownList = styled.div`
  flex-direction: column;
  display: ${({ isShowDropdown }) => (isShowDropdown ? "flex" : "none")};
  position: absolute;
  top: 95px;
  border: 1px solid ${primaryOrange};
  border-top: none;
  background-color: ${primaryWhite};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 270px;
  z-index: 1;
`;
const DropDownItem = styled.div`
  height: 40px;
  margin: 0 10px;
  border-top: 1px solid ${primaryOrange};
  :first-child {
    margin-top: 5px;
  }
  display: flex;
  align-items: center;
`;
const DropDownIcon = styled.img`
  width: 10px;
  height: 10px;
  transition: transform 0.5s;
  ${({ isShowDropdown }) =>
    isShowDropdown &&
    "transform: rotate(180deg); -webkit-transform: rotate(180deg);"};
`;
