import { CardContent, Typography } from "@mui/material"
import * as Styled from "./settingsOption.styled"

export const Settings = () => {
    return (
        <>
            <Styled.SettingsWrapper>

                <CardContent>

                    <Typography variant="h4" fontWeight={600}>Company Settings</Typography>
                    <Typography variant="subtitle1" color="text.secondary">Manage your company configuration</Typography>

                </CardContent>

            </Styled.SettingsWrapper>

        </>
    )
}