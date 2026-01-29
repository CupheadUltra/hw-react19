import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  max-width: 90%;
  max-height: 90%;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;
