import { Stack, styled } from "@mui/material";

export const ModalWrapper = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: 360,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],

  ".TitleWrapper": {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  ".iconBox": {
    backgroundColor: "#10B981",
    borderRadius: "50%",
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ".ButtonWrapper": {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: theme.spacing(3),
    gap: theme.spacing(1),
  },
}));
