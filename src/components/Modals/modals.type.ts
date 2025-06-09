export type modalsProps = {
  modalType : "add" | "update" | "warning" | "delete" | "error"
  open: boolean;
  close: () => void;
  actionClose: () => void;
};
