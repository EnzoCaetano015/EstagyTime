export default function getRandomHexColor(): string {
    const cor = Math.floor(Math.random() * 16777216).toString(16);
    return `#${cor.padStart(6, '0')}`;
}

// function randHexPart(min : number, max : number) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export default function getRandomHexColor() {
//     const diff = 0x2F;

//     while (true) {
//     const r = randHexPart(0x10, 0xE0);
//         const g = randHexPart(0x10, 0xE0);
//          const b = randHexPart(0x10, 0xE0);
        
//         if (
//             Math.abs(r - g) < diff
//             && Math.abs(r - b) < diff
//             && Math.abs(b - g) < diff
//         ) continue;

//         const color = (r << 16 | g << 8 | b).toString(16);

//         return '#' + color.padStart(6, '0');
//     }
// }