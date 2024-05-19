import css from "./App.module.css";
import { fetchPhotosByQuery } from "../../api/unsplash-api";
import { useEffect, useRef, useState, FormEvent } from "react";
import { useModal } from "../../utils/hooks/UseModal";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "../search-bar/SearchBar";
import ImmageGallery from "../image-gallery/ImmageGallery";
import LoadMoreBtn from "../load-more-btn/LoadMoreBtn";
import ImageModal from "../image-modal/ImageModal";
import ErrorMessage from "../error-message/ErrorMessage";
import Loader from "../loader/Loader";

import { ResponseData, Image } from "../../api/unsplash-api-types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [selectedImg, setSelectedImg] = useState(undefined);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { modalIsOpen, openModal, closeModal } = useModal();

  const totalPagesRef = useRef<number>(0);

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    const searchValue: string = (
      form.elements.namedItem("search") as HTMLInputElement
    ).value.trim();

    if (searchValue === "") {
      alert("Please enter the text in the field");
      return;
    }

    setQuery(searchValue);
    setPage(1);
    form.reset();
  };

  const addPage = (): void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) return;

    async function load(): Promise<ResponseData | undefined> {
      setLoader(true);
      try {
        setShowBtn(false);
        const data: ResponseData = await fetchPhotosByQuery<ResponseData>(
          query,
          page
        );

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

        let imagesCollection: Image[] = [...images, data.results].flat(1);
        setImages(imagesCollection);
        totalPagesRef.current -= 1;
        setShowBtn(totalPagesRef.current !== 0);
        setError(false);
      } catch (error: unknown) {
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
