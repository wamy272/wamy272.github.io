import { useNavigate } from "react-router-dom";
import { designs, projects } from "./data";

export const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row justify-between gap-3 text-size-[0.75rem] sm:justify-initial sm:gap-6">
        {Object.entries(designs).map(([key, name]) => (
          <div
            key={key}
            className="flex flex-row place-items-center gap-1 sm:gap-2"
          >
            <span
              className={`block w-3 min-w-3 h-3 rounded-full bg-design-${key}`}
            />
            <label>{name}</label>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-pointer select-none transition-all hover:shadow-2xl"
            onClick={() => {
              if (project.url) {
                navigate(project.url);
              }
            }}
          >
            <h1 className="text-size-[22px] font-bold font-[Courier]">
              {project.title}
            </h1>
            <p className="flex flex-row place-items-center text-size-[14px]">
              <span className="mr-2 flex flex-row">
                {project.labels.map((label) => (
                  <span
                    key={label}
                    className={`w-3 h-3 rounded-full bg-design-${label} -mr-1`}
                  ></span>
                ))}
              </span>
              {project.subtitle}
            </p>
            {project.image ? (
              <img src={project.image} className="image" />
            ) : (
              <div className="mt-2 aspect-ratio-[unset] image-placeholder h-56" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
