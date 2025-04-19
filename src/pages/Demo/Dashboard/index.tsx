import Typography from "@mui/material/Typography";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { fadeInVariant, slideInVariant } from "../../../utils/Motion";
import { DemoCard as StyledCard } from "../demo.styled"
import * as Styled from "./dashboard.styled"
import { Box, Card, Stack } from "@mui/material";
import CustomSelect from "../../../components/Select";
import InfoCard from "../../../components/InfoCard";
import { SmallTitle } from "../../../components/Text";
import ProgressBar from "../../../components/ProgressBar";

const performanceData = [
    { name: "Week 1", tasks: 5, hours: 35, efficiency: 85 },
    { name: "Week 2", tasks: 8, hours: 38, efficiency: 82 },
    { name: "Week 3", tasks: 7, hours: 42, efficiency: 78 },
    { name: "Week 4", tasks: 10, hours: 45, efficiency: 88 },
    { name: "Week 5", tasks: 12, hours: 40, efficiency: 92 },
    { name: "Week 6", tasks: 9, hours: 37, efficiency: 86 },
    { name: "Week 7", tasks: 11, hours: 43, efficiency: 90 },
    { name: "Week 8", tasks: 14, hours: 46, efficiency: 94 },
];

export default function Dashboard() {

    return (
        <>
            <StyledCard>

                <Box
                    component={motion.div}
                    className={"cardHeader"}
                    initial={slideInVariant.hidden}
                    whileInView={slideInVariant.visible}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    sx={{ display: "flex", flexDirection: "row" }}
                >

                    <Box sx={{ flex: 1 }}>

                        <Typography variant="h1" className={"cardTitle"}>
                            Performance Dashboard
                        </Typography>

                        <Typography className={"cardDescription"}>
                            Track your productivity and efficiency over time.
                        </Typography>

                    </Box>

                    <CustomSelect
                        title={""}
                        label={""}
                        initialValue="week"
                        options={[
                            { value: "week", label: "Weekly" },
                            { value: "month", label: "Monthly" },
                            { value: "semester", label: "Semester" },
                            { value: "year", label: "Yearly" },
                        ]}
                    />

                </Box>

                <Styled.Dashboard>

                    <Box className={"metricsGrid"}>

                        <motion.div
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <InfoCard
                                title="Tasks Completed"
                                info="76 Tasks"
                                description="↑ 12% from last period"
                                typeCard="completed"
                            />

                        </motion.div>

                        <motion.div
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        >

                            <InfoCard
                                title="Avg. Time per Task"
                                info="3.2 hrs"
                                description="↓ 8% from last period"
                                typeCard="completed"
                            />

                        </motion.div>

                        <motion.div
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        >

                            <InfoCard
                                title=">Efficiency Score"
                                info="87%"
                                description="↑ 5% from last period"
                                typeCard="completed"
                            />

                        </motion.div>

                        <motion.div
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}

                        >

                            <InfoCard
                                title="On-time Completion"
                                info="92%"
                                description="↑ 3% from last period"
                                typeCard="completed"
                            />

                        </motion.div>

                    </Box>

                    <Card
                        component={motion.div}
                        initial={fadeInVariant.hidden}
                        whileInView={fadeInVariant.visible}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        sx={{ p: "20px" }}
                    >

                        <SmallTitle color="black" text="Performance Trendss" bold={true} />

                        <Box sx={{ height: 330, p: 2 }}>

                            <ResponsiveContainer width="95%" height="100%">

                                <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="tasks" stroke="#422680" activeDot={{ r: 8 }} strokeWidth={2} />
                                    <Line type="monotone" dataKey="hours" stroke="#777777" strokeWidth={2} />
                                    <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} />

                                </LineChart>

                            </ResponsiveContainer>

                        </Box>

                    </Card>

                    <Stack className={"taskBreakdownBox"}>

                        <Card
                            component={motion.div}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            sx={{ width: "100%", p: "20px" }}

                        >
                            <SmallTitle color="black" text="Task Breakdown" bold={true} />

                            <Stack gap={3} mt={1}>

                                {[
                                    { name: "Web Development", hours: 45, percentage: 32, color: "rgb(0, 174, 255)" },
                                    { name: "UI/UX Design", hours: 28, percentage: 20, color: "rgb(214, 14, 214)" },
                                    { name: "Market Research", hours: 22, percentage: 15, color: "#22c55e" },
                                    { name: "Content Creation", hours: 18, percentage: 13, color: "#eab308" },
                                    { name: "Team Meetings", hours: 15, percentage: 10, color: "#ef444" },
                                    { name: "Training", hours: 14, percentage: 10, color: "rgb(139, 32, 216)" },

                                ].map((item, index) => (

                                    <Box key={index}>

                                        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>

                                            <Typography variant="body2">
                                                {item.name}
                                            </Typography>

                                            <Typography variant="caption">
                                                {item.hours} hrs ({item.percentage}%)
                                            </Typography>

                                        </Stack>

                                        <ProgressBar value={item.percentage} customize={true} sx={{ width: "100%" }} Barcolor={item.color} />

                                    </Box>
                                ))}
                            </Stack>

                        </Card>

                        <Card
                            component={motion.div}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            sx={{ width: "100%", p: "20px" }}
                        >
                            <SmallTitle color="black" text="Productivity by Day" bold={true} />

                            <Stack gap={3} mt={1}>

                                {[
                                    { day: "Monday", efficiency: 92, hours: 8.5 },
                                    { day: "Tuesday", efficiency: 88, hours: 7.8 },
                                    { day: "Wednesday", efficiency: 85, hours: 8.2 },
                                    { day: "Thursday", efficiency: 78, hours: 6.5 },
                                    { day: "Friday", efficiency: 82, hours: 7.0 },

                                ].map((item, index) => (

                                    <Box key={index}>

                                        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>

                                            <Typography variant="body2">
                                                {item.day}
                                            </Typography>

                                            <Typography variant="caption">
                                                {item.efficiency}% efficiency · {item.hours} hrs
                                            </Typography>

                                        </Stack>

                                        <ProgressBar value={item.efficiency} sx={{ width: "100%" }} />

                                    </Box>
                                ))}
                            </Stack>

                            <Stack className={"weeklySummary"}>

                                <Typography variant="subtitle2" >
                                    Weekly Average
                                </Typography>

                                <Typography variant="body2" >
                                    85% efficiency
                                </Typography>

                            </Stack>

                        </Card>

                    </Stack>
                </Styled.Dashboard>
            </StyledCard>
        </>
    )
}