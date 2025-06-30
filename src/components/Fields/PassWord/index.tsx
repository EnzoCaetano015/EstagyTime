import { Box, TextField, Typography } from "@mui/material";
import { useCustomSelectStyles } from "../../../Hook/Mui/StyleMui";
import { useState, ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import * as Styled from "./password.styled";

interface PasswordProps {
  eyeButton: boolean;
  forget: boolean;
  title: string;
  passwordStrength?: boolean; 
}

export default function PasswordField({eyeButton,title,forget,passwordStrength = false,}: PasswordProps) {
  const customStyles = useCustomSelectStyles();
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    let strengthScore = 0;
    if (newPassword.length > 6) strengthScore += 1;
    if (newPassword.length > 10) strengthScore += 1;
    if (/[A-Z]/.test(newPassword)) strengthScore += 1;
    if (/[0-9]/.test(newPassword)) strengthScore += 1;
    if (/[^A-Za-z0-9]/.test(newPassword)) strengthScore += 1;

    setStrength(strengthScore);
  };

  const getStrengthLabel = () => {
    if (strength < 3) return "Senha fraca";
    if (strength < 5) return "Boa senha";
    return "Senha forte";
  };

  return (
    <Box sx={customStyles} mb={3}>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="body2"
          component="label"
          fontSize={12}
          fontWeight="600"
          mb={0.5}
        >
          {title}
        </Typography>
        <Styled.Link>{forget ? "Esqueceu sua senha?" : ""}</Styled.Link>
      </Box>

      <Box position="relative">
        <TextField
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          fullWidth
          size="small"
          value={password}
          onChange={handlePasswordChange}
        />
        {eyeButton && (
          <Styled.EyeButton size="small" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOff /> : <Eye />}
          </Styled.EyeButton>
        )}
      </Box>

      {passwordStrength && password && (
        <Box mt={1}>
          <Box display="flex" gap={0.5} mb={0.5}>
            {[...Array(5)].map((_, i) => {
              let bgColor = "#e5e7eb"; // emptyBar
              if (i < strength) {
                if (strength < 3) bgColor = "#f59e0b";      // weakBar
                else if (strength < 5) bgColor = "#169ea3"; // goodBar
                else bgColor = "#22c55e";                   // strongBar
              }
              return (
                <Box
                  key={i}
                  flex="1"
                  height="6px"
                  borderRadius="4px"
                  sx={{ backgroundColor: bgColor }}
                />
              );
            })}
          </Box>
          <Typography variant="caption" color="text.secondary">
            {getStrengthLabel()}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
