import { Box, Modal, Stack, Typography } from "@mui/material"
import { AlarmClockCheck } from "lucide-react"
import Button from "../../Button"
import * as Styled from "../modals.styled"
import { modalsProps } from "../modals.type"

export const AddItem = ({ open, close }: modalsProps) => {
    return (

        <Modal
            open={open}
            onClose={close}
            closeAfterTransition
            BackdropProps={{
                sx: {
                    backdropFilter: "blur(4px)",
                    backgroundColor: "rgba(0,0,0,0.5)",
                },
            }}
            sx={{ zIndex: (theme) => theme.zIndex.modal }}
        >

            <Styled.ModalWrapper>

                <Stack className="TitleWrapper">
                    <Box className="iconBox"><AlarmClockCheck size={24} color="#fff" /></Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>Tudo certo</Typography>
                </Stack>

                <Typography variant="h6">O item adicionado com sucesso</Typography>

                <Stack className="ButtonWrapper">
                    <Button
                        label={"Ok"}
                        onClick={close}
                        buttonStyle={"FullBlack"}
                        sx={{ paddingInline: 3, height: 30 }}
                    />

                </Stack>

            </Styled.ModalWrapper>
        </Modal>
    )
}