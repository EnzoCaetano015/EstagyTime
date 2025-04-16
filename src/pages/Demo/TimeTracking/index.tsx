import { useState } from "react";
import {
    Clock,
    CheckCircle,
} from "lucide-react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import styles from "../Demo.module.css";
import Select from "@mui/material/Select";
import { useCustomSelectStyles } from "../../../Hook/Mui/StyleMui"
import Timer from "../../../components/Timer/Timer_Comp";

import { motion } from "framer-motion";
import { fadeInVariant, slideInVariant } from "../../../utils/Motion";


export default function TimeTracking() {
    const customStyles = useCustomSelectStyles();

    const [timeFormat, setTimeFormat] = useState("hours");

    const [selectedTask, setSelectedTask] = useState<string>('');

    const handleTaskChange = (event: SelectChangeEvent<string>) => {
        setSelectedTask(event.target.value);
    };

    // Demo values
    const hoursToday = 6.5;

    return (
        <>
            <Card className={styles.card}>

                <motion.div
                    className={styles.cardHeader}
                    initial={slideInVariant.hidden}
                    whileInView={slideInVariant.visible}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}

                >
                    <h1 className={styles.cardTitle}>
                        Time Tracking Demo
                    </h1>
                    <p className={styles.cardDescription}>
                        Track your work hours and assign time to specific tasks.
                    </p>
                </motion.div>

                <CardContent className={styles.cardContent}>

                    <div className={styles.fieldGroup}>

                        <div className={styles.fieldHeader}>

                            <motion.h1
                                className={styles.fieldLabel}
                                initial={slideInVariant.hidden}
                                animate={slideInVariant.visible}
                            >
                                Work Timer
                            </motion.h1>

                            <Typography variant="body2" className={styles.dateDisplay}>
                                {new Date().toLocaleDateString()}
                            </Typography>

                        </div>
                        <motion.div
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <Timer />
                        </motion.div>
                    </div>

                    <div className={styles.fieldGroup}>

                        <motion.h1
                            className={styles.fieldLabel}
                            initial={slideInVariant.hidden}
                            whileInView={slideInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            Daily Hours
                        </motion.h1 >

                        <motion.div
                            className={styles.hoursBox}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >

                            <div className={styles.hoursTop}>
                                <div className={styles.hoursInfo}>
                                    <h2 className={styles.hoursLabel}>
                                        Hours worked today
                                    </h2>
                                    <span className={styles.hoursValue}>
                                        {hoursToday} hrs
                                    </span>
                                </div>

                                <div className={styles.hoursIconBox}>
                                    <Clock className={styles.hoursIcon} />
                                </div>
                            </div>

                            <div className={styles.progressSection}>
                                <p className={styles.progressLabel}>
                                    Daily progress (8 hours target)
                                </p>
                                <div className={styles.progressContainer}>
                                    <LinearProgress
                                        value={hoursToday * 12.5}
                                        variant="determinate"
                                        className={styles.progressBar}
                                        sx={{
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#000',
                                            },
                                        }}

                                    />
                                    <span className={styles.progressPercentage}>
                                        {Math.round(hoursToday * 12.5)}%
                                    </span>
                                </div>
                            </div>
                        </motion.div >
                    </div>

                    <div className={styles.fieldGroup}>

                        <motion.h1
                            className={styles.fieldLabel}
                            initial={slideInVariant.hidden}
                            whileInView={slideInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            Task Selection
                        </motion.h1 >

                        <motion.div
                            className={styles.taskBox}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <FormControl fullWidth>

                                <Select
                                    sx={customStyles}
                                    value={selectedTask}
                                    onChange={handleTaskChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Task Selection</em>
                                    </MenuItem>
                                    <MenuItem value="development">Web Development</MenuItem>
                                    <MenuItem value="design">UI/UX Design</MenuItem>
                                    <MenuItem value="research">Market Research</MenuItem>
                                    <MenuItem value="content">Content Creation</MenuItem>
                                    <MenuItem value="meeting">Team Meetings</MenuItem>
                                    <MenuItem value="training">Training</MenuItem>
                                </Select>

                            </FormControl>

                            <div className={styles.taskSubFields}>
                                <div className={styles.taskSubField}>
                                    <Typography variant="body2" className={styles.subFieldLabel}>
                                        Project
                                    </Typography>
                                    <FormControl fullWidth>
                                        <MuiSelect
                                            sx={customStyles}
                                            defaultValue="website"
                                        >
                                            <MenuItem value="website">Company Website</MenuItem>
                                            <MenuItem value="app">Mobile App</MenuItem>
                                            <MenuItem value="marketing">Marketing Campaign</MenuItem>
                                        </MuiSelect>
                                    </FormControl>
                                </div>
                                <div className={styles.taskSubField}>
                                    <Typography variant="body2" className={styles.subFieldLabel}>
                                        Priority
                                    </Typography>
                                    <FormControl fullWidth>
                                        <MuiSelect
                                            defaultValue="medium"
                                            sx={customStyles}
                                        >
                                            <MenuItem value="high">High</MenuItem>
                                            <MenuItem value="medium">Medium</MenuItem>
                                            <MenuItem value="low">Low</MenuItem>
                                        </MuiSelect>
                                    </FormControl>
                                </div>
                            </div>
                        </motion.div>
                    </div>


                    <div className={styles.fieldGroup}>

                        <motion.h1
                            className={styles.fieldLabel}
                            initial={slideInVariant.hidden}
                            whileInView={slideInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            Time Spent
                        </motion.h1>

                        <motion.div
                            className={styles.timeSpentBox}
                            initial={fadeInVariant.hidden}
                            whileInView={fadeInVariant.visible}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >

                            <div className={styles.timeFormatSection}>

                                <Typography variant="body2" className={styles.subFieldLabel}>
                                    Time Format
                                </Typography>

                                <RadioGroup
                                    sx={customStyles}
                                    row
                                    defaultValue="hours"
                                    className={styles.radioGroup}
                                    onChange={(_event, value) => setTimeFormat(value)}
                                >
                                    <FormControlLabel value="hours" control={<Radio />} label="Hours" />
                                    <FormControlLabel value="days" control={<Radio />} label="Days" />
                                    <FormControlLabel value="dates" control={<Radio />} label="Date Range" />

                                </RadioGroup>

                            </div>

                            {timeFormat === "hours" && (

                                <div className={styles.timeInputGrid}>
                                    <TextField sx={customStyles} id="hours-spent" type="number" defaultValue="3" InputProps={{ inputProps: { min: 0, step: 0.5 } }} />
                                    <TextField sx={customStyles} id="minutes-spent" type="number" defaultValue="45" InputProps={{ inputProps: { min: 0, max: 59 } }} />
                                </div>
                            )}

                            {timeFormat === "days" && (

                                <div className={styles.timeInputGrid}>
                                    <TextField sx={customStyles} id="days-spent" type="number" defaultValue="0" InputProps={{ inputProps: { min: 0, step: 0.5 } }} />
                                    <TextField sx={customStyles} id="hours-in-day" type="number" defaultValue="8" InputProps={{ inputProps: { min: 1, max: 24 } }} />
                                </div>
                            )}

                            {timeFormat === "dates" && (

                                <div className={styles.timeInputGrid}>

                                    <div className={styles.dateInputWrapper}>

                                        <Typography variant="body2" className={styles.subFieldLabel}>Start Date</Typography>

                                        <div className={styles.inputIconWrapper}>
                                            <TextField sx={customStyles} fullWidth id="start-date" type="date" />
                                        </div>

                                    </div>

                                    <div className={styles.dateInputWrapper}>

                                        <Typography variant="body2" className={styles.subFieldLabel}>End Date</Typography>

                                        <div className={styles.inputIconWrapper}>
                                            <TextField sx={customStyles} fullWidth id="end-date" type="date" />
                                        </div>

                                    </div>

                                </div>
                            )}
                        </motion.div>

                    </div>

                </CardContent>
                <CardActions className={styles.cardFooter}>
                    <Button className={styles.saveButton}>
                        <CheckCircle className={styles.buttonIcon} />
                        Save Time Entry
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}