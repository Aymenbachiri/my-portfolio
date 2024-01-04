import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 font-bold text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">AYMEN BACHIRI</h1>
        <h2 className="text-4xl sm:text-7xl font-bold ">
          I am a Frontend Web Developer.
        </h2>
        <p className=" py-4 max-w-[700px] font-bold">
          I’m a Frontend Web Developer based in Algeria . I strives to build
          immersive and beautiful web applications through carefully crafted
          code.
        </p>
        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
