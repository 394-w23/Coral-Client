import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const AddPhotoModal = ({ showModal, onCloseModal, userData, capsuleData }) => {
  const [update] = useDbUpdate(`/capsules/`);

  const handleSubmit = () => {
    const url = document.getElementById("add-photo-url").value;
    let updatedPhotoLinks = capsuleData["photoLinks"];
    updatedPhotoLinks.push(url);
    capsuleData["photoLinks"] = updatedPhotoLinks;
    update({ ["emmalovecapsuleuuid"]: capsuleData });
  };
  
  return (
    <Modal show={showModal} size="md" popup={true} onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Upload Photo
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Add photo url" />
            </div>
            <TextInput id="add-photo-url" placeholder="" required={true} />
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

export default AddPhotoModal;
