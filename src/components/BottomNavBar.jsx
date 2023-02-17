import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { BsFillPersonFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { BsQuestionLg } from "react-icons/bs";

const BottomNavBar = () => {
  return (
    <div className="bottom-container">
      <div>
        <div>
          <BsFillPersonFill className="nav-icon" size={20} />
        </div>
      </div>
      <div>
        <div>
          <HiSparkles className="nav-icon" size={20} />
        </div>
      </div>
      <div>
        <div>
          <BsQuestionLg className="nav-icon" size={20} />
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
