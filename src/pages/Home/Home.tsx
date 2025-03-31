import { BarChart3,CheckCircle,ChevronRight, Clock, Users } from "lucide-react"
import Container from "../../components/Container/Container_Comp"
import styles from "./Home.module.css"
import TickingClock from "../../Hook/TickingClock"
import { motion } from "framer-motion";
import { fadeInVariant, fadeJumpVariant, fadeUpVariant, slideInVariant } from "../../components/Motion/Motion";
import Button from "../../components/Button/Button_Comp";
import FooterLP from "../../components/FooterLP/FooterLP_Comp";
import { useNavigate } from "react-router-dom";

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
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUpVariant}
                        >
                            <h1>
                                <strong>Simplify Intern</strong> <strong>Time Tracking</strong>
                            </h1>
                            <p>
                                StagyTime helps organizations efficiently track, manage, and optimize intern work hours with minimal effort.
                            </p>

                            <motion.div
                                className={styles.heroButtons}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInVariant}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            >
                                <Button
                                    label="Get Started"
                                    icon={<ChevronRight size={18} />}
                                    onClick={() => alert('Get Started clicked!')}
                                    height="35px"
                                    width="120px"
                                    styleVariant={1} // Purple background
                                />
                                <Button
                                    label="Learn More"
                                    onClick={() => navigate('/LearMore')}
                                    height="35px"
                                    width="120px"
                                    styleVariant={2} // Purple background
                                />
                            </motion.div>
                        </motion.div>

                        {/* Animated hero image container: Fade in */}
                        <motion.div
                            className={styles.heroImage}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInVariant}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >

                            <motion.div
                                className={styles.circleIcon}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInVariant}
                                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                            >
                                <TickingClock intervalTime={1000} size={60} color="#fff" />
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* Features Section */}
                    <section className={styles.featuresSection}>

                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeJumpVariant}

                        >What StagyTime Offers</motion.h2>

                        <motion.div className={styles.featuresGrid}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUpVariant}
                        >

                            <div className={styles.featureCard}>

                                <span><Clock color="#422680" /></span>

                                <h3>Time Tracking</h3>

                                <p>
                                    Simple clock-in/out system for interns to record their work hours accurately.
                                </p>

                            </div>

                            <div className={styles.featureCard}>

                                <span><BarChart3 color="#422680" /></span>

                                <h3>Reporting</h3>

                                <p>
                                    Generate detailed reports on work hours, projects, and productivity metrics.
                                </p>

                            </div>

                            <div className={styles.featureCard}>

                                <span> <Users color="#422680" /></span>

                                <h3>Intern Management</h3>

                                <p>
                                    Easily manage intern profiles, assignments, and performance tracking.
                                </p>

                            </div>

                        </motion.div>
                    </section>

                    {/* How It Works Section */}
                    <section className={styles.stagytimeSection}>

                        <motion.h2
                            className={styles.stagytimeTitle}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUpVariant}
                        >
                            How StagyTime Works
                        </motion.h2>

                        <div className={styles.stagytimeStepsGrid}>
                            {/* Passo 1 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div className={styles.stepCircle}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={slideInVariant}
                                >
                                    <span>1</span>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={slideInVariant}>
                                    <h3 className={styles.stepTitle}>Register</h3>
                                    <p className={styles.stepText}>Create accounts for admins and interns</p>
                                </motion.div>
                            </div>

                            {/* Passo 2 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div className={styles.stepCircle}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={slideInVariant}
                                >
                                    <span>2</span>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={slideInVariant}>
                                    <h3 className={styles.stepTitle}>Track Time</h3>
                                    <p className={styles.stepText}>Interns log their work hours daily</p>
                                </motion.div>

                            </div>

                            {/* Passo 3 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div className={styles.stepCircle}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={slideInVariant}
                                >
                                    <span>3</span>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={slideInVariant}>
                                    <h3 className={styles.stepTitle}>Monitor</h3>
                                    <p className={styles.stepText}>Supervisors review and approve hours</p>
                                </motion.div>

                            </div>

                            {/* Passo 4 */}
                            <div className={styles.stagytimeStep}>
                                <motion.div className={styles.stepCircle}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeUpVariant}
                                >
                                    <span>4</span>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeUpVariant}
                                >
                                    <h3 className={styles.stepTitle}>Report</h3>
                                    <p className={styles.stepText}>Generate insights and performance reports</p>
                                </motion.div>

                            </div>
                        </div>

                    </section>

                    {/* Call To Action Section */}
                    <FooterLP 
                    text={" No credit card required"} 
                    icon={<CheckCircle size={12} />} 
                    description={"Join organizations that trust StagyTime to managetheir intern programs efficiently."} title={"Ready to Streamline Your Intern Management?"} 
                    text2={"14-day free trial"}/>
                </main>
            </Container>
        </>
    )
}

