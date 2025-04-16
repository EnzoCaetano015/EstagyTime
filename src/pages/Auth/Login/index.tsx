import { useState } from "react";
import {
    Eye,
    EyeOff,
} from "lucide-react";

// MUI Components
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Checkbox,
    Divider,
} from "@mui/material";

// Our CSS Module
import styles from "../AuthPage.module.css";
import { useCustomSelectStyles } from "../../../Hook/Mui/StyleMui";
import Button from "../../../components/Button";
// import { useNavigate } from "react-router-dom";

export default function Login() {

    // const navigate = useNavigate()

    const customStyles = useCustomSelectStyles();

    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility (login + register)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form className={styles.form}>
            <Box sx={customStyles} mb={2}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" component="label" fontSize={12} fontWeight="bold" mb={0.5}>
                        Email
                    </Typography>

                </Box>
                <Box position="relative">
                    <TextField
                        id="register-email"
                        type="email"
                        placeholder="name@company.com"
                        fullWidth
                        size="small"
                    />
                </Box>
            </Box>

            <Box sx={customStyles} mb={3}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" component="label" fontSize={12} fontWeight="bold" mb={0.5}>
                        Password
                    </Typography>
                    <Typography variant="caption" fontSize={12} mb={0.5} className={styles.forgotLink}>
                        Forgot password?
                    </Typography>

                </Box>
                <Box position="relative">
                    <TextField
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        fullWidth
                        size="small"
                    />
                    <IconButton
                        size="small"
                        onClick={togglePasswordVisibility}
                        className={styles.eyeButton}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </IconButton>
                </Box>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="start" mb={1}>
                <Checkbox id="remember" size="small" sx={customStyles} />
                <Typography
                    fontSize={12}
                    variant="body2"
                    component="label"
                    htmlFor="remember"
                    className={styles.rememberMeLabel}
                >
                    Remember me for 30 days
                </Typography>
            </Box>

            <Button
                label={"Sign in"}
                onClick={() => alert("Sign in")}
                buttonStyle="Purple"
                sx={{ width: "100%", height: 35 }}
            />

            <Box marginBlock={3} display="flex" justifyContent="center" alignItems="center">
                <Divider sx={{ flex: 1, marginRight: 2 }} />
                <Typography variant="body2" fontSize={12}>
                    Or continue with
                </Typography>
                <Divider sx={{ flex: 1, marginLeft: 2 }} />
            </Box>

            <Box display="flex" justifyContent="center" gap={2}>

                <Button
                    label={"Google"}
                    onClick={() => alert("Google")}
                    buttonStyle="White"
                    sx={{ width: "31%", height: 35 }}
                />
                <Button
                    label={"Apple"}
                    onClick={() => alert("Apple")}
                    buttonStyle="White"
                    sx={{ width: "31%", height: 35 }}
                />
                <Button
                    label={"Microsoft"}
                    onClick={() => alert("Microsoft")}
                    buttonStyle="White"
                    sx={{ width: "31%", height: 35 }}
                />
            </Box>
        </form>
    )
}