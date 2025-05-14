import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const TabWrapper = styled(motion.div)(({ theme }) => ({
    backgroundColor: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    width: "45%",
    minWidth: 460,
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05);",
    padding: 8,
    marginBottom: 18,

    [theme.breakpoints.down("sm")]: {
        minWidth: 360,
    }
}))

export const TopicCard = styled(motion.div)(({theme})=>({
    width: "46%",
    minWidth: 460,

    [theme.breakpoints.down("sm")]: {
        minWidth: 360,
    }
}))