import css from "./ImmageGallery.module.css";

import ImageCard from "../image-card/ImageCard";

const ImmageGallery = ({ images, setSelectedImg, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => {
        const {
          id,
          urls: { regular, small },
          alt_description,
        } = image;

        return (
          <li key={id} className={css.galleryLi}>
            <ImageCard
              regularImg={regular}
              smallImg={small}
              altDescription={alt_description}
              id={id}
              setSelectedImg={setSelectedImg}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImmageGallery;
