import { CardContent, Stack, Typography, Box, Card, Chip } from "@mui/material"
import * as Styled from "./projectOptions.styled"
import Button from "../../../../components/Button"
import { Plus } from "lucide-react"
import ProgressBar from "../../../../components/ProgressBar"
import { OptionsProps } from "../interface"


export const Projects = ({ open }: OptionsProps) => {
    return (
        <>
            <Styled.ProjectWrapper>

                <CardContent>

                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

                        <Box>
                            <Typography variant="h4" fontWeight={600}>Projects Overview</Typography>
                            <Typography variant="subtitle1" color="text.secondary">Manage and monitor all company projects</Typography>
                        </Box>

                        <Button
                            label={"Create Project"}
                            icon={<Plus size={15} />}
                            iconPosition="right"
                            onClick={() => alert('create')}
                            buttonStyle={"Purple"}
                            sx={{ paddingInline: 1, height: 30 }}
                        />

                    </Stack>

                    <Box sx={{ display: "grid", gridTemplateColumns: open ? "repeat(2, 1fr);" : "repeat(3, 1fr);" }}>
                        {[
                            { title: "Website Redesign", tasks: 24, tasksCompleted: 18, percentage: 75 },
                            { title: "Mobile App Development", tasks: 36, tasksCompleted: 12, percentage: 33 },
                            { title: "CRM Integration", tasks: 18, tasksCompleted: 5, percentage: 28 },

                        ].map((project) => (
                            <Card sx={{ bgcolor: "#F9FAFB", maxWidth: 400, m: 2 }}>

                                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>

                                    <Stack direction={"row"} justifyContent={"space-between"} >

                                        <Typography variant="h5" fontWeight={600}>{project.title}</Typography>
                                        <Typography variant="h6" fontWeight={600}>{project.percentage}%</Typography>

                                    </Stack>

                                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

                                        <Stack direction={"row"} alignItems={"center"} gap={2}>

                                            <Chip label={`${project.tasks} Tasks`} variant="outlined" sx={{ fontWeight: 600 }} />
                                            <Typography variant="subtitle1" color="text.secondary">{project.tasksCompleted} completed</Typography>

                                        </Stack>

                                        <Typography>Complete</Typography>

                                    </Stack>

                                    <ProgressBar neutral={true} value={project.percentage} />

                                    <Stack direction={"row"} justifyContent={"end"} gap={1} mt={1}>

                                        <Button
                                            label={"View Details"}
                                            onClick={() => alert('view')}
                                            buttonStyle={"Black"}
                                            sx={{ paddingInline: 1, height: 30 }}
                                        />
                                        <Button
                                            label={"Menage Tasks"}
                                            onClick={() => alert('menage')}
                                            buttonStyle={"Black"}
                                            sx={{ paddingInline: 1, height: 30 }}
                                        />
                                        <Button
                                            label={"Edit Project"}
                                            onClick={() => alert('edit')}
                                            buttonStyle={"Black"}
                                            sx={{ paddingInline: 1, height: 30 }}
                                        />

                                    </Stack>

                                </CardContent>

                            </Card>
                        ))}

                    </Box>

                </CardContent>

            </Styled.ProjectWrapper>
        </>
    )
}