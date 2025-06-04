import { CardContent, Stack, Typography, Box, Card, Chip } from "@mui/material"
import * as Styled from "./projectOptions.styled"
import Button from "../../../../components/Button"
import { Ellipsis, Plus } from "lucide-react"
import ProgressBar from "../../../../components/ProgressBar"
import { OptionsProps } from "../interface"
import InfoCard from "../../../../components/InfoCard"
import { ActivityCard } from "../../../../components/ActivityCard"
import CustomIconButton from "../../../../components/IconButton"
import { useProjetcsDrawer } from "./Drawer/drawer.hook"
import { ProjetcsDrawer } from "./Drawer/drawer"


export const AdminProjects = ({ open }: OptionsProps) => {
    const {
        openD,
        modo,
        openAdicionar,
        openEditar,
        handleClose,
        handleSave,
    } = useProjetcsDrawer();

    return (
        <>
            <Styled.ProjectWrapper>

                <CardContent>

                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

                        <Box>
                            <Typography variant="h4" fontWeight={600}>Projects Overview</Typography>
                            <Typography variant="subtitle1" color="text.secondary">Manage and monitor all company projects</Typography>
                        </Box>

                        <Button
                            label={"Create Project"}
                            icon={<Plus size={15} />}
                            iconPosition="right"
                            onClick={openAdicionar}
                            buttonStyle={"Purple"}
                            sx={{ paddingInline: 1, height: 30 }}
                        />

                    </Stack>

                    <Styled.ProjectsGrid open={open}>
                        {[
                            { title: "Website Redesign", tasks: 24, tasksCompleted: 18, percentage: 75 },
                            { title: "Mobile App Development", tasks: 36, tasksCompleted: 12, percentage: 33 },
                            { title: "CRM Integration", tasks: 18, tasksCompleted: 5, percentage: 28 },

                        ].map((project) => (
                            <Card sx={{ bgcolor: "#F9FAFB", maxWidth: 400, m: 2 }}>

                                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>

                                    <Stack direction={"row"} justifyContent={"space-between"} >

                                        <Typography variant="h5" fontWeight={600}>{project.title}</Typography>
                                        <Typography variant="h6" fontWeight={600}>{project.percentage}%</Typography>

                                    </Stack>

                                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

                                        <Stack direction={"row"} alignItems={"center"} gap={2}>

                                            <Chip label={`${project.tasks} Tasks`} variant="outlined" sx={{ fontWeight: 600 }} />
                                            <Typography variant="subtitle1" color="text.secondary">{project.tasksCompleted} completed</Typography>

                                        </Stack>

                                        <Typography>Complete</Typography>

                                    </Stack>

                                    <ProgressBar neutral={true} value={project.percentage} />

                                    <Stack direction={"row"} justifyContent={"end"} gap={1} mt={1}>

                                        <Button
                                            label={"View Details"}
                                            onClick={() => alert('view')}
                                            buttonStyle={"Black"}
                                            sx={{ paddingInline: 1, height: 30 }}
                                        />
                                        <Button
                                            label={"Menage Tasks"}
                                            onClick={() => alert('menage')}
                                            buttonStyle={"Black"}
                                            sx={{ paddingInline: 1, height: 30 }}
                                        />
                                        <Button
                                            label={"Edit Project"}
                                            onClick={openEditar}
                                            buttonStyle={"Black"}
                                            sx={{ paddingInline: 1, height: 30 }}
                                        />

                                    </Stack>

                                </CardContent>

                            </Card>
                        ))}

                    </Styled.ProjectsGrid>

                </CardContent>

            </Styled.ProjectWrapper>
            <ProjetcsDrawer
                openD={openD}
                modo={modo}
                onClose={handleClose}
                onSave={handleSave}
            />
        </>
    )
}

