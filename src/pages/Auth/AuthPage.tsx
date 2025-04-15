import { useState } from "react";

// MUI Components
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Card,
    CardContent,
    CardHeader,
    Divider,
} from "@mui/material";

// Our CSS Module
import styles from "./AuthPage.module.css";
import Header from "../../components/Header/Header_Comp";
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";
import { fadeUpVariant } from "../../Hook/Motion/Motion";
import { motion } from "framer-motion";
import Login from "./Login";
import Cadastro from "./Cadastro";

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

export default function AuthPage() {
    const customStyles = useCustomSelectStyles();

    const [activeTab, setActiveTab] = useState("register");


    // Handle tab change (login/register)
    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue);
    };

    return (
        <Box className={styles.authPage}>
            <Header />
            <Box className={styles.mainContent}>

                <Box className={styles.formContainer}>

                    <motion.div
                        className={styles.heroContent}
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
                    >
                        <Box textAlign="center" mb={4}>

                            <Typography variant="h4" className={styles.formTitle} fontSize={30} fontWeight="bold" mb={0.5}>
                                Welcome to StagyTime
                            </Typography>

                            <Typography variant="body2" className={styles.formSubtitle} fontSize={13}>
                                Sign in to your account or create a new one
                            </Typography>

                        </Box>
                    </motion.div>

                    {/* Tabs for Login / Register */}
                    <Card className={styles.card}>
                        <CardHeader
                            title={
                                <Tabs
                                    value={activeTab}
                                    onChange={handleTabChange}
                                    variant="fullWidth"
                                    className={styles.tabs}
                                    sx={customStyles}
                                >
                                    <Tab label="Register" value="register" sx={{ fontWeight: "bold" }} />
                                    <Tab label="Login" value="login" sx={{ fontWeight: "bold" }} />

                                </Tabs>
                            }
                            className={styles.cardHeader}
                        />
                        <Divider />
                        <motion.div
                            initial={fadeUpVariant.hidden}
                            whileInView={fadeUpVariant.visible}
                            viewport={{ once: true }}
                        >
                            <CardContent className={styles.cardContent}>

                                <TabPanel value={activeTab} index="register">
                                    <Cadastro />
                                </TabPanel>

                                <TabPanel value={activeTab} index="login">
                                    <Login />
                                </TabPanel>

                            </CardContent>
                        </motion.div>
                    </Card>

                    <Box mt={2} textAlign="center">
                        <Typography variant="caption" color="text.secondary">

                        </Typography>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}
