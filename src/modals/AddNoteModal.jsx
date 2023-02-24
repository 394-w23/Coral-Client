import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const AddNoteModal = ({ showModal, onCloseModal, userData, capsuleData }) => {
  const [update] = useDbUpdate(`/capsules/`);

  const handleSubmit = () => {
    const title = document.getElementById("add-note-title").value;
    const msg = document.getElementById("add-note-msg").value;
    console.log(title);
    console.log(msg);
    let updatedNotes = capsuleData["notes"];
    updatedNotes.push({content:msg, title:title});
    capsuleData["notes"] = updatedNotes;
    update({["emmalovecapsuleuuid"]:capsuleData});
  };
  return (
    <Modal show={showModal} size="md" popup={true} onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Note
          </h3>
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
            <Button onClick={handleSubmit}>
              Upload
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddNoteModal;
