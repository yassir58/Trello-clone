import React from "react";
import { HStack, Stack } from "@chakra-ui/react";
import { Label } from "../ui-elements/Label";
import { Label as LabelType } from "../../context/ContextScheme";
import { CardInfo } from "../ui-elements/Media";
import {MdLabel} from 'react-icons/md'

interface LabelList {
  labels?: LabelType[];
  deleteLabel?: (id: string) => void;
}
export const LabelList: React.FC<LabelList> = ({ labels, deleteLabel }) => {
  return (
    <Stack spacing={3}>
        <CardInfo icon={<MdLabel />} value="Labels" />
      <HStack spacing={2} px={4} py={2}>
        {labels?.map((item) => {
          return (
            <Label
              color={item.color}
              action={() => {
                deleteLabel && deleteLabel(item?.id || "");
              }}
            >
              {item.tag}
            </Label>
          );
        })}
      </HStack>
    </Stack>
  );
};
