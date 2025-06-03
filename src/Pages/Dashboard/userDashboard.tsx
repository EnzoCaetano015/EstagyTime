import { Box } from "@mui/material";
import Container from "../../components/Container";
import { MenuDashboard, Sidebar } from "../../components/MenuDashboard";
import { DashboardUserContent } from "./Options/DashboardOption";
import { TimeTracking } from "./Options/TimeTracking";
import { TaskOption } from "./Options/TaskOption";
import { UserProjects } from "./Options/ProjectsOption";
import { useDashboard } from "./dahsboard.hook";
import { useState } from "react";

type UserScreens = "Dashboard" | "Time Tracking" | "Tasks" | "website";

export default function UserDashboard() {

    const [open, setOpen] = useState(true);

    const {
        mobileOpen,
        setMobileOpen,
        setCurrentScreen,
        renderContent,
    } = useDashboard<UserScreens>({
        initialScreen: "Dashboard",
        renderMap: {
            Dashboard: <DashboardUserContent open={open} />,
            "Time Tracking": <TimeTracking open={open} />,
            Tasks: <TaskOption />,
            website: <UserProjects />,
        },
    });

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

            <Box sx={{ mr: 5, ml: open ? 35 : 5, marginBlock: 3, }}>
                {renderContent()}
            </Box>
        </Container>
    )
}