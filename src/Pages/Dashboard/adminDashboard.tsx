import { Box } from "@mui/material";
import Container from "../../components/Container";
import { MenuDashboard, Sidebar } from "../../components/MenuDashboard";
import { useDashboard } from "./dahsboard.hook";
import { DashboardContent } from "./Options/DashboardOption";
import { Collaborators } from "./Options/CollaboratorsOption";
import { AdminProjects } from "./Options/ProjectsOption";
import { Settings } from "./Options/SettingsOption";

type AdminScreens = "Dashboard" | "Collaborators" | "Projects" | "Settings";

export default function AdminDashboard() {

    const {
        open,
        setOpen,
        mobileOpen,
        setMobileOpen,
        setCurrentScreen,
        renderContent,
    } = useDashboard<AdminScreens>({
        initialScreen: "Dashboard",
        renderMap: {
            Dashboard: <DashboardContent />,
            Collaborators: <Collaborators />,
            Projects: <AdminProjects open={true} />,
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

            <Box sx={{ marginInline: open ? 35 : 10, marginBlock: 3 }}>
                {renderContent()}
            </Box>
        </Container>
    )
}



