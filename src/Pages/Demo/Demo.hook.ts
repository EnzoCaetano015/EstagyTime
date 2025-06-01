import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";

export const useDemoPage = () => {
  const customStyles = useCustomSelectStyles();

  return {
    customStyles,
  };
};
