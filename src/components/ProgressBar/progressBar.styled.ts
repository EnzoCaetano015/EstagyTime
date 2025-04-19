import { LinearProgress, styled } from "@mui/material";

interface StyledProps {
    barColor: string;
}

export const ProgressBar = styled(LinearProgress, { shouldForwardProp: (prop) => prop !== "barColor", })<StyledProps>(({ barColor }) => ({
    
    '&.MuiLinearProgress-root': {
        backgroundColor: "#f3f4f6"
    },

    '& .MuiLinearProgress-bar': {
        backgroundColor: barColor,
    },
}));
