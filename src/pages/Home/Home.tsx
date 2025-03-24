import { BarChart3, CheckCircle, ChevronRight, Clock, Users } from "lucide-react"
import Container from "../../components/Container/Container_Comp"
import styles from "./Home.module.css"
import TickingClock from "../../Hook/TickingClock"

function Home() {



    return (
        <>
            <Container>
                <main className={styles.informationScreen}>

                    <section className={styles.heroSection}>

                        <div className={styles.heroContent}>

                            <h1><strong>Simplify Intern</strong> <strong>Time Tracking</strong></h1>

                            <p>
                                StagyTime helps organizations efficiently track, manage, and optimize intern work hours with minimal effort.
                            </p>

                            <div className={styles.heroButtons}>

                                <button className={styles.primaryBtn}>Get Started<ChevronRight size={20} /></button>
                                <button className={styles.secondaryBtn}>Learn More</button>

                            </div>

                        </div>

                        <div className={styles.heroImage}>

                            <div className={styles.circleIcon}>  <TickingClock intervalTime={1000} size={60} color="#fff" /></div>

                        </div>

                    </section>

                    {/* Features Section */}
                    <section className={styles.featuresSection}>

                        <h2>What StagyTime Offers</h2>

                        <div className={styles.featuresGrid}>

                            <div className={styles.featureCard}>

                                <span>   <Clock color="#422680" /></span>

                                <h3>Time Tracking</h3>
                                <p>
                                    Simple clock-in/out system for interns to record their work hours accurately.
                                </p>
                            </div>

                            <div className={styles.featureCard}>

                                <span>   <BarChart3 color="#422680" /></span>
                                <h3>Reporting</h3>
                                <p>
                                    Generate detailed reports on work hours, projects, and productivity metrics.
                                </p>
                            </div>

                            <div className={styles.featureCard}>

                                <span>   <Users color="#422680" /></span>
                                <h3>Intern Management</h3>
                                <p>
                                    Easily manage intern profiles, assignments, and performance tracking.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className={styles.stagytimeSection}>

                        <h2 className={styles.stagytimeTitle}>How StagyTime Works</h2>

                        <div className={styles.stagytimeStepsGrid}>
                            {/* Passo 1 */}
                            <div className={styles.stagytimeStep}>
                                <div className={styles.stepCircle}>
                                    <span>1</span>
                                </div>
                                <h3 className={styles.stepTitle}>Register</h3>
                                <p className={styles.stepText}>Create accounts for admins and interns</p>
                            </div>

                            {/* Passo 2 */}
                            <div className={styles.stagytimeStep}>
                                <div className={styles.stepCircle}>
                                    <span>2</span>
                                </div>
                                <h3 className={styles.stepTitle}>Track Time</h3>
                                <p className={styles.stepText}>Interns log their work hours daily</p>
                            </div>

                            {/* Passo 3 */}
                            <div className={styles.stagytimeStep}>
                                <div className={styles.stepCircle}>
                                    <span>3</span>
                                </div>
                                <h3 className={styles.stepTitle}>Monitor</h3>
                                <p className={styles.stepText}>Supervisors review and approve hours</p>
                            </div>

                            {/* Passo 4 */}
                            <div className={styles.stagytimeStep}>
                                <div className={styles.stepCircle}>
                                    <span>4</span>
                                </div>
                                <h3 className={styles.stepTitle}>Report</h3>
                                <p className={styles.stepText}>Generate insights and performance reports</p>
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