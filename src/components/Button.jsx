import styled from "styled-components";

const LoadMoreBtn = styled.button`
  display: block;
  margin: 20px auto 40px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #303f9f;
  }
`;

export default function Button({ onClick }) {
  return <LoadMoreBtn onClick={onClick}>Load more</LoadMoreBtn>;
}
