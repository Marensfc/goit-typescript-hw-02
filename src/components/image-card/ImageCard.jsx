import css from "./ImageCard.module.css";

const ImageCard = ({
  smallImg,
  altDescription,
  regularImg,
  id,
  setSelectedImg,
  openModal,
}) => {
  const handleOnClick = evt => {
    const selectedImg = evt.target;
    setSelectedImg(selectedImg);
    openModal();
  };

  return (
    <div className={css.thumb}>
      <img
        id={id}
        src={smallImg}
        alt={altDescription}
        data-regular={regularImg}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default ImageCard;
