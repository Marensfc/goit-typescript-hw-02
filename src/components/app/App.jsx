import css from "./App.module.css";
import { fetchPhotosByQuery } from "../../api/unsplash-api";
import { useEffect, useRef, useState } from "react";
import { useModal } from "../../utils/hooks/UseModal";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "../search-bar/SearchBar";
import ImmageGallery from "../image-gallery/ImmageGallery";
import LoadMoreBtn from "../load-more-btn/LoadMoreBtn";
import ImageModal from "../image-modal/ImageModal";
import ErrorMessage from "../error-message/ErrorMessage";
import Loader from "../loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [selectedImg, setSelectedImg] = useState(undefined);
  const [showBtn, setShowBtn] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { modalIsOpen, openModal, closeModal } = useModal();

  const totalPagesRef = useRef(0);

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const searchValue = form.elements.search.value.trim();

    if (searchValue === "") {
      alert("Please enter the text in the field");
      return;
    }

    setQuery(searchValue);
    setPage(1);
    form.reset();
  };

  const addPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) return;

    async function load() {
      setLoader(true);
      try {
        setShowBtn(false);
        const data = await fetchPhotosByQuery(query, page);

        if (data.total_pages === 0) {
          setShowBtn(false);
          toast.error("Sorry, there are no images for your search query", {
            position: "top-right",
          });
          return;
        }

        if (page === 1) {
          setImages(data.results);
          totalPagesRef.current = data.total_pages;
          totalPagesRef.current -= 1;
          setShowBtn(totalPagesRef.current !== 0);
          return;
        }

        let imagesCollection = [...images, data.results].flat(1);
        setImages(imagesCollection);
        totalPagesRef.current -= 1;
        setShowBtn(totalPagesRef.current !== 0);
        setError(false);
      } catch (error) {
        setError(true);
        setShowBtn(false);
      } finally {
        setLoader(false);
      }
    }

    load();
  }, [query, page]);

  return (
    <>
      <div className={css.appContainer}>
        <Toaster />
        <SearchBar handleOnSubmit={handleOnSubmit} />
        {error && <ErrorMessage />}
        <ImmageGallery
          images={images}
          openModal={openModal}
          setSelectedImg={setSelectedImg}
        />
        {loader && <Loader />}
        {showBtn && <LoadMoreBtn addPage={addPage} />}
        {selectedImg && (
          <ImageModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            selectedImg={selectedImg}
          />
        )}
      </div>
    </>
  );
}

export default App;
