import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface AcordionProps extends AccordionProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export default function Acordion({ icon, title, text }: AcordionProps) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={icon}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span" fontWeight={"bold"}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ textAlign: "start" }}>
                    {text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}