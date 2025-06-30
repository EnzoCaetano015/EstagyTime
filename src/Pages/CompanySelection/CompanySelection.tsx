import { Box, Stack, Switch, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion"
import Container from "../../components/Container";
import Header from "../../components/Header";
import { fadeUpVariant, slideInVariant } from "../../utils/Motion";
import { BigTitle } from "../../components/Text";
import CustomTabs from "../../components/Tab";
import { Building, Dot, Info, LogIn, Plus, Users } from "lucide-react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import * as Styled from "./CompanySelection.styled"
import { useCompanySelection } from "./CompanySelection.hook";
import CardCompanySelection from "./components";

export default function CompanySelection() {

    const {
        activeTab,
        setActiveTab,
        textlist,
        listTopic,
        sx,
        customStyles,
        navigate,
    } = useCompanySelection();

    return (
        <Container>
            <Header Backbutton={false} LogOutButton />
            <Stack sx={{ alignItems: "center", p: "2rem 1rem" }}>

                <Stack sx={{ alignItems: "center", width: "100%" }}>

                    <motion.div
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
                    >
                        <Box textAlign="center" mb={4}>

                            <BigTitle color="purple" text="Bem-vindo ao StagyTime" />

                            <Typography variant="body2" color="#6b7280" fontSize={13}>
                                Escolha como deseja acessar a plataforma
                            </Typography>

                        </Box>
                    </motion.div>

                    <Styled.TabWrapper
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <CustomTabs
                            customStyles={{ ...customStyles }}
                            value={activeTab}
                            onChange={setActiveTab}
                            tabs={[
                                {
                                    value: "enter",
                                    label: "Colaborador",
                                    content:
                                        <CardCompanySelection
                                            icon={Users}
                                            title={"Entre como um colaborador"}
                                            subtitle={"Digite o código da sua empresa para acessar o seu dashboard de controle de tempo"}
                                        >

                                            <Typography variant="h5">Código da Empresa</Typography>

                                            <TextField
                                                placeholder="Digite o código fornecido pela sua empresa"
                                                fullWidth
                                                size="small"
                                                sx={customStyles}
                                            />

                                            <Typography variant="subtitle1">Este código foi fornecido pelo administrador da sua empresa</Typography>

                                            <Button
                                                icon={<LogIn size={18}/>}
                                                label={"Acesse seu Dashboard"}
                                                onClick={() => navigate("/DashBoard/MyDashboard")}
                                                buttonStyle={"Purple"}
                                                sx={{ width: "100%", height: 35, mt: 2 }}
                                            />

                                        </CardCompanySelection>
                                },

                                {
                                    value: "myCompany",
                                    label: "Minha empresa",
                                    content:
                                        <CardCompanySelection
                                            icon={Building}
                                            title={"Acesso como Administrador"}
                                            subtitle={"Insira o ID da sua empresa e o código de administrador para gerenciar sua organização"}
                                        >
                                            {[
                                                { fieldTitle: "ID da empresa", fieldLabel: "Insira o ID da sua empresa", fieldInfo: "" },
                                                { fieldTitle: "Código do Administrador", fieldLabel: "Digite seu código de administrador", fieldInfo: "Este é o código especial fornecido aos administradores da empresa" },
                                            ].map((item) => (
                                                <>
                                                    <Typography variant="h5">{item.fieldTitle}</Typography>

                                                    <TextField
                                                        placeholder={item.fieldLabel}
                                                        fullWidth
                                                        type="password"
                                                        size="small"
                                                        sx={customStyles}
                                                    />

                                                    <Typography variant="subtitle1">{item.fieldInfo}</Typography>
                                                </>
                                            ))}
                                            <Button
                                                icon={<LogIn size={18} />}
                                                label={"Acesse o Dashboard da empresa"}
                                                onClick={() => navigate("/DashBoard/CompanyDashboard")}
                                                buttonStyle={"Purple"}
                                                sx={{ width: "100%", height: 35, mt: 2 }}
                                            />

                                        </CardCompanySelection>
                                },

                                {
                                    value: "create",
                                    label: "Criar empresa",
                                    content:
                                        <CardCompanySelection
                                            icon={Plus}
                                            title={"Crie uma nova empresa"}
                                            subtitle={"Configure sua organização no StagyTime"}
                                        >
                                            {[
                                                { fieldTitle: "Nome da empresa", fieldLabel: "Digite o nome da sua empresa", fieldInfo: "" },

                                                { fieldTitle: "CNPJ", fieldLabel: "Informe o CNPJ da sua empresa", fieldInfo: "Número de identificação da empresa (formato: XX.XXX.XXX/XXXX-XX)" },

                                                { fieldTitle: "Código de acesso do administrador", fieldLabel: "Crie um código de acesso de administrador", fieldInfo: "Este código será usado pelos administradores para acessar o painel da empresa" },

                                                { fieldTitle: "Código de acesso do usuário", fieldLabel: "Crie um código de acesso do usuário", fieldInfo: "Este código será compartilhado com os colaboradores para que eles se juntem à sua empresa" },

                                            ].map((item) => (
                                                <>
                                                    <Typography variant="h5">{item.fieldTitle}</Typography>

                                                    <TextField
                                                        placeholder={item.fieldLabel}
                                                        fullWidth
                                                        size="small"
                                                        sx={customStyles}
                                                    />

                                                    <Typography variant="subtitle1">{item.fieldInfo}</Typography>
                                                </>
                                            ))}
                                            <Box>
                                                <Typography variant="h5">Empresa privada <Info size={10} /></Typography>
                                                <Switch defaultChecked sx={customStyles} />
                                            </Box>
                                            <Button
                                                icon={<Plus size={18} />}
                                                label={"Criar empresa"}
                                                onClick={() => alert("click")}
                                                buttonStyle={"Purple"}
                                                sx={{ width: "100%", height: 35, mt: 2 }}
                                            />
                                        </CardCompanySelection>
                                },
                            ]}

                        />
                    </Styled.TabWrapper>
                    <Styled.TopicCard
                        initial={slideInVariant.hidden}
                        whileInView={slideInVariant.visible}
                    >
                        <Card
                            icon={""}
                            title={""}
                            text={""}
                            isList={true}
                            textlist={textlist}
                            iconList={<></>}
                            listIcon={<Dot size={20} strokeWidth={5} />}
                            listTopic={listTopic}
                            sx={sx}
                        />
                    </Styled.TopicCard>
                </Stack>
            </Stack >
        </Container>
    )
}