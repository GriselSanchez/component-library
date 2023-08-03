import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;

export const StyledMoneyInput = styled.input<{ $error?: boolean }>`
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  caret-color: #6c7d93;
  color: #6c7d93;
  font-size: 1rem;
  height: 40px;
  outline-offset: 2px;
  outline: transparent solid 2px;
  padding: 0.15rem 1rem;
  width: 350px;

  &:hover {
    border: 1px solid #b4bbc4;
  }

  &:focus-visible {
    outline: 1px solid #9495ff;
    outline-offset: 0;
    border: 1px solid #9495ff;
  }
`;

export const ErrorText = styled.p`
  font-size: 0.8rem;
  color: #ea333d;
  margin: 0;
`;
