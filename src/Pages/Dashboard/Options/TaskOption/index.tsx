import { Box, CardContent, Stack, Typography } from "@mui/material"
import * as Styled from "./taskOption.styled"
import Button from "../../../../components/Button"
import { Ellipsis, Filter, Plus } from "lucide-react"
import CustomSelect from "../../../../components/Select"
import { ActivityCard } from "../../../../components/ActivityCard"
import CustomIconButton from "../../../../components/IconButton"
import { TaskDrawer } from "./Drawer/drawer"
import { useTaskDrawer } from "./Drawer/drawer.hook"

export const TaskOption = () => {

    const {
        open,
        modo,
        openAdicionar,
        openEditar,
        handleClose,
        handleSave,
    } = useTaskDrawer();

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
                                    '@media (max-width:425px)': {
                                        height: 120,
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
        </>
    )
}