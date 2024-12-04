import { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Card from "./components/card";
import ShadeCard from "./components/ShadeCard";

function App() {
  const [color, setColor] = useState("#000000");
  const [showShade, setShowShade] = useState("");
  const handleDataColor = (data) => {
    setColor(data);
  };
  const handleDataShow = (data) => {
    setShowShade(data);
  };
  console.log(showShade);
  return (
    <>
      <div
        className="body min-h-screen min-w-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <Card dataColor={handleDataColor} dataShow={handleDataShow} />
        <ShadeCard showShade />
      </div>
    </>
  );
}

export default App;
