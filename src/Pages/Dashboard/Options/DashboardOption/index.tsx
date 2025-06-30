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
                    title="Horas Totais Nesta Semana"
                    icon={Clock}
                    info="1.680"
                    description="1.680 / 1.800 horas"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={50} />}
                />


                <InfoCard
                    title="Colaboradores Ativos"
                    icon={Users}
                    info="42"
                    description="42 / 45 no total"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={90} />}
                />


                <InfoCard
                    title="Tarefas Concluídas"
                    icon={SquareChartGantt}
                    info="96"
                    description="96 / 120 tarefas"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={30} />}
                />

                <InfoCard
                    title="Eficiência Média"
                    icon={ChartNoAxesCombined}
                    info="87%"
                    description="Bom desempenho"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={10} />}
                />

            </Styled.InfoCardsWrapper>

            <Styled.GraficWrapper sx={{ mt: 4 }} open={open}>

                <CardGrafic
                    label="Horas Semanais"
                    subtitle="Total de horas trabalhadas vs. meta"
                    type="bar"
                    data={[
                        { name: "Semana 1", worked: 1400, target: 1500 },
                        { name: "Semana 2", worked: 1450, target: 1500 },
                        { name: "Semana 3", worked: 1390, target: 1500 },
                        { name: "Semana 4", worked: 1550, target: 1500 },
                    ]}
                />


                <CardGrafic
                    label="Conclusão de Tarefas"
                    subtitle="Tarefas concluídas vs. atribuídas"
                    type="bar"
                    data={[
                        { name: "Semana 1", worked: 1400, target: 1500 },
                        { name: "Semana 2", worked: 1450, target: 1500 },
                        { name: "Semana 3", worked: 1390, target: 1500 },
                        { name: "Semana 4", worked: 1550, target: 1500 },
                    ]}
                />

            </Styled.GraficWrapper>

            <Styled.GraficWrapper sx={{ mt: 4 }} open={open}>

                <CardGrafic
                    label="Distribuição por Departamento"
                    subtitle="Colaboradores por departamento"
                    type="pie"
                    data={[
                        { name: "Concluído", value: 58 },
                        { name: "Em Andamento", value: 25 },
                        { name: "Não Iniciado", value: 17 },
                    ]}
                />

                <Card sx={{ width: "100%" }}>

                    <CardContent>

                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="h4" sx={{ fontWeight: 600 }}>Melhores desempenhos</Typography>
                            <Button label={"View All"} onClick={() => alert('oi')} buttonStyle="Black" sx={{ paddingInline: 1 }} />
                        </Stack>

                        <Typography variant="subtitle1" color="text.secondary" mb={2}>Colaboradores com maior eficiência</Typography>

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
                                            {item.task} tarefas concluídas
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
                    title="Horas Totais Nesta Semana"
                    icon={Clock}
                    info="37.5"
                    description="37.5 / 40 horas"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={50} />}
                />


                <InfoCard
                    title="Tarefas Concluídas"
                    icon={SquareCheckBig}
                    info="35"
                    description="35 / 60 no total"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={90} />}
                />


                <InfoCard
                    title="Índice de Eficiência"
                    icon={SquareChartGantt}
                    info="87%"
                    description="desempenho"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={<ProgressBar neutral={true} value={30} />}
                />


                <InfoCard
                    title="Projetos Ativos"
                    icon={BriefcaseBusiness}
                    info="3"
                    description="3 projetos ativos"
                    typeCard="daily"
                    sx={{ bgcolor: "#fff" }}
                    children={""}
                />


            </Styled.InfoCardsWrapper>

            <Styled.GraficWrapper sx={{ mt: 4 }} open={open}>

                <CardGrafic
                    label="Visão Geral de Desempenho"
                    subtitle="Sua conclusão de tarefas e eficiência ao longo do tempo"
                    type="line"
                    data={[
                        { name: "Semana 1", tasks: 12, hours: 35, efficiency: 85 },
                        { name: "Semana 2", tasks: 14, hours: 38, efficiency: 87 },
                        { name: "Semana 3", tasks: 11, hours: 34, efficiency: 82 },
                        { name: "Semana 4", tasks: 17, hours: 39, efficiency: 90 },
                        { name: "Semana 5", tasks: 18, hours: 37, efficiency: 95 },
                        { name: "Semana 6", tasks: 16, hours: 36, efficiency: 89 },
                    ]}
                />


                <CardGrafic
                    label="Distribuição de Tarefas"
                    subtitle="Status atual das suas tarefas"
                    type="pie"
                    data={[
                        { name: "Concluídas", value: 58 },
                        { name: "Em Andamento", value: 25 },
                        { name: "Não Iniciadas", value: 17 },
                    ]}
                />

            </Styled.GraficWrapper>

            <Styled.GraficWrapper sx={{ mt: 4 }} open={open}>

                <Card sx={{ width: "100%" }}>

                    <CardContent>

                        <Typography variant="h4" sx={{ fontWeight: 600 }}>Atividade recente</Typography>
                        <Typography variant="subtitle1" color="text.secondary" mb={2}>Suas últimas tarefas e pontos</Typography>

                        <Stack gap={1} mb={5}>

                            <Typography variant="h5" sx={{ fontWeight: 600 }}>Tarefas recentes</Typography>

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

                            <Typography variant="h5" sx={{ fontWeight: 600 }}>Pontos recentes</Typography>

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
                                            icon={Clock}
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

