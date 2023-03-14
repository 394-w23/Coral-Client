import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import AddInfo from "../components/AddInfo";
import TopNavBar from "../components/TopNavBar";
import selected from "../../public/templates.png";
import unselected from "../../public/unselected.png";
import "../App.css";

const CreateCapsule = ({ userData, capsuleData }) => {
  const [template, setTemplate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleBarClick = () => {
    if (!template) {
      setIsOpen(true);
    }
    if (!isOpen) {
      setTemplate(!template);
    }
  };

  return (
    <div className="background-white" style={{ height: "120vh" }}>
      <TopNavBar nextLink={"/capsulePreview"} />
      <Typography
        variant="h2"
        color="blue-gray"
        className="mb-2 secondary-font-large header-text"
      >
        Create your capsule
      </Typography>
      <div onClick={handleBarClick}>
        <img className="template" src={template ? selected : unselected}></img>
      </div>
      <div>
        <AddInfo
          title={"memories"}
          userData={userData}
          capsuleData={capsuleData}
        />
        <AddInfo
          title={"tasks"}
          userData={userData}
          capsuleData={capsuleData}
        />
        <AddInfo
          title={"charities"}
          userData={userData}
          capsuleData={capsuleData}
        />
      </div>
      <div
        className={`fixed inset-x-0 font-Sen bottom-0 bg-paleBlue p-4 h-5/6 rounded-t-3xl transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <Typography variant="h5" className="flex justify-center h-screen">
            DISCLAIMER
          </Typography>
          <div className="flex-grow">
            <div className="text-center">
              <Typography variant="paragraph">This is not a will.</Typography>
              <Typography variant="paragraph">
                All memories, tasks, and charity information added to your
                capsule are legally non-binding. The Last Act Capsule does not
                replace a will.
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
    </div>
  );
};

export default CreateCapsule;
