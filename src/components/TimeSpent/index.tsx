import { Box, TextField, Typography } from "@mui/material"
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui";
import * as Styled from "./timeSpent.styled"


interface TimeSpentProps {
    timeFormat?: "hours" | "days" | "dates"
}

export default function TimeSpent({ timeFormat }: TimeSpentProps) {

    const customStyles = useCustomSelectStyles();

    return (
        <Box>
            {timeFormat === "hours" && (

                <Styled.TimeSpentBox>
                    <TextField sx={customStyles} id="hours-spent" type="number" defaultValue="3" InputProps={{ inputProps: { min: 0, step: 0.5 } }} />
                    <TextField sx={customStyles} id="minutes-spent" type="number" defaultValue="45" InputProps={{ inputProps: { min: 0, max: 59 } }} />
                </Styled.TimeSpentBox>
            )}

            {timeFormat === "days" && (

                <Styled.TimeSpentBox>
                    <TextField sx={customStyles} id="days-spent" type="number" defaultValue="0" InputProps={{ inputProps: { min: 0, step: 0.5 } }} />
                    <TextField sx={customStyles} id="hours-in-day" type="number" defaultValue="8" InputProps={{ inputProps: { min: 1, max: 24 } }} />
                </Styled.TimeSpentBox>
            )}

            {timeFormat === "dates" && (

                <Styled.TimeSpentBox>

                    <Box sx={{ position: "relative" }}>

                        <Typography variant="subtitle2" sx={{ color: "#6B7280" }} >Data de início</Typography>

                        <Box sx={{ position: "relative" }}>
                            <TextField sx={customStyles} fullWidth id="start-date" type="date" />
                        </Box>

                    </Box>

                    <Box sx={{ position: "relative" }}>

                        <Typography variant="subtitle2" sx={{ color: "#6B7280" }} >Data de término</Typography>

                        <Box sx={{ position: "relative" }}>
                            <TextField sx={customStyles} fullWidth id="end-date" type="date" />
                        </Box>

                    </Box>

                </Styled.TimeSpentBox>
            )}
        </Box>
    )
}