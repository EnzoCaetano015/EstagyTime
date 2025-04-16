import { styled } from "@mui/material";

export const Footer = styled("section")(() => ({

    backgroundColor: "#422680",
    color: "#fff",
    padding: "4% 20%",
    textAlign: "center",

    ".FooterButtons": {

        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        gap: "15px",
    },

    ".notes": {
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        marginTop: "15px",
    }

}))

export const SimpleFooter = styled("footer")(() => ({
    
    backgroundColor: "#F8F8FF",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
}))