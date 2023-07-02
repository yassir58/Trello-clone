import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faPaperclip, faComment} from "@fortawesome/free-solid-svg-icons";
import Label from "./Label";
import CardCounter from "./cardCounter";

const Plus = <FontAwesomeIcon icon={faPlus}/>

interface Props {}


const card: React.FC<Props> = () => {
    return (
        <div className="flex flex-col shadow-md w-72 rounded-lg bg-white">
            <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="cardImage px-2 py-4 mx-auto"  />
            <h3 className="text-left text-lg p-2">this is a card title</h3>
            <div className="flex justify-start px-2">
                <Label  value="Design" color="blue"/>
                <Label  value="Technical" color="red"/>
            </div>
            <div className="flex justify-between items-center px-2 py-4">
                <div className="flex justify-center py-2">
                    <img className="w-10 h-10 rounded-md mx-2" src="https://images.pexels.com/photos/6214874/pexels-photo-6214874.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img className="w-10 h-10 rounded-md mx-2" src="https://images.pexels.com/photos/4924538/pexels-photo-4924538.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <PrimaryButton value={Plus} />
                </div>
                <div className="flex justify-center items-center">
                    <CardCounter     icon={faPaperclip} value={"1"}/>
                    <CardCounter     icon={faComment} value={"1"}/>
                 </div>
            </div>
        </div>
    )
}


export default card