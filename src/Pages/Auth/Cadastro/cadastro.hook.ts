import { useNavigate } from "react-router";
import { useCustomSelectStyles } from "../../../Hook/Mui/StyleMui";

export const useCadastro = () => {
  const customStyles = useCustomSelectStyles();
  const navigate = useNavigate();

  return {
    customStyles,
    navigate,
  };
};
