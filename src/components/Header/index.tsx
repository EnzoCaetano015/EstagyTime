import { ArrowLeft, LogOut } from "lucide-react";
import TickingClock from "../../Hook/TickingClock";
import { motion } from "framer-motion";
import { slideInVariant } from "../../utils/Motion";
import * as Styled from "./header.styled";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export interface HeaderProps {
  Backbutton?: boolean;
  LogOutButton?: boolean;
}

export default function Header({ Backbutton = true, LogOutButton = false }: HeaderProps) {
  const navigate = useNavigate();

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

          <Typography
            className={Backbutton ? "showTitle" : "hideTitle"}
            variant="h1"
            sx={{ fontSize: "25px", color: "#422680", fontWeight: "bold" }}
          >
            Stagy<span style={{ color: "#000" }}>Time</span>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          {Backbutton && (
            <button className={"backButton"} onClick={() => navigate("/Home")}>
              <ArrowLeft size={15} /> Voltar para Home
            </button>
          )}

          {LogOutButton && (
            <button className={"logoutButton"} onClick={() => navigate("/Auth/Login")}>
              <LogOut size={15} /> Log out
            </button>
          )}
        </Stack>
      </motion.div>
    </Styled.Header>
  );
}
