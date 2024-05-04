import { articles } from "./data";
const Research = () => (
  <div className="flex sm:flex-row flex-col py-8 justify-center items-center w-full bg-[#e2e8f0] gap-24 px-8 xl:h-[90vh]">
    <h2 className="text-[#577790] sm:text-[40px] font-playfair text-[32px] font-semibold leading-[120%] mt-4 ">
      Research
    </h2>
    <div className="flex flex-col gap-8">
      {articles.map((article) => (
        <div key={article.id} className="flex flex-col ">
          <h4 className="text-[#576e80] sm:text-[32px] font-playfair text-[24px] font-semibold leading-[120%] sm:mt-4 mt-0">
            {article.title}
          </h4>
          <p className="text-[#495d6e92] font-sansPro text-[16px] font-normal leading-[165%] mt-2 max-w-[900px]">
            {article.summary}
          </p>
          <div className="flex flex-row gap-4">
            <a href={article.file} download={article.file}>
              <button
                type="button"
                className="flex justify-center items-start py-2 sm:px-8 px-4 border-[#7A9CA5] border-2 bg-[#e2e8f0] sm:mt-8 mt-4 rounded-full group overflow-hidden relative "
              >
                <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
                <span className="text-[#577790] text-center group-hover:text-white font-Manrope sm:text-[14px] text-[12px] font-normal tracking-widest leading-[125%] uppercase relative">
                  PDF
                </span>
              </button>
            </a>
            <a href={article.link} download={article.link}>
              <button
                type="button"
                className="flex justify-center items-start py-2 sm:px-8 px-4 border-[#7A9CA5] border-2 bg-[#e2e8f0] sm:mt-8 mt-4 rounded-full group overflow-hidden relative "
              >
                <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
                <span className="text-[#577790] text-center group-hover:text-white font-Manrope sm:text-[14px] text-[12px] font-normal tracking-widest leading-[125%] uppercase relative">
                  SSRN
                </span>
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Research;
