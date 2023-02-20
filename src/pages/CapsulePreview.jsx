import { useState } from "react";
import pic from "../../public/Screenshot 2023-02-19 195026.jpg";
import PreviewCard from "../components/PreviewCard";
const CapsulePreview = ({}) => {
    return(
        <div>
            <img src={pic}></img>
            <PreviewCard
                title="To Mr. John Sanchez"
                description="ilysm"></PreviewCard>
            <PreviewCard
                title="To Maya"
                description="Please please please cancel my hulu sub or ur disowned"></PreviewCard>
        </div>
    )
}

export default CapsulePreview;