import React from "react";
import { useEffect, useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { Tooltip } from "@mui/material";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "light"
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default function ThemeSwitch() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="flex items-center">
      {colorTheme === "light" ? (
        <Tooltip title="Lightmode" disableInteractive>
          <button
            className="Navbar__icon-btn"
            onClick={() => setTheme("light")}
          >
            <FaRegSun />
          </button>
        </Tooltip>
      ) : (
        <Tooltip title="Darkmode" disableInteractive>
          <button
            className=" Navbar__icon-btn"
            onClick={() => setTheme("dark")}
          >
            <FaRegMoon />
          </button>
        </Tooltip>
      )}
    </div>
  );
}
