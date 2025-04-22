import { styled } from "@mui/material"

export const Header = styled("header")(({ theme }) => ({

    backgroundColor: "#fff",
    width: "100%",
    paddingBlock: "5px",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 10,

    ".headerContainer": {
        maxWidth: "55%",
        margin: "0 auto",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    ".logoContainer": {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
    },

    ".logoIcon": {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "#422680",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    ".backButton": {
        border: "none",
        backgroundColor: "transparent",
        color: "#422680",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        gap: "10px",
        cursor: "pointer",

        "&:hover": {
            opacity: 0.6
        }
    },

    [theme.breakpoints.down("sm")]: {
        '& h1': {
            fontSize: "0px"
        },

        ".headerContainer": {
            maxWidth: "100%",

        },
    }


}))