export const UserProjects = () => {

    const {
        openD,
        modo,
        openAdicionar,
        openEditar,
        handleClose,
        handleSave,
    } = useProjetcsDrawer();

    const tasks = [
        { color: "#F29727", title: "Design Homepage Mockup", position: "Design ", date: "2023-07-15", status: "In Progress" },
        { color: "red", title: "Implement User Authentication", position: "Development ", date: "2023-07-10", status: "Completed" },
        { color: "#10B981", title: "Database Schema Design", position: "Development ", date: "2023-07-20", status: "Not Started" },
    ] as const;

    return (
        <>
            <Styled.UserProjectsWrapper sx={{ mb: 3 }}>
                <CardContent>

                    <Styled.HeaderStack>

                        <Box>

                            <Typography variant="h4" sx={{ fontWeight: 600 }}>Nome do Projeto</Typography>
                            <Typography variant="subtitle1" color="text.secondary" mb={2}>Project overview and progress</Typography>

                        </Box>

                        <Button
                            icon={<Plus size={15} />}
                            iconPosition="right"
                            label={"Add Task"}
                            onClick={openAdicionar}
                            buttonStyle={"Purple"}
                            sx={{ paddingInline: 3, height: 30 }}
                        />
                    </Styled.HeaderStack>

                    <Styled.InfoCardsBox>

                        <InfoCard
                            sx={{ width: { xs: "90%" } }}
                            typeCard={"daily"}
                            title={"Tasks"}
                            info={"24"}
                            description={"18 of 24 completed"}
                            children={
                                <ProgressBar
                                    neutral={true}
                                    value={24}
                                    sx={{
                                        '&.MuiLinearProgress-root': {
                                            backgroundColor: "#fff"
                                        },

                                    }}
                                />
                            }
                        />

                        <InfoCard
                            sx={{ width: { xs: "90%" } }}
                            typeCard={"daily"}
                            title={"Progress"}
                            info={"75%"}
                            description={"25% remaining"}
                            children={
                                <ProgressBar
                                    neutral={true}
                                    value={75}
                                    sx={{
                                        '&.MuiLinearProgress-root': {
                                            backgroundColor: "#fff"
                                        },

                                    }}
                                />
                            }
                        />

                        <InfoCard
                            sx={{ width: { xs: "90%" } }}
                            typeCard={"daily"}
                            title={"Time Spent"}
                            info={"65 hrs"}
                            description={"+5 hrs from estimate"}
                            children={
                                <ProgressBar
                                    neutral={true}
                                    value={30}
                                    sx={{
                                        '&.MuiLinearProgress-root': {
                                            backgroundColor: "#fff"
                                        },

                                    }}
                                />
                            }
                        />

                    </Styled.InfoCardsBox>
                </CardContent>
            </Styled.UserProjectsWrapper>

            <Styled.UserProjectsWrapper>

                <CardContent>

                    <Box>

                        <Typography variant="h4" sx={{ fontWeight: 600 }}>Project Tasks</Typography>
                        <Typography variant="subtitle1" color="text.secondary" mb={2}>Tasks for Project Name</Typography>

                    </Box>

                    <Stack gap={1}>

                        {tasks.map((task) => (

                            <Stack
                                direction={"row"}
                                bgcolor={"#F9FAFB"}
                                gap={2}
                                sx={{
                                    '@media (max-width:425px)': {
                                        overflowX: 'auto',
                                        WebkitOverflowScrolling: 'touch',
                                    },
                                }}
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
                                        status={task.status}
                                        scroll={false}
                                    />
                                </Box>

                                <CustomIconButton
                                    icon={Ellipsis}
                                    options={[
                                        { label: "Edit Task", onClick: openEditar },
                                        { label: "Delete Task", onClick: () => alert("delete"), isDanger: true }
                                    ]}
                                />

                            </Stack>

                        ))}

                    </Stack>

                </CardContent>

            </Styled.UserProjectsWrapper>
            <ProjetcsDrawer
                openD={openD}
                modo={modo}
                onClose={handleClose}
                onSave={handleSave}
            />
        </>
    )
}