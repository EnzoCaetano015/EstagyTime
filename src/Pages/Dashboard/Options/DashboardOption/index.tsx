import InfoCard from "../../../../components/InfoCard"
import * as Styled from "./dashboardOption.styled"
import { CardGrafic } from "../../../../components/CardGrafic";
import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Button from "../../../../components/Button";
import getRandomHexColor from "../../../../utils/Color";
import ProgressBar from "../../../../components/ProgressBar";
import { BriefcaseBusiness, ChartNoAxesCombined, Clock, SquareChartGantt, SquareCheckBig, Users } from "lucide-react";
import { ActivityCard } from "../../../../components/ActivityCard";
import { OptionsProps } from "../interface";

export const DashboardContent = ({ open }: OptionsProps) => {

    return (
        <>
            <Styled.InfoCardsWrapper open={open}>

                <InfoCard
                    title="Total Hours This Week"
                    icon={Clock}
                    info="1,680"
                    description="1,680 / 1,800 hours"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={50} />}
                />

                <InfoCard
                    title="Active Collaborators"
                    icon={Users}
                    info="42"
                    description="42 / 45 total"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={90} />}
                />

                <InfoCard
                    title="Tasks Completed"
                    icon={SquareChartGantt}
                    info="96"
                    description="96 / 120 tasks"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={30} />}
                />

                <InfoCard
                    title="Average Efficiency"
                    icon={ChartNoAxesCombined}
                    info="87%"
                    description="Good performance"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={10} />}
                />

            </Styled.InfoCardsWrapper>

            <Styled.GraficWrapper sx={{ mt: 4 }} open={open}>

                <CardGrafic
                    label="Weekly Hours"
                    subtitle="Total hours worked vs. target"
                    type="bar"
                    data={[
                        { name: "Week 1", worked: 1400, target: 1500 },
                        { name: "Week 2", worked: 1450, target: 1500 },
                        { name: "Week 3", worked: 1390, target: 1500 },
                        { name: "Week 4", worked: 1550, target: 1500 },
                    ]}
                />

                <CardGrafic
                    label="Task Completion"
                    subtitle="Tasks completed vs. assigned"
                    type="bar"
                    data={[
                        { name: "Week 1", worked: 1400, target: 1500 },
                        { name: "Week 2", worked: 1450, target: 1500 },
                        { name: "Week 3", worked: 1390, target: 1500 },
                        { name: "Week 4", worked: 1550, target: 1500 },
                    ]}
                />
            </Styled.GraficWrapper>

            <Styled.GraficWrapper sx={{ mt: 4 }} open={open}>

                <CardGrafic
                    label="Department Distribution"
                    subtitle="Collaborators by department"
                    type="pie"
                    data={[
                        { name: "Completed", value: 58 },
                        { name: "In Progress", value: 25 },
                        { name: "Not Started", value: 17 },
                    ]}
                />

                <Card sx={{ width: "100%" }}>

                    <CardContent>

                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="h4" sx={{ fontWeight: 600 }}>Top Performers</Typography>
                            <Button label={"View All"} onClick={() => alert('oi')} buttonStyle="Black" sx={{ paddingInline: 1 }} />
                        </Stack>

                        <Typography variant="subtitle1" color="text.secondary" mb={2}>Collaborators with highest efficiency</Typography>

                        <Stack gap={1}>
                            {[
                                { inicials: "AM", name: "Alex Morgan", job: "Project Manager", percentage: 92, task: 12, },
                                { inicials: "JB", name: "Jordan Brown", job: "QA Engineer", percentage: 90, task: 18 },
                                { inicials: "JS", name: "Jamie Smith", job: "Senior Developer", percentage: 92, task: 12 },
                                { inicials: "TJ", name: "Taylor Johnson", job: "UX Designer", percentage: 92, task: 12 },

                            ].map((item) => (

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: "#f9fafb",
                                        borderRadius: 2,
                                        p: 1.5,
                                    }}
                                >
                                    <Avatar sx={{ width: 30, height: 30, bgcolor: getRandomHexColor(), fontSize: 14 }}>
                                        {item.inicials}
                                    </Avatar>

                                    <Box sx={{ flex: 1, ml: 2 }}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: 14 }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" fontSize={12}>
                                            {item.job}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ textAlign: "right" }}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#6c4ee3", fontSize: 12 }}>
                                            {item.percentage}%
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" fontSize={12}>
                                            {item.task} tasks completed
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}

                        </Stack>

                    </CardContent>

                </Card>

            </Styled.GraficWrapper>

        </>
    )
}

