import { Stack, styled } from "@mui/material"

export const Main = styled("section")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20%",
    backgroundColor: "#f8f8ff",
    marginBlock: "6%",

    ".Image": {
        backgroundColor: "#8c69d834",
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    },

    ".Icon": {
        width: "120px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#422680",
        borderRadius: "50%",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    },

    [theme.breakpoints.down("md")]: {
        padding: "0 15%",
        '& button': {
            fontSize: 12,
            gap: 2,
        },

        '& h1': {
            fontSize: 30,
            lineHeight: "35px",
            mb: "16px",
        },

        '& div': {
            justifyContent: "center",
        },

        '& p': {
            fontSize: 13,
        },

        '.Image': {
            width: "180px",
            height: "180px",
        },

        '.Icon': {
            width: "80px",
            height: "80px"
        }
    },

    [theme.breakpoints.down("sm")]: {

        padding: "0%",
        justifyContent: "center",
        textAlign: "center",

        '& button': {
            fontSize: 10,
            gap: 2,
        },

        '.Image': {
            display: "none",

        },
    },
}))

export const Features = styled(Stack)(({ theme }) => ({
    textAlign: "center",
    padding: "3% 20%",
    backgroundColor: "#fff",
    gap: 35,


    ".Grid": {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "30px",
        width: "100%",
        margin: "0 auto",
    },

    [theme.breakpoints.down("md")]: {
        padding: "5% 15%",

        '& h2': {
            fontSize: 20,
        },

        '& h5': {
            fontSize: 16,
        },

        '.Grid': {
            gridTemplateColumns: "1fr",
        }
    }
}))

export const Information = styled("section")(({ theme }) => ({
    padding: "4% 20%",
    backgroundColor: "#f8f8ff",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 35,

    ".StepsGrid": {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1.5rem",

        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "repeat(4, 1fr)",
            '& > div:nth-child(-n+3) .stepCircle:after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                width: '100%',
                height: '2px',
                backgroundColor: '#422680',
                top: '50%',
                left: '100%',
                transform: 'translateY(-50%)',
            },

            '& .stepCircle.noLine::after': {
                display: 'none',
            },
        },
    },

    [theme.breakpoints.down("md")]: {
        padding: "4% 15%",

        '& h2': {
            fontSize: 20,
        },
        '& h3': {
            fontSize: 14,
        },
    },

    ".stepCircle": {
        width: "4rem",
        height: "4rem",
        borderRadius: "9999px",
        backgroundColor: "#422680",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1rem",
        position: "relative",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "18px",
    }

}))