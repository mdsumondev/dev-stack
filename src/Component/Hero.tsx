import heroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto lg:flex items-center justify-between py-[100pxs]">
        <div className="lg:w-[40%] lg:px-0 px-4">
          <h1 className="text-4xl lg:text-left text-center lg:text-6xl leading-[40px] lg:leading-[60px] font-extrabold mb-6">
            <span className="text-black"> Build Your Ideal </span> <br />
            <span className="bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-base text-[#475569] text-center lg:text-left text-wrap">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex items-center justify-center lg:justify-normal gap-10 mt-10">
            <a
              href="#"
              className="text-base font-medium text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] px-4 py-2 rounded-2xl"
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className="border border-[#E5E7EB] text-base font-medium rounded-2xl px-4 py-2"
            >
              Learn More
            </a>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
