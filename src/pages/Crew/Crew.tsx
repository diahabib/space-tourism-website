import { useState } from "react";
import "./style.css";
import { CrewData } from "../../types/types";

interface CrewProps {
  crewData: CrewData[];
}

const Crew: React.FC<CrewProps> = ({ crewData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentMember = crewData[selectedIndex];
  const handleChangeDestination = (ndx: number) => {
    setSelectedIndex(ndx);
  };
  return (
    <div className="crew-container h-full pt-24 md:pt-28 lg:pt-44 lg:ps-40 overflow-x-hidden">
      <h2 className="text-center md:text-start text-lg lg:text-2xl tracking-widest md:ps-8 lg:ps-16">
        <span className="opacity-40 mr-4">02</span> MEET YOUR CREW
      </h2>
      <div className="flex flex-col items-center lg:flex-row  lg:justify-between ">
        <div className="flex flex-col items-center md:items-start mt-2 lg:basis-1/2 md:order-2 lg:h-full">
          <div className="crew-image-container mt-8 lg:mt-24 lg:flex lg:w-full lg:ms-16 justify-wcenter lg:h-full">
            <img
              src={currentMember.images.png}
              alt={currentMember.name}
              className="crew-image w-44 h-58 md:w-80 md:h-96  md:max-h-[500px] object-contain md:absolute md:bottom-0 md:left-1/2 lg:left-auto lg:fixed lg:right-16  md:transform md:-translate-x-96 lg:-translate-x-3/4 lg:w-max lg:h-full transition-all duration-500"
            />
          </div>
        </div>
        <hr className="mt-0 md:hidden" />
        <div className="crew-content flex flex-col items-center lg:items-start mt-8 lg:basis-2/3 lg:ps-16 lg:pt-0 md:order-1">
          <ul className="crew-nav text-sm lg:text-sm  mb-2 flex justify-between gap-4 md:order-2 md:mt-8">
            {crewData.map((member, index) => (
              <li
                key={index}
                className={`nav-item p-1 lg:p-2 bg-white rounded-full
                transition-all duration-300 
                ${index === selectedIndex ? "nav-item__active" : ""}`}
                onClick={() => handleChangeDestination(index)}
                aria-label={`Select destination ${member.name}`}
                role="button"
              ></li>
            ))}
          </ul>
          <div className="crew-info text-center flex flex-col items-center lg:items-start mt-8 md:mt-4 lg:mt-16">
            <h2 className="uppercase text-xl lg:text-2xl opacity-40">
              {currentMember.role}
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-5xl mt-2 md:mt-1 lg:mt-4">
              {currentMember.name}
            </h1>
            <p className="text-center lg:text-justify  text break-words max-w-[86%] md:max-w-[55%] lg:max-w-[48%] whitespace-break-spaces mt-8 md:mt-4 lg:mt-6 lg:mb-24">
              {currentMember.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
