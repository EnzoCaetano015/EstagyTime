import { Stack, styled } from "@mui/material";

export const CardCompanySelection = styled(Stack)(() => ({


    '.title': {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontWeight: 600,
        color: "#000",
        fontSize: 20,

    },

    '.subtitle': {
        fontSize: 13,
        color: "#4B5563"
    },

    '.content': {
        display: "flex",
        flexDirection: "column",
        gap: 8,

        '& div': {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },

        '& h5': {
            fontWeight: 600,
            fontSize: 13,
        },

        '& h6': {
            color: "#4B5563"
        }
    }
}))