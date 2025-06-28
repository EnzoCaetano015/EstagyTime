import {Stack, styled } from "@mui/material"

export const Container = styled(Stack)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,

    ".ErrorIcon": {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "red",
        color: "#fff",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 16px auto",
    },

}))