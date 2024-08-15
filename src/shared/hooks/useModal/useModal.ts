"use client";
import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeModalState = (state: boolean) => {
    setIsOpen(state);
  };

  const openModal = () => {
    changeModalState(true);
  };

  const closeModal = () => {
    changeModalState(false);
  };

  const toggleModal = (state: boolean) => {
    changeModalState(!state);
  };

  return {
    modalState: isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};
