import { Box } from "@mui/material";
import Container from "../../../components/Container";
import { MenuDashboard, Sidebar } from "../../../components/MenuDashboard";
import { useState } from "react";


export default function UserDashboard() {

    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("Dashboard");

    const renderContent = () => {
        switch (currentScreen) {
            case "Dashboard": return <DashboardContent />;
            case "Time Tracking": return <TimeTracking />;
            case "Tasks": return <Tasks />;
            case "website": return <Proj1 />;
            case "mobile": return <Proj2 />;
            case "crm": return <Proj3 />;
            default: return <DashboardContent />;
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

            <Box>
                {renderContent()}
            </Box>

        </Container>
    )
}


export const DashboardContent = () => {
    return (
        <>helloo1</>
    )
}
export const TimeTracking = () => {
    return (
        <>helloo2</>
    )
}
export const Tasks = () => {
    return (
        <>helloo3</>
    )
}
export const Proj1 = () => {
    return (
        <>helloo5</>
    )
}
export const Proj2 = () => {
    return (
        <>helloo20</>
    )
}
export const Proj3 = () => {
    return (
        <>helloo50</>
    )
}