import { useState, ChangeEvent } from "react";
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
import Button from "../../../components/Button/Button_Comp";

export default function Cadastro() {

    const customStyles = useCustomSelectStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [password, setPassword] = useState("");

    // Toggle password visibility (login + register)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    // Simple password strength calculation
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        let strength = 0;
        if (newPassword.length > 6) strength += 1;
        if (newPassword.length > 10) strength += 1;
        if (/[A-Z]/.test(newPassword)) strength += 1;
        if (/[0-9]/.test(newPassword)) strength += 1;
        if (/[^A-Za-z0-9]/.test(newPassword)) strength += 1;

        setPasswordStrength(strength);
    };

    // Quick function to display password strength text
    const getStrengthLabel = () => {
        if (passwordStrength < 3) return "Weak password";
        if (passwordStrength < 5) return "Good password";
        return "Strong password";
    };


    return (
        <form className={styles.form}>
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} mb={2}>
                <Box>
                    <Typography variant="body2" component="label" fontSize={12} fontWeight="bold">
                        First name
                    </Typography>
                    <TextField
                        id="first-name"
                        placeholder="John"
                        fullWidth
                        size="small"
                    />
                </Box>
                <Box>
                    <Typography variant="body2" component="label" fontSize={12} fontWeight="bold">
                        Last name
                    </Typography>
                    <TextField
                        id="last-name"
                        placeholder="Doe"
                        fullWidth
                        size="small"
                    />
                </Box>
            </Box>

            <Box mb={2}>
                <Typography variant="body2" component="label" fontSize={12} fontWeight="bold">
                    Email
                </Typography>
                <TextField
                    id="register-email"
                    type="email"
                    placeholder="name@company.com"
                    fullWidth
                    size="small"
                />
            </Box>

            <Box mb={2}>
                <Typography variant="body2" component="label" fontSize={12} fontWeight="bold">
                    Password
                </Typography>
                <Box position="relative">
                    <TextField
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        fullWidth
                        size="small"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <IconButton
                        size="small"
                        onClick={togglePasswordVisibility}
                        className={styles.eyeButton}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </IconButton>
                </Box>
                {/* Password Strength Indicator */}
                {password && (
                    <Box mt={1}>
                        <Box display="flex" gap={0.5} mb={0.5}>
                            {[...Array(5)].map((_, i) => (
                                <Box
                                    key={i}
                                    flex="1"
                                    height="6px"
                                    borderRadius="4px"
                                    className={
                                        i < passwordStrength
                                            ? passwordStrength < 3
                                                ? styles.weakBar
                                                : passwordStrength < 5
                                                    ? styles.goodBar
                                                    : styles.strongBar
                                            : styles.emptyBar
                                    }
                                />
                            ))}
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                            {getStrengthLabel()}
                        </Typography>
                    </Box>
                )}
            </Box>

            <Box mb={3}>
                <Typography variant="body2" component="label" fontSize={12} fontWeight="bold">
                    Confirm password
                </Typography>
                <Box position="relative">
                    <TextField
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        fullWidth
                        size="small"
                    />
                    <IconButton
                        size="small"
                        onClick={toggleConfirmPasswordVisibility}
                        className={styles.eyeButton}
                    >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
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
                    I agree to the <a href="" className={styles.forgotLink} style={{ fontSize: 12 }} >Terms of Service</a> and <a href="" className={styles.forgotLink} style={{ fontSize: 12 }}>Privacy Policy</a>
                </Typography>
            </Box>

            <Button
                label="Create account"
                onClick={() => alert("Sign in")}
                height="35px"
                width="100%"
                styleVariant={1}
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
                    label="Google"
                    onClick={() => alert("Google")}
                    height="35px"
                    width="31%"
                    styleVariant={2}
                />
                <Button
                    label="Apple"
                    onClick={() => alert("Apple")}
                    height="35px"
                    width="31%"
                    styleVariant={2}
                />
                <Button
                    label="Microsoft"
                    onClick={() => alert("Microsoft")}
                    height="35px"
                    width="31%"
                    styleVariant={2}
                />
            </Box>
        </form>
    )
}