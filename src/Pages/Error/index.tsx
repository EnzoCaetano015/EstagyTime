import { Stack, Typography } from "@mui/material"
import { TimerOff } from "lucide-react"
import * as Styled from "./error.styled"
import Button from "../../components/Button"
import { useNavigate } from "react-router"

export const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <Styled.Container>
                <Stack>
                    <Stack className={"ErrorIcon"}>
                        <TimerOff size={40} />
                    </Stack>
                    <Typography variant="h4" fontWeight={600}>
                        Página não encontrada
                    </Typography>
                </Stack>
                <Stack>

                    <Button
                        label={"Voltar para a home"}
                        onClick={() => { navigate("/Home") }}
                        buttonStyle={"FullBlack"}
                        sx={{ paddingInline: 1, height: 30 }}
                    />
                </Stack>
            </Styled.Container>
        </>
    )
}