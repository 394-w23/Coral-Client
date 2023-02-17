import { useState } from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const AddInfo = ({ title }) => {
    const types = {
        "memories": [icon, "Add memories", "photos", "videos", "notes"],
        "tasks": [icon, "Add tasks", "Start new task"],
        "Goodwill": [icon, "Add goodwill", "Donations", "Special Requests"]
    }
    
    return (
      <div>
        <p>hello</p>
        
      </div>
    );
  };
  
  export default AddInfo;