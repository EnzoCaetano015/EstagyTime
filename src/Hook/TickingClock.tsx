import React, { useEffect, useState } from 'react';
import {
    Clock1,
    Clock2,
    Clock3,
    Clock4,
    Clock5,
    Clock6,
    Clock7,
    Clock8,
    Clock9,
    Clock10,
    Clock11,
    Clock12
} from 'lucide-react';

interface TickingClockProps {
    intervalTime?: number;
    size?: number;
    color?: string;
}

const TickingClock: React.FC<TickingClockProps> = ({
    intervalTime = 1000,
    size = 60,
    color = '#fff'
}) => {
    const clockIcons = [
        Clock1,  // 1:00
        Clock2,  // 2:00
        Clock3,  // 3:00
        Clock4,  // 4:00
        Clock5,  // 5:00
        Clock6,  // 6:00
        Clock7,  // 7:00
        Clock8,  // 8:00
        Clock9,  // 9:00
        Clock10, // 10:00
        Clock11, // 11:00
        Clock12  // 12:15 
    ];

    const [iconIndex, setIconIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIconIndex((prevIndex) => (prevIndex + 1) % clockIcons.length);
        }, intervalTime);

        return () => clearInterval(intervalId);
    }, [clockIcons.length, intervalTime]);

    const CurrentClockIcon = clockIcons[iconIndex];

    return (
        <div>
            <CurrentClockIcon size={size} color={color} />
        </div>
    );
};

export default TickingClock;
