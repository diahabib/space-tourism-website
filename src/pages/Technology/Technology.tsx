import { useState } from "react";
import { TechnologyData } from "../../types/types";
import "./style.css";
import useViewport from "../../hooks/useViewport";

interface TechnologyProps {
  technologyData: TechnologyData[];
}

const Technology: React.FC<TechnologyProps> = ({ technologyData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isLaptop } = useViewport();

  const currentTech = technologyData[selectedIndex];
  const handleChangeTechnology = (ndx: number) => {
    setSelectedIndex(ndx);
  };
  return (
    <div className="technology-container h-full pt-24 md:pt-28 lg:pt-44 lg:ps-40">
      <h2 className="uppercase text-center md:text-start text-lg lg:text-2xl tracking-widest md:ps-8 lg:ps-16">
        <span className="opacity-40 mr-4">03</span> Space Launch 101
      </h2>
      <div className="flex flex-col items-centers lg:flex-row  lg:justify-between ">
        <div className="flex flex-col items-center md:items-start mt-2 lg:order-2">
          <div className="technology-image-container mt-8 lg:flex lg:w-full lg:ms-16 justify-wcenter">
            <img
              src={
                isLaptop
                  ? currentTech.images.portrait
                  : currentTech.images.landscape
              }
              alt={currentTech.name}
              className="technology-image w-full h-full lg:absolute lg:w-96 lg:h-96 right-0 transition-all duration-500"
            />
          </div>
        </div>
        <hr className="mt-0 lg:hidden" />
        <div className="technology-content flex flex-col items-center lg:flex-row lg:justify-between lg:gap-x-16 mt-8  lg:ps-16 lg:mt-16  lg:order-1">
          <ul className="technology-nav text-sm lg:text-sm  mb-2 flex justify-between gap-4 lg:flex-col lg:gap-y-6 lg:mt-8 ">
            {technologyData.map((member, index) => (
              <li
                key={index}
                className={`nav-item p-2 lg:p-4 rounded-full
                transition-all duration-300
                ${index === selectedIndex ? "nav-item__active" : ""}`}
                onClick={() => handleChangeTechnology(index)}
                aria-label={`Select technology ${member.name}`}
                role="button"
              >
                <span className={`p-2 lg:p-2 text-lg `}>{index + 1}</span>
              </li>
            ))}
          </ul>
          <div className="technology-info text-center flex flex-col items-center lg:items-start mt-4">
            <h2 className="terminology text-lg lg:text-4xl uppercase tracking-wider">
              The terminology...
            </h2>
            <h1 className="text-2xl lg:text-5xl mt-2">{currentTech.name}</h1>
            <p className="text-center indent-8  md:indent-0 lg:text-justify text-wrap break-normal break-words whitespace-normal  max-w-[85%] md:max-w-[54%] lg:max-w-[40%] md:mt-0 lg:mb-8 mt-6 lg:mt-8">
              {currentTech.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
