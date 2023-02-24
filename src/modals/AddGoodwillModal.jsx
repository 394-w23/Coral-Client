import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { useDbUpdate } from "../../utilities/firebase";

const AddGoodwillModal = ({ showModal, onCloseModal, userData, capsuleData }) => {
  const [update] = useDbUpdate(`/capsules/`);

  const handleSubmit = () => {
    const charity = document.getElementById("add-goodwill-charity-name").value;
    const request = document.getElementById("add-goodwill-request").value;
    if (charity.length != 0 && request.length != 0) {
      let updatedGoodwill = capsuleData["goodwill"];
      updatedGoodwill.push({ charityName: charity, request: request });
      capsuleData["goodwill"] = updatedGoodwill;
      update({ ["emmalovecapsuleuuid"]: capsuleData });
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
            <Button onClick={handleSubmit}>
              Upload
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddGoodwillModal;
