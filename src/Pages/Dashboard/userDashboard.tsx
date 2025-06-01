import { Box } from "@mui/material";
import Container from "../../components/Container";
import { MenuDashboard, Sidebar } from "../../components/MenuDashboard";
import { DashboardUserContent } from "./Options/DashboardOption";
import { TimeTracking } from "./Options/TimeTracking";
import { TaskOption } from "./Options/TaskOption";
import { UserProjects } from "./Options/ProjectsOption";
import { useDashboard } from "./dahsboard.hook";

type UserScreens = "Dashboard" | "Time Tracking" | "Tasks" | "website";

export default function UserDashboard() {

    const {
        open,
        setOpen,
        mobileOpen,
        setMobileOpen,
        setCurrentScreen,
        renderContent,
    } = useDashboard<UserScreens>({
        initialScreen: "Dashboard",
        renderMap: {
            Dashboard: <DashboardUserContent />,
            "Time Tracking": <TimeTracking open={true} />,
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

            <Box sx={{ marginInline: open ? 35 : 10, marginBlock: 3 }}>
                {renderContent()}
            </Box>
        </Container>
    )
}