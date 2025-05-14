// MUI Components
import {
    Box,
    Stack,
    Typography,
} from "@mui/material";

import Header from "../../components/Header";
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";
import { fadeUpVariant } from "../../utils/Motion";
import { motion } from "framer-motion";
import Login from "./Login";
import Cadastro from "./Cadastro";
import CustomTabs from "../../components/Tab";
import Container from "../../components/Container";
import * as Styled from "./authPage.styled"
import { BigTitle } from "../../components/Text";


export default function AuthPage() {

    const customStyles = useCustomSelectStyles();

    return (
        <Container>
            <Styled.AuthBox >
                <Header />
                <Stack sx={{ alignItems: "center", p: "2rem 1rem" }}>

                    <Stack sx={{ alignItems: "center", width: "100%" }}>

                        <motion.div
                            initial={fadeUpVariant.hidden}
                            whileInView={fadeUpVariant.visible}
                            viewport={{ once: true }}
                        >
                            <Box textAlign="center" mb={4}>

                                <BigTitle color="purple" text="Welcome to StagyTime" />

                                <Typography variant="body2" color="#6b7280" fontSize={13}>
                                    Sign in to your account or create a new one
                                </Typography>

                            </Box>
                        </motion.div>

                        <Box
                            component={motion.div}
                            initial={fadeUpVariant.hidden}
                            whileInView={fadeUpVariant.visible}
                            transition={{ duration: 0.6, ease: "easeOut" }}
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
                            <CustomTabs
                                tabs={[
                                    { value: "register", label: "Register", content: <Cadastro /> },
                                    { value: "login", label: "Login", content: <Login /> },
                                ]}
                                customStyles={{ ...customStyles, }}
                            />

                        </Box>
                    </Stack>
                </Stack >
            </Styled.AuthBox >
        </Container>
    );
}
