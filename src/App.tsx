import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import night from "./assets/night.svg";
import sun from "./assets/sun.svg";
import { useState } from "react";

const links = [
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
] as const;

const App = () => {
  const { pathname } = useLocation();
  const [isDark, setIsDark] = useState(() =>
    document.body.classList.contains("dark")
  );

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle("dark");
    setIsDark(isDark);

    const color = isDark ? "#1a1a1a" : "#ffffff";

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", color);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "theme-color");
      newMeta.setAttribute("content", color);
      document.head.appendChild(newMeta);
    }
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="m-8 w-full md:max-w-4xl">
        <div className="max-w-full flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <Link to="/">
            <h1 className="text-size-2xl font-bold">MINGYAN WANG | 汪铭彦</h1>
          </Link>
          <div className="flex flex-row gap-4">
            {links.map((nav) => (
              <Link
                key={nav.path}
                to={nav.path}
                className={clsx("uppercase", {
                  "font-bold underline": pathname === nav.path,
                })}
              >
                {nav.name}
              </Link>
            ))}
            <img
              src={isDark ? sun : night}
              onClick={toggleTheme}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-8 mt-4 h-[1px] w-full bg-gray" />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer className="flex flex-col place-items-center justify-between gap-1 py-8 text-size-[14px] opacity-60 sm:flex-row sm:gap-0">
          <div>© 2024 Created by MINGYAN WANG</div>
          <div>
            Last Updated:{" "}
            {import.meta.env.VITE_LAST_COMMIT_DATE?.trim() ??
              new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date())}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
