// components/ui/ModalManager.tsx
"use client";

import React from "react";
import { useToggle } from "@/context/ToggleContext";
RegisterModal;
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function LoginModalWrapper() {
  const { modalType, closeModal } = useToggle();

  return (
    <>
      {modalType === "login" && <LoginModal isOpen onClose={closeModal} />}
      {modalType === "register" && (
        <RegisterModal isOpen onClose={closeModal} />
      )}
    </>
  );
}
