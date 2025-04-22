import { styled } from "@mui/material";

export const Footer = styled("section")(({ theme }) => ({

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
    },

    [theme.breakpoints.down("sm")]: {
        padding: "4% 15%",

        '.FooterButtons': {
            flexDirection: "column",
        },
        '.notes': {
            display: "none",
        },

        '& h2': {
            fontSize: "25px",
        }
    }

}))

export const SimpleFooter = styled("footer")(() => ({

    backgroundColor: "#F8F8FF",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",

}))