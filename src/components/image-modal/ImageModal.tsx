import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { FC } from "react";

Modal.setAppElement("#root");

type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  selectedImg: HTMLImageElement;
};

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  selectedImg,
}) => {
  if (modalIsOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.Modal}
        overlayClassName={css.Overlay}
        contentLabel="Example Modal"
      >
        <div className={css.thumb}>
          <img src={selectedImg.dataset.regular} alt={selectedImg.alt} />
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
