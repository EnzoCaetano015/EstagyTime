import { Box, Divider, Drawer, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { DrawerProps as MuiDrawerProps } from "@mui/material"
import { CONFIRMAR_POR_MODO, SUBTITULO_POR_MODO, TITULO_POR_MODO } from "./index.utils"
import { Clock, X } from "lucide-react"
import Button from "../Button"

interface CustomDrawerProps extends MuiDrawerProps {
    modo: "ADICIONAR" | "EDITAR"
    largura?: number
    titulo?: string
    subtitulo?: string
    disabledButton?: boolean
    onClose: () => void
    onSave: () => void
}

export const CustomDrawer = ({
    modo,
    largura = 400,
    titulo,
    subtitulo,
    anchor = "right",
    children,
    disabledButton,
    onClose,
    onSave,
    ...props
}: CustomDrawerProps) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const drawerWidth = isSmallScreen ? 300 : largura;
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    display: "flex",
                    flexDirection: "column",
                },
            }}
            {...props}
            onClose={onClose}
            anchor={anchor}
        >
            <Stack
                sx={{
                    p: 2,
                    height: "100%",
                    flexGrow: 1
                }}
            >
                <Box>

                    <Stack direction={"row"} justifyContent={"space-between"}>

                        <Typography variant="h3" sx={{ fontWeight: 600 }}>
                            <Clock color="#422680" strokeWidth={3} />   {titulo || TITULO_POR_MODO[modo]}
                        </Typography>
                        <Box
                            component={"span"}
                            onClick={onClose}
                            sx={{ cursor: "pointer" }}
                        >
                            <X width={15} />
                        </Box>
                    </Stack>

                    <Typography variant="h6">
                        {subtitulo || SUBTITULO_POR_MODO[modo]}
                    </Typography>

                </Box>

                <Divider sx={{ bgcolor: "#422680", mt: 2 }} />

                <Box sx={{ flexGrow: 1, mt: 2, overflowY: "auto" }}>{props.open && children}</Box>

                <Divider sx={{ bgcolor: "#422680", mb: 2 }} />

                <Box display={"flex"} gap={2}>

                    <Button
                        label={"Cancelar"}
                        onClick={onClose}
                        buttonStyle={"Purple"}
                        sx={{ width: 120, height: 35 }}
                    />

                    <Button
                        onClick={onSave}
                        label={CONFIRMAR_POR_MODO[modo]}
                        buttonStyle={"White"}
                        disabled={disabledButton}
                        sx={{ width: 120, height: 35 }}
                    />

                </Box>

            </Stack>
        </Drawer>
    )
}