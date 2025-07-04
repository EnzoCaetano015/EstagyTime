import {
    Box,
    Typography,
    TextField,
    Checkbox,
    Divider,
    Stack,
} from "@mui/material";

import { useCadastro } from "./cadastro.hook";
import PasswordField from "../../../../components/Fields/PassWord";
import Button from "../../../../components/Button";

export default function Cadastro() {

    const { navigate, customStyles } = useCadastro()

    return (
        <Stack mt={2}>
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} mb={2}>
                <Box>
                    <Typography variant="body2" component="label" fontSize={12} fontWeight="600">
                        Primeiro nome
                    </Typography>
                    <TextField
                        id="first-name"
                        placeholder="John"
                        fullWidth
                        size="small"
                        sx={customStyles}
                    />
                </Box>
                <Box>
                    <Typography variant="body2" component="label" fontSize={12} fontWeight="600">
                        Sobrenome
                    </Typography>
                    <TextField
                        id="last-name"
                        placeholder="Doe"
                        fullWidth
                        size="small"
                        sx={customStyles}
                    />
                </Box>
            </Box>

            <Box mb={2}>
                <Typography variant="body2" component="label" fontSize={12} fontWeight="600">
                    Email
                </Typography>
                <TextField
                    id="register-email"
                    type="email"
                    placeholder="name@company.com"
                    fullWidth
                    size="small"
                    sx={customStyles}
                />
            </Box>

            <PasswordField eyeButton={true} forget={false} title={"Senha"} passwordStrength={true} />

            <PasswordField eyeButton={true} forget={false} title={"Confirme sua senha"} passwordStrength={false} />

            <Box display="flex" alignItems="center" justifyContent="start" mb={1}>

                <Checkbox id="remember" size="small" sx={customStyles} />

                <Typography
                    fontSize={12}
                    variant="body2"
                    component="label"
                    htmlFor="remember"
                >
                    Eu concordo com os <a href="" style={{ fontSize: 12 }} >Termos de Serviço</a> e com a <a href="" style={{ fontSize: 12 }}>política de Privacidade</a>
                </Typography>

            </Box>

            <Stack alignItems={"center"}>
                <Button
                    label={"Criar uma conta"}
                    onClick={() => navigate("/Auth/CompanySelection")}
                    buttonStyle="Purple"
                    sx={{ width: "100%", height: 35 }}
                />
            </Stack>

            <Box marginBlock={2} display="flex" justifyContent="center" alignItems="center">
                <Divider sx={{ flex: 1, marginRight: 2 }} />
                <Typography variant="body2" fontSize={12}>
                    Ou continue com
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