import { Fragment, useState } from "react";
import { Button } from "@material-tailwind/react";
import { AiOutlinePicture } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { RiHandHeartLine } from "react-icons/ri";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import AddNoteModal from "../modals/AddNoteModal";
import AddPhotoModal from "../modals/AddPhotoModal";
import AddVideoModal from "../modals/AddVideoModal";
import AddGoodwillModal from "../modals/AddGoodwillModal";

const AddInfo = ({ title, userData, capsuleData }) => {
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const openNoteModal = () => setNoteModalOpen(true);
  const closeNoteModal = () => setNoteModalOpen(false);
  //Photo modal logic
  const [photoModal, setPhotoModal] = useState(false);
  const openPhotoModal = () => setPhotoModal(true);
  const closePhotoModal = () => setPhotoModal(false);
  // Video modal logic
  const [videoModal, setVideoModal] = useState(false);
  const openVideoModal = () => setVideoModal(true);
  const closeVideoModal = () => setVideoModal(false);
  // Goodwill modal logic
  const [goodwillModal, setGoodwillModal] = useState(false);
  const openGoodwillModal = () => setGoodwillModal(true);
  const closeGoodwillModal = () => setGoodwillModal(false);
  const dropdownInfo = {
    memories: { title: "Add memories", options: ["Add photos"] },
    tasks: { title: "Add tasks", options: ["New task"] },
    charities: {
      title: "Add charities",
      options: ["New charity request"],
    },
  };
  // console.log("modal", noteModalOpen)
  function openModal(option) {
    // TODO: add modal functionality
    // this function will determine which modal state to update (i.e., which openXXXmodal to call)
    // console.log("option", option)
    if (option === "Add photos") {
      openPhotoModal();
    }
    if (option === "New task") {
      openNoteModal();
    }
    if (option === "New charity request") {
      openGoodwillModal();
    }
  }
  return (
    <div>
      <AddNoteModal
        showModal={noteModalOpen}
        onCloseModal={closeNoteModal}
        userData={userData}
        capsuleData={capsuleData}
      />
      <AddPhotoModal
        showModal={photoModal}
        onCloseModal={closePhotoModal}
        userData={userData}
        capsuleData={capsuleData}
      />
      <AddGoodwillModal
        showModal={goodwillModal}
        onCloseModal={closeGoodwillModal}
        userData={userData}
        capsuleData={capsuleData}
      />
      <AddVideoModal
        showModal={videoModal}
        onCloseModal={closeVideoModal}
        userData={userData}
        capsuleData={capsuleData}
      />
      <div className="flex items-center">
        <div className="circle secondary-green-background center">
          {title === "memories" ? (
            <AiOutlinePicture className="icon" />
          ) : title === "tasks" ? (
            <GrNotes className="icon" />
          ) : title === "charities" ? (
            <RiHandHeartLine className="icon" />
          ) : (
            ""
          )}
        </div>

        <Listbox>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
              <div className="relative mt-1">
                <Listbox.Button className="primary-silver relative w-50 cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm dropdown-button">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {dropdownInfo[title].title}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-25 overflow-auto primary-font-small dropdown-options">
                    {dropdownInfo[title].options.map((option) => (
                      <Button
                        className="text-white bg-indigo-600 relative cursor-default select-none py-2 pl-3 pr-12 dropdown-option secondary-green-background"
                        onClick={() => openModal(option)}
                        key={option}
                      >
                        {option}
                      </Button>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default AddInfo;
