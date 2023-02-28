import { useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDbUpdate, useDbData } from "../../utilities/firebase";
import storage from "../../utilities/firebase";
import validator from "validator";

const DeleteMemoryModal = ({ showModal, onCloseModal, userData, capsuleData, url, photoLinks }) => {
    const [update] = useDbUpdate(`/`);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [data, error] = useDbData("/capsules/emmalovecapsuleuuid/photoLinks");

    const handleDelete = (e) => {
        console.log(url);
        console.log(photoLinks);
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
