// taskOption.hook.ts
import { useState, useCallback } from "react";

type DeleteAction = () => void;

export function useTaskOption() {
  // warning = “Você tem certeza?”
  const [warningOpen, setWarningOpen] = useState(false);
  // success = “Tarefa deletada com sucesso”
  const [successOpen, setSuccessOpen] = useState(false);
  // guardamos a ação real de delete para executar no confirm
  const [deleteAction, setDeleteAction] = useState<DeleteAction | null>(null);

  // chama quando o usuário clica em “Delete Task”
  const openWarning = useCallback((action: DeleteAction) => {
    setDeleteAction(() => action);
    setWarningOpen(true);
  }, []);

  // cancelar warning
  const closeWarning = useCallback(() => {
    setWarningOpen(false);
    setDeleteAction(null);
  }, []);

  // confirma o warning: executa o delete, fecha warning e abre success
  const confirmWarning = useCallback(() => {
    if (deleteAction) deleteAction();
    setWarningOpen(false);
    setSuccessOpen(true);
  }, [deleteAction]);

  // fecha o success
  const closeSuccess = useCallback(() => {
    setSuccessOpen(false);
  }, []);

  return {
    warningOpen,
    successOpen,
    openWarning,
    closeWarning,
    confirmWarning,
    closeSuccess,
  };
}
