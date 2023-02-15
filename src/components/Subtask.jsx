import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import 'tw-elements';

const Subtask = ({ subtaskData }) => {
  // const [count, setCount] = useState(0);

  const subtaskInfo = subtaskData.additionalInformation;
  const subtaskTitle = subtaskData.title;
  const subtaskPhotos = subtaskData.photos;

  return (
    <div className="flex justify-center">
      <Card className="w-[70vw] text-centered my-4 border-solid border-2">

          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingOne">
                <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                  aria-controls="collapseOne">
                  {subtaskTitle}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">
                  {subtaskInfo}
                </div>
              </div>
            </div>
            </div>
      </Card>
    </div>
  );
};

export default Subtask;
