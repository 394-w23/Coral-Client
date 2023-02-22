import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import logo from "../../public/new_capsule.png";

const CapsuleGalleryCard = ({ name }) => {
    return (
        <div>
            <Card className="w-[70vw] text-centered my-4 border-solid border-2">
                <CardBody>
                    <Typography color="blue-gray" className="mb-2 secondary-font-medium">
                        {name}
                    </Typography>

                    <img src={logo}></img>
                
                    <Button className="primary-blue-background next-button">
                        Share
                    </Button>
                    <Button className="primary-blue-background next-button">
                        Edit
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CapsuleGalleryCard;
