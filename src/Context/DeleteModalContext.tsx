import React, { createContext, useState, Provider, useEffect } from "react";

interface DeleteModalContextProps {
  setIsDeleteModalOpen: (value: boolean) => void;
  isDeleteModalOpen: boolean;
}

export const deleteModalContext = createContext<DeleteModalContextProps>({
  setIsDeleteModalOpen: () => false,
  isDeleteModalOpen: false,
});

export default function DeleteModalContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isDeleteModalOpen) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }, [isDeleteModalOpen]);
  return (
    <deleteModalContext.Provider
      value={{ isDeleteModalOpen, setIsDeleteModalOpen }}
    >
      {children}
    </deleteModalContext.Provider>
  );
}
