import { CustomDrawer } from "../../../../../components/Drawer";

interface Props {
  openD: boolean;
  modo: "ADICIONAR" | "EDITAR";
  onClose: () => void;
  onSave: () => void;
}

export const ProjetcsDrawer = ({
  openD,
  modo,
  onClose,
  onSave,
}: Props) => {
  return (
    <CustomDrawer open={openD} modo={modo} onClose={onClose} onSave={onSave}>
      <p>Conteúdo do drawer: {modo}</p>
    </CustomDrawer>
  );
};