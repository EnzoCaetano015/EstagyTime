import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import TickingClock from "../../Hook/TickingClock"
import { motion } from "framer-motion";
import { slideInVariant } from "../../utils/Motion";
import * as Styled from "./header.styled"
import { Box, Stack, Typography } from "@mui/material";

export default function Header() {

  const navigate = useNavigate()

  return (
    <Styled.Header>
      <motion.div
        className={"headerContainer"}
        initial={slideInVariant.hidden}
        whileInView={slideInVariant.visible}
        viewport={{ once: true }}
      >
        <Stack className={"logoContainer"}>

          <Box className={"logoIcon"}>
            <TickingClock intervalTime={1000} size={20} color="#fff" />
          </Box>

          <Typography variant="h1" sx={{ fontSize: "25px", color: "#422680", fontWeight: "bold" }}>
            Stagy<span style={{ color: "#000" }}>Time</span>
          </Typography>

        </Stack>

        <button className={"backButton"} onClick={() => { navigate('/Home') }}>
          <ArrowLeft size={15} /> Back to Home
        </button>

      </motion.div >
    </Styled.Header>
  )
}