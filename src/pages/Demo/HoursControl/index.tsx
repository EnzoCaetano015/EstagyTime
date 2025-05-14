
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { fadeInVariant, slideInVariant } from "../../../utils/Motion";
import { DemoCard as StyledCard } from "../Demo.styled"
import * as Styled from "./hoursControl.styled"
import { Box, Card, Stack } from "@mui/material";
import CustomSelect from "../../../components/Select";
import { SmallTitle, Subtitle, Title } from "../../../components/Text";
import ProgressBar from "../../../components/ProgressBar/index";
import InfoCard from "../../../components/InfoCard";



export default function HoursControl() {

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const monthOptions = meses.map(nome => ({
        value: `${nome} ${new Date().getFullYear()}`,
        label: `${nome} ${new Date().getFullYear()}`
    }));

    const hoursThisMonth = 142;
    const hoursRemaining = 38;
    const monthlyProgress = (hoursThisMonth / 180) * 100;

    const currentHours = 178;
    const targetHours = 180;

    return (
        <>
            <StyledCard>

                <motion.div
                    className={"cardHeader"}
                    initial={slideInVariant.hidden}
                    whileInView={slideInVariant.visible}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >

                    <Typography variant="h1" className={"cardTitle"}>
                        Monthly Hours Control
                    </Typography>

                    <Typography className={"cardDescription"}>
                        Track your progress towards your monthly hour target of 180 hours.
                    </Typography>

                </motion.div>

                <CardContent className={"cardContent"}>

                    <Styled.GraficBox sx={{ gridTemplateColumns: "1fr 1fr", }}>

                        <Card
                            component={motion.div}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            sx={{ p: "20px", gap: 4, display: "flex", flexDirection: "column" }}

                        >

                            <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }} >

                                <SmallTitle color="black" text="Monthly Progress" bold={true} />

                                <CustomSelect
                                    title={""}
                                    initialValue="Janeiro 2025"
                                    label={monthOptions[0].value}
                                    options={monthOptions}
                                    sx={{ height: 35 }}
                                />

                            </Stack>

                            <Stack sx={{ alignItems: "center" }}>

                                <Box className={"progressCircleWrapper"}>

                                    <Stack className={"progressCircle"}>

                                        <Title color="purple" text={`${Math.round(monthlyProgress)}%`} />

                                        <Subtitle color="grey" text="Completed" />

                                    </Stack>

                                    <svg className={"progressSvg"} viewBox="0 0 100 100">

                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            fill="none"
                                            stroke="#422680"
                                            strokeWidth="10"
                                            strokeDasharray="283"
                                            strokeDashoffset={283 - (283 * monthlyProgress) / 100}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                        />

                                    </svg>
                                </Box>

                                <Stack className="progressStatus">

                                    <Box sx={{ textAlign: "center" }}>
                                        <Subtitle color="grey" text="Hours Worked" />
                                        <SmallTitle color="purple" text={`${hoursThisMonth}`} />
                                    </Box>

                                    <Box sx={{ textAlign: "center" }}>
                                        <Subtitle color="grey" text="Hours Remaining" />
                                        <SmallTitle color="purple" text={`${hoursRemaining}`} />
                                    </Box>

                                </Stack>
                            </Stack>
                        </Card>

                        <Card
                            component={motion.div}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            sx={{ p: "20px", }}
                        >

                            <SmallTitle color="black" text="Daily Breakdown" bold={true} />

                            <Stack gap={1} mt={1}>
                                {[
                                    { day: "Monday", date: "June 5", hours: 8.5, color: "green" },
                                    { day: "Tuesday", date: "June 6", hours: 7.75, color: "green" },
                                    { day: "Wednesday", date: "June 7", hours: 8, color: "green" },
                                    { day: "Thursday", date: "June 8", hours: 6.5, color: "yellow" },
                                    { day: "Friday", date: "June 9", hours: 4.25, color: "red" },

                                ].map((item, index) => (

                                    <Stack className="graficConatiner" key={index} sx={{ alignItems: "center", flexDirection: "row", gap: 5 }}>

                                        <Box >

                                            <Typography variant="body2">
                                                {item.day}
                                            </Typography>

                                            <Typography variant="caption">
                                                {item.date}
                                            </Typography>

                                        </Box>

                                        <ProgressBar value={(item.hours / 8) * 90} sx={{ width: 200 }} />

                                        <Typography variant="body2">
                                            {item.hours} hrs
                                        </Typography>

                                    </Stack>

                                ))}

                            </Stack>

                            <Stack className={"weeklySummary"}>

                                <Typography variant="subtitle2">
                                    Weekly Summary
                                </Typography>

                                <Stack className={"weeklySummaryContent"}>

                                    <Typography variant="body2">
                                        <strong>35 hrs</strong> / 40 hrs
                                    </Typography>

                                    <Typography variant="body2">
                                        87.5% of target
                                    </Typography>

                                </Stack>
                            </Stack>

                        </Card>
                    </Styled.GraficBox>

                    <Styled.GraficBox sx={{ gridTemplateColumns: "none" }}>
                        <Card
                            component={motion.div}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            sx={{ mt: 2, p: "20px", gap: 2, display: "flex", flexDirection: "column" }}
                        >

                            <SmallTitle color="black" text="Monthly Projection" bold={true} />

                            <Box className={"projectionGrid"}>

                                <motion.div
                                    initial={fadeInVariant.hidden}
                                    whileInView={fadeInVariant.visible}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                >
                                    <InfoCard
                                        title="Current Pace"
                                        info="178 hrs"
                                        description={currentHours < targetHours ? "2 hrs short" : "On target"}
                                        typeCard="current" children={undefined}
                                    />

                                </motion.div>

                                <motion.div
                                    initial={fadeInVariant.hidden}
                                    whileInView={fadeInVariant.visible}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                >
                                    <InfoCard
                                        title="Daily Average"
                                        info="7.1 hrs"
                                        description="Need 7.2 hrs/day"
                                        typeCard="daily" children={undefined}
                                    />

                                </motion.div >

                                <motion.div
                                    initial={fadeInVariant.hidden}
                                    whileInView={fadeInVariant.visible}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                                >
                                    <InfoCard
                                        title="Completion Date"
                                        info="June 29"
                                        description="1 day early"
                                        typeCard="completed" children={undefined}
                                    />

                                </motion.div >

                            </Box>

                            <Stack sx={{ borderTop: "1px solid #e5e7eb;", paddingBlock: 2 }}>

                                <Stack className={"projectionProgressHeader"}>

                                    <Typography variant="body2">
                                        Required Daily Hours to Meet Target
                                    </Typography>

                                    <Typography variant="body2" >
                                        7.2 hrs/day
                                    </Typography>

                                </Stack>

                                <ProgressBar value={monthlyProgress} neutral={true} />

                            </Stack>
                        </Card>
                    </Styled.GraficBox>
                </CardContent>
            </StyledCard>
        </>
    )
}