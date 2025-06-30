import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";
import { useState } from "react";
import { SxProps } from "@mui/material";
import { useNavigate } from "react-router";

type CardConfigKey = "enter" | "myCompany" | "create";

export const useCompanySelection = () => {
  const [activeTab, setActiveTab] = useState<string>("enter");

  const cardConfig: Record<
    CardConfigKey,
    {
      textlist: string;
      iconList: React.ReactNode;
      listTopic: string[];
      sx: SxProps;
    }
  > = {
    enter: {
      textlist: "Acesso do Colaborador",
      iconList: <></>,
      listTopic: [
        "Registre suas horas de trabalho",
        "Gerencie suas tarefas atribuídas",
        "Visualize suas métricas de desempenho",
        "Acesse os projetos dos quais participa",
      ],
      sx: { bgcolor: "#EFF6FF", border: "0.5px #738CD9 solid", color: "#4E63D9" },
    },
    myCompany: {
      textlist: "Acesso do Administrador",
      iconList: <></>,
      listTopic: [
        "Visualize métricas e relatórios de toda a empresa",
        "Gerencie todos os colaboradores e seus acessos",
        "Acompanhe tempo e desempenho em toda a organização",
        "Crie e atribua projetos e tarefas",
      ],

      sx: { bgcolor: "#FAF5FF", border: "0.5px #A36CD9 solid", color: "#8D41D9" },
    },
    create: {
      textlist: "Crie sua Própria Empresa",
      iconList: <></>,
      listTopic: [
        "Configure a estrutura da sua organização",
        "Convide e gerencie colaboradores",
        "Crie projetos e atribua tarefas",
        "Acompanhe tempo e desempenho em toda a organização",
        "Gere relatórios e análises",
      ],

      sx: { bgcolor: "#F1FDF4", border: "0.5px #68A672 solid", color: "#3E8C49" },
    },
  };

  const key = (["enter", "myCompany", "create"].includes(activeTab)
    ? activeTab
    : "enter") as CardConfigKey;
  const { textlist, iconList, listTopic, sx } = cardConfig[key];
  const customStyles = useCustomSelectStyles();
  const navigate = useNavigate();

  return {
    activeTab,
    setActiveTab,
    textlist,
    iconList,
    listTopic,
    sx,
    customStyles,
    navigate,
  };
};
