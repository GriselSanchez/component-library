import styled from "styled-components";

// TODO: move to global styles
export const PRIMARY_COLOR = "#9495FF";

export const StyledInput = styled.input`
  border-radius: 0.5rem;
  border: 1px solid #c5cbd3;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  caret-color: #6c7d93;
  color: #6c7d93;
  font-size: 1rem;
  height: 40px;
  outline-offset: 2px;
  outline: transparent solid 2px;
  padding: 0.15rem 1rem;
  width: 350px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover {
    border: 1px solid #b4bbc4;
  }

  &:focus-visible {
    outline-offset: 0;
    border: 1px solid #9495ff;
  }
`;
