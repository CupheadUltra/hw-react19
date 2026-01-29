import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
  list-style: none;
  padding: 20px;
  margin: 0;
`;
