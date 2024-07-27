import myContext from "./myContext";
import { useState } from "react";

export default function myState() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,29)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <myContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </myContext.Provider>
  );
}
