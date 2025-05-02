import InfoCard from "../../../../components/InfoCard"
import * as Styled from "./dashboardOption.styled"
import { CardGrafic } from "../../../../components/CardGrafic";
import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Button from "../../../../components/Button";
import getRandomHexColor from "../../../../utils/Color";
import ProgressBar from "../../../../components/ProgressBar";
import { ChartNoAxesCombined, Clock, SquareChartGantt, Users } from "lucide-react";

export const DashboardContent = () => {

    return (
        <>
            <Styled.InfoCardsWrapper>

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

            <Styled.GraficWrapper sx={{ mt: 4 }}>

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

            <Styled.GraficWrapper sx={{ mt: 4 }}>

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