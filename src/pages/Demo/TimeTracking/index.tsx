import { useState } from "react";
import {
    Clock,
} from "lucide-react";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";


import { useCustomSelectStyles } from "../../../Hook/Mui/StyleMui"

import { motion } from "framer-motion";
import { fadeInVariant, slideInVariant } from "../../../utils/Motion";

import { DemoCard as StyledCard } from "../Demo.styled"
import * as Styled from "./timeTrack.styled"
import { Box, Stack } from "@mui/material";
import CustomSelect from "../../../components/Select";
import TimeSpent from "../../../components/TimeSpent";


export default function TimeTracking() {
    const customStyles = useCustomSelectStyles();

    const [timeFormat, setTimeFormat] = useState<"hours" | "days" | "dates">("hours");

    // Demo values
    const hoursToday = 6.5;

    return (
        <>
            <StyledCard >

                <motion.div
                    className={"cardHeader"}
                    initial={slideInVariant.hidden}
                    whileInView={slideInVariant.visible}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}

                >
                    <Typography variant="h1" className={"cardTitle"}>
                        Time Tracking Demo
                    </Typography>
                    <Typography className={"cardDescription"}>
                        Track your work hours and assign time to specific tasks.
                    </Typography>

                </motion.div>

                <CardContent className={"cardContent"}>

                    <Styled.Field>

                        <motion.h1
                            className={"fieldLabel"}
                            initial={slideInVariant.hidden}
                            whileInView={slideInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            Daily Hours
                        </motion.h1 >

                        <Styled.TaskBox
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >

                            <Stack sx={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

                                <Stack>

                                    <Typography variant="subtitle2" sx={{ color: "#6B7280" }} >
                                        Hours worked today
                                    </Typography>

                                    <Typography component={"span"} sx={{ fontSize: "25px", fontWeight: "bold", color: "#422680" }} >
                                        {hoursToday} hrs
                                    </Typography >

                                </Stack>

                                <Box className={"hoursIconBox"}>
                                    <Clock size={"2rem"} color="#422680" />
                                </Box>

                            </Stack>

                            <Box sx={{ pt: "5px", borderTop: "1px solid #e5e7eb" }}>

                                <Typography variant="subtitle2" sx={{ color: "#6B7280" }} >
                                    Daily progress (8 hours target)
                                </Typography>

                                <Box className={"progressContainer"}>
                                    <LinearProgress
                                        value={hoursToday * 12.5}
                                        variant="determinate"
                                        className={"progressBar"}
                                        sx={{
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#000',
                                            },
                                        }}

                                    />
                                    <Typography component={"span"} sx={{ fontSize: "0.875rem", fontWeight: "500", width: "4rem" }}>
                                        {Math.round(hoursToday * 12.5)}%
                                    </Typography>
                                </Box>

                            </Box>
                        </Styled.TaskBox >
                    </Styled.Field>

                    <Styled.Field>

                        <motion.h1
                            className={"fieldLabel"}
                            initial={slideInVariant.hidden}
                            whileInView={slideInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            Task Selection
                        </motion.h1 >

                        <Styled.TaskBox
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <CustomSelect
                                title={""}
                                label={"Task Selection"}
                                displayEmpty={true}
                                options={[
                                    { value: "development", label: "Web Development" },
                                    { value: "design", label: "UI/UX Design" },
                                    { value: "research", label: "Market Research" },
                                    { value: "content", label: "Content Creation" },
                                    { value: "meeting", label: "Team Meetings" },
                                    { value: "training", label: "Training" },
                                ]}
                            />

                            <Box className={"taskSubFields"}>


                                <CustomSelect
                                    title={"Project"}
                                    label={""}
                                    initialValue="Company Website"
                                    options={[
                                        { value: "Company Website", label: "Company Website" },
                                        { value: "Mobile App", label: "Mobile App" },
                                        { value: "Marketing Campaign", label: "Marketing Campaign" },
                                    ]}
                                />

                                <CustomSelect
                                    title={"Priority"}
                                    label={""}
                                    initialValue="low"
                                    options={[
                                        { value: "low", label: "Low" },
                                        { value: "medium", label: "Medium" },
                                        { value: "high", label: "High" },
                                    ]}
                                />

                            </Box>
                        </Styled.TaskBox>
                    </Styled.Field>


                    <Styled.Field>

                        <motion.h1
                            className={"fieldLabel"}
                            initial={slideInVariant.hidden}
                            whileInView={slideInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            Time Spent
                        </motion.h1>

                        <Styled.TaskBox
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >

                            <Box>
                                <Typography variant="subtitle2" sx={{ color: "#6B7280" }}>
                                    Time Format
                                </Typography>

                                <RadioGroup
                                    sx={customStyles}
                                    row
                                    value={timeFormat}
                                    onChange={(_event, value) => setTimeFormat(value as "hours" | "days" | "dates")}
                                >
                                    <FormControlLabel value="hours" control={<Radio />} label="Hours" />
                                    <FormControlLabel value="days" control={<Radio />} label="Days" />
                                    <FormControlLabel value="dates" control={<Radio />} label="Date Range" />
                                </RadioGroup>
                            </Box>

                            <TimeSpent timeFormat={timeFormat} />

                        </Styled.TaskBox>

                    </Styled.Field>

                </CardContent>
            </StyledCard>
        </>
    )
}