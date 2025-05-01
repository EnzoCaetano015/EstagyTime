import { Stack, TextField, Typography, InputAdornment, Button, Box, Divider, List, ListItemIcon, ListItemText, Avatar, ListItemButton, useTheme, useMediaQuery, Drawer } from "@mui/material"
import { slideInVariant } from "../../utils/Motion"
import * as Styled from "./menuDashboard.styled"
import { useCustomSelectStyles } from "../../Hook/Mui/StyleMui"
import { Bell, PanelLeft, SearchIcon, Clock, ClipboardList, Folder, Building, BarChart3, Briefcase, Users, Settings } from "lucide-react"
import TickingClock from "../../Hook/TickingClock"

interface SidebarProps {
    open: boolean;
    type: boolean;
    setCurrentScreen: (screen: string) => void;
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

                <Typography variant="h5">{!type ? "Company Dashboard" : "My Dashboard"}</Typography>
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

export const Sidebar = ({ open, type, setCurrentScreen, mobileOpen, onCloseMobile }: SidebarProps) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                        <Typography variant="subtitle1" color="text.secondary"><Building size={10} /> Company</Typography>
                        <Typography fontWeight={600} variant="h6">TechInnovate Solutions</Typography>
                        <Typography variant="caption">{!type ? "Code: TECHINV2023" : "CNPJ: 12.345.678/0001-90"}</Typography><br />

                        <Typography variant="caption" sx={{ paddingRight: "60%" }}>Team Size:</Typography>
                        <Typography variant="caption">45 users</Typography>
                    </Box>
                )}

                <Divider />
                <Typography variant="subtitle1" color="text.secondary" sx={{ p: "8px 16px 0px" }}>Navigation</Typography>
                {!type ? (
                    <>
                        <List>
                            {[
                                { icon: <BarChart3 size={15} />, label: "Dashboard" },
                                { icon: <Users size={15} />, label: "Collaborators" },
                                { icon: <Briefcase size={15} />, label: "Projects" },
                                { icon: <Settings size={15} />, label: "Settings" },
                            ].map((item, i) => (
                                <ListItemButton key={i} onClick={() => setCurrentScreen(item.label)}>
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
                                { icon: <BarChart3 size={15} />, label: "Dashboard" },
                                { icon: <Clock size={15} />, label: "Time Tracking" },
                                { icon: <ClipboardList size={15} />, label: "Tasks" },
                            ].map((item, i) => (
                                <ListItemButton key={i} onClick={() => setCurrentScreen(item.label)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    {open && <ListItemText primary={item.label} />}
                                </ListItemButton>
                            ))}
                        </List>

                        <Typography variant="subtitle1" color="text.secondary" sx={{ paddingInline: 2 }}>Projects</Typography>

                        <List>
                            {[
                                { icon: <Folder size={15} />, label: "Website Redesign", value: "website" },
                                { icon: <Folder size={15} />, label: "Mobile App Development", value: "mobile" },
                                { icon: <Folder size={15} />, label: "CRM Integration", value: "crm" },
                            ].map((project, i) => (
                                <ListItemButton key={i} onClick={() => setCurrentScreen(project.value)}>
                                    <ListItemIcon>{project.icon}</ListItemIcon>
                                    {open && <ListItemText primary={project.label} />}
                                </ListItemButton>
                            ))}
                        </List>
                    </>
                )}
            </Box>
            <Box sx={{ p: 2 }} className="footerSideBar">
                <Divider />
                <Stack direction="row" alignItems="center" spacing={1} pt={2}>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: "#f87171" }}>UT</Avatar>
                    {open && (
                        <Box>
                            <Typography variant="body2">User Teste</Typography>
                            <Typography variant="caption" color="text.secondary">Position</Typography>
                        </Box>
                    )}
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
