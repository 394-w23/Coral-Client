import { Modal } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const DeleteMemoryModal = ({
  showModal,
  onCloseModal,
  capsuleData,
  slideOn,
}) => {
  const [update] = useDbUpdate(`/capsules/`);
  const capsulePhotos = capsuleData.photoLinks.slice(1);

  const handleDelete = () => {
    const url = document
      .querySelector(`[id=memories]`)
      .querySelector(`[data-active=true]`)
      .querySelector(`[id=currentMemory]`).src;
    let updatedPhotoLinks = [""];
    for (const photo in capsulePhotos) {
      if (capsulePhotos[photo] !== url) {
        updatedPhotoLinks.push(capsulePhotos[photo]);
      }
    }
    capsuleData["photoLinks"] = updatedPhotoLinks;
    update({ ["emmalovecapsuleuuid"]: capsuleData });
    slideOn();
    onCloseModal();
  };

  return (
    <Modal show={showModal} size="md" popup={true} onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Are you sure you want to delete this photo?
          </h3>
          <div className="flex justify-around mt-8">
            <Button
              onClick={handleDelete}
              color="red"
              size="md"
              rounded="false"
            >
              Delete
            </Button>
            <Button
              onClick={onCloseModal}
              color="lightBlue"
              variant="outlined"
              size="md"
              rounded="false"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteMemoryModal;
