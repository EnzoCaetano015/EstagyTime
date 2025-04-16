import TickingClock from "../../Hook/TickingClock";
import { motion } from "framer-motion";
import { fadeInVariant } from "../../utils/Motion";
import { Stack, Typography } from "@mui/material";
import * as Styled from "./loading.styled"

function Loading({ text }: { text: string }) {

  return (
    <Styled.SplashContainer>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariant}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          style={{ textAlign: "center", marginBottom: "32px" }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >

          <Stack className={"logoIcon"}>
            <TickingClock intervalTime={500} size={40} />
          </Stack>

          <Typography
            variant="h1"
            sx={{
              margin: "0 0 8px 0",
              fontSize: "34px",
              fontWeight:"bold",
              color:"#422680"
            }}>
            Stagy<span style={{ color: "#000" }}>Time</span>

          </Typography>

          <Typography
            sx={{
              whiteSpace: "pre-line",
              fontSize: 14,
              m: 0,
              color: "#333"
            }}
          >
            {text}

          </Typography>

        </motion.div>

        <Stack className={"dotsContainer"}>
          <span className={"dot"} />
          <span className={"dot"} />
          <span className={"dot"} />
        </Stack>

      </motion.div>

    </Styled.SplashContainer>
  );
}

export default Loading;