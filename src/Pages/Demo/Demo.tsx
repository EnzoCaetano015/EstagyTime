
import { motion } from "framer-motion";

import Header from "../../components/Header";
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui"

import TimeTracking from "./TimeTracking/index";
import HoursControl from "./HoursControl/index";
import Dashboard from "./Dashboard/index";
import { fadeInVariant, fadeUpVariant, slideInVariant } from "../../utils/Motion";
import CustomTabs from "../../components/Tab";
import Container from "../../components/Container";
import { Typography } from "@mui/material";
import * as Styled from "./Demo.styled"

export default function DemoPage() {

    const customStyles = useCustomSelectStyles();

    return (
        <Container>

            <Header />

            <Styled.Demo >

                <motion.div
                    initial={fadeUpVariant.hidden}
                    whileInView={fadeUpVariant.visible}
                    viewport={{ once: true }}
                >

                    <Typography variant="h1" className={"Title"}>
                        Interactive Demo
                    </Typography>

                    <Typography className={"Subtitle"}>
                        Experience the key features of StagyTime and see how it can transform your intern management process.
                    </Typography>

                    <motion.div
                        initial={slideInVariant.hidden}
                        whileInView={slideInVariant.visible}
                        className={"Divider"}
                    />

                </motion.div>

            </Styled.Demo>

            <Styled.Content>

                <motion.div
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
                        customStyles={{ ...customStyles, fontSize: 13, fontWeight: "600", }}
                    />

                </motion.div>

            </Styled.Content>

        </Container>
    );
}
