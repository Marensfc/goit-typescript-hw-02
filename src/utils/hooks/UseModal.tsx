import { useState } from "react";

export const useModal = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return { modalIsOpen, openModal, closeModal };
};
