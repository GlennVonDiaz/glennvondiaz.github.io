import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
function Card({ dataColor, dataShow }) {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState("0%");
  const [light, setLight] = useState("0%");
  const [color, setColor] = useState("#000000");

  const inputColorHandler = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);

    const [r, g, b] = hexToRgb(selectedColor);
    setRed(r);
    setGreen(g);
    setBlue(b);
    const HSL = hexToHsl(color);
    setHue(HSL.h);
    setSaturation(HSL.s);
    setLight(HSL.l);

    dataColor(selectedColor);
  };

  function rgbToHex(r, g, b) {
    const toHex = (value) => value.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  }

  function hexToRgb(hex) {
    hex = hex.replace("#", "");
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
    return [red, green, blue];
  }

  const copyHexToClipboard = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        toast.success("Hex copied to clipboard!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const copyRGBToClipboard = () => {
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    navigator.clipboard
      .writeText(rgbColor)
      .then(() => {
        toast.success("RGB copied to clipboard!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const copyHSLToClipboard = () => {
    const hslColor = `hsl(${hue}, ${saturation}, ${light})`;
    navigator.clipboard
      .writeText(hslColor)
      .then(() => {
        toast.success("HSL copied to clipboard!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const randomizeHandler = () => {
    const random1 = Math.floor(Math.random() * 256);
    const random2 = Math.floor(Math.random() * 256);
    const random3 = Math.floor(Math.random() * 256);

    const randomHex = rgbToHex(random1, random2, random3);
    setRed(random1);
    setGreen(random2);
    setBlue(random3);
    const HSL = hexToHsl(randomHex);
    setHue(HSL.h);
    setSaturation(HSL.s);
    setLight(HSL.l);
    setColor(randomHex);

    dataColor(randomHex);
  };

  function hexToHsl(hex) {
    // Remove the '#' if present
    hex = hex.replace("#", "");

    // Convert HEX to RGB
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    // Find max and min values of RGB
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Calculate lightness
    const l = (max + min) / 2;

    let h, s;

    if (max === min) {
      // Achromatic (no color)
      h = 0;
      s = 0;
    } else {
      const delta = max - min;

      // Calculate saturation
      s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

      // Calculate hue
      switch (max) {
        case r:
          h = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / delta + 2;
          break;
        case b:
          h = (r - g) / delta + 4;
          break;
      }

      h /= 6;
    }

    // Convert H, S, L to percentages and return
    return {
      h: Math.round(h * 360), // Hue in degrees
      s: Math.round(s * 100) + "%", // Saturation in percentage
      l: Math.round(l * 100) + "%", // Lightness in percentage
    };
  }
  function showShadeHandler() {
    if (dataShow === "") {
      dataShow = "active";
    } else {
      dataShow = "";
    }
  }

  return (
    <>
      <div className="card rounded-md bg-neutral-700 backdrop-blur-lg bg-opacity-80 lg:w-2/6 h-auto flex p-10 flex-col gap-5 items-center justify-center">
        <div className="grid grid-cols-2 gap-4 items-center w-full justify-center">
          <p className="text-end">Pick a Color -&gt;</p>
          <input
            type="color"
            value={color}
            id="input-color"
            onChange={inputColorHandler}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <h6 className="text-red-600 font-bold font-sans text-end">
            Red : {red}
          </h6>
          <h6 className="text-green-600 font-bold font-sans">
            Green : {green}
          </h6>
          <h6 className="text-blue-600 font-bold font-sans">Blue : {blue}</h6>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          <button
            className="text-slate-400 select-none hover:text-slate-800 bg-slate-300 w-32 hover:bg-slate-200 bg-opacity-25 py-1 px-2 font-sans rounded-sm"
            onClick={copyRGBToClipboard}
          >
            Copy RGB<i className="fa fa-solid fa-copy ml-2"></i>
          </button>
          <div
            className="tooltip tooltip-error"
            data-tip="The HSL value might not be accurate."
          >
            <button
              className=" text-slate-400 select-none border-red-700 border-solid border-2 hover:text-slate-800 bg-slate-300 w-32 hover:bg-slate-200 bg-opacity-25 py-1 px-2 font-sans rounded-sm"
              onClick={copyHSLToClipboard}
            >
              Copy HSL<i className="fa fa-solid fa-copy ml-2"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center w-full">
          <p className="text-white text-end">{color}</p>
          <button
            className="block bg-slate-300 w-32 select-none text-slate-400 hover:text-slate-800 hover:bg-slate-200 bg-opacity-25 py-1 px-2 font-sans rounded-sm"
            onClick={copyHexToClipboard}
          >
            Copy HEX<i className="fa fa-solid fa-copy ml-2"></i>
          </button>
        </div>
        <div className="grid grid-cols-2  gap-4 items-center">
          <button
            className="bg-yellow-600 select-none hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full"
            onClick={randomizeHandler}
          >
            RANDOMIZE
          </button>
          <button
            className="bg-green-600 select-none hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
            onClick={showShadeHandler}
          >
            Show Shade
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Card;
