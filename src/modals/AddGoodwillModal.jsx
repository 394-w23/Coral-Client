import { useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const AddGoodwillModal = ({ showModal, onCloseModal, userData, capsuleData }) => {
  const [update] = useDbUpdate(`/capsules/`);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = () => {
    const charity = document.getElementById("add-goodwill-charity-name").value;
    const request = document.getElementById("add-goodwill-request").value;
    if (charity.length != 0 && request.length != 0) {
      let updatedGoodwill = capsuleData["goodwill"];
      updatedGoodwill.push({ charityName: charity, request: request });
      capsuleData["goodwill"] = updatedGoodwill;
      update({ ["emmalovecapsuleuuid"]: capsuleData });
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        onCloseModal();
      }, 2000);
    } else {
      console.log("Goodwill data not updated");
    };
  };
  return (
    <Modal show={showModal} size="md" popup={true} onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Your Goodwills
          </h3>
          {showSuccessMessage && (
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">Successfully added!</span>
          </div>
          )}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="charityName" value="Charity Name" />
            </div>
            <TextInput id="add-goodwill-charity-name" placeholder="" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="request" value="Your request" />
            </div>
            <TextInput id="add-goodwill-request" required={true} />
          </div>
          <div>
            <Button onClick={handleSubmit} className="text-white bg-indigo-600 relative cursor-default select-none py-2 pl-3 pr-12 dropdown-option secondary-green-background">
              Upload
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddGoodwillModal;
