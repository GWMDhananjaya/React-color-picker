 import { useRef, useState } from 'react';


// Component for rendering the home page
export default function Home() {
  const colorRef = useRef();
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [colorDetails, setColorDetails] = useState({ name: 'Black', rgb: 'rgb(0,0,0)', hsl: 'hsl(0, 0%, 0%)', hsv: 'hsv(0, 0%, 0%)' });

  const hexToRgb = (hex) => {
      const r = parseInt(hex.substring(1, 3), 16);
      const g = parseInt(hex.substring(3, 5), 16);
      const b = parseInt(hex.substring(5, 7), 16);
      return { r, g, b, rgb: `rgb(${r}, ${g}, ${b})` };
  };

  const rgbToHsl = (r, g, b) => {
      r /= 255, g /= 255, b /= 255;
      let max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
      if (max === min) {
          h = s = 0;
      } else {
          let d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
      return `hsl(${(h * 360).toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(l * 100).toFixed(0)}%)`;
  };

  const rgbToHsv = (r, g, b) => {
      r /= 255, g /= 255, b /= 255;
      let max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, v = max;
      let d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max === min) {
          h = 0;
      } else {
          switch (max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
      return `hsv(${(h * 360).toFixed(0)}, ${(s * 100).toFixed(0)}%, ${(v * 100).toFixed(0)}%)`;
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const colorValue = colorRef.current.value;
      setSelectedColor(colorValue);
      const { r, g, b, rgb } = hexToRgb(colorValue);
      setColorDetails({
          name: colorValue,
          rgb,
          hsl: rgbToHsl(r, g, b),
          hsv: rgbToHsv(r, g, b),
      });
  };
 
  return (

      <div>
       
      
       <div className="flex  items-center justify-center min-h-screen  gap-10">
           <div className=' flex  gap-3'>
           
           <form onSubmit={handleSubmit} className=" flex flex-col items-center bg-slate-700 p-3 rounded-xl shadow-lg">
               <input ref={colorRef} type='color' defaultValue={selectedColor} className="w-24 h-12 cursor-pointer m-6 shadow-lg" />
           </form>
           <form onSubmit={handleSubmit} className=" flex  items-center   rounded-xl shadow-lg">
               <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg">Select Color</button>
           </form>
           </div>
           <div className="mt-6 flex flex-col gap-1 ">
               {/* <div className="w-32 h-32 rounded-lg border-2 border-gray-300" style={{ backgroundColor: selectedColor }}></div> */}
               <p className="mt-2 text-lg font-semibold rounded-sm  outline-indigo-300 p-2 outline-2 ring-2 ring-blue-500 rounded-xl ">HEX : {selectedColor}</p>
               <p className="mt-2 text-lg font-semibold rounded-sm outline-indigo-300 p-2 ring-2 p-2 ring-blue-500 rounded-xl">RGB : {colorDetails.rgb}</p>
               <p className="mt-2 text-lg font-semibold rounded-sm outline-indigo-300 p-2 ring-2 p-2 ring-blue-500 rounded-xl">HSL : {colorDetails.hsl}</p>
               <p className="mt-2 text-lg font-semibold rounded-sm outline-indigo-00 p-2 ring-2 p-2 ring-blue-500 rounded-xl">HSV : {colorDetails.hsv}</p>
           </div>
       </div>
       </div>
   
  );
}
