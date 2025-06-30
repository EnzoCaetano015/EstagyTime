import { CardContent, Stack, Typography, Box, Table, TableHead, Avatar, Chip, TableBody, TableCell, TableRow, TableFooter } from "@mui/material"
import * as Styled from "./collaboratorsOption.styled"
import Button from "../../../../components/Button"
import { Download, Ellipsis, Plus } from "lucide-react"
import CustomSelect from "../../../../components/Select"
import CustomIconButton from "../../../../components/IconButton"
import { useColaboratorDrawer } from "./Drawer/drawer.hook"
import { ColaboratorDrawer } from "./Drawer/drawer"
import { OptionsProps } from "../interface"
import { useColaboratorOption } from "./collaboratorsOption.hook"
import { AddItem } from "../../../../components/Modals/add_Item"
import { UpdateItem } from "../../../../components/Modals/update_item"
import { DeleteItem } from "../../../../components/Modals/delete_item/warning"
import { DeleteItemOK } from "../../../../components/Modals/delete_item/succefull"

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

export const Collaborators = ({ open }: OptionsProps) => {

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
    } = useColaboratorDrawer();

    const {
        warningOpen,
        successOpen,
        openWarning,
        closeWarning,
        confirmWarning,
        closeSuccess,
    } = useColaboratorOption();

    return (
        <>
            <Styled.FilterWrapper>

                <CardContent className="HeaderCard">

                    <Stack mb={2} direction={"row"} gap={2}>

                        <Box>
                            <Typography variant="h4" fontWeight={600}>Colaboradores</Typography>
                            <Typography variant="subtitle1" color="text.secondary">Gerencie e monitore os membros da sua equipe</Typography>
                        </Box>


                        <Button
                            label={"Adicionar"}
                            icon={<Plus size={15} />}
                            iconPosition="right"
                            onClick={openAdicionar}
                            buttonStyle={"Purple"}
                            sx={{ paddingInline: open ? 0.5 : 3, height: 30 }}
                        />

                    </Stack>

                    <Stack gap={3} alignItems={"end"} direction={"row"} className="actions">

                        <Stack gap={1} className="SelectWrapper">

                            <CustomSelect
                                title={"Departamento"}
                                label={""}
                                initialValue="All"
                                options={[
                                    { value: "All", label: "Todos" },
                                    { value: "dev", label: "Developer" },
                                    { value: "design", label: "Design" },
                                    { value: "marketing", label: "Marketing" },
                                    { value: "QA", label: "QA" },
                                    { value: "management", label: "Management" },
                                ]}
                                sx={{ width: open ? 200 : 250, height: 35, textAlign: { xs: "center",  sm: "initial" } }}
                            />

                            <CustomSelect
                                title={"Ordenar por"}
                                label={""}
                                initialValue="name"
                                options={[
                                    { value: "name", label: "Nome" },
                                    { value: "hours", label: "Horas Trabalhadas" },
                                    { value: "task", label: "Tasks Finalizadas" },
                                    { value: "eficiency", label: "Eficiência" }
                                ]}
                                sx={{ width: open ? 200 : 250, height: 35, textAlign: { xs: "center", sm: "initial" } }}
                            />
                        </Stack>

                        <Box>
                            <Typography sx={{ color: "#6B7280", fontSize: 10.5 }}>Exportar Dados</Typography>

                            <Stack gap={1} className="exportBox">
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

            <Styled.Table open={open}>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>Nome</TableCell>
                            <TableCell>Função</TableCell>
                            <TableCell>Departamento</TableCell>
                            <TableCell>Horas Semanais</TableCell>
                            <TableCell>Tasks finalizadas</TableCell>
                            <TableCell>Eficiência</TableCell>
                            <TableCell>Ações</TableCell>

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
                                            { label: "Editar", onClick: openEditar },
                                            {
                                                label: "Desativar", onClick: () => openWarning(() => { }),
                                                isDanger: true,
                                            }
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
                                        label={"Anterior"}
                                        onClick={() => alert('previus')}
                                        buttonStyle={"Black"}
                                        sx={{ paddingInline: 1, height: 30 }}
                                    />

                                    <Button
                                        label={"Próximo"}
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
            <ColaboratorDrawer
                open={openD}
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