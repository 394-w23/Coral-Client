import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const AddVideoModal = ({ showModal, onCloseModal, userData, capsuleData }) => {
  const [update] = useDbUpdate(`/capsules/`);

  const handleSubmit = () => {
    const url = document.getElementById("add-video-url").value;
    let updatedVideoLinks = capsuleData["videoLinks"];
    updatedVideoLinks.push(url);
    capsuleData["videoLinks"] = updatedVideoLinks;
    update({ ["emmalovecapsuleuuid"]: capsuleData });
  };
  // const handleSubmit = () => {
  //   const url = document.getElementById("add-video-url").value;
  //   writeDbVideo(url, data);
  // };
  return (
    <Modal show={showModal} size="md" popup={true} onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Upload Video
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="videoUrl" value="Add video url" />
            </div>
            <TextInput id="add-video-url" placeholder="" required={true} />
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

export default AddVideoModal;
