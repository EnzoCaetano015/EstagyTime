import { CustomDrawer } from "../../../../../components/Drawer";

interface Props {
  open: boolean;
  modo: "ADICIONAR" | "EDITAR";
  onClose: () => void;
  onSave: () => void;
}

export const ColaboratorDrawer = ({
  open,
  modo,
  onClose,
  onSave,
}: Props) => {
  return (
    <CustomDrawer open={open} modo={modo} onClose={onClose} onSave={onSave}>
      <p>Conteúdo do drawer: {modo}</p>
    </CustomDrawer>
  );
};