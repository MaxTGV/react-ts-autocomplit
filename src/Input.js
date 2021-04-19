import styled from "styled-components";
import search from './img/search.svg';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  background: #f9f9f9;
  border-radius: 6px 6px 0px 0px;
  padding: 12px 12px 12px 48px;
  border-bottom: 1px solid black;

  &::placeholder {
    font-family: "Noto Sans";
    font-size: 16px;
    line-height: 22px;
    color: rgba(204, 197, 196, 1);
  }
`;

const SearchImage = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Input = ({ value, handleChange }) => {
  return (
    <SearchContainer>
      <SearchImage src={search} alt="Search"/>
      <StyledInput
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </SearchContainer>
  );
};
