import { Box, Stack, Typography } from "@mui/material";
import { LucideIcon } from "lucide-react";
import CustomChip from "../Chip";


interface ActivityCardProps {
    icon?: LucideIcon; // Time
    title: string;
    position?: string; // Task
    date: string;
    hours?: number; // Time
    qtdTask?: number; // Time
    status?: "In Progress" | "Completed" | "Not Started"
    color?: string; // Task
    type: "Task" | "Time";
}

export const ActivityCard = ({ icon: Icon, title, position, date, hours, qtdTask, status, color, type, }: ActivityCardProps) => {

    if (type === "Task") {
        return (
            <Stack
                direction="row"
                sx={{
                    height: 60,
                    justifyContent: "space-between",
                    alignItems: "center",
                    bgcolor: "#F9FAFB",
                    paddingInline: 2,
                    borderRadius: 2,
                }}
            >
                <Stack direction="row" gap={2} alignItems="center">
                    <Box sx={{ width: 8, height: 40, borderRadius: 8 }} bgcolor={color} />
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {position} • Due {date}
                        </Typography>
                    </Box>
                </Stack>
                {status && <CustomChip type={status} />}
            </Stack>
        );
    }

    return (
        <Stack
            direction="row"
            sx={{
                height: 60,
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#F9FAFB",
                paddingInline: 2,
                borderRadius: 2,
            }}
        >
            <Box>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600 }}
                    display="flex"
                    alignItems="center"
                    gap={1}
                >
                    {Icon &&<Icon size={15} color="#422680" strokeWidth={3} />}
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {date} • {qtdTask} task
                </Typography>
            </Box>

            <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, textAlign: "end" }}>
                    {hours} hrs
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {hours} hrs from target
                </Typography>
            </Box>
        </Stack>
    );
};
