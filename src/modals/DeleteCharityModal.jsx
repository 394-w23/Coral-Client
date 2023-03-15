import { Modal } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const DeleteCharityModal = ({
  showModal,
  onCloseModal,
  capsuleData,
  slideOn,
}) => {
  const [update] = useDbUpdate(`/capsules/`);
  const capsuleCharity = capsuleData.goodwill.slice(1);

  const handleDelete = () => {
    const charityName = document
      .querySelector(`[id=charities]`)
      .querySelector(`[data-active=true]`)
      .querySelector(`[id=charityCard]`)
      .querySelector(`[id=previewCard]`)
      .querySelector(`[id=cardContent]`)
      .querySelector(`[id=cardBody]`)
      .querySelector(`[id=title]`).textContent;
    const request = document
      .querySelector(`[id=charities]`)
      .querySelector(`[data-active=true]`)
      .querySelector(`[id=charityCard]`)
      .querySelector(`[id=previewCard]`)
      .querySelector(`[id=cardContent]`)
      .querySelector(`[id=cardBody]`)
      .querySelector(`[id=content]`).textContent;
    let updatedCharities = [""];
    for (const charity in capsuleCharity) {
      if (
        capsuleCharity[charity].charityName === charityName &&
        capsuleCharity[charity].request === request
      ) {
        continue;
      }
      updatedCharities.push(capsuleCharity[charity]);
    }
    capsuleData["goodwill"] = updatedCharities;
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
            Are you sure you want to delete this charity?
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

export default DeleteCharityModal;
