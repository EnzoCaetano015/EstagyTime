import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";

export const useAuthPage = () => {
  const customStyles = useCustomSelectStyles();

  return {
    customStyles,
  };
};