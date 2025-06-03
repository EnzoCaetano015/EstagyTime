import { useState } from "react";

type DrawerModo = "ADICIONAR" | "EDITAR";

export const useColaboratorDrawer = () => {
  const [openD, setOpen] = useState(false);
  const [modo, setModo] = useState<DrawerModo>("ADICIONAR");

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
    alert(`${modo === "ADICIONAR" ? "Adicionando" : "Editando"} colaborador`);
    setOpen(false);
  };

  return {
    openD,
    modo,
    openAdicionar,
    openEditar,
    handleClose,
    handleSave,
  };
};