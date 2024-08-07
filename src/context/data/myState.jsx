import MyContext from "./myContext";
import { useState } from "react";

export default function MyState({ children }) {
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
    <MyContext.Provider value={{ mode, toggleMode }}>
      {children}
    </MyContext.Provider>
  );
}
