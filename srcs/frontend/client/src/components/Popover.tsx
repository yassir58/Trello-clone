import React from "react";
import {  FaImage} from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { MdLabel } from "react-icons/md";
import { AddLable } from "./Functionality/AddLable";
import InviteToBoard from "./InviteToBoard";
import { ChangeCover } from "./Functionality/ChangeCover";
import { PopOverWrapper } from "./ui-elements/PopOver";




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

export const CoverPopOver: React.FC = () => {
  return (
    <PopOverWrapper
      value="Cover"
      icon={<FaImage />}
      triggerVariant="largeSecondary"
      size="2xs"
      placement="left"
    >
      <ChangeCover />
    </PopOverWrapper>
  );
};
