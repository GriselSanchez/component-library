import styled from "styled-components";

// TODO: move to global styles
export const PRIMARY_COLOR = "#9495FF";

interface StyledPinInputProps {
  $hasValue: boolean;
  $isVisible: boolean;
  $color?: string;
}

export const StyledPinInput = styled.input<StyledPinInputProps>`
  height: 40px;
  width: 60px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  -webkit-text-security: ${(props) => (props.$isVisible ? "none" : "disc")};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0;
  background: ${(props) => (props.$hasValue ? props.$color : "white")};
  color: white;
  border-radius: 0.5rem;
  border: 1px solid #c5cbd3;
  outline: transparent solid 2px;
  outline-offset: 2px;
  caret-color: #6c7d93;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  &:hover {
    border: 1px solid #b4bbc4;
  }

  &:focus-visible {
    outline-offset: 0;
    border: 1px solid #9495ff;
  }
`;

export const StyledContainer = styled.div<{ $size: number }>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;
