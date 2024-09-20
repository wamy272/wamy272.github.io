import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { clsx } from "clsx";

const links = [
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
] as const;

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-row justify-center">
      <div className="w-4xl py-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-size-2xl">MINGYAN WANG | 汪铭彦</h1>
          <div className="flex flex-row gap-4">
            {links.map((nav) => (
              <Link
                key={nav.path}
                to={nav.path}
                className={clsx("uppercase", {
                  "font-bold": pathname === nav.path,
                })}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] mb-8 mt-4 bg-gray" />
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
