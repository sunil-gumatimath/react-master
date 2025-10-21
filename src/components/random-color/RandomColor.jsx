import { useEffect, useState } from "react";
import "./styles.css";

const RandomColor = () => {


   const [typeOfColor, setTypeOfColor] = useState('hex');
   const [color, setColor] = useState('#000000')

   const randomColorUtility = (length) => {
      return Math.floor(Math.random() * length)
   }

   const handleRandomHexColor = () => {
      // #678765
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
         hexColor += hex[randomColorUtility(hex.length)]
      }
      setColor(hexColor);
   }

   const handleRandomRgbColor = () => {
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);

      setColor(`rgb(${r},${g},${b})`)
   }


   useEffect (() => {
      if (typeOfColor === 'rgb') {
         handleRandomRgbColor();
      }else{
         handleRandomHexColor();
      }
   },[typeOfColor]);

   return (
      <div>
         <div
            className="background"
            style={{ background: color }}
         ></div>

         <div className="container">
            <div className="buttons-container">
               <button onClick={() => { setTypeOfColor('hex') }}>create HEX color</button>
               <button onClick={() => { setTypeOfColor('rgb') }}>create RGB color</button>
               <button onClick={
                  typeOfColor === 'hex'
                     ? handleRandomHexColor
                     : handleRandomRgbColor
               }
               >generate Random Color</button>
            </div>

            <div className="color-display">
               <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
               <h1>{color}</h1>
            </div>

         </div>
      </div>
   );
}

export default RandomColor;
