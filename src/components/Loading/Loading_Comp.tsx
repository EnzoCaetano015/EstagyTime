import styles from "./Loading.module.css";
import { useRef } from "react";
import useInView from "../../Hook/Hook";
import TickingClock from "../../Hook/TickingClock";
import { motion } from "framer-motion";

function Loading({ text }: { text: string }) {
  const logoref = useRef<HTMLDivElement>(null);
  const islogoVisible = useInView(logoref);

  return (
    <div className={styles.splashContainer}>
      <div className={styles.logoContainer}>
        {/* The animated logoIcon is now a motion.div */}
        <motion.div
          ref={logoref}
          className={`${styles.logoIcon} About`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={islogoVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TickingClock intervalTime={500} size={40} />
        </motion.div>

        <h1>
          <strong>Stagy</strong>
          <strong>Time</strong>
        </h1>

        <p style={{ whiteSpace: "pre-line" }}>{text}</p>
      </div>

      <div className={styles.dotsContainer}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}

export default Loading;
