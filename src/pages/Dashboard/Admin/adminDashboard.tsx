import { Box } from "@mui/material";
import Container from "../../../components/Container";
import { MenuDashboard, Sidebar } from "../../../components/MenuDashboard";
import { useState } from "react";
import { DashboardContent } from "../Options/DashboardOption";
import { Collaborators } from "../Options/CollaboratorsOption";
import { Projects } from "../Options/ProjectsOption";
import { Settings } from "../Options/SettingsOption";

export default function AdminDashboard() {

    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("Dashboard");

    const renderContent = () => {
        switch (currentScreen) {
            case "Dashboard": return <DashboardContent />;
            case "Collaborators": return <Collaborators />;
            case "Projects": return <Projects open={open} />;
            case "Settings": return <Settings />;
            default: return <DashboardContent />;
        }
    };

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



