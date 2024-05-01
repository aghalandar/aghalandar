import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
("@fortawesome/free-brands-svg-icons");
import styles from "./styles";
const Footer = () => (
  <div className="flex flex-col md:flex-row items-center justify-center w-full bg-[#2a384a] gap-2 px-8">
    <div className="flex flex-col md:px-32 px-8">
      <div className="flex sm:flex-row flex-col py-8 sm:px-24 px-4">
        <div className="flex flex-1 md:justify-start md:items-start justify-center py-4"></div>
        <div className="flex justify-center items-center md:gap-6 sm:gap-4 gap-8">
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
);

export default Footer;
