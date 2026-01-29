import { Gallery } from "./ImageGallery.styled";
import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <Gallery>
      {images.map((img) => (
        <ImageGalleryItem key={img.id} image={img} onClick={onImageClick} />
      ))}
    </Gallery>
  );
}
