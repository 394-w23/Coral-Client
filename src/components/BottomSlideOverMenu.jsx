import { useState } from "react";
import {
  Typography,
} from "@material-tailwind/react";
const BottomSlideOverMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      <div
        className={`fixed inset-x-0 font-Sen bottom-0 bg-paleBlue p-4 h-4/6 rounded-t-3xl transform transition-transform ${
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

export default BottomSlideOverMenu;

