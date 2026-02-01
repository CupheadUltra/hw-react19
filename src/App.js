import { useState, useCallback, useMemo } from "react";
import { useImageSearch } from "./useImageSearch";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  const { images, loading, error, search, loadMore } = useImageSearch();
  const [modalData, setModalData] = useState(null);

  const openModal = useCallback((src, alt) => {
    setModalData({ src, alt });
  }, []);

  const closeModal = useCallback(() => setModalData(null), []);

  const showLoadMore = useMemo(
    () => images.length > 0 && !loading,
    [images, loading]
  );

  return (
    <>
      <GlobalStyle />
      <Searchbar onSubmit={search} />

      {error && <p style={{ textAlign: "center" }}>{error}</p>}

      <ImageGallery images={images} onImageClick={openModal} />

      {loading && <Loader />}

      {showLoadMore && <Button onClick={loadMore} />}

      {modalData && (
        <Modal src={modalData.src} alt={modalData.alt} onClose={closeModal} />
      )}
    </>
  );
}
