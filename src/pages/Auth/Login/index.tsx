import {
    Box,
    Typography,
    TextField,
    Checkbox,
    Divider,
    Stack,
} from "@mui/material";

import { useCustomSelectStyles } from "../../../Hook/Mui/StyleMui";
import Button from "../../../components/Button";
import PasswordField from "../../../components/Fields/PassWord";

export default function Login() {

    const customStyles = useCustomSelectStyles();

    return (
        <Stack mt={2}>
            <Box sx={customStyles} mb={2}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" component="label" fontSize={12} fontWeight="600" mb={0.5}>
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

            <PasswordField eyeButton={true} forget={true} title={"Password"} />

            <Box display="flex" alignItems="center" justifyContent="start" mb={1}>

                <Checkbox id="remember" size="small" sx={customStyles} />

                <Typography
                    fontSize={12}
                    variant="body2"
                    component="label"
                    htmlFor="remember"
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
        </Stack>
    )
}