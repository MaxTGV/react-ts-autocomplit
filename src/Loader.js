import styled from "styled-components";
import loader from "./img/loader.svg";

const StyledLoader = styled.div`
  padding: 10px;
  width: 100%;
  height: 200px;
  background: #f9f9f9;
  border-radius: 0px 0px 8px 8px;
  position: relative;

  & img {
    position: absolute;
    left: 130px;
    top: 50px;
    animation-name: rotation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

export const Loader = () => {
  return (
    <StyledLoader>
      <img src={loader} alt="alt" />
    </StyledLoader>
  );
};
