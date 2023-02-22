import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const PreviewCard = ({ title, description }) => {
  return (
    <div>
      <Card className="w-[70vw] text-centered my-4 border-solid border-2">
        <CardBody>
          <Typography color="blue-gray" className="mb-2 secondary-font-medium">
            {title}
          </Typography>

          <Typography variant="p" color="blue-gray" className="mb-2">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default PreviewCard;
