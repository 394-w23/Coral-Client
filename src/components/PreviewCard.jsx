import { Card, CardBody, Typography } from "@material-tailwind/react";

const PreviewCard = ({ title, description }) => {
  return (
    <div id="previewCard">
      <Card
        id="cardContent"
        className="w-[70vw] text-centered my-4 border-solid border-2"
      >
        <CardBody id="cardBody">
          <Typography
            id="title"
            color="blue-gray"
            className="mb-2 secondary-font-medium"
          >
            {title}
          </Typography>

          <Typography
            id="content"
            variant="paragraph"
            color="blue-gray"
            className="mb-2"
          >
            {description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default PreviewCard;
