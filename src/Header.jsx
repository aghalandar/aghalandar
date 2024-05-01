import { NavLink } from "react-router-dom";
import { Menu } from "./Menu";
import styles from "./styles";
import { headerLinks } from "./data";
const Header = () => {
  return (
    <nav className="w-full flex py-3 items-center navbar sm:px-16 ss:px-8 px-2 border-b-2 border-[#c1d0dc]">
      <div className="flex md:px-40 sm:px-4 px-2">
        <NavLink to="/" className="flex sm:px-16 md:px-8 px-8">
          <h2 className="text-[#5E7E97] sm:text-[45px] font-playfair text-[24px] font-semibold leading-[120%] mt-4">
            Ali Ghalandari
          </h2>
        </NavLink>
      </div>
      <div className="flex-row md:flex hidden ml-4 md:ml-20 sm:pl-56">
        <ul className="flex ">
          {headerLinks.map((headerLink, index) => (
            <li
              key={headerLink.id}
              className={`${styles.li} ${
                index !== headerLinks.length - 1 ? "mr-4" : "mr-0"
              }`}
            >
              <NavLink to={headerLink.title}>{headerLink.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* responsive */}
      <div className="md:hidden flex justify-end items-end pl-12">
        <div className="flex items-center justify-center">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
