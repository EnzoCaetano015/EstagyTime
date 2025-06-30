import { motion } from "framer-motion";
import Header from "../../components/Header";
import TimeTracking from "./Tabs/TimeTracking/index";
import HoursControl from "./Tabs/HoursControl/index";
import { fadeInVariant, fadeUpVariant, slideInVariant } from "../../utils/Motion";
import CustomTabs from "../../components/Tab";
import Container from "../../components/Container";
import { Typography } from "@mui/material";
import * as Styled from "./Demo.styled"
import { useDemoPage } from "./Demo.hook";
import Dashboard from "./Tabs/Dashboard";

export default function DemoPage() {

    const { customStyles } = useDemoPage();

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
                        Demonstração interativa
                    </Typography>

                    <Typography className={"Subtitle"}>
                        Conheça os principais recursos do StagyTime e veja como ele pode transformar seu processo de gerenciamento de estágios..
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
                            { value: "time-tracking", label: "controle de tempo", content: <TimeTracking /> },
                            { value: "hours-control", label: "Controle de horas", content: <HoursControl /> },
                            { value: "performance", label: "Dashboard de desempenho", content: <Dashboard /> },
                        ]}
                        customStyles={{ ...customStyles, fontSize: 13, fontWeight: "600", }}
                    />

                </motion.div>

            </Styled.Content>

        </Container>
    );
}
