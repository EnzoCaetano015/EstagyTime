import { useState, useEffect, useRef } from "react";
import {
    Play,
    Pause,
    Square,
} from "lucide-react";
import { Box, ButtonBase, Stack } from "@mui/material";
import * as Styled from "./timer.styled"

const Timer = () => {

    const [timerState, setTimerState] = useState("idle");
    const [time, setTime] = useState(0);
    const intervalRef = useRef(0);

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const pad = (num: number) => String(num).padStart(2, "0");
        return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
    };

    useEffect(() => {

        if (timerState === "running") {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = 0;
            }
        }
        return () => {

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = 0;
            }
        };
    }, [timerState]);

    return (
        <Styled.Timer >

            <Box className={"timerDisplay"}>
                {timerState === "idle" ? "00 : 00 : 00" : formatTime(time)}
            </Box>

            <Stack sx={{ gap: 1, flexDirection: "row", justifyContent: "center" }}>

                <ButtonBase
                    className={"timerButton"}
                    onClick={() => setTimerState("running")}
                    disabled={timerState === "running"}
                    sx={{
                        bgcolor: timerState === "running" ? "#D1D5DB" : "#422680",
                        color: timerState === "running" ? "#6B7280" : "#fff",
                    }}
                >
                    <Play size={15} /> Start
                </ButtonBase>

                <ButtonBase
                    className={"timerButton"}
                    onClick={() => setTimerState("paused")}
                    disabled={timerState === "paused" || timerState === "idle"}
                    sx={{
                        bgcolor: timerState === "paused" ? "#D1D5DB" : "#F59E0B",
                        color: timerState === "paused" ? "#6B7280" : "#fff",
                    }}
                >
                    <Pause size={15} /> Pause
                </ButtonBase>

                <ButtonBase
                    className={"timerButton"}
                    onClick={() => {
                        setTimerState("idle");
                        setTime(0);
                    }}
                    disabled={timerState === "idle"}
                    sx={{
                        bgcolor: "#EF4444",
                        color: "#fff",
                    }}
                >
                    <Square size={15} /> Finish
                </ButtonBase>

            </Stack>
        </Styled.Timer>
    );
};

export default Timer;
