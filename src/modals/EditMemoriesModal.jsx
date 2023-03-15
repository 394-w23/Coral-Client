import { Modal } from "flowbite-react";

const EditMemoriesModal = ({ showModal, onCloseModal }) => {
  <Modal show={showModal} size="md" popup={true} onClose={onCloseModal}>
    edit memories modal
  </Modal>;
  return <Modal />;
};

export default EditMemoriesModal;
