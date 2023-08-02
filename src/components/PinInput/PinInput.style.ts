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
  font-size: 16px;
  -webkit-text-security: ${(props) => (props.$isVisible ? "none" : "disc")};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  background: ${(props) => (props.$hasValue ? props.$color : "white")};
  color: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  outline: transparent solid 2px;
  outline-offset: 2px;
  caret-color: #e2e8f0;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  :focus {
    outline: none;
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
