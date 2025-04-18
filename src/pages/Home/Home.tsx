import { BarChart3, CheckCircle, ChevronRight, Clock, Users } from "lucide-react"
import Container from "../../components/Container"
import TickingClock from "../../Hook/TickingClock"
import { motion } from "framer-motion";
import { fadeInVariant, fadeJumpVariant, fadeUpVariant, slideInVariant, sobeDesceVariant } from "../../utils/Motion";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Box, Stack, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import * as Styled from "./home.styled"

export default function Home() {

    const navigate = useNavigate()

    return (
        <>
            <Container>
                <Styled.Main>
                    <motion.div
                        style={{ maxWidth: "50%" }}
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
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
                            Simplify Intern<span style={{ color: "#000" }}> Time Tracking</span>
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 15,
                                mb: "1.5rem",
                                color: "#666"
                            }}
                        >
                            StagyTime helps organizations efficiently track, manage, and optimize intern work hours with minimal effort.
                        </Typography>

                        <Stack
                            component={motion.div}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            sx={{ flexDirection: "row", gap: 2 }}
                        >
                            <Button
                                label={"Get Started"}
                                icon={<ChevronRight size={18} />}
                                onClick={() => navigate("/Auth")}
                                buttonStyle="Purple"
                                sx={{ width: 120, height: 35 }}
                            />
                            <Button
                                label={"Learn More"}
                                onClick={() => navigate("/LearnMore")}
                                buttonStyle="White"
                                sx={{ width: 120, height: 35 }}
                            />
                        </Stack>
                    </motion.div>

                    <motion.div
                        className={"Image"}
                        initial={fadeInVariant.hidden}
                        whileInView={fadeInVariant.visible}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >

                        <motion.div
                            className={"Icon"}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                        >
                            <TickingClock intervalTime={1000} size={60} color="#fff" />
                        </motion.div>
                    </motion.div>
                </Styled.Main>

                <Styled.Features>

                    <Typography
                        component={motion.h2}
                        initial={fadeJumpVariant.hidden}
                        whileInView={fadeJumpVariant.visible}
                        viewport={{ once: true }}
                        sx={{ fontSize: 25, mb: "4%", color: "#422680", fontWeight: "600" }}

                    >
                        What StagyTime Offers
                    </Typography>

                    <motion.div
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
                            <Card icon={<Clock color="#422680" />} title={"Time Tracking"} text={"Simple clock-in/out system for interns to record their work hours accurately."} isList={false} textlist={""} listTopic={[]} />

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
                            <Card icon={<BarChart3 color="#422680" />} title={"Reporting"} text={"Generate detailed reports on work hours, projects, and productivity metrics."} isList={false} textlist={""} listTopic={[]} />

                        </motion.div>

                        <motion.div
                            initial={sobeDesceVariant.initial}
                            animate={sobeDesceVariant.animate}
                            viewport={{ once: true }}

                        >
                            <Card icon={<Users color="#422680" />} title={"Intern Management"} text={"Easily manage intern profiles, assignments, and performance tracking."} isList={false} textlist={""} listTopic={[]} />

                        </motion.div>

                    </motion.div>
                </Styled.Features>

                <Styled.Information>

                    <motion.h2
                        className={"Title"}
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
                    >
                        How StagyTime Works
                    </motion.h2>

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
                                <Typography variant="h3" color="#333" fontSize={16} fontWeight={"Bold"}>Register</Typography>

                                <Typography>Create accounts for admins and interns</Typography>

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
                                <Typography variant="h3" color="#333" fontSize={16} fontWeight={"Bold"}>Track Time</Typography>

                                <Typography>Interns log their work hours daily</Typography>

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

                                <Typography>Supervisors review and approve hours</Typography>

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
                                <Typography variant="h3" color="#333" fontSize={16} fontWeight={"Bold"}>Report</Typography>

                                <Typography>Insights and performance reports</Typography>

                            </Stack>

                        </Box>
                    </Box>

                </Styled.Information>

                <Footer
                    text={" No credit card required"}
                    icon={<CheckCircle size={12} />}
                    description={"Join organizations that trust StagyTime to managetheir intern programs efficiently."} title={"Ready to Streamline Your Intern Management?"}
                    text2={"14-day free trial"}
                    simple={false}
                />
            </Container>
        </>
    )
}
