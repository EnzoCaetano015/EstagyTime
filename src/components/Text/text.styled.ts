import { styled } from "@mui/material";
import { TextProps } from "./index";
import { motion } from "framer-motion";

export const BigTitle = styled(motion.h2)<TextProps>(({ color = "black" }) => ({
    fontWeight: 600,
    fontSize: 30,
    color: color === "purple" ? "#422680" : color === "grey" ? "#6B7280" : "black",
    margin: 0
}))

export const Title = styled(motion.h2)<TextProps>(({ color = "black" }) => ({
    fontWeight: 600,
    fontSize: 25,
    color: color === "purple" ? "#422680" : color === "grey" ? "#6B7280" : "black",
    margin: 0
}))

export const SamllTitle = styled(motion.h2)<TextProps>(({ color = "black" }) => ({
    fontSize: 15,
    color: color === "purple" ? "#422680" : color === "grey" ? "#6B7280" : "black",
    margin: 0
}))

export const SubTitle = styled(motion.p)<TextProps>(({ color = "black" }) => ({
    fontSize: 13,
    color: color === "purple" ? "#422680" : color === "grey" ? "#6B7280" : "black",
    margin: 0
}))