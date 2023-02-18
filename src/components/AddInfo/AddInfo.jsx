import { Fragment, useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { AiOutlinePicture } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { RiHandHeartLine } from "react-icons/ri";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { SlArrowRight } from "react-icons/sl";
import { CgTemplate } from "react-icons/cg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddInfo = ({ title }) => {
  const dropdownInfo = {
    memories: { title: "Add memories", options: ["photos", "videos", "notes"] },
    tasks: { title: "Add tasks", options: ["Start new task"] },
    goodwill: {
      title: "Add goodwill",
      options: ["Donations", "Special Requests"],
    },
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="circle secondary-green-background center">
          {title === "memories" ? (
            <AiOutlinePicture className="icon" />
          ) : title === "tasks" ? (
            <GrNotes className="icon" />
          ) : title === "goodwill" ? (
            <RiHandHeartLine className="icon" />
          ) : (
            ""
          )}
        </div>

        <Listbox>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
              <div className="relative mt-1">
                <Listbox.Button className="primary-silver relative w-50 cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm dropdown-button">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">
                      {dropdownInfo[title].title}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-25 overflow-auto primary-font-small dropdown-options">
                    {dropdownInfo[title].options.map((option) => (
                      <Listbox.Option
                        key={option}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9 dropdown-option secondary-green-background"
                          )
                        }
                        value={option}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "ml-3 block truncate"
                                )}
                              >
                                {option}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default AddInfo;
