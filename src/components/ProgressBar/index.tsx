import { Box, LinearProgressProps } from "@mui/material";
import * as Styled from "./progressBar.styled"

export interface ProgressBarProps extends LinearProgressProps {
    Barcolor?: string;
    neutral?: boolean;
    customize?: boolean;
}

export default function ProgressBar({ value = 0, neutral = false, customize = false, Barcolor, ...rest }: ProgressBarProps) {

    let barColor: string;
    if (neutral) {
        barColor = "#000000";
    } else if (customize && Barcolor) {
        barColor = Barcolor;
    } else {
        if (value <= 49.9) {
            barColor = "#ef4444"; // vermelho
        } else if (value <= 70) {
            barColor = "#eab308"; // amarelo
        } else {
            barColor = "#22c55e"; // verde
        }
    }

    return (
        <Box>
            <Styled.ProgressBar
                variant="determinate"
                value={value}
                barColor={barColor}
                {...rest}
            />
        </Box>
    )
}