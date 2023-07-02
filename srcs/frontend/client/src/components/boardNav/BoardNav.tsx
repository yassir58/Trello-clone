import React from "react";
import PopUpButton from "../PopUpButton";
import { faEllipsis, faPlus, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {

};

const Plus = <FontAwesomeIcon icon={faPlus}/>

const BoardNav: React.FC<Props> = () => {
    return (
    <div className="flex justify-between px-4 py-5 items-center">
            <div className="flex justify-center items-center">
                <PopUpButton icon={faUnlockKeyhole} value="Private"/>
                <div className="flex justify-center m-4">
                    <img className="w-8 h-8 rounded-md m-2" src="https://images.pexels.com/photos/6214874/pexels-photo-6214874.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img className="w-8 h-8 rounded-md m-2" src="https://images.pexels.com/photos/4924538/pexels-photo-4924538.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img className="w-8 h-8 rounded-md m-2" src="https://images.pexels.com/photos/7507786/pexels-photo-7507786.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <PrimaryButton value={Plus}/>
            </div>
            <PopUpButton icon={faEllipsis} value="menu"/>
        </div>)
}


export default BoardNav