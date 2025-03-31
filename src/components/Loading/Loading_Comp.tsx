import styles from "./Loading.module.css";
import TickingClock from "../../Hook/TickingClock";
import { motion } from "framer-motion";
import { fadeInVariant } from "../Motion/Motion";

function Loading({ text }: { text: string }) {

  return (
    <div className={styles.splashContainer}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        transition={{ duration: 0.6,  ease: "easeOut" }}
      >
        <motion.div className={styles.logoContainer}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >

          <div className={styles.logoIcon}>
            <TickingClock intervalTime={500} size={40} />
          </div>

          <h1>
            <strong>Stagy</strong>
            <strong>Time</strong>
          </h1>

          <p style={{ whiteSpace: "pre-line" }}>{text}</p>
        </motion.div>

        <div className={styles.dotsContainer}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </motion.div>
    </div>
  );
}

export default Loading;