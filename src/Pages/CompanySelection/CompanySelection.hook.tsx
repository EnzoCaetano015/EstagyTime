import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SxProps } from "@mui/material";

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
      textlist: "Collaborator Access",
      iconList: <></>,
      listTopic: [
        "Track your work hours",
        "Manage your assigned tasks",
        "View your performance metrics",
        "Access projects you're part of",
      ],
      sx: { bgcolor: "#EFF6FF", border: "0.5px #738CD9 solid", color: "#4E63D9" },
    },
    myCompany: {
      textlist: "Administrator Access",
      iconList: <></>,
      listTopic: [
        "View company-wide metrics and reports",
        "Manage all collaborators and their access",
        "Track time and performance across the organization",
        "Create and assign projects and tasks",
      ],
      sx: { bgcolor: "#FAF5FF", border: "0.5px #A36CD9 solid", color: "#8D41D9" },
    },
    create: {
      textlist: "Create Your Own Company",
      iconList: <></>,
      listTopic: [
        "Set up your organization structure",
        "Invite and manage collaborators",
        "Create projects and assign tasks",
        "Track time and performance across your organization",
        "Generate reports and analytics",
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
