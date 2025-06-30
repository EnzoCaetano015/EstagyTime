import {
    Avatar,
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Ellipsis } from "lucide-react";
import ProgressBar from "../../../../../../components/ProgressBar";
import CustomIconButton from "../../../../../../components/IconButton";
import { DeleteItem } from "../../../../../../components/Modals/delete_item/warning";
import { DeleteItemOK } from "../../../../../../components/Modals/delete_item/succefull";
import { useTaskOption } from "../../taskOption.hook";
import { useTaskDrawer } from "../Drawer/drawer.hook";
import { TaskDrawer } from "../Drawer/drawer";
import * as Styled from "./taskTable.styled"
import CustomChip from "../../../../../../components/Chip";

type TaskStatus = "Completed" | "In Progress" | "Not Started";

type TaskPriority = "alta" | "média" | "baixa"

const tasks: {
    task: string;
    description: string;
    tags: string[];
    status: TaskStatus;
    priority: TaskPriority;
    assignee: { name: string; initials: string; color: string };
    dueDate: string;
    progress: { hours: string; percent: number };
}[] = [
        {
            task: "Design Homepage Layout",
            description: "Create wireframes and mockups for the new homepage design",
            tags: ["design", "homepage"],
            status: "Completed",
            priority: "alta",
            assignee: { name: "Taylor Johnson", initials: "TJ", color: "#ff5b5b" },
            dueDate: "14/01/2024",
            progress: { hours: "14h / 16h", percent: 88 },
        },
        {
            task: "Implement User Authentication",
            description: "Set up login/logout functionality with JWT tokens",
            tags: ["backend", "auth"],
            status: "In Progress",
            priority: "alta",
            assignee: { name: "Jamie Smith", initials: "JS", color: "#c9f269" },
            dueDate: "19/01/2024",
            progress: { hours: "18h / 24h", percent: 75 },
        },
        {
            task: "Create Product Catalog",
            description: "Build the product listing and detail pages",
            tags: ["frontend", "catalog"],
            status: "Not Started",
            priority: "média",
            assignee: { name: "Jamie Smith", initials: "JS", color: "#f7f17a" },
            dueDate: "24/01/2024",
            progress: { hours: "0h / 32h", percent: 0 },
        },
        {
            task: "Setup Payment Integration",
            description: "Integrate Stripe payment processing",
            tags: ["backend", "payment"],
            status: "Not Started",
            priority: "média",
            assignee: { name: "Jamie Smith", initials: "JS", color: "#f7f17a" },
            dueDate: "29/01/2024",
            progress: { hours: "0h / 20h", percent: 0 },
        },
        {
            task: "Mobile Responsive Testing",
            description: "Test and fix mobile responsiveness issues",
            tags: ["testing", "mobile"],
            status: "In Progress",
            priority: "média",
            assignee: { name: "Jordan Brown", initials: "JB", color: "#ffd470" },
            dueDate: "17/01/2024",
            progress: { hours: "8h / 12h", percent: 67 },
        },
        {
            task: "SEO Optimization",
            description: "Optimize meta tags, alt texts, and page structure for SEO",
            tags: ["seo", "marketing"],
            status: "Completed",
            priority: "baixa",
            assignee: { name: "Casey Williams", initials: "CW", color: "#ff7d91" },
            dueDate: "13/01/2024",
            progress: { hours: "6h / 8h", percent: 75 },
        },
    ];

export default function TaskTable() {

    const {
        warningOpen,
        successOpen,
        openWarning,
        closeWarning,
        confirmWarning,
        closeSuccess,
    } = useTaskOption();

    const {
        open,
        modo,
        handleSave,
        handleClose,
        openEditar,
    } = useTaskDrawer();

    return (
        <>
            <Box p={2}
                sx={{
                    overflowX: { xs: "auto", md: "visible" },
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <Styled.Titulos sx={{ fontWeight: 600 }}>Task</Styled.Titulos>
                            <Styled.Titulos>Status</Styled.Titulos>
                            <Styled.Titulos>Dificuldade</Styled.Titulos>
                            <Styled.Titulos>Atribuida</Styled.Titulos>
                            <Styled.Titulos>Vencimento</Styled.Titulos>
                            <Styled.Titulos>Progresso</Styled.Titulos>
                            <Styled.Titulos align="right">Ações</Styled.Titulos>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ height: 50 }}>
                                    <Typography fontWeight="600" variant="h6">{task.task}</Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {task.description}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <CustomChip type={task.status} />
                                </TableCell>
                                <TableCell>
                                     <CustomChip dificuldade={task.priority} />
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Avatar sx={{ bgcolor: task.assignee.color, width: 24, height: 24, fontSize: 12 }}>
                                            {task.assignee.initials}
                                        </Avatar>
                                        <Typography>{task.assignee.name}</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>{task.dueDate}</TableCell>
                                <TableCell>
                                    <Typography variant="body2" color="text.secondary">
                                        {task.progress.hours}
                                    </Typography>
                                    <ProgressBar neutral value={task.progress.percent} />
                                </TableCell>
                                <TableCell align="right">
                                    <CustomIconButton
                                        icon={Ellipsis}
                                        options={[
                                            { label: "Editar", onClick: openEditar },
                                            {
                                                label: "Deletar",
                                                onClick: () => openWarning(() => { }),
                                                isDanger: true,
                                            },
                                        ]}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <TaskDrawer
                open={open}
                modo={modo}
                onClose={handleClose}
                onSave={handleSave}
            />
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
    );
}
