import { useState } from "react";
import "./style.css";
import { DestinationData } from "../../types/types";

interface DestinationProps {
  destinationData: DestinationData[];
}
const Destination: React.FC<DestinationProps> = ({ destinationData }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentDestination = destinationData[selectedIndex];
  const handleChangeDestination = (ndx: number) => {
    setSelectedIndex(ndx);
  };
  return (
    <div className="destination-container h-full pt-24 md:pt-28 lg:pt-44 lg:ps-40">
      <h2 className="text-center md:text-start text-lg lg:text-2xl tracking-widest md:ps-8 lg:ps-16">
        <span className="opacity-40 mr-4">01</span> PICK YOUR DESTINATION
      </h2>
      <div className="flex flex-col items-center lg:flex-row  lg:justify-between ">
        <div className="flex flex-col items-center md:items-start lg:basis-1/2 mt-8 lg:mt-4">
          <div className="destination-image-container lg:flex lg:w-full lg:ms-24 justify-wcenter">
            <img
              src={currentDestination.images.png}
              alt={currentDestination.name}
              className="destination-image w-40 h-40 md:w-52 md:h-52 lg:w-[60%] lg:h-[60%] 
                     object-cover rounded-full transition-all duration-500"
            />
          </div>
        </div>

        <div className="destination-content flex flex-col items-center lg:items-start mt-4 md:mt-8 lg:basis-2/3 lg:ps-16 lg:pt-0">
          <ul className="destination-nav text-sm lg:text-sm  mb-2 flex justify-between gap-4">
            {destinationData.map((dest, index) => (
              <li
                key={index}
                className="nav-item px-1
                transition-all duration-300 
                hover:text-white hover:border-white/50"
                onClick={() => handleChangeDestination(index)}
                aria-label={`Select destination ${dest.name}`}
                role="button"
              >
                <span
                  className={`uppercase tracking-widest py-1 ${
                    index === selectedIndex ? "text-white border-b-2" : ""
                  }`}
                >
                  {dest.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="destination-info text-center flex flex-col items-center lg:items-start mt-4 md:mt-8">
            <h1 className="text-5xl lg:text-7xl">{currentDestination.name}</h1>
            <p className="text-center lg:text-l lg:text-justify  text break-words max-w-[86%] md:max-w-[70%] lg:max-w-[48%] lg:max-w-fulll whitespace-break-spaces md:mt-4 md:mb-4 mt-2 lg:mt-8">
              {currentDestination.description}
            </p>
            <hr />
            <div className="destination-metrics mt-6 text-lg text-center lg:text-start lg:tracking-widest md:flex md:justify-between md:gap-x-16 lg:mt-8">
              <div className="metric">
                <h4>AVG. DISTANCE</h4>
                <p className="mesure">{currentDestination.distance}</p>
              </div>

              <div className="metric">
                <h4>EST. TRAVELTIME</h4>
                <p className="mesure">{currentDestination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
