import { Box, CardContent, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import * as Styled from "./taskOption.styled"
import Button from "../../../../components/Button"
import { ArrowLeft, Ellipsis, Filter, Plus, SearchIcon } from "lucide-react"
import CustomSelect from "../../../../components/Select"
import { ActivityCard } from "../../../../components/ActivityCard"
import CustomIconButton from "../../../../components/IconButton"

import { AddItem } from "../../../../components/Modals/add_Item"
import { UpdateItem } from "../../../../components/Modals/update_item"
import { DeleteItemOK } from "../../../../components/Modals/delete_item/succefull"
import { useTaskOption } from "./taskOption.hook"
import { DeleteItem } from "../../../../components/Modals/delete_item/warning"
import ProgressBar from "../../../../components/ProgressBar"
import TaskTable from "./components/TaskTable"
import { useTaskDrawer } from "./components/Drawer/drawer.hook"
import { TaskDrawer } from "./components/Drawer/drawer"

export const TaskOption = () => {

    const {
        open,
        modo,
        openAdicionar,
        openEditar,
        handleClose,
        handleSave,
        modalOpen,
        modalType,
        closeModal,
    } = useTaskDrawer();


    const {
        warningOpen,
        successOpen,
        openWarning,
        closeWarning,
        confirmWarning,
        closeSuccess,
    } = useTaskOption();


    const tasks = [
        { color: "#F29727", title: "Design Homepage Mockup", position: "Design ", date: "2023-07-15", status: "In Progress" },
        { color: "red", title: "Implement User Authentication", position: "Development ", date: "2023-07-10", status: "Completed" },
        { color: "#10B981", title: "Database Schema Design", position: "Development ", date: "2023-07-20", status: "Not Started" },
        { color: "#F29727", title: "Design Homepage Mockup", position: "Design ", date: "2023-07-15", status: "In Progress" },
        { color: "red", title: "Implement User Authentication", position: "Development ", date: "2023-07-10", status: "Completed" },
        { color: "#10B981", title: "Database Schema Design", position: "Development ", date: "2023-07-20", status: "Not Started" },
        { color: "#F29727", title: "Design Homepage Mockup", position: "Design ", date: "2023-07-15", status: "In Progress" },
        { color: "red", title: "Implement User Authentication", position: "Development ", date: "2023-07-10", status: "Completed" },
        { color: "#10B981", title: "Database Schema Design", position: "Development ", date: "2023-07-20", status: "Not Started" },
    ] as const;

    return (
        <>
            <Styled.TaskMenu>
                <CardContent>

                    <Styled.HeaderStack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

                        <Box>

                            <Typography variant="h4" sx={{ fontWeight: 600 }}>Tasks</Typography>
                            <Typography variant="subtitle1" color="text.secondary" mb={2}>Menage and track your tasks</Typography>

                        </Box>

                        <Stack direction={"row"} gap={1}>

                            <Button
                                icon={<Filter size={15} />}
                                iconPosition="right"
                                label={"Filter"}
                                onClick={() => { }}
                                buttonStyle={"Black"}
                                sx={{ paddingInline: 1, height: 30 }}
                            />

                            <Button
                                icon={<Plus size={15} />}
                                iconPosition="right"
                                label={"New Task"}
                                onClick={openAdicionar}
                                buttonStyle={"Purple"}
                                sx={{ paddingInline: 3, height: 30 }}
                            />

                        </Stack>

                    </Styled.HeaderStack>

                    <Styled.FiltersStack direction={"row"} justifyContent={"end"} gap={2}>

                        <CustomSelect
                            title={""}
                            label={"Project"}
                            displayEmpty
                            options={[
                                { value: "all", label: "All Projects" },
                                { value: "redesign", label: "Website Redesign" },
                                { value: "mobile", label: "Mobile App Development" },
                                { value: "crm", label: "CRM Integration" },
                            ]}
                            sx={{ width: 200 }}
                        />

                        <CustomSelect
                            title={""}
                            label={"Priority"}
                            displayEmpty
                            options={[
                                { value: "all", label: "All Priorities" },
                                { value: "low", label: "Low" },
                                { value: "medium", label: "Medium" },
                                { value: "high", label: "High" },
                            ]}
                            sx={{ width: 200 }}
                        />

                        <CustomSelect
                            title={""}
                            label={"Sector"}
                            displayEmpty
                            options={[
                                { value: "all", label: "All Sectors" },
                                { value: "dev", label: "Development" },
                                { value: "dsg", label: "Design" },
                                { value: "mk", label: "Marketing" },
                                { value: "qa", label: "QA" },
                            ]}
                            sx={{ width: 200 }}
                        />
                    </Styled.FiltersStack>

                </CardContent>
            </Styled.TaskMenu>

            <Styled.TaskRWrapper>

                <CardContent>

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

                    <Stack direction={"row"} mt={2} gap={1}>

                        <Button
                            label={"Previous"}
                            onClick={() => alert('previus')}
                            buttonStyle={"Black"}
                            sx={{ paddingInline: 1, height: 30 }}
                        />

                        <Button
                            label={"Next"}
                            onClick={() => alert('next')}
                            buttonStyle={"Black"}
                            sx={{ paddingInline: 1, height: 30 }}
                        />

                    </Stack>

                </CardContent>

            </Styled.TaskRWrapper>
            <TaskDrawer
                open={open}
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


export const MenageTask = () => {

    const {
        open,
        modo,
        openAdicionar,
        handleClose,
        handleSave,
        modalOpen,
        modalType,
        closeModal,
    } = useTaskDrawer();

    const {
        customStyles,
        navigate
    } = useTaskOption();

    return (
        <>
            <Stack gap={4}>

                <Stack direction="row" justifyContent="flex-start">
                    <Button
                        icon={<ArrowLeft size={15} />}
                        iconPosition="right"
                        label={"Voltar"}
                        onClick={()=>{navigate("/DashBoard/CompanyDashboard/Projects")}}
                        buttonStyle={"Black"}
                        sx={{ paddingInline: 1, height: 30 }}
                    />
                </Stack>

                <Styled.TaskRWrapper>
                    <CardContent>
                        <Stack gap={2}>

                            <Stack direction={"row"} justifyContent={"space-between"}>

                                <Stack>
                                    <Typography sx={{ fontSize: 25, fontWeight: 600 }}>Website Redesign</Typography>
                                    <Typography variant="subtitle1">18 of 24 tasks finalizada</Typography>
                                </Stack>
                                <Stack>

                                    <Typography variant="h4" fontWeight={600}>75%</Typography>
                                </Stack>
                            </Stack>
                            <ProgressBar value={20} neutral sx={{ height: 10 }} />
                            <Stack direction="row" justifyContent="flex-end">
                                <Button
                                    icon={<Plus size={15} />}
                                    iconPosition="right"
                                    label={"Adicionar"}
                                    onClick={openAdicionar}
                                    buttonStyle={"Purple"}
                                    sx={{ paddingInline: 1, height: 30 }}
                                />
                            </Stack>
                        </Stack>
                    </CardContent>

                </Styled.TaskRWrapper>

                <Styled.TaskRWrapper>

                    <CardContent>

                        <Stack direction={"row"} gap={2} alignItems={"end"}>

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
                            <Stack direction={"row"} gap={2}>

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
                                    sx={{ width: 200, height: 35 }}
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
                                    sx={{ width: 200, height: 35, }}
                                />
                            </Stack>
                        </Stack>

                    </CardContent>

                </Styled.TaskRWrapper>

                <Styled.TaskRWrapper>

                    <Stack gap={1}>

                        <TaskTable />

                    </Stack>
                </Styled.TaskRWrapper>

            </Stack>
            <TaskDrawer
                open={open}
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
                />
            )}
        </>
    )
}