import {
    LineChart, Line,
    BarChart, Bar,
    PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

import { Card, CardContent, Typography, Box } from "@mui/material";

interface CardGraficProps {
    label: string;
    subtitle: string;
    type: "line" | "bar" | "pie";
    data: unknown[];
}

const COLORS = ["#422680", "#8B83D7", "#A1A1AA"];

export const CardGrafic = ({ label, subtitle, type, data }: CardGraficProps) => {
    return (
        <Card
            sx={{
                width:
                    type === "pie"
                        ? { xs: "100%", md: "50%" }
                        : type === "line" || type === "bar"
                            ? "100%"
                            : "auto",
            }}
        >

            <CardContent>

                <Typography variant="h4" sx={{ fontWeight: 600 }}>{label}</Typography>
                <Typography variant="subtitle1" color="text.secondary" mb={2}>{subtitle}</Typography>

                <Box sx={{ width: "100%", height: 300 }}>

                    {type === "line" && (
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="tasks" stroke="#422680" strokeWidth={2} />
                                <Line type="monotone" dataKey="hours" stroke="#A1A1AA" strokeWidth={2} />
                                <Line type="monotone" dataKey="efficiency" stroke="#10B981" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    )}

                    {type === "bar" && (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="worked" fill="#422680" />
                                <Bar dataKey="target" fill="#8B83D7" />
                            </BarChart>
                        </ResponsiveContainer>
                    )}

                    {type === "pie" && (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Tooltip />
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={80}
                                    label
                                >
                                    {data.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};
