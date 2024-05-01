import avatar from "./avatar.jpeg";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import cv from "./CV.pdf";
import { bannerAboutMe } from "./data";
import { faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons";
const Banner = () => (
  <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[#e2e8f0] gap-0 py-8">
    <div className="flex flex-col items-center sm:py-2 py-0 md:w-[30%] w-full ">
      <img
        src={avatar}
        alt="avatar"
        className="rounded-[50%] h-[260px] w-[260px]"
      />
      <div className="flex flex-col ">
        <div className="flex sm:flex-row flex-col sm:py-8 py-2">
          <div className="flex justify-center items-center md:gap-6 gap-4">
            <a href="mailto:alirgh90@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className={styles.socials} />
            </a>
            <a href="https://www.linkedin.com/in/alighalandari/">
              <FontAwesomeIcon icon={faLinkedin} className={styles.socials} />
            </a>
            <a href="https://github.com/aghalandar">
              <FontAwesomeIcon icon={faGithub} className={styles.socials} />
            </a>
            <a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=5423819">
              <FontAwesomeIcon icon={faNewspaper} className={styles.socials} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-start justify-center sm:py-12 py-6 md:w-[50%] w-full sm:pr-[100px] px-8 sm:px-0">
      <p className="text-[#60829B] font-normal font-manrope sm:text-[20px] text-[16px] sm:mt-8 mt-0 ">
        {bannerAboutMe}
      </p>
      <a href={cv} download="cv">
        <button
          type="button"
          className="flex justify-center items-start py-4 sm:px-8 px-4 bg-[#7A9CA5] sm:mt-8 mt-4 rounded-full group overflow-hidden relative "
        >
          <div className="absolute inset-0 w-0 bg-[#5C8692] transition-all duration-[200ms] ease-out group-hover:w-full"></div>
          <span className="text-[#FFF] text-center font-manrope sm:text-[14px] text-[10px] font-normal tracking-widest leading-[125%] uppercase relative">
            Download cv
          </span>
        </button>
      </a>
    </div>
  </div>
);

export default Banner;
