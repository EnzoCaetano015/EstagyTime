import { BarChart3, CheckCircle, ChevronRight, Clock, Users } from "lucide-react"
import Container from "../../components/Container"
import TickingClock from "../../Hook/TickingClock"
import { motion } from "framer-motion";
import { fadeInVariant, fadeUpVariant, slideInVariant, sobeDesceVariant } from "../../utils/Motion";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Box, Stack, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import * as Styled from "./Home.styled"
import { Title } from "../../components/Text";
import { useHome } from "./Home.hook";

export default function Home() {

    const { navigate } = useHome()

    return (
        <>
            <Container>
                <Styled.Main>
                    <Box
                        component={motion.div}
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
                        sx={{ maxWidth: "50%" }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: 50,
                                lineHeight: "55px",
                                mb: "16px",
                                fontWeight: "600",
                                color: "#422680"
                            }}
                        >
                            Simplifique<span style={{ color: "#000" }}> o controle de tempo</span>
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 15,
                                mb: "1.5rem",
                                color: "#666"
                            }}
                        >
                            O StagyTime ajuda as organizações a monitorar, gerenciar e otimizar eficientemente as horas de trabalho dos estagiários com o mínimo de esforço.
                        </Typography>

                        <Stack
                            component={motion.div}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            sx={{ flexDirection: "row", gap: 2, }}
                        >
                            <Button
                                label={"Comece"}
                                icon={<ChevronRight size={18} />}
                                onClick={() => navigate("/Auth/Login")}
                                buttonStyle="Purple"
                                sx={{ width: 120, height: 35 }}
                            />
                            <Button
                                label={"Leia mais"}
                                onClick={() => navigate("/LearnMore")}
                                buttonStyle="White"
                                sx={{ width: 120, height: 35 }}
                            />
                        </Stack>
                    </Box>

                    <Box
                        component={motion.div}
                        className={"Image"}
                        initial={fadeInVariant.hidden}
                        whileInView={fadeInVariant.visible}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >

                        <Box
                            component={motion.div}
                            className={"Icon"}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                        >
                            <TickingClock intervalTime={1000} size={50} color="#fff" />
                        </Box>
                    </Box>
                </Styled.Main>

                <Styled.Features>

                    <Title
                        color="purple"
                        text="O que o StagyTime oferece"
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
                    />

                    <Box
                        component={motion.div}
                        className={"Grid"}
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
                    >

                        <motion.div
                            initial={sobeDesceVariant.initial}
                            animate={sobeDesceVariant.animate}
                            viewport={{ once: true }}

                        >
                            <Card
                                icon={<Clock color="#422680" />}
                                title={"Controle de Tempo"}
                                text={"Sistema simples de entrada/saída para estagiários registrarem suas horas de trabalho com precisão."}
                                isList={false}
                                textlist={""}
                                listTopic={[]}
                                listIcon={undefined}
                            />

                        </motion.div>

                        <motion.div
                            initial={sobeDesceVariant.initial}
                            animate={{
                                ...sobeDesceVariant.animate,
                                transition: {
                                    ...sobeDesceVariant.animate.transition,
                                    delay: 1,
                                },
                            }}
                            viewport={{ once: true }}

                        >
                            <Card
                                icon={<BarChart3 color="#422680" />}
                                title={"Relatórios"}
                                text={"Gere relatórios detalhados sobre horas de trabalho, projetos e métricas de produtividade."}
                                isList={false}
                                textlist={""}
                                listTopic={[]}
                                listIcon={undefined}
                            />

                        </motion.div>

                        <motion.div
                            initial={sobeDesceVariant.initial}
                            animate={sobeDesceVariant.animate}
                            viewport={{ once: true }}

                        >
                            <Card icon={<Users color="#422680" />}
                                title={"Gestão de Estagiários"}
                                text={"Gerencie facilmente perfis de estagiários, atribuições e acompanhamento de desempenho."}
                                isList={false}
                                textlist={""}
                                listTopic={[]}
                                listIcon={undefined}
                            />

                        </motion.div>

                    </Box>
                </Styled.Features>

                <Styled.Information>

                    <Title
                        color="purple"
                        text="Como funciona o StagyTime"
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
                    />

                    <Box className={"StepsGrid"}>

                        <Box textAlign={"center"}>

                            <motion.div
                                className={"stepCircle"}
                                initial={slideInVariant.hidden}
                                whileInView={slideInVariant.visible}
                                viewport={{ once: true }}
                            >
                                <span>1</span>
                            </motion.div>

                            <Stack
                                component={motion.div}
                                initial={slideInVariant.hidden}
                                whileInView={slideInVariant.visible}
                                viewport={{ once: true }}
                                gap={2}
                            >
                                <Typography variant="h3" color="#333" fontSize={16} fontWeight={"Bold"}>Registrar</Typography>

                                <Typography>Crie contas para administradores e estagiários</Typography>

                            </Stack>
                        </Box>

                        <Box textAlign={"center"}>

                            <motion.div
                                className={"stepCircle"}
                                initial={slideInVariant.hidden}
                                whileInView={slideInVariant.visible}
                                viewport={{ once: true }}
                            >
                                <span>2</span>
                            </motion.div>

                            <Stack
                                component={motion.div}
                                initial={slideInVariant.hidden}
                                whileInView={slideInVariant.visible}
                                viewport={{ once: true }}
                                gap={2}
                            >
                                <Typography variant="h3" color="#333" fontSize={16} fontWeight={"Bold"}>Monitorar o tempo</Typography>

                                <Typography>Os estagiários registram suas horas de trabalho diariamente</Typography>

                            </Stack>

                        </Box>

                        <Box textAlign={"center"}>

                            <motion.div
                                className={"stepCircle"}
                                initial={slideInVariant.hidden}
                                whileInView={slideInVariant.visible}
                                viewport={{ once: true }}
                            >
                                <span>3</span>
                            </motion.div>

                            <Stack
                                component={motion.div}
                                initial={slideInVariant.hidden}
                                whileInView={slideInVariant.visible}
                                viewport={{ once: true }}
                                gap={2}
                            >
                                <Typography variant="h3" color="#333" fontSize={16} fontWeight={"Bold"}>Monitor</Typography>

                                <Typography>Os supervisores revisam e aprovam as horas</Typography>

                            </Stack>

                        </Box>

                        <Box textAlign={"center"}>
                            <motion.div
                                className={"stepCircle"}
                                initial={fadeUpVariant.hidden}
                                whileInView={fadeUpVariant.visible}
                                viewport={{ once: true }}
                            >
                                <span>4</span>
                            </motion.div>

                            <Stack
                                component={motion.div}
                                initial={slideInVariant.hidden}
                                whileInView={slideInVariant.visible}
                                viewport={{ once: true }}
                                gap={2}
                            >
                                <Typography variant="h3" color="#333" fontSize={16} fontWeight={"Bold"}>Relatório</Typography>

                                <Typography>Insights e relatórios de desempenho</Typography>

                            </Stack>

                        </Box>
                    </Box>

                </Styled.Information>

                <Footer
                    text={" Não é necessário cartão de crédito"}
                    icon={<CheckCircle size={12} />}
                    description={"Junte-se a organizações que confiam na StagyTime para gerenciar seus programas de estágio com eficiência"}
                    title={"Pronto para otimizar sua gestão de estagiários?"}
                    text2={" teste gratuito"}
                    simple={false}
                />
            </Container>
        </>
    )
}
