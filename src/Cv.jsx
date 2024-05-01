const Cv = () => {
  return (
    <div>
        <button
          type="button"
          className="flex justify-center items-start py-4 sm:px-8 px-4 bg-[#7A9CA5] sm:mt-8 mt-4 rounded-full group overflow-hidden relative "
        >
          <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
          <span className="text-[#FFF] text-center font-Manrope sm:text-[14px] text-[12px] font-normal tracking-widest leading-[125%] uppercase relative">
            Download cv
          </span>
        </button>
    </div>
  );
};

export default Cv;
