// context/ToggleContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

type ModalType = "login" | "register" | null;

type ToggleContextType = {
  modalType: ModalType;
  openModal: (type: Exclude<ModalType, null>) => void;
  closeModal: () => void;
};

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: Exclude<ModalType, null>) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <ToggleContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggle() {
  const ctx = useContext(ToggleContext);
  if (!ctx) throw new Error("useToggle must be used within ToggleProvider");
  return ctx;
}
