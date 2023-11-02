import styled from "styled-components";
import SearchLoop from "../assets/search.svg";
import { useThemeStore } from "./themeStore";
import { useState } from "react";

function SearchFilter() {
  const { darkMode } = useThemeStore();
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const filterOptions = ["America", "Europe", "Asia", "Africa", "Oceania"];

  const handleFilterClick = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  return (
    <SearchFilterContainer darkMode={darkMode}>
      <SearchInputContainer>
        <SearchInput type="text" placeholder="Search..." />
        <LoopImage src={SearchLoop} alt="Loop" />
      </SearchInputContainer>
      <FilterButton onClick={handleFilterClick}>
        Filtered by Region
        {showFilterOptions && (
          <FilterOptions>
            {filterOptions.map((option, index) => (
              <FilterOption key={index}>{option}</FilterOption>
            ))}
          </FilterOptions>
        )}
      </FilterButton>
    </SearchFilterContainer>
  );
}

export default SearchFilter;

const SearchFilterContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 10px;
  background: ${(props) => (props.darkMode ? "#202C36" : "#FAFAFA")};
  color: ${(props) => (props.darkMode ? "#2B3844" : "#111517")};
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding: 23px 80px 24px 81px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 23px 40px 24px 41px;
  }
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 480px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  position: relative;
  flex-wrap: wrap;
  height: 100%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 1150px) {
    margin-bottom: 20px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 56px;
  border: none;
  background: transparent;
  padding: 10px 40px 10px 40px;
  font-size: 18px;
`;

const LoopImage = styled.img`
  width: 22px;
  height: 24px;
  position: absolute;
  margin-left: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const FilterButton = styled.button`
  width: 100%;
  max-width: 480px;
  height: 56px;
  border: none;
  border-radius: 5px;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  font-family: "Nunito Sans", sans-serif;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px;
  }
`;

const FilterOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const FilterOption = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
