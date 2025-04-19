// MUI Components
import {
    Box,
    Typography,
} from "@mui/material";

// Our CSS Module
import styles from "./AuthPage.module.css";
import Header from "../../components/Header";
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";
import { fadeUpVariant } from "../../utils/Motion";
import { motion } from "framer-motion";
import Login from "./Login";
import Cadastro from "./Cadastro";
import CustomTabs from "../../components/Tab";
import Container from "../../components/Container";


export default function AuthPage() {

    const customStyles = useCustomSelectStyles();

    return (
        <Container>
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

                        <Box
                            sx={{
                                bgcolor: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: 1.5,
                                width: "100%",
                                maxWidth: 430,
                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05);",
                                p: "5px 16px 16px 16px",

                            }}
                        >
                            <motion.div
                                initial={fadeUpVariant.hidden}
                                whileInView={fadeUpVariant.visible}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <CustomTabs
                                    tabs={[
                                        { value: "register", label: "Register", content: <Cadastro /> },
                                        { value: "login", label: "Login", content: <Login /> },
                                    ]}
                                    customStyles={{ ...customStyles,}}
                                />
                            </motion.div>

                        </Box>

                    </Box>
                </Box >
            </Box >
        </Container>
    );
}
