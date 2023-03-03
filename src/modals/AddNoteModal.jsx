import { useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const AddNoteModal = ({ showModal, onCloseModal, userData, capsuleData }) => {
  const [update] = useDbUpdate(`/capsules/`);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const msg = event.target.msg.value;
    if (title.length !== 0 && msg.length !== 0) {
      let updatedNotes = capsuleData["notes"];
      updatedNotes.push({ content: msg, title: title });
      capsuleData["notes"] = updatedNotes;
      update({ ["emmalovecapsuleuuid"]: capsuleData });
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
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Task
          </h3>
          {showSuccessMessage && (
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <span className="font-medium">Successfully added!</span>
            </div>
          )}
          <div>
            <label htmlFor="title" value="Title">
              Title:
              <input name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

            </label>
          </div>
          <div>

            <label htmlFor="message" value="Your message">
              Your message:
              <input name="msg" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </label>

          </div>
          <div className="flex flex-col items-center">
            <button type="submit" className="secondary-green-background text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6">
              SAVE
            </button>
          </div>
        </form>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddNoteModal;