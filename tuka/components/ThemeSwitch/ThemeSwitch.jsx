import React from "react";
import { useEffect, useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";

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
        <button
          className=" hover:text-primary-default flex items-center justify-center h-10 w-10 "
          onClick={() => setTheme("light")}
        >
          <FaRegSun />
        </button>
      ) : (
        <button
          className=" hover:text-primary-default flex items-center justify-center h-10 w-10 "
          onClick={() => setTheme("dark")}
        >
          <FaRegMoon />
        </button>
      )}
    </div>
  );
}
