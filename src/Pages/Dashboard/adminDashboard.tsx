import { Box } from "@mui/material";
import Container from "../../components/Container";
import { MenuDashboard, Sidebar } from "../../components/MenuDashboard";
import { useState } from "react";
import { Outlet } from "react-router";

export default function AdminDashboard() {
    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <Container>
            <Sidebar
                open={open}
                type={false}
                mobileOpen={mobileOpen}
                onCloseMobile={() => setMobileOpen(false)}
            />

            <Box
                sx={(theme) => ({
                    flexGrow: 1,
                    ml: open ? 30 : 0,
                    [theme.breakpoints.down("sm")]: {
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
                sx={(theme) => ({
                    mr: 5,
                    ml: open ? 35 : 5,
                    marginBlock: 3,
                    [theme.breakpoints.down("sm")]: {
                        ml: 5,
                    },
                })}
            >
                <Outlet />
            </Box>
        </Container>
    );
}
