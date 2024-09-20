const lables = {
  product: "Product Design",
  service: "Service Design",
  brand: "Brand Design",
} as const;

const projects = [
  {
    title: "Hi! Air",
    subtitle: "Pneumatic Toy Design for Children",
    lables: ["service", "product"],
  },
  {
    title: "Crafted Seasons",
    subtitle: "",
    lables: ["service", "product"],
  },
  {
    title: "Rebrella",
    subtitle: "",
    lables: ["service", "brand"],
  },
] as const;

export const Portfolio = () => {
  return (
    <>
      <div className="flex flex-row gap-6 text-size-[0.75rem]">
        {Object.entries(lables).map(([key, name]) => (
          <div key={key} className="flex flex-row place-items-center gap-2">
            <span className={`block w-3 h-3 rounded-full bg-design-${key}`} />
            <label>{name}</label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-8 mt-8">
        {projects.map((project) => (
          <div key={project.title}>
            <h1 className="font-bold font-[Courier] text-size-[22px]">
              {project.title}
            </h1>
            <p className="flex flex-row place-items-center text-size-[14px]">
              <span className="flex flex-row mr-2">
                {project.lables.map((label) => (
                  <span
                    key={label}
                    className={`w-3 h-3 rounded-full bg-design-${label} -mr-1`}
                  ></span>
                ))}
              </span>
              {project.subtitle}
            </p>
            <div className="image-placeholder aspect-ratio-[unset] mt-2 h-56" />
          </div>
        ))}
      </div>
    </>
  );
};
