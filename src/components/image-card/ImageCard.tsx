import css from "./ImageCard.module.css";

import { FC, MouseEvent } from "react";

type ImageCardProps = {
  smallImg: string;
  altDescription: string;
  regularImg: string;
  id: string;
  openModal: () => void;
  setSelectedImg: (selectedImg: HTMLImageElement) => void;
};

const ImageCard: FC<ImageCardProps> = ({
  smallImg,
  altDescription,
  regularImg,
  id,
  setSelectedImg,
  openModal,
}) => {
  const handleOnClick = (evt: MouseEvent<HTMLImageElement>): void => {
    const selectedImg: HTMLImageElement = evt.target as HTMLImageElement;
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
