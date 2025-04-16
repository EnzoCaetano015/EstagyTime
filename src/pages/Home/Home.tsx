import { BarChart3, CheckCircle, ChevronRight, Clock, Users } from "lucide-react"
import Container from "../../components/Container"
import styles from "./Home.module.css"
import TickingClock from "../../Hook/TickingClock"
import { motion } from "framer-motion";
import { fadeInVariant, fadeJumpVariant, fadeUpVariant, slideInVariant, sobeDesceVariant } from "../../utils/Motion";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Typography } from "@mui/material";
import Footer from "../../components/Footer";

export default function Home() {

    const navigate = useNavigate()

    return (
        <>
            <Container>
                <main className={styles.informationScreen}>

                    <section className={styles.heroSection}>
                        {/* Animated text section: Slide from bottom to top */}
                        <motion.div
                            className={styles.heroContent}
                            initial={fadeUpVariant.hidden}
                            whileInView={fadeUpVariant.visible}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: 50,
                                    lineHeight: "55px",
                                    mb: "16px"
                                }}
                            >
                                <strong>Simplify Intern</strong> <strong>Time Tracking</strong>
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

                            <motion.div
                                className={styles.heroButtons}
                                initial={fadeInVariant.hidden}
                                whileInView={fadeInVariant.visible}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            >
                                <Button
                                    label={"Get Started"}
                                    icon={<ChevronRight size={18}/>}
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
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className={styles.heroImage}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >

                            <motion.div
                                className={styles.circleIcon}
                                initial={fadeInVariant.hidden}
                                whileInView={fadeInVariant.visible}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                            >
                                <TickingClock intervalTime={1000} size={60} color="#fff" />
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* Features Section */}
                    <section className={styles.featuresSection}>

                        <motion.h2
                            initial={fadeJumpVariant.hidden}
                            whileInView={fadeJumpVariant.visible}
                            viewport={{ once: true }}

                        >What StagyTime Offers</motion.h2>

                        <motion.div
                            className={styles.featuresGrid}
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
                    </section>

                    {/* How It Works Section */}
                    <section className={styles.stagytimeSection}>

                        <motion.h2
                            className={styles.stagytimeTitle}
                            initial={fadeUpVariant.hidden}
                            whileInView={fadeUpVariant.visible}
                            viewport={{ once: true }}
                        >
                            How StagyTime Works
                        </motion.h2>

                        <div className={styles.stagytimeStepsGrid}>
                            {/* Passo 1 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div
                                    className={styles.stepCircle}
                                    initial={slideInVariant.hidden}
                                    whileInView={slideInVariant.visible}
                                    viewport={{ once: true }}
                                >
                                    <span>1</span>
                                </motion.div>

                                <motion.div
                                    initial={slideInVariant.hidden}
                                    whileInView={slideInVariant.visible}
                                    viewport={{ once: true }}
                                >
                                    <h3 className={styles.stepTitle}>Register</h3>
                                    <p className={styles.stepText}>Create accounts for admins and interns</p>
                                </motion.div>
                            </div>

                            {/* Passo 2 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div
                                    className={styles.stepCircle}
                                    initial={slideInVariant.hidden}
                                    whileInView={slideInVariant.visible}
                                    viewport={{ once: true }}
                                >
                                    <span>2</span>
                                </motion.div>

                                <motion.div
                                    initial={slideInVariant.hidden}
                                    whileInView={slideInVariant.visible}
                                    viewport={{ once: true }}
                                >
                                    <h3 className={styles.stepTitle}>Track Time</h3>
                                    <p className={styles.stepText}>Interns log their work hours daily</p>
                                </motion.div>

                            </div>

                            {/* Passo 3 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div
                                    className={styles.stepCircle}
                                    initial={slideInVariant.hidden}
                                    whileInView={slideInVariant.visible}
                                    viewport={{ once: true }}
                                >
                                    <span>3</span>
                                </motion.div>

                                <motion.div
                                    initial={slideInVariant.hidden}
                                    whileInView={slideInVariant.visible}
                                    viewport={{ once: true }}

                                >
                                    <h3 className={styles.stepTitle}>Monitor</h3>
                                    <p className={styles.stepText}>Supervisors review and approve hours</p>
                                </motion.div>

                            </div>

                            {/* Passo 4 */}
                            <div className={styles.stagytimeStep}>
                                <motion.div
                                    className={styles.stepCircle}
                                    initial={fadeUpVariant.hidden}
                                    whileInView={fadeUpVariant.visible}
                                    viewport={{ once: true }}
                                >
                                    <span>4</span>
                                </motion.div>

                                <motion.div
                                    initial={slideInVariant.hidden}
                                    whileInView={slideInVariant.visible}
                                    viewport={{ once: true }}
                                >
                                    <h3 className={styles.stepTitle}>Report</h3>
                                    <p className={styles.stepText}>Generate insights and performance reports</p>
                                </motion.div>

                            </div>
                        </div>

                    </section>

                    {/* Call To Action Section */}
                    <Footer
                        text={" No credit card required"}
                        icon={<CheckCircle size={12} />}
                        description={"Join organizations that trust StagyTime to managetheir intern programs efficiently."} title={"Ready to Streamline Your Intern Management?"}
                        text2={"14-day free trial"}
                        simple={false}
                    />
                </main>
            </Container>
        </>
    )
}
