import React from "react";
import { chakra, Card, Image, Stack, Heading, CardBody, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  imgSrc: string;
  cardTitle: string;
  children: React.ReactNode;
}

interface CardInfoProps {
    value: string;
    icon:any
}

export const CardCp: React.FC<CardProps> = ({ imgSrc, cardTitle , children}) => {
  return (
    <div>
      <Card maxW="sm" w='98%'>
        <CardBody>
          <Image
            src={imgSrc}
            alt={cardTitle}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{cardTitle}</Heading>
            {children}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};


export const CardInfo:React.FC<CardInfoProps> = ({value, icon}) => {
    return (
        <div>
            <HStack spacing={2} color='gray.200'>
                <FontAwesomeIcon icon={icon}/>
                <chakra.small color='gray.200' fontSize='sm'>
                    {value}
                </chakra.small>
            </HStack>
        </div>
    )
}