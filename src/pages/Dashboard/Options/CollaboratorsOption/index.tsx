import { CardContent, Stack, Typography, Box, Table, TableHead, Avatar, Chip, TableBody, TableCell, TableRow, TableFooter } from "@mui/material"
import * as Styled from "./collaboratorsOption.styled"
import Button from "../../../../components/Button"
import { Download, Ellipsis, Funnel, Plus } from "lucide-react"
import CustomSelect from "../../../../components/Select"
import CustomIconButton from "../../../../components/IconButton"

const collaborators = [
    {
        name: "Alex Morgan",
        email: "alex.morgan@example.com",
        role: "Project Manager",
        department: "Management",
        hours: 38,
        status: "Below target",
        tasksCompleted: 12,
        efficiency: 92,
        initials: "AM",
        color: "#f44336"
    },
    {
        name: "Jordan Brown",
        email: "jordan.brown@example.com",
        role: "QA Engineer",
        department: "QA",
        hours: 40,
        status: "On target",
        tasksCompleted: 18,
        efficiency: 90,
        initials: "JB",
        color: "#ffb300"
    },
    {
        name: "Jamie Smith",
        email: "jamie.smith@example.com",
        role: "Senior Developer",
        department: "Development",
        hours: 42,
        status: "On target",
        tasksCompleted: 15,
        efficiency: 88,
        initials: "JS",
        color: "#8bc34a"
    },
    {
        name: "Taylor Johnson",
        email: "taylor.johnson@example.com",
        role: "UX Designer",
        department: "Design",
        hours: 35,
        status: "Below target",
        tasksCompleted: 8,
        efficiency: 85,
        initials: "TJ",
        color: "#ec407a"
    },
    {
        name: "Casey Williams",
        email: "casey.williams@example.com",
        role: "Marketing Specialist",
        department: "Marketing",
        hours: 37,
        status: "Below target",
        tasksCompleted: 10,
        efficiency: 82,
        initials: "CW",
        color: "#ef5350"
    }
];

export const Collaborators = () => {

    return (
        <>
            <Styled.FilterWrapper>

                <CardContent>

                    <Stack mb={2}>

                        <Box>
                            <Typography variant="h4" fontWeight={600}>Collaborators</Typography>
                            <Typography variant="subtitle1" color="text.secondary">Manage and monitor your team members</Typography>
                        </Box>

                        <Stack gap={1} >

                            <Button
                                label={"Filter"}
                                icon={<Funnel size={15} />}
                                iconPosition="right"
                                onClick={() => alert('filter')}
                                buttonStyle={"Black"}
                                sx={{ paddingInline: 1, height: 30 }}
                            />

                            <Button
                                label={"Add Collaborator"}
                                icon={<Plus size={15} />}
                                iconPosition="right"
                                onClick={() => alert('add')}
                                buttonStyle={"Purple"}
                                sx={{ paddingInline: 3, height: 30 }}
                            />

                        </Stack>

                    </Stack>

                    <Stack gap={3} alignItems={"end"}>

                        <Stack gap={1}>

                            <CustomSelect
                                title={"Department"}
                                label={""}
                                initialValue="All"
                                options={[
                                    { value: "All", label: "All Departments" },
                                    { value: "dev", label: "Developer" },
                                    { value: "design", label: "Design" },
                                    { value: "marketing", label: "Marketing" },
                                    { value: "QA", label: "QA" },
                                    { value: "management", label: "Management" },
                                ]}
                                sx={{ width: 250, height: 35 }}
                            />

                            <CustomSelect
                                title={"Sort By"}
                                label={""}
                                initialValue="name"
                                options={[
                                    { value: "name", label: "Name" },
                                    { value: "hours", label: "Hours Worked" },
                                    { value: "task", label: "Tasks Completed" },
                                    { value: "eficiency", label: "Eficiency" }
                                ]}
                                sx={{ width: 250, height: 35 }}
                            />
                        </Stack>

                        <Box>
                            <Typography sx={{ color: "#6B7280", fontSize: 10.5 }}>Export Data</Typography>

                            <Stack gap={1}>
                                <Button
                                    label={"CSV"}
                                    icon={<Download size={15} />}
                                    iconPosition="right"
                                    onClick={() => alert('add')}
                                    buttonStyle={"Black"}
                                    sx={{ paddingInline: 3, height: 35 }}
                                />

                                <Button
                                    label={"PDF"}
                                    icon={<Download size={15} />}
                                    iconPosition="right"
                                    onClick={() => alert('add')}
                                    buttonStyle={"Black"}
                                    sx={{ paddingInline: 3, height: 35 }}
                                />
                            </Stack>
                        </Box>

                    </Stack>

                </CardContent>

            </Styled.FilterWrapper>

            <Styled.Table>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Hours This Week</TableCell>
                            <TableCell>Tasks Completed</TableCell>
                            <TableCell>Efficiency</TableCell>
                            <TableCell>Actions</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {collaborators.map((collab, index) => (

                            <TableRow key={index}>

                                <TableCell>

                                    <Stack direction="row" spacing={2} alignItems="center">

                                        <Avatar sx={{ bgcolor: collab.color }}>{collab.initials}</Avatar>

                                        <Box>

                                            <Typography>{collab.name}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {collab.email}
                                            </Typography>

                                        </Box>

                                    </Stack>

                                </TableCell>

                                <TableCell>{collab.role}</TableCell>

                                <TableCell>
                                    <Chip label={collab.department} size="small" />
                                </TableCell>

                                <TableCell>
                                    <Typography>{collab.hours}</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {collab.status}
                                    </Typography>
                                </TableCell>

                                <TableCell>{collab.tasksCompleted}</TableCell>

                                <TableCell>

                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            color:
                                                collab.efficiency >= 90
                                                    ? "#16A34A"
                                                    : collab.efficiency >= 85
                                                        ? "#D97706"
                                                        : "red"
                                        }}
                                    >
                                        {collab.efficiency}%
                                    </Typography>

                                </TableCell>

                                <TableCell>

                                    <CustomIconButton
                                        icon={Ellipsis}
                                        options={[
                                            { label: "View Profile", onClick: () => alert("View Profile") },
                                            { label: "Edit Collaborator", onClick: () => alert("Edit Collaborator") },
                                            { label: "Deactivate", onClick: () => alert("Deactivate"), isDanger: true }
                                        ]}
                                    />

                                </TableCell>

                            </TableRow>
                        ))}

                        <TableFooter >

                            <TableRow>
                                <TableCell
                                    sx={{
                                        display: "flex",
                                        justifyContent: "end",
                                        gap: 1,
                                    }}
                                >

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

                                </TableCell>
                            </TableRow>

                        </TableFooter>

                    </TableBody>

                </Table>

            </Styled.Table>

        </>
    )
}