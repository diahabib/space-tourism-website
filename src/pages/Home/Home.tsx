import "./style.css";
const Home = () => {
  return (
    <div className="home-container lg:flex lg:justify-between  lg:px-40 lg:py-56 pt-16 overflow-hidden">
      <div className="mt-16 py-4 flex flex-col basis-1/3 justify-between items-center lg:items-start text-[#d0d6f9] tracking-widest">
        <h3 className="text-lg lg:text-2xl">So, you want to travel to </h3>
        <h1 className="mt-4 md:-mt-4  ">Space</h1>
        <p className="text-center lg:text-justify tracking-normal break-words max-w-[86%] md:max-w-[55%] lg:max-w-[88%] whitespace-break-spaces mt-6 md:mt-0">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>{" "}
      </div>
      <div className="flex justify-center mt-16 md:mt-10 lg:mt-0 lg:items-end">
        <button className="mt-8  px-8 py-16 lg:px-16 lg:py-24 bg-white text-black rounded-full uppercase">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Home;
