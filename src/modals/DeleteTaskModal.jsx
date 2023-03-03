import { useState } from "react";
import { Modal, Label, TextInput } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDbUpdate, useDbData } from "../../utilities/firebase";
import storage from "../../utilities/firebase";
import validator from "validator";

const DeleteTaskModal = ({ showModal, onCloseModal, capsuleData, slideOn }) => {
    const [update] = useDbUpdate(`/capsules/`);
    const capsuleTasks = capsuleData.notes.slice(1);

    const handleDelete = () => {
        const title = document.querySelector(`[id=tasks]`)
            .querySelector(`[data-active=true]`)
            .querySelector(`[id=taskCard]`)
            .querySelector(`[id=previewCard]`)
            .querySelector(`[id=cardContent]`)
            .querySelector(`[id=cardBody]`)
            .querySelector(`[id=title]`).textContent;
        const content = document.querySelector(`[id=tasks]`)
            .querySelector(`[data-active=true]`)
            .querySelector(`[id=taskCard]`)
            .querySelector(`[id=previewCard]`)
            .querySelector(`[id=cardContent]`)
            .querySelector(`[id=cardBody]`)
            .querySelector(`[id=content]`).textContent;
        let updatedTasks = ["",];
        for (const task in capsuleTasks) {
            if (capsuleTasks[task].title === title && capsuleTasks[task].content === content) {
                continue;
            }
            updatedTasks.push(capsuleTasks[task]);
        }
        console.log(updatedTasks);
        capsuleData["notes"] = updatedTasks;
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
                        Are you sure you want to delete this task?
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

export default DeleteTaskModal;
