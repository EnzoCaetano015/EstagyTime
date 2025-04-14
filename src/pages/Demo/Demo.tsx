import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import styles from "./Demo.module.css";
import Header from "../../components/Header/Header_Comp";
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui"

import TimeTracking from "./TimeTracking/index";
import HoursControl from "./HoursControl/index";
import Dashboard from "./Dashboard/index";

// Helper component for Tab Panels
interface TabPanelProps {
    value: string;
    index: string;
    children: React.ReactNode;
}
function TabPanel(props: TabPanelProps) {
    const { value, index, children, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && children}
        </div>
    );
}

export default function DemoPage() {

    const customStyles = useCustomSelectStyles();

    const [activeTab, setActiveTab] = useState("time-tracking");

    return (
        <div className={styles.demoPage}>
            <Header />
            <section className={styles.demoTitleSection}>
                <div className={styles.container}>
                    <h1 className={styles.demoTitle}>
                        Interactive Demo
                    </h1>
                    <p className={styles.demoSubtitle}>
                        Experience the key features of StagyTime and see how it can transform your intern management process.
                    </p>
                </div>
            </section>

            {/* Demo Content Section */}
            <section className={styles.demoContentSection}>

                <div className={styles.container}>
                    <Tabs
                        sx={customStyles}
                        value={activeTab}
                        onChange={(_e, newValue) => setActiveTab(newValue)}
                        variant="fullWidth"
                        className={styles.tabs}
                    >
                        <Tab label="Time Tracking" value="time-tracking" className={styles.tabsTrigger} />
                        <Tab label="Hours Control" value="hours-control" className={styles.tabsTrigger} />
                        <Tab label="Performance Dashboard" value="performance" className={styles.tabsTrigger} />
                    </Tabs>

                    <TabPanel value={activeTab} index="time-tracking">
                        <TimeTracking />
                    </TabPanel>

                    <TabPanel value={activeTab} index="hours-control">
                        <HoursControl />
                    </TabPanel>

                    <TabPanel value={activeTab} index="performance">
                        <Dashboard />
                    </TabPanel>
                </div>
            </section>
        </div>
    );
}
