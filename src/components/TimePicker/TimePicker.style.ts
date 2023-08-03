import { styled } from "styled-components";

export const StyledTimePicker = styled.input<{ minute: number; hour: number }>`
  background-image: ${(
    props
  ) => `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%239495ff' stroke-width='2' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%239495ff' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%239495ff' stroke='%239495ff' stroke-width='2' /></svg>"),
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%239495ff' style='transform:rotate(${props.minute}deg); transform-origin: 50% 50%;' /></svg>"),
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' fill='%239495ff'  style='transform:rotate(${props.hour}deg); transform-origin: 50% 50%;' /></svg>")`};
  background-repeat: no-repeat;
  background-size: contain;
  transition: backgroundImage 0.25s;
  height: 30px;
  padding-left: 40px;
  color: #6c7d93;
  font-size: 1rem;
  height: 30px;
  outline-offset: 2px;
  outline: transparent solid 2px;
  width: 55px;
  border: none;

  &[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  border: 1px solid #c5cbd3;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    border: 1px solid #b4bbc4;
  }
`;
