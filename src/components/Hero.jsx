

const Hero = () => {
  return (
    <section className="mx-auto flex flex-col gap-10 pt-30 sm:pt-60">
      <p className="text-primary text-center font-bold">Welcome</p>
      <h1 className="text-center text-3xl sm:text-4xl xl:text-5xl font-bold">
        25K+ STUDENTS <br /> TRUST US
      </h1>
      <h3 className="text-sm sm:text-base mx-auto w-[70%] sm:w-full text-center">
        We know how large objects will act, but things on a <br className="hidden sm:block" /> small scale
        just do not act that way.
      </h3>
      <button className="bg-primary font-bold text-xs mx-auto w-fit rounded cursor-pointer px-3 py-2 sm:px-5 sm:py-3">
        Join Us
      </button>
    </section>
  );
};

export default Hero;
