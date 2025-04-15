import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { motion } from "framer-motion";

import styles from "./Demo.module.css";
import Header from "../../components/Header/Header_Comp";
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui"

import TimeTracking from "./TimeTracking/index";
import HoursControl from "./HoursControl/index";
import Dashboard from "./Dashboard/index";
import { fadeInVariant, fadeUpVariant, slideInVariant } from "../../Hook/Motion/Motion";


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

                <motion.div
                    className={styles.container}
                    initial={fadeUpVariant.hidden}
                    whileInView={fadeUpVariant.visible}
                >

                    <h1 className={styles.demoTitle}>
                        Interactive Demo
                    </h1>

                    <p className={styles.demoSubtitle}>
                        Experience the key features of StagyTime and see how it can transform your intern management process.
                    </p>

                    <motion.div
                        initial={slideInVariant.hidden}
                        whileInView={slideInVariant.visible}
                        className={styles.heroDivider}
                    />

                </motion.div>

            </section>

            {/* Demo Content Section */}
            <section className={styles.demoContentSection}>

                <motion.div
                    className={styles.container}
                    initial={fadeInVariant.hidden}
                    whileInView={fadeInVariant.visible}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >

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

                </motion.div>

            </section>

        </div>
    );
}
