import { GoKebabVertical } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { BsFillPersonFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { BsQuestionLg } from "react-icons/bs";


const TopNavBar = ({ color }) => {
  return (
    <nav className="navCreate py-2">
      <div className="iconNav">
        <Menu>
          <MenuHandler>
            <a href="#" className="kebab">
              <GoKebabVertical className="icon" />
            </a>
          </MenuHandler>
          <MenuList>
            <MenuItem><BsFillPersonFill className="nav-icon inline mr-1" size={1} /> Profile</MenuItem>
            <MenuItem><HiSparkles className="nav-icon inline mr-1" size={1} /> Create</MenuItem>
            <MenuItem><BsQuestionLg className="nav-icon inline mr-1" size={1} />Help</MenuItem>
          </MenuList>
        </Menu>
        
        <a href="#" className="arrowBack">
          <IoIosArrowBack className="icon" />
        </a>
      </div>
    </nav>
  );
}

export default TopNavBar;