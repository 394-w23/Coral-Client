import Task from "../components/Task";

const Event = () => {
    // const [count, setCount] = useState(0);
    id = 1;
    return (
        <div className="eventClass">
            <Task taskID={id}>

            </Task>
            <Button>
                Next
            </Button>
        </div>
    );
};

export default Event;