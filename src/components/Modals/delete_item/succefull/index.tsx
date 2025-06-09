import { Box, Modal, Stack, Typography } from "@mui/material"
import { ClockFading } from "lucide-react"
import { modalsProps } from "../../modals.type"
import Button from "../../../Button"
import * as Styled from "../../modals.styled"

export const DeleteItemOK = ({ open, close, modalType }: modalsProps) => {
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
                    <Box className="iconBox"><ClockFading  size={24} color="#fff" /></Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>Tudo certo</Typography>
                </Stack>

                <Typography variant="h6">O item foi deletado/desativado com sucesso</Typography>

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