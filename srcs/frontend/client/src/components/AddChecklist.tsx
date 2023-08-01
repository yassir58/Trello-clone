import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Text,
} from "@chakra-ui/react";

const AddChecklist = () => {
  return (
    <Card w="246px" h="170px">
      <CardHeader mx="20px" px={0}>
        <Text fontSize="12px" fontStyle="semi-bold">
          Checklist
        </Text>
        <Text fontSize="12px" color="gray">
          Add a checklist title
        </Text>
      </CardHeader>
      <CardBody mx="9px" px={0} py={0}>
        <Input
          variant="outline"
          w="228px"
          h="34px"
          placeholder="Checklist title"
        ></Input>
      </CardBody>
      <CardFooter alignItems="center" justifyContent="center" marginTop={-1.5}>
        <Button variant="primary" w="74px" h="30px" fontSize="10px">
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddChecklist;
