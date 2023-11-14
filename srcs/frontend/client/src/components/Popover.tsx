import React from "react";
import { FaImage } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { MdCheckBox, MdLabel } from "react-icons/md";
import { AddLable } from "./Functionality/AddLable";
import InviteToBoard from "./InviteToBoard";
import { ChangeCover } from "./Functionality/ChangeCover";
import { PopOverWrapper } from "./ui-elements/PopOver";
import { Card, Label } from "../context/ContextScheme";
import { PhotosProvider } from "../providers/PhotosProvider";
import AddChecklist from "./AddChecklist";
interface PopOverProps {
  card?: Card;
  action?: (photo: string) => void;
}

interface LabelsProps extends PopOverProps {
addLabelAction?: (label:Label) => void;
}
export const MembersPopOver: React.FC = () => {
  return (
    <PopOverWrapper value="Members" icon={<FaUserGroup />} triggerVariant={"largeSecondary"} size="xs" placement="left">
      <InviteToBoard />
    </PopOverWrapper>
  );
};

export const LabelPopOver: React.FC<LabelsProps> = ({ card , addLabelAction}) => {
  return (
    <PopOverWrapper value="Labels" icon={<MdLabel />} triggerVariant="largeSecondary" size="xs" placement="left">
      <AddLable card={card} action={addLabelAction}/>
    </PopOverWrapper>
  );
};

export const CheckListPopOver: React.FC<PopOverProps> = ({card}) => {
  return (
    <PopOverWrapper value="Checklists" icon={<MdCheckBox/>} triggerVariant="largeSecondary" size="2xs" placement="left">
      <AddChecklist card={card}/>
    </PopOverWrapper>
  )
}

export const CoverPopOver: React.FC<PopOverProps> = ({ action }) => {
  return (
    <PopOverWrapper value="Cover" icon={<FaImage />} triggerVariant="largeSecondary" size="2xs" placement="left">
      <PhotosProvider>
        <ChangeCover action={action!} />
      </PhotosProvider>
    </PopOverWrapper>
  );
};
