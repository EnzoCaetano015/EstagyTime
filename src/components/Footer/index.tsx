import { fadeInVariant } from "../../utils/Motion";
import Button from "../Button";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import * as Styled from "./footer.styled"
import { useNavigate } from "react-router";

interface FooterLPProps {
    title: string;
    description: string;
    text: string;
    text2: string;
    icon: React.ReactNode;
    simple: boolean;
}

function Footer({ title, description, text, text2, icon, simple }: FooterLPProps) {

    const navigate = useNavigate()

    return (
        <>
            {!simple ? (
                <Styled.Footer>
                    <motion.div
                        initial={fadeInVariant.hidden}
                        whileInView={fadeInVariant.visible}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >

                        <Typography
                            variant="h2"
                            fontWeight={"600"}
                            fontSize={30}
                            mb={"10px"}
                        >
                            {title}
                        </Typography>

                        <Typography color="#fff" mb={"2rem"} fontSize={14}>
                            {description}
                        </Typography>

                        <motion.div
                            className={"FooterButtons"}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        >
                            <Button
                                label={"Comece grátis"}
                                onClick={() => navigate("/Auth/Login")}
                                buttonStyle="White"
                                sx={{ width: 120, height: 35 }}
                            />
                            <Button
                                label={"Demonstração"}
                                onClick={() => navigate("/Demo")}
                                buttonStyle="White"
                                sx={{ width: 120, height: 35 }}
                            />
                        </motion.div>
                        <Box className={"notes"}>
                            <span>{icon}{text}</span>
                            <span>{icon}{text2}</span>
                        </Box>
                    </motion.div>
                </Styled.Footer>
            ) : (
                <Styled.SimpleFooter className={"footer"}>

                    <div className={"bottomBar"}>
                        <Typography color="#333">© {new Date().getFullYear()} StagyTime</Typography>
                    </div>

                </Styled.SimpleFooter>
            )}

        </>
    )
}

export default Footer