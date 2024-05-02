import Banner from "./Banner";
// import Update from "./Update";
import styles from "./styles";

const Home = () => (
  <div className="w-full bg-white overflow-hidden ">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
      </div>
    </div>
    {/* <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Update />
      </div>
    </div> */}
  </div>
);

export default Home;
