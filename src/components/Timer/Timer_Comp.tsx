import { useState, useEffect, useRef } from "react";
import styles from "./Timer.module.css"; // adjust the path to your CSS module
import {
    Play,
    Pause,
    Square,
} from "lucide-react";

const Timer = () => {
    const [timerState, setTimerState] = useState("idle"); // "idle", "running", or "paused"
    const [time, setTime] = useState(0); // time in seconds
    const intervalRef = useRef(0);

    // Format seconds into "HH : MM : SS"
    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const pad = (num: number) => String(num).padStart(2, "0");
        return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
    };

    // Effect to handle the running timer
    useEffect(() => {
        // Start the timer if state is "running"
        if (timerState === "running") {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            // Clear the timer when paused or idle
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = 0;
            }
        }
        // Cleanup on unmount or state change
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = 0;
            }
        };
    }, [timerState]);

    return (
        <div className={styles.timerBox}>
            <div className={styles.timerDisplay}>
                {timerState === "idle" ? "00 : 00 : 00" : formatTime(time)}
            </div>
            <div className={styles.timerButtons}>
                <button
                    className={`${styles.timerButton} ${timerState === "running" ? styles.disabledButton : styles.startButton}`}
                    onClick={() => setTimerState("running")}
                    disabled={timerState === "running"}
                >
                    <Play className={styles.buttonIcon} />
                    Start
                </button>
                <button
                    className={`${styles.timerButton} ${timerState === "paused" ? styles.disabledButton : styles.pauseButton}`}
                    onClick={() => setTimerState("paused")}
                    disabled={timerState === "paused" || timerState === "idle"}
                >
                    <Pause className={styles.buttonIcon} />
                    Pause
                </button>
                <button
                    className={`${styles.timerButton} ${styles.finishButton}`}
                    onClick={() => {
                        setTimerState("idle");
                        setTime(0);
                    }}
                    disabled={timerState === "idle"}
                >
                    <Square className={styles.buttonIcon} />
                    Finish
                </button>
            </div>
        </div>
    );
};

export default Timer;
