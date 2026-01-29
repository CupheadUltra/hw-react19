import { useEffect, useCallback } from "react";
import { Overlay, ModalBox, ModalImg } from "./Modal.styled";

export default function Modal({ src, alt, onClose }) {
  const handleEsc = useCallback(
    (e) => e.code === "Escape" && onClose(),
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalImg src={src} alt={alt} />
      </ModalBox>
    </Overlay>
  );
}
