import { CardContent, Stack, Typography, Box, Card, Chip, TextField, InputAdornment } from "@mui/material"
import * as Styled from "./projectOptions.styled"
import Button from "../../../../components/Button"
import { Ellipsis, Plus, SearchIcon } from "lucide-react"
import ProgressBar from "../../../../components/ProgressBar"
import InfoCard from "../../../../components/InfoCard"
import { ActivityCard } from "../../../../components/ActivityCard"
import CustomIconButton from "../../../../components/IconButton"
import { useProjetcsDrawer } from "./Drawer/drawer.hook"
import { ProjetcsDrawer } from "./Drawer/drawer"
import { useProjetcsOption } from "./projectOptions.hook"
import { AddItem } from "../../../../components/Modals/add_Item"
import { UpdateItem } from "../../../../components/Modals/update_item"
import { DeleteItem } from "../../../../components/Modals/delete_item/warning"
import { DeleteItemOK } from "../../../../components/Modals/delete_item/succefull"
import { useNavigate } from "react-router"
import CustomSelect from "../../../../components/Select"


export const AdminProjects = () => {

    const navigate = useNavigate()

    const {
        openD,
        modo,
        openAdicionar,
        openEditar,
        handleClose,
        handleSave,
        modalOpen,
        modalType,
        closeModal,
    } = useProjetcsDrawer();

    return (
        <>
            <Styled.ProjectWrapper>

                <CardContent>

                    <Styled.HeaderStack sx={{ gap: 2 }}>

                        <Box>
                            <Typography variant="h4" fontWeight={600}>Visão Geral dos Projetos</Typography>
                            <Typography variant="subtitle1" color="text.secondary">Gerenciar e monitorar todos os projetos da empresa</Typography>
                        </Box>

                        <Button
                            label={"Create Project"}
                            icon={<Plus size={15} />}
                            iconPosition="right"
                            onClick={openAdicionar}
                            buttonStyle={"Purple"}
                            sx={{ paddingInline: 1, height: 30 }}
                        />

                    </Styled.HeaderStack>

                    <Styled.ProjectsGrid>
                        {[
                            { title: "Website Redesign", tasks: 24, tasksCompleted: 18, percentage: 75 },
                            { title: "Mobile App Development", tasks: 36, tasksCompleted: 12, percentage: 33 },
                            { title: "CRM Integration", tasks: 18, tasksCompleted: 5, percentage: 28 },
                            { title: "CRM Integration", tasks: 18, tasksCompleted: 5, percentage: 28 },
                            { title: "CRM Integration", tasks: 18, tasksCompleted: 5, percentage: 28 },

                        ].map((project) => (
                            <Card sx={{ bgcolor: "#F9FAFB", m: 2, flex: 1 }}>

                                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>

                                    <Stack direction={"row"} justifyContent={"space-between"}>

                                        <Typography variant="h5" fontWeight={600}>{project.title}</Typography>
                                        <Typography variant="h6" fontWeight={600}>{project.percentage}%</Typography>

                                    </Stack>


                                    <Stack direction={"row"} alignItems={"center"} gap={2}>

                                        <Chip label={`${project.tasks} Tasks`} variant="outlined" sx={{ fontWeight: 600 }} />
                                        <Typography variant="subtitle1" color="text.secondary">{project.tasksCompleted} concluídas</Typography>

                                    </Stack>

                                    <ProgressBar neutral={true} value={project.percentage} />

                                    <Stack direction={"row"} justifyContent={"end"} gap={1} mt={1}>

                                        <Button
                                            label={"Gerenciar tarefas"}
                                            onClick={() => navigate('/DashBoard/CompanyDashboard/MenageTask')}
                                            buttonStyle={"Black"}
                                            sx={{ paddingInline: 1, height: 30 }}
                                        />
                                        <Button
                                            label={"Editar"}
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
            {modalType === "add" && (
                <AddItem
                    open={modalOpen}
                    close={closeModal}
                    modalType="add"
                    actionClose={() => { }}
                />)}
            {modalType === "update" && (
                <UpdateItem
                    open={modalOpen}
                    close={closeModal}
                    modalType="update"
                    actionClose={() => { }}
                />
            )}
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
        modalOpen,
        modalType,
        closeModal,
    } = useProjetcsDrawer();

    const {
        warningOpen,
        successOpen,
        openWarning,
        closeWarning,
        confirmWarning,
        closeSuccess,
        customStyles
    } = useProjetcsOption()

    const tasks = [
        { color: "#F29727", title: "Design Homepage Mockup", position: "Design ", date: "2023-07-15", status: "In Progress" },
        { color: "red", title: "Implement User Authentication", position: "Development ", date: "2023-07-10", status: "Completed" },
        { color: "#10B981", title: "Database Schema Design", position: "Development ", date: "2023-07-20", status: "Not Started" },
    ] as const;

    return (
        <>
            <Stack gap={4}>
                <Styled.UserProjectsWrapper>
                    <CardContent>

                        <Styled.HeaderStack>

                            <Box>

                                <Typography variant="h4" sx={{ fontWeight: 600 }}>Nome do Projeto</Typography>
                                <Typography variant="subtitle1" color="text.secondary" mb={2}>Visão geral e progresso do projeto</Typography>

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
                                title={"Tarefas"}
                                info={"24"}
                                description={"18 de 24 concluídas"}
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
                                title={"Progresso"}
                                info={"75%"}
                                description={"25% restante"}
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
                                title={"Tempo Gasto"}
                                info={"65 hrs"}
                                description={"+5 hrs acima da estimativa"}
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

                        <Stack gap={2} className="filter">

                            <TextField
                                variant="outlined"
                                placeholder="Search..."
                                size="small"
                                fullWidth
                                sx={customStyles}
                                className="searchField"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon size={15} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Stack gap={2} className="filterSelects" justifyContent={"center"}>

                                <CustomSelect
                                    title={""}
                                    label={"Dificuldade"}
                                    displayEmpty
                                    options={[
                                        { value: "all", label: "Todas" },
                                        { value: "low", label: "Baixa" },
                                        { value: "medium", label: "Média" },
                                        { value: "high", label: "Alta" },
                                    ]}
                                    sx={{
                                        width: { xs: 200, sm: 300, md: 100, lg: 200 },
                                        height: 35,
                                    }}
                                />

                                <CustomSelect
                                    title={""}
                                    label={"todas as tarefas"}
                                    displayEmpty
                                    options={[
                                        { value: "0", label: "user 0" },
                                        { value: "1", label: "user 1" },
                                        { value: "2", label: "user 2" },
                                        { value: "3", label: "user 3" },
                                    ]}
                                    sx={{
                                        width: { xs: 200, sm: 300, md: 100, lg: 200 },
                                        height: 35,
                                    }}
                                />

                                <CustomSelect
                                    title={""}
                                    label={"Projeto"}
                                    displayEmpty
                                    options={[
                                        { value: "all", label: "Todos" },
                                        { value: "redesign", label: "Website Redesign" },
                                        { value: "mobile", label: "Mobile App Development" },
                                        { value: "crm", label: "CRM Integration" },
                                    ]}
                                    sx={{
                                        width: { xs: 200, sm: 300, md: 100, lg: 200 },
                                        height: 35,
                                    }}
                                />

                                <CustomSelect
                                    title={""}
                                    label={"Setor"}
                                    displayEmpty
                                    options={[
                                        { value: "all", label: "Todos" },
                                        { value: "dev", label: "Development" },
                                        { value: "dsg", label: "Design" },
                                        { value: "mk", label: "Marketing" },
                                        { value: "qa", label: "QA" },
                                    ]}
                                    sx={{
                                        width: { xs: 200, sm: 300, md: 100, lg: 200 },
                                        height: 35,
                                    }}
                                />
                            </Stack>
                        </Stack>

                    </CardContent>

                </Styled.UserProjectsWrapper>

                <Styled.UserProjectsWrapper>

                    <CardContent>

                        <Box>

                            <Typography variant="h4" sx={{ fontWeight: 600 }}>Tarefas do Projeto</Typography>
                            <Typography variant="subtitle1" color="text.secondary" mb={2}>Tarefas do projeto</Typography>

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
                                            {
                                                label: "Delete Task",
                                                onClick: () => openWarning(() => { }),
                                                isDanger: true,
                                            },
                                        ]}
                                    />

                                </Stack>

                            ))}

                        </Stack>

                    </CardContent>

                </Styled.UserProjectsWrapper>
            </Stack>
            <ProjetcsDrawer
                openD={openD}
                modo={modo}
                onClose={handleClose}
                onSave={handleSave}
            />

            {modalType === "add" && (
                <AddItem
                    open={modalOpen}
                    close={closeModal}
                    modalType="add"
                    actionClose={() => { }}
                />)}
            {modalType === "update" && (
                <UpdateItem
                    open={modalOpen}
                    close={closeModal}
                    modalType="update"
                    actionClose={() => { }}
                />
            )}

            {/* modal de delete */}
            {warningOpen && (
                <DeleteItem
                    open={warningOpen}
                    close={closeWarning}
                    modalType="warning"
                    actionClose={confirmWarning}
                />
            )}
            {successOpen && (
                <DeleteItemOK
                    open={successOpen}
                    close={closeSuccess}
                    modalType="delete"
                    actionClose={() => { }}
                />
            )}
        </>
    )
}