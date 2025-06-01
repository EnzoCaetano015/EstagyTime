import { useNavigate } from "react-router-dom";
import { useCustomSelectStyles } from "../../../Hook/Mui/StyleMui";

export const useLogin = () => {
  const customStyles = useCustomSelectStyles();
  const navigate = useNavigate()

  return {
    customStyles,
    navigate
  };
};