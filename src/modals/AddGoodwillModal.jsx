import { Modal, Label, TextInput } from "flowbite-react";

const AddGoodwillModal = ({ showModal, onCloseModal }) => {
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
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" placeholder="" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="message" value="Your message" />
            </div>
            <TextInput id="message" required={true} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddGoodwillModal;
