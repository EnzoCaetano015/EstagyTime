import { Box, Stack, Switch, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion"
import Container from "../../components/Container";
import Header from "../../components/Header";
import { fadeUpVariant, slideInVariant } from "../../utils/Motion";
import { BigTitle } from "../../components/Text";
import CustomTabs from "../../components/Tab";
import CardCompanySelection from "./CardCompanySelection";
import { Building, ChevronRight, Dot, Info, Plus, Users } from "lucide-react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import * as Styled from "./CompanySelection.styled"
import { useCompanySelection } from "./CompanySelection.hook";

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
            <Header button={false} />
            <Stack sx={{ alignItems: "center", p: "2rem 1rem" }}>

                <Stack sx={{ alignItems: "center", width: "100%" }}>

                    <motion.div
                        initial={fadeUpVariant.hidden}
                        whileInView={fadeUpVariant.visible}
                        viewport={{ once: true }}
                    >
                        <Box textAlign="center" mb={4}>

                            <BigTitle color="purple" text="Welcome to StagyTime" />

                            <Typography variant="body2" color="#6b7280" fontSize={13}>
                                Choose how you want to access the platform
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
                                    label: "Enter in a Company",
                                    content:
                                        <CardCompanySelection
                                            icon={Users}
                                            title={"Join as a Collaborator"}
                                            subtitle={"Enter your company code to access your time tracking dashboard"}
                                        >

                                            <Typography variant="h5">Company Code</Typography>

                                            <TextField
                                                placeholder="Enter the code provided by your company"
                                                fullWidth
                                                size="small"
                                                sx={customStyles}
                                            />

                                            <Typography variant="subtitle1">This code was provided by your company administrator</Typography>

                                            <Button
                                                icon={<ChevronRight />}
                                                label={"Continue"}
                                                onClick={() => navigate("/MyDashboard")}
                                                buttonStyle={"Purple"}
                                                sx={{ width: "100%", height: 35, mt: 2 }}
                                            />

                                        </CardCompanySelection>
                                },

                                {
                                    value: "myCompany",
                                    label: "My Company",
                                    content:
                                        <CardCompanySelection
                                            icon={Building}
                                            title={"Access as Administrator"}
                                            subtitle={"Enter your company ID and admin code to manage your organization"}
                                        >
                                            {[
                                                { fieldTitle: "Company ID", fieldLabel: "Enter your company ID", fieldInfo: "" },
                                                { fieldTitle: "Administrator Code", fieldLabel: "Enter your administrator code", fieldInfo: "This is the special code provided to company administrators" },
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
                                                icon={<ChevronRight />}
                                                label={"Access Company Dashboard"}
                                                onClick={() => navigate("/CompanyDashboard")}
                                                buttonStyle={"Purple"}
                                                sx={{ width: "100%", height: 35, mt: 2 }}
                                            />

                                        </CardCompanySelection>
                                },

                                {
                                    value: "create",
                                    label: "Create Company",
                                    content:
                                        <CardCompanySelection
                                            icon={Plus}
                                            title={"Create a New Company"}
                                            subtitle={"Set up your organization on StagyTime"}
                                        >
                                            {[
                                                { fieldTitle: "Company Name", fieldLabel: "Enter your company name", fieldInfo: "" },

                                                { fieldTitle: "CNPJ", fieldLabel: "Enter your company CNPJ", fieldInfo: "Brazilian company identification number (format: XX.XXX.XXX/XXXX-XX)" },

                                                { fieldTitle: "Administrator Access Code", fieldLabel: "Create an administrator access code", fieldInfo: "This code will be used by administrators to access the company dashboard" },

                                                { fieldTitle: "User Access Code", fieldLabel: "Create an user access code", fieldInfo: "This code will be shared with collaborators to join your company" },

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
                                                <Typography variant="h5">Private Company <Info size={10} /></Typography>
                                                <Switch defaultChecked sx={customStyles} />
                                            </Box>
                                            <Button
                                                icon={<ChevronRight />}
                                                label={"Create Company"}
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