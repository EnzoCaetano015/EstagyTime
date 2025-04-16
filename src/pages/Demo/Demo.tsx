
import { motion } from "framer-motion";

import styles from "./Demo.module.css";
import Header from "../../components/Header";
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui"

import TimeTracking from "./TimeTracking/index";
import HoursControl from "./HoursControl/index";
import Dashboard from "./Dashboard/index";
import { fadeInVariant, fadeUpVariant, slideInVariant } from "../../utils/Motion";
import CustomTabs from "../../components/Tab";
import Container from "../../components/Container";

export default function DemoPage() {

    const customStyles = useCustomSelectStyles();

    return (
        <Container>

            <Header />

            <section className={styles.demoTitleSection}>

                <motion.div
                    className={styles.container}
                    initial={fadeUpVariant.hidden}
                    whileInView={fadeUpVariant.visible}
                    viewport={{ once: true }}
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
                    viewport={{ once: true }}
                >

                    <CustomTabs
                        tabs={[
                            { value: "time-tracking", label: "Time Tracking", content: <TimeTracking /> },
                            { value: "hours-control", label: "Hours Control", content: <HoursControl /> },
                            { value: "performance", label: "Performance Dashboard", content: <Dashboard /> },
                        ]}
                        customStyles={customStyles}
                    />

                </motion.div>

            </section>

        </Container>
    );
}
