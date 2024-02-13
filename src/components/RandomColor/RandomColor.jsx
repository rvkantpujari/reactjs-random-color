import React, { useEffect, useState } from 'react'
import './RandomColor.css';

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (len) => {
        return Math.floor(Math.random() * len);
    }

    const handleRandomHexColor = () => {
        // HEX range starts from 0 to F
        const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";

        for(let i = 0; i < 6; i++) {
            hexColor += HEX[randomColorUtility(HEX.length)];
        }
        
        setColor(hexColor);
    }

    const handleRandomRgbColor = () => {
        let r = randomColorUtility(256);
        let g = randomColorUtility(256);
        let b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(() => {
        typeOfColor === "hex" ? handleRandomHexColor() : handleRandomRgbColor();
    }, [typeOfColor])
    

    return (
        <div style={{ backgroundColor: color, color: '#ffffff' }} className='container'>
            <div className='btns'>
                <button onClick={() => setTypeOfColor("hex")}>Generate HEX Color</button>
                <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
                <button onClick={typeOfColor === "hex" ? () => handleRandomHexColor() : () => handleRandomRgbColor()}>Generate Random Color</button>
            </div>
            <div style={{fontSize: '2em', marginTop: '1em'}}>{(typeOfColor === "hex" ? "HEX Color: " : "RGB Color: ") + color}</div>
        </div>
    )
}

export default RandomColor