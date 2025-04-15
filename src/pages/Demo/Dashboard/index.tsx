import { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import styles from "../Demo.module.css";
import { useCustomSelectStyles } from "../../../Hook/Mui/StyleMui"

import { motion } from "framer-motion";
import { fadeInVariant, slideInVariant } from "../../../Hook/Motion/Motion";

const performanceData = [
    { name: "Week 1", tasks: 5, hours: 35, efficiency: 85 },
    { name: "Week 2", tasks: 8, hours: 38, efficiency: 82 },
    { name: "Week 3", tasks: 7, hours: 42, efficiency: 78 },
    { name: "Week 4", tasks: 10, hours: 45, efficiency: 88 },
    { name: "Week 5", tasks: 12, hours: 40, efficiency: 92 },
    { name: "Week 6", tasks: 9, hours: 37, efficiency: 86 },
    { name: "Week 7", tasks: 11, hours: 43, efficiency: 90 },
    { name: "Week 8", tasks: 14, hours: 46, efficiency: 94 },
];

export default function Dashboard() {

    const customStyles = useCustomSelectStyles();

    const [, setChartPeriod] = useState("week");


    return (
        <>
            <Card className={styles.card}>

                <motion.div
                    className={styles.cardHeader}
                    initial={slideInVariant.hidden}
                    whileInView={slideInVariant.visible}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >

                    <div className={styles.performanceHeader}>

                        <div className={styles.performanceTitleContainer}>

                            <h1 className={styles.cardTitle}>
                                Performance Dashboard
                            </h1>

                            <p className={styles.cardDescription}>
                                Track your productivity and efficiency over time.
                            </p>

                        </div>

                        <FormControl className={styles.selectTrigger}>

                            <MuiSelect
                                defaultValue="week"
                                labelId="chart-period-label"
                                sx={customStyles}
                                onChange={(e) => setChartPeriod(e.target.value)}
                            >
                                <MenuItem value="week">Weekly</MenuItem>
                                <MenuItem value="month">Monthly</MenuItem>
                                <MenuItem value="semester">Semester</MenuItem>
                                <MenuItem value="year">Yearly</MenuItem>

                            </MuiSelect>

                        </FormControl>

                    </div>
                </motion.div>

                <CardContent className={styles.cardContent}>

                    <div className={styles.metricsGrid}>

                        <motion.div
                            className={styles.metricCard}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <Typography variant="body2" className={styles.metricLabel}>Tasks Completed</Typography>
                            <Typography variant="h5" className={styles.metricValue}>76</Typography>
                            <Typography variant="caption" className={styles.metricChange}>↑ 12% from last period</Typography>

                        </motion.div>

                        <motion.div
                            className={styles.metricCard}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        >

                            <Typography variant="body2" className={styles.metricLabel}>Avg. Time per Task</Typography>
                            <Typography variant="h5" className={styles.metricValue}>3.2 hrs</Typography>
                            <Typography variant="caption" className={styles.metricChange}>↓ 8% from last period</Typography>

                        </motion.div>

                        <motion.div
                            className={styles.metricCard}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        >

                            <Typography variant="body2" className={styles.metricLabel}>Efficiency Score</Typography>
                            <Typography variant="h5" className={styles.metricValue}>87%</Typography>
                            <Typography variant="caption" className={styles.metricChange}>↑ 5% from last period</Typography>

                        </motion.div>

                        <motion.div
                            className={styles.metricCard}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}

                        >

                            <Typography variant="body2" className={styles.metricLabel}>On-time Completion</Typography>
                            <Typography variant="h5" className={styles.metricValue}>92%</Typography>
                            <Typography variant="caption" className={styles.metricChange}>↑ 3% from last period</Typography>

                        </motion.div>

                    </div>

                    {/* Performance Chart */}
                    <motion.div
                        className={styles.chartBox}
                        initial={fadeInVariant.hidden}
                        whileInView={fadeInVariant.visible}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >

                        <h1 className={styles.fieldLabel}>
                            Performance Trends
                        </h1>

                        <div className={styles.chartContainer}>

                            <ResponsiveContainer width="100%" height="100%">

                                <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="tasks" stroke="#422680" activeDot={{ r: 8 }} strokeWidth={2} />
                                    <Line type="monotone" dataKey="hours" stroke="#777777" strokeWidth={2} />
                                    <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} />

                                </LineChart>

                            </ResponsiveContainer>

                        </div>

                    </motion.div>

                    {/* Task Breakdown */}
                    <div className={styles.taskBreakdownBox}>

                        <motion.div
                            className={styles.taskBreakdownLeft}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}

                        >

                            <h1 className={styles.fieldLabel}>
                                Task Breakdown
                            </h1>

                            <div className={styles.taskBreakdownList}>

                                {[
                                    { name: "Web Development", hours: 45, percentage: 32, color: "blue" },
                                    { name: "UI/UX Design", hours: 28, percentage: 20, color: "purple" },
                                    { name: "Market Research", hours: 22, percentage: 15, color: "green" },
                                    { name: "Content Creation", hours: 18, percentage: 13, color: "yellow" },
                                    { name: "Team Meetings", hours: 15, percentage: 10, color: "red" },
                                    { name: "Training", hours: 14, percentage: 10, color: "indigo" },

                                ].map((item, index) => (

                                    <div key={index} className={styles.taskBreakdownItem}>

                                        <div className={styles.taskBreakdownHeader}>
                                            <Typography variant="body2" className={styles.taskName}>
                                                {item.name}
                                            </Typography>

                                            <Typography variant="caption" className={styles.taskHours}>
                                                {item.hours} hrs ({item.percentage}%)
                                            </Typography>

                                        </div>

                                        <div className={styles.taskProgress}>

                                            <div
                                                className={`${styles.taskProgressBar} ${styles[item.color]}`}
                                                style={{ width: `${item.percentage}%` }}
                                            />
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </motion.div>

                        <motion.div
                            className={styles.taskBreakdownRight}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >

                            <h1 className={styles.fieldLabel}>
                                Productivity by Day
                            </h1>

                            <div className={styles.dailyProductivityList}>

                                {[
                                    { day: "Monday", efficiency: 92, hours: 8.5, color: "green" },
                                    { day: "Tuesday", efficiency: 88, hours: 7.8, color: "green" },
                                    { day: "Wednesday", efficiency: 85, hours: 8.2, color: "green" },
                                    { day: "Thursday", efficiency: 78, hours: 6.5, color: "yellow" },
                                    { day: "Friday", efficiency: 82, hours: 7.0, color: "green" },

                                ].map((item, index) => (

                                    <div key={index} className={styles.dailyProductivityItem}>

                                        <div className={styles.dailyProductivityHeader}>

                                            <Typography variant="body2" className={styles.productivityDay}>
                                                {item.day}
                                            </Typography>

                                            <Typography variant="caption" className={styles.productivityInfo}>
                                                {item.efficiency}% efficiency · {item.hours} hrs
                                            </Typography>

                                        </div>

                                        <div className={styles.dailyProductivityProgress}>
                                            <div
                                                className={`${styles.dailyProgressBar} ${styles[item.color]}`}
                                                style={{ width: `${item.efficiency}%` }}
                                            />
                                        </div>

                                    </div>

                                ))}
                            </div>

                            <div className={styles.weeklySummary}>

                                <Typography variant="body2" className={styles.weeklySummaryLabel}>
                                    Weekly Average
                                </Typography>

                                <Typography variant="body2" className={styles.weeklySummaryValue}>
                                    85% efficiency
                                </Typography>

                            </div>

                        </motion.div>

                    </div>
                </CardContent>
            </Card>
        </>
    )
}