export const DashboardUserContent = ({ open }: OptionsProps) => {

    const tasks = [
        { color: "#F29727", title: "Design Homepage Mockup", position: "Design ", date: "2023-07-15", status: "In Progress" },
        { color: "red", title: "Implement User Authentication", position: "Development ", date: "2023-07-10", status: "Completed" },
        { color: "#10B981", title: "Database Schema Design", position: "Development ", date: "2023-07-20", status: "Not Started" },
    ] as const;

    return (
        <>
            <Styled.InfoCardsWrapper open={open}>

                <InfoCard
                    title="Total Hours This Week"
                    icon={Clock}
                    info="37.5"
                    description="37.5 / 40 hours"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={50} />}
                />

                <InfoCard
                    title="Tasks Completed"
                    icon={SquareCheckBig}
                    info="35"
                    description="35 / 60 total"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={90} />}
                />

                <InfoCard
                    title="Efficiency Score"
                    icon={SquareChartGantt}
                    info="87%"
                    description="performance"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={30} />}
                />

                <InfoCard
                    title="Active Projects"
                    icon={BriefcaseBusiness}
                    info="3"
                    description="3 active projects"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={""}
                />

            </Styled.InfoCardsWrapper>

            <Styled.GraficWrapper sx={{ mt: 4 }} open={open}>

                <CardGrafic
                    label="Performance Overview"
                    subtitle="Your task completion and efficiency over time"
                    type="line"
                    data={[
                        { name: "Week 1", tasks: 12, hours: 35, efficiency: 85 },
                        { name: "Week 2", tasks: 14, hours: 38, efficiency: 87 },
                        { name: "Week 3", tasks: 11, hours: 34, efficiency: 82 },
                        { name: "Week 4", tasks: 17, hours: 39, efficiency: 90 },
                        { name: "Week 5", tasks: 18, hours: 37, efficiency: 95 },
                        { name: "Week 6", tasks: 16, hours: 36, efficiency: 89 },
                    ]}
                />

                <CardGrafic
                    label="Task Distribution"
                    subtitle="Current status of your tasks"
                    type="pie"
                    data={[
                        { name: "Completed", value: 58 },
                        { name: "In Progress", value: 25 },
                        { name: "Not Started", value: 17 },
                    ]}
                />

            </Styled.GraficWrapper>

            <Styled.GraficWrapper sx={{ mt: 4 }} open={open}>

                <Card sx={{ width: "100%" }}>

                    <CardContent>

                        <Typography variant="h4" sx={{ fontWeight: 600 }}>Recent Activity</Typography>
                        <Typography variant="subtitle1" color="text.secondary" mb={2}>Your latest tasks and time entries</Typography>

                        <Stack gap={1} mb={5}>

                            <Typography variant="h5" sx={{ fontWeight: 600 }}>Recent Tasks</Typography>

                            {tasks.map((task) => (

                                <Stack
                                    direction={"row"}
                                    bgcolor={"#F9FAFB"}
                                    gap={2}
                                >
                                    <Box sx={{
                                        width: "100%",
                                        '@media (max-width:600px)': {
                                            height: 155,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                    }}>
                                        <ActivityCard
                                            title={task.title}
                                            date={task.date}
                                            type={"Task"}
                                            color={task.color}
                                            position={task.position}
                                            status={task.status}
                                        />
                                    </Box>
                                </Stack>
                            ))}

                        </Stack>

                        <Stack gap={1}>

                            <Typography variant="h5" sx={{ fontWeight: 600 }}>Recent Time Entries</Typography>

                            {[

                                { title: "Website Redesign", hours: 7.5, date: "2023-07-03", qtdTask: 3 },
                                { title: "Website Redesign", hours: 8, date: "2023-07-14", qtdTask: 2 },
                                { title: "Mobile App Development", hours: 6.5, date: "2023-07-05", qtdTask: 2 },


                            ].map((task) => (
                                <Stack
                                    direction={"row"}
                                    bgcolor={"#F9FAFB"}
                                    gap={2}
                                >
                                    <Box sx={{
                                        width: "100%",
                                        '@media (max-width:600px)': {
                                            height: 155,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                    }}>
                                        <ActivityCard
                                            title={task.title}
                                            date={task.date}
                                            type={"Time"}
                                            qtdTask={task.qtdTask}
                                            hours={task.hours}
                                        />
                                    </Box>
                                </Stack>

                            ))}

                        </Stack>

                    </CardContent>

                </Card>

            </Styled.GraficWrapper>

        </>
    )
}

