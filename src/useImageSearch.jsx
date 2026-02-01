import { useState, useEffect, useCallback } from "react";
import { fetchImages } from "./services/api";

export function useImageSearch() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const newImages = await fetchImages(query, page);
        setImages(prev => [...prev, ...newImages]);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const search = useCallback((newQuery) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  }, []);

  const loadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  return {
    images,
    loading,
    error,
    search,
    loadMore,
  };
}
