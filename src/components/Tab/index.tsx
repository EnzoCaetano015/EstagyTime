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
}

export default function CustomTabs({ tabs, customStyles }: CustomTabsProps) {

  const [activeTab, setActiveTab] = useState<string>(tabs[0].value);

  const TabPanel = ({
    value,
    index,
    children,
    ...other
  }: {
    value: string;
    index: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    return (
      <div role="tabpanel" hidden={value !== index} {...other}>
        {value === index && children}
      </div>
    );
  };

  return (
    <>
      <Tabs
        sx={customStyles}
        value={activeTab}
        onChange={(_e, newValue) => setActiveTab(newValue)}
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
