
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import LinearProgress from "@mui/material/LinearProgress";

import styles from "../Demo.module.css";
import { useCustomSelectStyles } from "../../../Hook/StyleMui"


export default function HoursControl() {

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const dataAtual = new Date();
    const nomeDoMes = meses[dataAtual.getMonth()];

    const customStyles = useCustomSelectStyles();

    // Demo values
    const hoursThisMonth = 142;
    const hoursRemaining = 38;
    const monthlyProgress = (hoursThisMonth / 180) * 100;

    const currentHours = 178; // this could come from state, props, etc.
    const targetHours = 180;

    return (
        <>
            <Card className={styles.card}>
                <div className={styles.cardHeader}>
                    <h1 className={styles.cardTitle}>
                        Monthly Hours Control
                    </h1>
                    <p className={styles.cardDescription}>
                        Track your progress towards your monthly hour target of 180 hours.
                    </p>
                </div>
                <CardContent className={styles.cardContent}>
                    <div className={styles.twoColumnGrid}>
                        {/* Monthly Progress */}
                        <div className={styles.monthlyProgressBox}>
                            <div className={styles.monthlyProgressHeader}>
                                <div>
                                    <h1 className={styles.fieldLabel}>
                                        Monthly Progress
                                    </h1>
                                    <Typography variant="body2" className={styles.monthlyProgressSubtitle}>
                                        June 2023
                                    </Typography>
                                </div>
                                <FormControl>
                                    <MuiSelect sx={customStyles} defaultValue="june" labelId="month-select-label" className={styles.selectTriggerSmall}>
                                        <MenuItem value="may">{nomeDoMes} {dataAtual.getFullYear()}</MenuItem>
                                        <MenuItem value="june">June 2023</MenuItem>
                                        <MenuItem value="july">July 2023</MenuItem>
                                    </MuiSelect>
                                </FormControl>
                            </div>
                            <div className={styles.monthlyProgressContent}>
                                {/* Progress Circle */}
                                <div className={styles.progressCircleWrapper}>
                                    <div className={styles.progressCircle}>
                                        <div className={styles.progressCircleContent}>
                                            <Typography variant="h3" className={styles.progressValue}>
                                                {Math.round(monthlyProgress)}%
                                            </Typography>
                                            <Typography variant="body2" className={styles.progressLabel}>
                                                Completed
                                            </Typography>
                                        </div>
                                    </div>
                                    <svg className={styles.progressSvg} viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            fill="none"
                                            stroke="#422680"
                                            strokeWidth="10"
                                            strokeDasharray="283"
                                            strokeDashoffset={283 - (283 * monthlyProgress) / 100}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.monthlyProgressStats}>
                                    <div className={styles.statBox}>
                                        <Typography variant="body2" className={styles.statLabel}>Hours Worked</Typography>
                                        <Typography variant="h5" className={styles.statValue}>{hoursThisMonth}</Typography>
                                    </div>
                                    <div className={styles.statBox}>
                                        <Typography variant="body2" className={styles.statLabel}>Hours Remaining</Typography>
                                        <Typography variant="h5" className={styles.statValue}>{hoursRemaining}</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Daily Breakdown */}
                        <div className={styles.dailyBreakdownBox}>
                            <h1 className={styles.fieldLabel}>
                                Daily Breakdown
                            </h1>
                            <div className={styles.dailyBreakdownList}>
                                {[
                                    { day: "Monday", date: "June 5", hours: 8.5, color: "green" },
                                    { day: "Tuesday", date: "June 6", hours: 7.75, color: "green" },
                                    { day: "Wednesday", date: "June 7", hours: 8, color: "green" },
                                    { day: "Thursday", date: "June 8", hours: 6.5, color: "yellow" },
                                    { day: "Friday", date: "June 9", hours: 4.25, color: "red" },
                                ].map((item, index) => (
                                    <div key={index} className={styles.dailyBreakdownItem}>
                                        <div className={styles.dailyBreakdownDay}>
                                            <Typography variant="body2" className={styles.dailyBreakdownDayName}>
                                                {item.day}
                                            </Typography>
                                            <Typography variant="caption" className={styles.dailyBreakdownDayDate}>
                                                {item.date}
                                            </Typography>
                                        </div>
                                        <div className={styles.dailyBreakdownProgress}>
                                            <div className={styles.progressBarBackground}>
                                                <div
                                                    className={`${styles.progressBar} ${styles[item.color]}`}
                                                    style={{ width: `${(item.hours / 8) * 90}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <Typography variant="body2" className={styles.dailyBreakdownHours}>
                                            {item.hours} hrs
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.weeklySummary}>
                                <Typography variant="subtitle2" className={styles.weeklySummaryTitle}>
                                    Weekly Summary
                                </Typography>
                                <div className={styles.weeklySummaryContent}>
                                    <Typography variant="body2">
                                        <strong className={styles.weeklySummaryStat}>35 hrs</strong> / 40 hrs
                                    </Typography>
                                    <Typography variant="body2" className={styles.weeklySummaryTarget}>
                                        87.5% of target
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Projection */}
                    <div className={styles.monthlyProjectionBox}>
                        <h1 className={styles.fieldLabel}>
                            Monthly Projection
                        </h1>
                        <div className={styles.projectionGrid}>
                            <div className={styles.projectionCard}>
                                <Typography variant="body2" className={styles.projectionLabel}>Current Pace</Typography>
                                <Typography variant="h5" className={styles.projectionValue}>178 hrs</Typography>
                                <div className={styles.projectionStatus}>
                                    <Typography variant="body2" className={currentHours < targetHours ? styles.shortStatus : styles.onTargetStatus}>
                                        {currentHours < targetHours ? "2 hrs short" : "On target"}
                                    </Typography>

                                </div>
                            </div>
                            <div className={styles.projectionCard}>
                                <Typography variant="body2" className={styles.projectionLabel}>Daily Average</Typography>
                                <Typography variant="h5" className={styles.projectionValue}>7.1 hrs</Typography>
                                <div className={styles.projectionStatus}>
                                    <Typography variant="body2" className={styles.averageStatus}>
                                        Need <span className={styles.bold}>7.2 hrs/day</span>
                                    </Typography>
                                </div>
                            </div>
                            <div className={styles.projectionCard}>
                                <Typography variant="body2" className={styles.projectionLabel}>Completion Date</Typography>
                                <Typography variant="h5" className={styles.projectionValue}>June 29</Typography>
                                <div className={styles.projectionStatus}>
                                    <Typography variant="body2" className={styles.completionStatus}>
                                        1 day early
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectionProgress}>
                            <div className={styles.projectionProgressHeader}>
                                <Typography variant="body2" className={styles.projectionProgressTitle}>
                                    Required Daily Hours to Meet Target
                                </Typography>
                                <Typography variant="body2" className={styles.projectionProgressValue}>
                                    7.2 hrs/day
                                </Typography>
                            </div>
                            <div className={styles.progressContainer}>
                                <LinearProgress
                                    value={monthlyProgress}
                                    variant="determinate"
                                    className={styles.progressBar}
                                    sx={{
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#000',
                                        },
                                    }}

                                />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}