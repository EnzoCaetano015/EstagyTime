import { Box } from "@mui/material";
import Container from "../../components/Container";
import { MenuDashboard, Sidebar } from "../../components/MenuDashboard";
import { useState } from "react";
import { DashboardUserContent } from "./Options/DashboardOption";
import { TimeTracking } from "./Options/TimeTracking";
import { TaskOption } from "./Options/TaskOption";
import { UserProjects } from "./Options/ProjectsOption";


export default function UserDashboard() {

    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("Dashboard");

    const renderContent = () => {
        switch (currentScreen) {
            case "Dashboard": return <DashboardUserContent />;
            case "Time Tracking": return <TimeTracking open={open} />;
            case "Tasks": return <TaskOption />;
            case "website": return <UserProjects />;
            // case "mobile": return <Proj2 />;
            // case "crm": return <Proj3 />;
            default: return <DashboardUserContent />;
        }
    };

    return (
        <Container>

            <Sidebar
                open={open}
                type={true}
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
                    type={true}
                    setMobileOpen={setMobileOpen}
                />
            </Box>

            <Box sx={{ marginInline: open ? 35 : 10, marginBlock: 3 }}>
                {renderContent()}
            </Box>
        </Container>
    )
}



export const Proj1 = () => {
    return (
        <>helloo5</>
    )
}

