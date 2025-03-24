import styles from "./Loading.module.css"

import "../../Hook/Hook.css"
import { useRef,  } from "react";
import useInView from "../../Hook/Hook";
import TickingClock from "../../Hook/TickingClock";

function Loading({ text }: { text: string }) {

    const logoref = useRef<HTMLDivElement>(null)
    const islogoVisible = useInView(logoref)

    return (
        <div className={styles.splashContainer}>

            <div className={styles.logoContainer}>

                <div className={`${styles.logoIcon} About fade-in-section ${islogoVisible ? 'is-visible' : ''}`}
                    ref={logoref}>
                      <TickingClock intervalTime={500} size={40}/></div>

                <h1>
                    <strong>Stagy</strong><strong>Time</strong>
                </h1>

                <p style={{ whiteSpace: 'pre-line' }}>{text}</p>

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
