import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface AccordionProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

export default function Acordion({ icon, title, text }: AccordionProps) {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={icon}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}