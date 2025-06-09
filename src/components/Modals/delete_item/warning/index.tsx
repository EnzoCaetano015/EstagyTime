import { Box, Modal, Stack, Typography } from "@mui/material"
import { ClockAlert } from "lucide-react"
import { modalsProps } from "../../modals.type"
import Button from "../../../Button"
import * as Styled from "../../modals.styled"

export const DeleteItem = ({ open, close, modalType, actionClose }: modalsProps) => {
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

            <Styled.ModalWrapper modalType={modalType}>

                <Stack className="TitleWrapper">
                    <Box className="iconBox"><ClockAlert  size={24} color="#fff" /></Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>Aviso</Typography>
                </Stack>

                <Typography variant="h6">Tem cereteza que deseja executar essa ação? Ela não poderá ser desfeita</Typography>

                <Stack className="ButtonWrapper">
                    <Button
                        label={"Cancelar"}
                        onClick={close}
                        buttonStyle={"Black"}
                        sx={{ paddingInline: 3, height: 30 }}
                    />
                    <Button
                        label={"Confirmar"}
                        onClick={actionClose}
                        buttonStyle={"FullBlack"}
                        sx={{ paddingInline: 3, height: 30 }}
                    />

                </Stack>

            </Styled.ModalWrapper>
        </Modal>
    )
}