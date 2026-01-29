import { Item, Img } from "./ImageGalleryItem.styled";
import { memo, useCallback } from "react";

function ImageGalleryItem({ image, onClick }) {
  const handleClick = useCallback(() => {
    onClick(image.largeImageURL, image.tags);
  }, [image, onClick]);

  return (
    <Item onClick={handleClick}>
      <Img src={image.webformatURL} alt={image.tags} />
    </Item>
  );
}

export default memo(ImageGalleryItem);
