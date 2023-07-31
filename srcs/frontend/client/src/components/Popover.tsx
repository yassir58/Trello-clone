import React from "react";
import {  FaImage} from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { MdLabel } from "react-icons/Md";
import { AddLable } from "./Functionality/AddLable";
import InviteToBoard from "./InviteToBoard";
import { ChangeCover } from "./Functionality/ChangeCover";
import { PopOverWrapper } from "./ui-elements/PopOver";
import { Card } from "../context/ContextScheme";

interface PopOverProps {
  card?: Card ;
  cards?: Card[] | null | undefined;
  setCards?: React.Dispatch<React.SetStateAction<Card[]>> ;
}


export const MembersPopOver: React.FC = () => {
  return (
    <PopOverWrapper
      value="Members"
      icon={<FaUserGroup />}
      triggerVariant={"largeSecondary"}
      size="xs"
      placement="left"
    >
      <InviteToBoard />
    </PopOverWrapper>
  );
};

export const LabelPopOver: React.FC = () => {
  return (
    <PopOverWrapper
      value="Labels"
      icon={<MdLabel />}
      triggerVariant="largeSecondary"
      size="xs"
      placement="left"
    >
      <AddLable />
    </PopOverWrapper>
  );
};

export const CoverPopOver: React.FC<PopOverProps> = ({
  card,
  cards,
  setCards,
}) => {
  return (
    <PopOverWrapper
      value="Cover"
      icon={<FaImage />}
      triggerVariant="largeSecondary"
      size="2xs"
      placement="left"
    >
      <ChangeCover card={card} cards={cards} setCards={setCards} />
    </PopOverWrapper>
  );
};
