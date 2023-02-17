import Task from "../components/Task";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import Navigation from "../components/Navigation/Navigation";
import { GoKebabVertical } from "react-icons/go";
import {IoIosArrowBack} from "react-icons/io";import "../App.css"
const NewCapsule = ({ name }) => {
    return (
        <div>
            <nav className="navCreate">
            <div className="iconNav">
                <a href="#" className="kebab">
                    <GoKebabVertical className="icon" />
                </a>
                <a href="#" className="arrowBack">
                    <IoIosArrowBack className="icon" />
                </a>
            </div>
            </nav>
        </div>
    )
};

export default NewCapsule;