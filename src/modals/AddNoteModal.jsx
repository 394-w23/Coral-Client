import { useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const AddNoteModal = ({ showModal, onCloseModal, capsuleData }) => {
  const [update] = useDbUpdate(`/capsules/`);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = () => {
    const title = document.getElementById("add-note-title").value;
    const msg = document.getElementById("add-note-msg").value;
    if (title.length !== 0 && msg.length !== 0) {
      let updatedNotes = capsuleData["notes"];
      updatedNotes.push({content:msg, title:title});
      capsuleData["notes"] = updatedNotes;
      update({["emmalovecapsuleuuid"]:capsuleData});
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        onCloseModal();
      }, 2000);
    } else {
      console.log("Note data not updated");
    }
  };

  return (
    <Modal show={showModal} size="md" popup={true} onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Note
          </h3>
          {showSuccessMessage && (
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">Successfully added!</span>
          </div>
          )}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="add-note-title" placeholder="" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="message" value="Your message" />
            </div>
            <TextInput id="add-note-msg" required={true} />
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

export default AddNoteModal;