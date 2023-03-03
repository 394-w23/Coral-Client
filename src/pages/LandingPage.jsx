import Task from "../components/Task";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const BottomSlideOverMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed inset-x-0 font-Sen bottom-0 bg-paleBlue p-4 h-3/6 rounded-t-3xl transform transition-transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <Typography variant="h5" className="flex justify-center h-screen">
                DISCLAIMER
        </Typography>
        <div className="flex-grow">
          <div className="text-center">
            <Typography variant="body1">This is not a will.</Typography>
            <Typography variant="body1">
              All memories, tasks, and charity information added to your capsule
              are legally non-binding.
              The Last Act Capsule does not replace a will.
            </Typography>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-navyPrimary text-white px-8 py-2 rounded-full"
          >
            Accept
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-red-500 text-white px-8 py-2 rounded-full"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

const LandingPage = ({ data }) => {
  return (
    <div className="background-white font-Sen" style={{ height: "120vh" }}>
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Create your capsule
      </Typography>
      <BottomSlideOverMenu />
    </div>
  );
};

export default LandingPage;