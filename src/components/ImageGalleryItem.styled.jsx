import styled from "styled-components";

export const Item = styled.li`
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);

  &:hover {
    transform: scale(1.03);
    transition: transform 250ms ease;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
