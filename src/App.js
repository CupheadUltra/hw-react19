import { useState, useEffect, useCallback, useMemo } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { fetchImages } from "./services/api";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f6fa;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setLoading(true);
        const newImages = await fetchImages(query, page);
        setImages((prev) => [...prev, ...newImages]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = useCallback((newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }, []);

  const loadMore = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  const openModal = useCallback((src, alt) => {
    setModalData({ src, alt });
  }, []);

  const closeModal = useCallback(() => setModalData(null), []);

  const showLoadMore = useMemo(() => images.length > 0 && !loading, [images, loading]);

  return (
    <div>
      <GlobalStyle/>
      <Searchbar onSubmit={handleSearch} />

      <ImageGallery images={images} onImageClick={openModal} />

      {loading && <Loader />}

      {showLoadMore && <Button onClick={loadMore} />}

      {modalData && (
        <Modal src={modalData.src} alt={modalData.alt} onClose={closeModal} />
      )}
    </div>
  );
}
