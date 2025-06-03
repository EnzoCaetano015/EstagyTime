import { useState } from "react";

type DrawerModo = "ADICIONAR" | "EDITAR";

export const useTaskDrawer = () => {
  const [open, setOpen] = useState(false);
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
    open,
    modo,
    openAdicionar,
    openEditar,
    handleClose,
    handleSave,
  };
};