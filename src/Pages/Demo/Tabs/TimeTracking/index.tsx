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


import { useCustomSelectStyles } from "../../../../Hook/Mui/StyleMui"

import { motion } from "framer-motion";
import { fadeInVariant, slideInVariant } from "../../../../utils/Motion";

import { DemoCard as StyledCard } from "../../Demo.styled"
import * as Styled from "./timeTrack.styled"
import { Box, Stack } from "@mui/material";
import CustomSelect from "../../../../components/Select";
import TimeSpent from "../../../../components/TimeSpent";


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
                        Demonstração de controle de tempo
                    </Typography>
                    <Typography className={"cardDescription"}>
                        Acompanhe suas horas de trabalho e atribua tempo para tarefas específicas.
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
                            Horário Diário
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
                                        Horas trabalhadas hoje
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
                                    Progresso diário (meta de 8 horas)
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
                            Seleção de Tarefas
                        </motion.h1 >

                        <Styled.TaskBox
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <CustomSelect
                                title={""}
                                label={"Seleção de Tarefas"}
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
                                    title={"Projetos"}
                                    label={""}
                                    initialValue="Company Website"
                                    options={[
                                        { value: "Company Website", label: "Company Website" },
                                        { value: "Mobile App", label: "Mobile App" },
                                        { value: "Marketing Campaign", label: "Marketing Campaign" },
                                    ]}
                                />

                                <CustomSelect
                                    title={"Dificuldade"}
                                    label={"Dificuldade"}
                                    displayEmpty
                                    options={[
                                        { value: "all", label: "Todas" },
                                        { value: "low", label: "Baixa" },
                                        { value: "medium", label: "Média" },
                                        { value: "high", label: "Alta" },
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
                            Tempo gasto
                        </motion.h1>

                        <Styled.TaskBox
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >

                            <Box>
                                <Typography variant="subtitle2" sx={{ color: "#6B7280" }}>
                                    Formato de hora
                                </Typography>

                                <RadioGroup
                                    sx={customStyles}
                                    row
                                    value={timeFormat}
                                    onChange={(_event, value) => setTimeFormat(value as "hours" | "days" | "dates")}
                                >
                                    <FormControlLabel value="hours" control={<Radio />} label="Horas" />
                                    <FormControlLabel value="days" control={<Radio />} label="Dias" />
                                    <FormControlLabel value="dates" control={<Radio />} label="Período" />
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