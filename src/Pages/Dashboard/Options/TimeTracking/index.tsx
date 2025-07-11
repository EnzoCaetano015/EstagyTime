import { Box, Card, CardContent, Stack, TextField, Typography } from "@mui/material"
import * as Styled from "./timeTracking.styled"
import * as Styles from "../../../Demo/Tabs/HoursControl/hoursControl.styled"
import Timer from "../../../../components/Timer"
import CustomSelect from "../../../../components/Select"
import { useCustomSelectStyles } from "../../../../Hook/Mui/StyleMui"
import { OptionsProps } from "../interface"
import { Funnel } from "lucide-react"
import Button from "../../../../components/Button"
import { ActivityCard } from "../../../../components/ActivityCard"
import { SmallTitle, Title, Subtitle } from "../../../../components/Text"
import ProgressBar from "../../../../components/ProgressBar"

export const TimeTracking = ({ open }: OptionsProps) => {

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

    // const currentHours = 178; 
    // const targetHours = 180;

    const customStyles = useCustomSelectStyles();

    return (
        <>
            <Styled.TimeTrackerWrapper open={open}>

                <CardContent>

                    <Typography variant="h4" sx={{ fontWeight: 600 }}>Rastreador de tempo</Typography>
                    <Typography variant="subtitle1" color="text.secondary" mb={2}>Acompanhe suas horas de trabalho para tarefas e projetos</Typography>

                    <Stack className="timerWrapper" gap={2}>

                        <Box className="timerBox">
                            <Timer />
                        </Box>

                        <Stack flex={1} gap={2} >
                            <CustomSelect
                                title={"Projetos"}
                                label={""}
                                initialValue="Company Website"
                                options={[
                                    { value: "Company Website", label: "Company Website" },
                                    { value: "Mobile App", label: "Mobile App" },
                                    { value: "Marketing Campaign", label: "Marketing Campaign" },
                                ]}
                                sx={{ height: 35 }}
                            />

                            <CustomSelect
                                title={"Tarefa"}
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
                                sx={{ height: 35 }}
                            />

                            <Box>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ pb: 1 }}>Descrição</Typography>
                                <TextField
                                    type="text"
                                    placeholder="No que você está trabalhando?"
                                    fullWidth
                                    size="small"
                                    sx={customStyles}
                                />
                            </Box>



                            <Stack direction={"row"} gap={1}>

                                <CustomSelect
                                    title={"Dificuldade"}
                                    label={""}
                                    initialValue="low"
                                    options={[
                                        { value: "low", label: "Baixa" },
                                        { value: "medium", label: "Média" },
                                        { value: "high", label: "Alta" },
                                    ]}
                                    sx={{
                                        width: !open ? 300 : 200,
                                        height: 35,
                                        "@media (max-width:450px)": {
                                            width: 150,
                                        },
                                        "@media (max-width:400px)": {
                                            width: 100,
                                        },
                                    }}
                                />

                                <CustomSelect
                                    title={"Setor"}
                                    label={""}
                                    initialValue="dev"
                                    options={[
                                        { value: "dev", label: "Development" },
                                        { value: "design", label: "Design" },
                                        { value: "marketing", label: "Marketing" },
                                        { value: "qa", label: "QA" },
                                    ]}
                                    sx={{
                                        width: !open ? 300 : 200,
                                        height: 35,
                                        "@media (max-width:450px)": {
                                            width: 150,
                                        },
                                        "@media (max-width:400px)": {
                                            width: 100,
                                        },
                                    }}
                                />

                            </Stack>

                        </Stack>

                    </Stack>

                </CardContent>

            </Styled.TimeTrackerWrapper>

            <Styled.TimeLogsWrapper sx={{ mt: 3 }}>

                <CardContent>
                    <Stack gap={2} mb={3}>

                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 600 }}>Registros de tempo</Typography>
                                <Typography variant="subtitle1" color="text.secondary" mb={2}>Seus pontos recentes</Typography>
                            </Box>

                            <Stack direction={"row"} gap={1}>
                                <Button
                                    label={"Filtar"}
                                    icon={<Funnel size={15} />}
                                    iconPosition="right"
                                    onClick={() => alert('filter')}
                                    buttonStyle={"Black"}
                                    sx={{ paddingInline: 1, height: 30 }}
                                />

                                <Button
                                    label={"Exportar"}
                                    onClick={() => alert('Export')}
                                    buttonStyle={"Black"}
                                    sx={{ paddingInline: 1, height: 30 }}
                                />
                            </Stack>

                        </Stack>

                        {[

                            { title: "Website Redesign", hours: 7.5, date: "2023-07-03", qtdTask: 3 },
                            { title: "Website Redesign", hours: 8, date: "2023-07-14", qtdTask: 2 },
                            { title: "Mobile App Development", hours: 6.5, date: "2023-07-05", qtdTask: 2 },
                            { title: "Website Redesign", hours: 7.5, date: "2023-07-03", qtdTask: 3 },
                            { title: "Website Redesign", hours: 8, date: "2023-07-14", qtdTask: 2 },
                            { title: "Mobile App Development", hours: 6.5, date: "2023-07-05", qtdTask: 2 },
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

                    <Stack sx={{ height: 35, alignItems: "center", paddingInline: 1 }} direction={"row"} justifyContent={"space-between"}>


                        <Box>
                            <Typography fontWeight={600} variant="subtitle1">Total de horas: 53 hrs</Typography>
                            <Typography variant="subtitle2">Meta semanal: 40 hrs</Typography>
                        </Box>


                        <Button
                            label={"Todos os registros"}
                            onClick={() => alert('view')}
                            buttonStyle={"FullBlack"}
                            sx={{ paddingInline: 1, height: 30 }}
                        />

                    </Stack>

                </CardContent>

            </Styled.TimeLogsWrapper>

            <Styled.TimeTrackerWrapper sx={{ mt: 3 }} open={open}>

                <CardContent>

                    <Typography variant="h4" sx={{ fontWeight: 600 }}>Resumo Mensal</Typography>
                    <Typography variant="subtitle1" color="text.secondary" mb={2}>Seu horário para julho de 2023</Typography>

                    <Stack direction={"row"} gap={2}>

                        <Styles.GraficBox sx={{ flex: 1, gridTemplateColumns: "1fr 1fr", }}>

                            <Card sx={{ p: "20px", gap: 4, display: "flex", flexDirection: "column", }}>

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

                                            <Subtitle color="grey" text="Concluído" />

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
                                            <Subtitle color="grey" text="Horas trabalhadas" />
                                            <SmallTitle color="purple" text={`${hoursThisMonth}`} />
                                        </Box>

                                        <Box sx={{ textAlign: "center" }}>
                                            <Subtitle color="grey" text="Horas restantes" />
                                            <SmallTitle color="purple" text={`${hoursRemaining}`} />
                                        </Box>

                                    </Stack>
                                </Stack>
                            </Card>

                            <Card sx={{ p: "20px", }}>

                                <SmallTitle color="black" text="Análise diária" bold={true} />

                                <Stack gap={1} mt={1}>
                                    {[
                                        { day: "Segunda-feira", date: "5 de Junho", hours: 8.5, color: "green" },
                                        { day: "Terça-feira", date: "6 de Junho", hours: 7.75, color: "green" },
                                        { day: "Quarta-feira", date: "7 de Junho", hours: 8, color: "green" },
                                        { day: "Quinta-feira", date: "8 de Junho", hours: 6.5, color: "yellow" },
                                        { day: "Sexta-feira", date: "9 de Junho", hours: 4.25, color: "red" },


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

                                            <ProgressBar value={(item.hours / 8) * 90} sx={{ width: 350 }} />

                                            <Typography variant="body2">
                                                {item.hours} hrs
                                            </Typography>

                                        </Stack>

                                    ))}

                                </Stack>

                                <Stack className={"weeklySummary"}>

                                    <Typography variant="subtitle2">
                                       Resumo Semanal
                                    </Typography>

                                    <Stack className={"weeklySummaryContent"}>

                                        <Typography variant="body2">
                                            <strong>35 hrs</strong> / 40 hrs
                                        </Typography>

                                        <Typography variant="body2">
                                            87,5% da meta
                                        </Typography>

                                    </Stack>
                                </Stack>

                            </Card>

                        </Styles.GraficBox>

                    </Stack>

                </CardContent>

            </Styled.TimeTrackerWrapper>
        </>
    )
}