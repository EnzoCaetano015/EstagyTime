import { BarChart3, CheckCircle, ChevronRight, Clock, Users } from "lucide-react"
import Container from "../../components/Container/Container_Comp"
import styles from "./Home.module.css"
import TickingClock from "../../Hook/TickingClock"
import { motion } from "framer-motion";
import { fadeJumpVariant, slideInVariant } from "../../components/Motion/Motion";

function Home() {



    return (
        <>
            <Container>
                <main className={styles.informationScreen}>

                    <section className={styles.heroSection}>
                        {/* Animated text section: Slide from bottom to top */}
                        <motion.div
                            className={styles.heroContent}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1>
                                <strong>Simplify Intern</strong> <strong>Time Tracking</strong>
                            </h1>
                            <p>
                                StagyTime helps organizations efficiently track, manage, and optimize intern work hours with minimal effort.
                            </p>
                            {/* Animated buttons: Fade in */}
                            <motion.div
                                className={styles.heroButtons}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }} // Start after the text animation
                            >
                                <button className={styles.primaryBtn}>
                                    Get Started<ChevronRight size={20} />
                                </button>
                                <button className={styles.secondaryBtn}>Learn More</button>
                            </motion.div>
                        </motion.div>

                        {/* Animated hero image container: Fade in */}
                        <motion.div
                            className={styles.heroImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }} // Slight delay for a smooth effect
                        >
                            {/* Animated circle icon: Fade in after heroImage */}
                            <motion.div
                                className={styles.circleIcon}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.9 }} // Starts after heroImage fades in
                            >
                                <TickingClock intervalTime={1000} size={60} color="#fff" />
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* Features Section */}
                    <section className={styles.featuresSection}>

                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}

                        >What StagyTime Offers</motion.h2>

                        <motion.div className={styles.featuresGrid}
                            initial="hidden"
                            animate="visible"
                            variants={fadeJumpVariant}
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
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            How StagyTime Works
                        </motion.h2>

                        <div className={styles.stagytimeStepsGrid}>
                            {/* Passo 1 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div className={styles.stepCircle}
                                    initial="hidden"
                                    animate="visible"
                                    variants={slideInVariant}
                                >
                                    <span>1</span>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={slideInVariant}>
                                    <h3 className={styles.stepTitle}>Register</h3>
                                    <p className={styles.stepText}>Create accounts for admins and interns</p>
                                </motion.div>
                            </div>

                            {/* Passo 2 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div className={styles.stepCircle}
                                    initial="hidden"
                                    animate="visible"
                                    variants={slideInVariant}
                                >
                                    <span>2</span>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={slideInVariant}>
                                    <h3 className={styles.stepTitle}>Track Time</h3>
                                    <p className={styles.stepText}>Interns log their work hours daily</p>
                                </motion.div>

                            </div>

                            {/* Passo 3 */}
                            <div className={styles.stagytimeStep}>

                                <motion.div className={styles.stepCircle}
                                    initial="hidden"
                                    animate="visible"
                                    variants={slideInVariant}
                                >
                                    <span>3</span>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={slideInVariant}>
                                    <h3 className={styles.stepTitle}>Monitor</h3>
                                    <p className={styles.stepText}>Supervisors review and approve hours</p>
                                </motion.div>

                            </div>

                            {/* Passo 4 */}
                            <div className={styles.stagytimeStep}>
                                <motion.div className={styles.stepCircle}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span>4</span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h3 className={styles.stepTitle}>Report</h3>
                                    <p className={styles.stepText}>Generate insights and performance reports</p>
                                </motion.div>

                            </div>
                        </div>

                    </section>

                    {/* Call To Action Section */}
                    <section className={styles.ctaSection}>
                        <h2>Ready to Streamline Your Intern Management?</h2>
                        <p>
                            Join organizations that trust StagyTime to manage
                            their intern programs efficiently.
                        </p>
                        <div className={styles.ctaButtons}>
                            <button className={styles.ctaButton}>Start Free Trial</button>
                            <button className={styles.ctaButton}>Schedule Demo</button>
                        </div>
                        <div className={styles.notes}>
                            <span><CheckCircle size={12} /> No credit card required</span>
                            <span><CheckCircle size={12} /> 14-day free trial</span>
                        </div>
                    </section>
                </main>
            </Container>
        </>
    )
}

export default Home