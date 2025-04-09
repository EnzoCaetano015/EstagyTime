import { ArrowLeft } from "lucide-react"
import styles from "./Header.module.css"
import { useNavigate } from "react-router-dom"
import TickingClock from "../../Hook/TickingClock"
import { motion } from "framer-motion";
import { slideInVariant } from "../../Hook/Motion/Motion";

export default function Header() {

  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <motion.div
        className={styles.headerContainer}
        initial="hidden"
        whileInView="visible"
        variants={slideInVariant}
      >
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <TickingClock intervalTime={1000} size={20} color="#fff" />
          </div>
          <h1 className={styles.headerTitle}>
            Stagy<span>Time</span>
          </h1>
        </div>
        <button className={styles.backButton} onClick={() => { navigate('/Home') }}>
          <ArrowLeft size={15} /> Back to Home
        </button>
      </motion.div >
    </header>
  )
}