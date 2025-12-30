"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import AuthModal from './components/AuthModal';

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
      {/* The Modal lives here, globally accessible */}
      {isModalOpen && <AuthModal closeModal={closeModal} />} 
    </ModalContext.Provider>
  );
}

// Custom hook to use the modal easily
export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}