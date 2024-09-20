import { designs, projects } from "./data";

export const Portfolio = () => {
  return (
    <>
      <div className="flex flex-row gap-6 text-size-[0.75rem]">
        {Object.entries(designs).map(([key, name]) => (
          <div key={key} className="flex flex-row place-items-center gap-2">
            <span className={`block w-3 h-3 rounded-full bg-design-${key}`} />
            <label>{name}</label>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.title}>
            <h1 className="text-size-[22px] font-bold font-[Courier]">
              {project.title}
            </h1>
            <p className="flex flex-row place-items-center text-size-[14px]">
              <span className="mr-2 flex flex-row">
                {project.lables.map((label) => (
                  <span
                    key={label}
                    className={`w-3 h-3 rounded-full bg-design-${label} -mr-1`}
                  ></span>
                ))}
              </span>
              {project.subtitle}
            </p>
            <div className="mt-2 aspect-ratio-[unset] image-placeholder h-56" />
          </div>
        ))}
      </div>
    </>
  );
};
