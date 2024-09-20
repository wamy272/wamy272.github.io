import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import night from "./assets/night.svg";

const links = [
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
] as const;

const App = () => {
  const { pathname } = useLocation();

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="w-4xl py-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-size-2xl font-bold">MINGYAN WANG | 汪铭彦</h1>
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
              src={night}
              onClick={toggleTheme}
              className="cursor-pointer dark:invert"
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
      </div>
    </div>
  );
};

export default App;
