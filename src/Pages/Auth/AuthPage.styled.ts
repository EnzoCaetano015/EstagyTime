import { Box, styled } from "@mui/material";

export const AuthBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        '& h2': {
            fontSize: "25px"
        }
    }
}))