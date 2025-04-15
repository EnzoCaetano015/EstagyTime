import { fadeInVariant } from "../../Hook/Motion/Motion";
import Button from "../Button/Button_Comp";
import { motion } from "framer-motion";
import styles from "./Footer.module.css"
import { useNavigate } from "react-router-dom";

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
                <section className={styles.ctaSection}>
                    <motion.div
                        initial={fadeInVariant.hidden}
                        whileInView={fadeInVariant.visible}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2>{title}</h2>
                        <p>
                            {description}
                        </p>
                        <motion.div
                            className={styles.ctaButtons}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        >
                            <Button
                                label="Start Free Trial"
                                onClick={() => alert('Start Free Trial clicked!')}
                                height="40px"
                                width="120px"
                                styleVariant={2} // Purple background
                            />
                            <Button
                                label="Schedule Demo"
                                onClick={() => navigate('/Demo')}
                                height="40px"
                                width="120px"
                                styleVariant={2} // Purple background
                            />
                        </motion.div>
                        <div className={styles.notes}>
                            <span>{icon}{text}</span>
                            <span>{icon}{text2}</span>
                        </div>
                    </motion.div>
                </section>
            ) : (
                <footer className={styles.footer}>

                    <div className={styles.bottomBar}>
                        <p>© {new Date().getFullYear()} StagyTime</p>
                    </div>
                </footer>
            )}

        </>
    )
}

export default Footer