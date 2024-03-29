import { useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";
import validator from "validator";

const AddVideoModal = ({ showModal, onCloseModal, capsuleData }) => {
  const [update] = useDbUpdate(`/capsules/`);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = () => {
    const url = document.getElementById("add-video-url").value;
    if (validator.isURL(url)) {
      let updatedVideoLinks = capsuleData["videoLinks"];
      updatedVideoLinks.push(url);
      capsuleData["videoLinks"] = updatedVideoLinks;
      update({ ["emmalovecapsuleuuid"]: capsuleData });
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        onCloseModal();
      }, 2000);
    } else {
      console.log("Video data not updated");
    }
  };

  return (
    <Modal show={showModal} size="md" popup={true} onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Upload Video
          </h3>
          {showSuccessMessage && (
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <span className="font-medium">Successfully added!</span>
            </div>
          )}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="videoUrl" value="Add video url" />
            </div>
            <TextInput id="add-video-url" placeholder="" required={true} />
          </div>
          <div>
            <Button
              onClick={handleSubmit}
              className="text-white bg-indigo-600 relative cursor-default select-none py-2 pl-3 pr-12 dropdown-option secondary-green-background"
            >
              Upload
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddVideoModal;
