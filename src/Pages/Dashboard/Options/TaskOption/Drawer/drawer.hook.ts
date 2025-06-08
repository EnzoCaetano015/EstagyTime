// drawer.hook.ts
import { useState } from "react";

type DrawerModo = "ADICIONAR" | "EDITAR";

export const useTaskDrawer = () => {
  const [open, setOpen] = useState(false);
  const [modo, setModo] = useState<DrawerModo>("ADICIONAR");

  const [isModalOpen, setModalOpen] = useState(false);

  const openAdicionar = () => {
    setModo("ADICIONAR");
    setOpen(true);
  };

  const openEditar = () => {
    setModo("EDITAR");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    if (modo === "ADICIONAR") {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return {
    open,
    modo,
    openAdicionar,
    openEditar,
    handleClose,
    handleSave,
    isModalOpen,
    closeModal,
  };
};
