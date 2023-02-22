import { GoKebabVertical } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";

const TopNavBar = ({ color }) => {
  return (
    <nav className="navCreate py-2">
      <div className="iconNav">
        <a href="#" className="kebab">
          <GoKebabVertical className="icon" />
        </a>
        <a href="#" className="arrowBack">
          <IoIosArrowBack className="icon" />
        </a>
      </div>
    </nav>
  );
}

export default TopNavBar;