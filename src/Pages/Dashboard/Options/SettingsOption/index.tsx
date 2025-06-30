import { CardContent, Typography } from "@mui/material"
import * as Styled from "./settingsOption.styled"

export const Settings = () => {
    return (
        <>
            <Styled.SettingsWrapper>

                <CardContent>

                    <Typography variant="h4" fontWeight={600}>Configurações da empresa</Typography>
                    <Typography variant="subtitle1" color="text.secondary">Gerencie a configuração da sua empresa</Typography>

                </CardContent>

            </Styled.SettingsWrapper>

        </>
    )
}