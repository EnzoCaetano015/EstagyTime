import { useState, useCallback } from "react";

type DeleteAction = () => void;

export function useColaboratorOption() {
  const [warningOpen, setWarningOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [deleteAction, setDeleteAction] = useState<DeleteAction | null>(null);

  const openWarning = useCallback((action: DeleteAction) => {
    setDeleteAction(() => action);
    setWarningOpen(true);
  }, []);

  const closeWarning = useCallback(() => {
    setWarningOpen(false);
    setDeleteAction(null);
  }, []);

  const confirmWarning = useCallback(() => {
    if (deleteAction) deleteAction();
    setWarningOpen(false);
    setSuccessOpen(true);
  }, [deleteAction]);

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
