import { useState } from "react";
import { modalsProps } from "../../../../../components/Modals/modals.type";

type DrawerModo = "ADICIONAR" | "EDITAR";

// tipos de modal segundo seu modalsProps
type ModalType = modalsProps["modalType"];

export const useColaboratorDrawer = () => {
  // Controle do Drawer
  const [openD, setOpen] = useState(false);
  const [modo, setModo] = useState<DrawerModo>("ADICIONAR");

  // Controle do Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("add");

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

    // escolhe qual modal abrir
    if (modo === "ADICIONAR") {
      setModalType("add");
    } else if (modo === "EDITAR") {
      setModalType("update");
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return {
    // Drawer API
    openD,
    modo,
    openAdicionar,
    openEditar,
    handleClose,
    handleSave,

    // Modal API
    modalOpen,
    modalType,
    closeModal,
  };
};
