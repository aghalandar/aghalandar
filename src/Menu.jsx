import { useState, useRef } from "react";
import close from "./close.svg";
import menu from "./menu.svg";
import { NavLink } from "react-router-dom";
import { Card, List, ListItem } from "@material-tailwind/react";
import OutsideMenu from "./OutsideMenu";

export function Menu() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  OutsideMenu(ref, () => {
    setToggle();
  });
  const toggleMenu = (e) => {
    if (e) {
      e.preventDefault();
    }
    setToggle();
  };
  return (
    <div className="flex items-center justify-center px-4 " ref={ref}>
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain "
        onClick={() => setToggle((prev) => !prev)}
      />
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } absolute top-14 left-0 w-full `}
        onClick={toggleMenu}
      >
        <Card className=" w-full py-4 sm:px-20 px-6 animate-dropIn rounded-none">
          <List>
            <List className="px-0">
              <NavLink to="/Research">
                <ListItem>Research</ListItem>
              </NavLink>

              <hr className="my-2 border-blue-gray-50" />
              <NavLink to="/Contact">
                <ListItem>Contact</ListItem>
              </NavLink>
            </List>
          </List>
        </Card>
      </div>
    </div>
  );
}
