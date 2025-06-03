import { Box } from "@mui/material";
import Container from "../../components/Container";
import { MenuDashboard, Sidebar } from "../../components/MenuDashboard";
import { useDashboard } from "./dahsboard.hook";
import { DashboardContent } from "./Options/DashboardOption";
import { Collaborators } from "./Options/CollaboratorsOption";
import { AdminProjects } from "./Options/ProjectsOption";
import { Settings } from "./Options/SettingsOption";
import { useState } from "react";

type AdminScreens = "Dashboard" | "Collaborators" | "Projects" | "Settings";

export default function AdminDashboard() {

    const [open, setOpen] = useState(true);

    const {
        mobileOpen,
        setMobileOpen,
        setCurrentScreen,
        renderContent,
    } = useDashboard<AdminScreens>({
        initialScreen: "Dashboard",
        renderMap: {
            Dashboard: <DashboardContent open={open} />,
            Collaborators: <Collaborators open={open} />,
            Projects: <AdminProjects open={open} />,
            Settings: <Settings />,
        },
    });

    return (
        <Container>

            <Sidebar
                open={open}
                type={false}
                setCurrentScreen={setCurrentScreen}
                mobileOpen={mobileOpen}
                onCloseMobile={() => setMobileOpen(false)}
            />

            <Box
                sx={(theme) => ({
                    flexGrow: 1,
                    ml: open ? 30 : 0,
                    [theme.breakpoints.down('sm')]: {
                        ml: 0,
                    },
                })}
            >
                <MenuDashboard
                    setOpen={setOpen}
                    type={false}
                    setMobileOpen={setMobileOpen}
                />
            </Box>

            <Box
                sx={{
                    mr: 5,
                    ml: mobileOpen ? 5 : open ? 35 : 5,
                    marginBlock: 3,
                }}
            >
                {renderContent()}
            </Box>
        </Container >
    )
}



