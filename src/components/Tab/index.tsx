import { useState } from "react";
import { Tabs, Tab } from "@mui/material";

export interface TabData {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabData[];
  customStyles?: object;
  /** Aba atualmente selecionada (controlado) */
  value?: string;
  /** Callback disparado quando a aba muda (controlado) */
  onChange?: (newValue: string) => void;
}

export default function CustomTabs({ tabs, customStyles, value, onChange }: CustomTabsProps) {
  // Estado interno se não for controlado externamente
  const [internalTab, setInternalTab] = useState<string>(tabs[0].value);
  // Se `value` for passado, torna-se componente controlado
  const activeTab = value ?? internalTab;

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalTab(newValue);
    }
  };

  const TabPanel = ({ value, index, children, ...other }: {
    value: string;
    index: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  );

  return (
    <>
      <Tabs
        sx={customStyles}
        value={activeTab}
        onChange={handleChange}
        variant="fullWidth"
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} sx={customStyles} />
        ))}
      </Tabs>
      {tabs.map((tab) => (
        <TabPanel key={tab.value} value={activeTab} index={tab.value}>
          {tab.content}
        </TabPanel>
      ))}
    </>
  );
}
