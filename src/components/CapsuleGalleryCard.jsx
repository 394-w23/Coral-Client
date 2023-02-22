import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const CapsuleGalleryCard = ({ name }) => {
    return (
        <div>
            <Card className="w-[70vw] text-centered my-4 border-solid border-2">
                <CardBody>
                    <Typography color="blue-gray" className="mb-2 secondary-font-medium">
                        {name}
                    </Typography>

                    {/* <img src={image}></img> */}
                
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
