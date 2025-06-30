import { Stack, TextField, Typography, InputAdornment, Button, Box, Divider, List, ListItemIcon, ListItemText, Avatar, ListItemButton, useTheme, useMediaQuery, Drawer, Collapse } from "@mui/material"
import { slideInVariant } from "../../utils/Motion"
import * as Styled from "./menuDashboard.styled"
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui"
import { Bell, PanelLeft, SearchIcon, Clock, ClipboardList, Folder, Building, BarChart3, Briefcase, Users, Settings, Ellipsis, LogOut, Building2, CircleUserRound, ChevronDown, ChevronRight } from "lucide-react"
import TickingClock from "../../Hook/TickingClock"
import CustomIconButton from "../IconButton"
import { useNavigate } from "react-router"
import { useState } from "react"

interface SidebarProps {
    open: boolean;
    type: boolean;
    mobileOpen: boolean;
    onCloseMobile: () => void;
}

interface MenuDashboardProps {
    type: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuDashboard = ({ type, setOpen, setMobileOpen }: MenuDashboardProps) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const customStyles = useCustomSelectStyles()

    const handleToggleDrawer = () => {
        if (isMobile) {
            setMobileOpen(prev => !prev);
        } else {
            setOpen(prev => !prev);
        }
    };

    return (
        <Styled.Menu
            initial={slideInVariant.hidden}
            whileInView={slideInVariant.visible}
            viewport={{ once: true }}
        >
            <Stack className="content" sx={{ alignItems: "center" }}>
                <Button onClick={handleToggleDrawer} sx={{ minWidth: "auto", p: 0, color: "#6b7280" }}>
                    <PanelLeft size={15} />
                </Button>

                <Typography variant="h5">{!type ? "Dashboard da empresa" : "Meu Dashboard"}</Typography>
            </Stack>

            <Stack className="content">
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
                <Button className="notification">
                    <Bell size={15} />
                </Button>
            </Stack>
        </Styled.Menu>
    );
};

export const Sidebar = ({ open, type, mobileOpen, onCloseMobile }: SidebarProps) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [openProjects, setOpenProjects] = useState(true);

    const mockProjects = [
        { id: "website", name: "Website Redesign" },
        { id: "mobile", name: "Mobile App Development" },
        { id: "crm", name: "CRM Integration" },
    ];

    const navigate = useNavigate()

    const sidebarContent = (
        <Styled.SideBar
            initial={slideInVariant.hidden}
            whileInView={slideInVariant.visible}
            viewport={{ once: true }}
            sx={{
                width: open ? 240 : 0,
            }}
        >
            <Box>
                <Stack sx={{ p: 2 }} className="logoContainer">
                    <Box className={"logoIcon"}>
                        <TickingClock intervalTime={1000} size={15} color="#fff" />
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#422680" }}>
                        Stagy<span style={{ color: "#000" }}>Time</span>
                    </Typography>
                </Stack>

                {open && (
                    <Box sx={{ px: 2, mb: 2 }}>
                        <Typography variant="subtitle1" color="text.secondary"><Building size={10} /> Empresa</Typography>
                        <Typography fontWeight={600} variant="h6">TechInnovate Solutions</Typography>
                        <Typography variant="caption">{!type ? "Código: TECHINV2023" : "CNPJ: 12.345.678/0001-90"}</Typography><br />

                        <Typography variant="caption" sx={{ paddingRight: "60%" }}>Tamanho da equipe:</Typography>
                        <Typography variant="caption">45 usuários</Typography>
                    </Box>
                )}

                <Divider />
                <Typography variant="subtitle1" color="text.secondary" sx={{ p: "8px 16px 0px" }}>Navegação</Typography>
                {!type ? (
                    <>
                        <List>
                            {[
                                { icon: <BarChart3 size={15} />, label: "Dashboard", path: "/DashBoard/CompanyDashboard/Metrics" },
                                { icon: <Users size={15} />, label: "Contribuidores", path: "/DashBoard/CompanyDashboard/Collaborators" },
                                { icon: <Briefcase size={15} />, label: "Projetos", path: "/DashBoard/CompanyDashboard/Projects" },
                            ].map((item, i) => (
                                <ListItemButton key={i} onClick={() => navigate(item.path)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    {open && <ListItemText primary={item.label} />}
                                </ListItemButton>
                            ))}
                        </List>
                    </>
                ) : (
                    <>
                        <List>
                            {[
                                { icon: <BarChart3 size={15} />, label: "Dashboard", path: "/DashBoard/MyDashboard/Metrics" },
                                { icon: <Clock size={15} />, label: "Controle de tempo", path: "/DashBoard/MyDashboard/Time-Tracking" },
                                { icon: <ClipboardList size={15} />, label: "Tarefas", path: "/DashBoard/MyDashboard/Tasks" },
                            ].map((item, i) => (
                                <ListItemButton key={i} onClick={() => navigate(item.path)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    {open && <ListItemText primary={item.label} />}
                                </ListItemButton>
                            ))}
                            <List>
                                <ListItemButton onClick={() => setOpenProjects(!openProjects)}>
                                    <ListItemIcon>
                                        <Folder size={15} />
                                    </ListItemIcon>
                                    {open && <ListItemText primary="Projetos" />}
                                    {open && (openProjects ? <ChevronDown size={15} /> : <ChevronRight size={15} />)}
                                </ListItemButton>

                                <Collapse in={openProjects} timeout="auto" unmountOnExit>
                                    {mockProjects.map((project, i) => (
                                        <ListItemButton
                                            key={i}
                                            sx={{ pl: 4 }}
                                            onClick={() => navigate(`/DashBoard/MyDashboard/Projects`)}
                                        >
                                            <ListItemIcon>
                                                <Folder size={15} />
                                            </ListItemIcon>
                                            {open && <ListItemText primary={project.name} />}
                                        </ListItemButton>
                                    ))}
                                </Collapse>
                            </List>
                        </List>
                    </>
                )}
            </Box>

            <Box sx={{ p: 2 }} className="footerSideBar">

                <Divider />

                <Stack direction="row" alignItems="center" justifyContent={"space-between"} pt={2}>

                    <Stack direction={"row"} gap={1}>

                        <Avatar sx={{ width: 30, height: 30, bgcolor: "#f87171" }}>UT</Avatar>

                        <Box>
                            <Typography variant="body2">User Teste</Typography>
                            <Typography variant="caption" color="text.secondary">Função</Typography>
                        </Box>

                    </Stack>

                    <CustomIconButton
                        icon={Ellipsis}
                        options={
                            type
                                ? [
                                    { icon: <Settings size={15} />, label: "Configurações", onClick: () => alert("settings") },
                                    { icon: <CircleUserRound size={15} />, label: "Trocar conta", onClick: () => navigate("/Auth/CompanySelection") },
                                    { icon: <LogOut size={15} />, label: "Log out", onClick: () => navigate("/Auth/Login"), isDanger: true }
                                ]
                                : [
                                    { icon: <Settings size={15} />, label: "Configurações", onClick: () => alert("settings") },
                                    { icon: <Building2 size={15} />, label: "Trocar conta", onClick: () => navigate("/Auth/CompanySelection") },
                                    { icon: <LogOut size={15} />, label: "Log out", onClick: () => navigate("/Auth/Login"), isDanger: true }
                                ]
                        }
                    />

                </Stack>

            </Box>

        </Styled.SideBar>
    );

    if (isMobile) {
        return (
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={onCloseMobile}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
            >
                {sidebarContent}
            </Drawer>
        );
    }
    return sidebarContent;
};
