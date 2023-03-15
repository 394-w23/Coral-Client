import { GoKebabVertical } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BsFillPersonFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { BsQuestionLg } from "react-icons/bs";

const TopNavBar = ({ color, nextLink, backLink }) => {
  return (
    <nav className="navCreate py-2">
      <div className="iconNav">
        <Menu>
          <MenuHandler>
            <a href="#" className="kebab">
              <GoKebabVertical size={70} className="icon" />
            </a>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <BsFillPersonFill className="nav-icon inline mr-1" size={1} />{" "}
              Profile
            </MenuItem>
            <MenuItem>
              <HiSparkles className="nav-icon inline mr-1" size={1} /> Create
            </MenuItem>
            <MenuItem>
              <BsQuestionLg className="nav-icon inline mr-1" size={1} />
              Help
            </MenuItem>
          </MenuList>
        </Menu>

        {nextLink && (
          <a href={`${nextLink}`} className="arrowBack">
            <IoIosArrowForward className="icon" />
          </a>
        )}

        {backLink && (
          <a href={`${backLink}`} className="arrowBack">
            <IoIosArrowBack className="icon" />
          </a>
        )}
      </div>
    </nav>
  );
};

export default TopNavBar;
